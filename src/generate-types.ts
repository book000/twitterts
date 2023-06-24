import fs from 'node:fs'
import { compile, Options } from 'json-schema-to-typescript'
import { Logger } from '@book000/node-utils'
import { createSchema, mergeSchemas } from 'genson-js'
import { dirname, join } from 'node:path'

const compileOptions: Partial<Options> = {
  bannerComment: '/* eslint-disable @typescript-eslint/ban-types */',
  additionalProperties: false,
  enableConstEnums: true,
  strictIndexSignatures: true,
  style: {
    semi: false,
    singleQuote: true,
  },
  unknownAny: true,
}

interface TwitterGenerateTypesOptions {
  debugOutputDirectory: string
}

interface Result {
  type: string
  name: string
  method: string
  statusCode: string
  files: string[]
}

interface GenerateTypeOptions {
  path: {
    schema: string
    types: string
  }
  name: string
}

interface GenerateTypesOptions {
  directory: {
    schema: string
    types: string
  }
}

const Utils = {
  getName(
    rawType: string,
    rawName: string,
    rawMethod: string,
    rawStatus: string
  ) {
    const type =
      rawType === 'graphql' ? 'GraphQL' : rawType === 'rest' ? 'REST' : null
    if (!type) {
      throw new Error(`Invalid type: ${rawType}`)
    }
    const method = this.toCamelCase(rawMethod)
    const name = this.capitalize(rawName)
    const status = rawStatus.startsWith('2') ? '' : 'Error'

    return `${type}${method}${name}${status}Response`
  },

  toCamelCase(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
  },

  capitalize(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  },

  getFilename(
    rawType: string,
    rawName: string,
    rawMethod: string,
    rawStatus: string
  ) {
    const type = rawType.toLowerCase()
    const method = rawMethod.toLowerCase()
    const name = rawName.replaceAll(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
    const status = rawStatus.startsWith('2') ? '' : '-error'

    return `${type}/${method}/${name}${status}`
  },
}

type RequestType = 'GraphQL' | 'REST'

class TwitterGenerateTypes {
  private readonly options: TwitterGenerateTypesOptions

  constructor(options: TwitterGenerateTypesOptions) {
    this.options = options
  }

  getDirectories(baseDirectories: string[] = []) {
    const baseDirectory = join(
      this.options.debugOutputDirectory,
      ...baseDirectories
    )
    return fs
      .readdirSync(baseDirectory)
      .filter(
        (directory) =>
          !['.', '..'].includes(directory) &&
          fs.statSync(`${baseDirectory}/${directory}`).isDirectory()
      )
  }

  getJSONFiles(baseDirectories: string[] = []) {
    const baseDirectory = join(
      this.options.debugOutputDirectory,
      ...baseDirectories
    )
    return fs
      .readdirSync(baseDirectory)
      .filter(
        (file) =>
          !['.', '..'].includes(file) &&
          fs.statSync(join(baseDirectory, file)).isFile() &&
          file.endsWith('.json')
      )
  }

  get(): Result[] {
    const results = []
    for (const type of this.getDirectories()) {
      for (const name of this.getDirectories([type])) {
        for (const method of this.getDirectories([type, name])) {
          for (const statusCode of this.getDirectories([type, name, method])) {
            results.push({
              type,
              name,
              method,
              statusCode,
              files: this.getJSONFiles([type, name, method, statusCode]),
            })
          }
        }
      }
    }
    return results
  }

  async generateType(options: GenerateTypeOptions, result: Result) {
    const logger = Logger.configure('TwitterGenerateTypes.generateType')

    if (result.files.length === 0) {
      return
    }
    let schema
    for (const file of result.files) {
      const data = JSON.parse(
        fs.readFileSync(
          `${this.options.debugOutputDirectory}/${result.type}/${result.name}/${result.method}/${result.statusCode}/${file}`,
          'utf8'
        )
      )
      const fileSchema = createSchema(data)
      schema = schema ? mergeSchemas([schema, fileSchema]) : fileSchema
    }
    if (!schema) {
      throw new Error('No schema found')
    }

    fs.mkdirSync(dirname(options.path.schema), { recursive: true })
    fs.writeFileSync(options.path.schema, JSON.stringify(schema, null, 2))

    fs.mkdirSync(dirname(options.path.types), { recursive: true })
    const types = await compile(schema, options.name, compileOptions)
    fs.writeFileSync(options.path.types, types)
    logger.info(`📝 ${options.name}`)
  }

  async generateTypes(options: GenerateTypesOptions) {
    const results = this.get()
    for (const result of results) {
      const name = Utils.getName(
        result.type,
        result.name,
        result.method,
        result.statusCode
      )
      const filename = Utils.getFilename(
        result.type,
        result.name,
        result.method,
        result.statusCode
      )
      const schemaPath = `${options.directory.schema}/${filename}.json`
      const typesPath = `${options.directory.types}/${filename}.ts`
      await this.generateType(
        {
          path: {
            schema: schemaPath,
            types: typesPath,
          },
          name,
        },
        result
      )
    }

    new GenerateEndPointType(results).generate('src/models')
  }

  static async main() {
    const debugOutputDirectory =
      process.env.DEBUG_OUTPUT_DIRECTORY || './data/responses'
    const schemaDirectory = process.env.SCHEMA_DIRECTORY || './data/schema'
    const typesDirectory = process.env.TYPES_DIRECTORY || './src/models'

    const tgt = new TwitterGenerateTypes({
      debugOutputDirectory,
    })
    await tgt.generateTypes({
      directory: {
        schema: schemaDirectory,
        types: typesDirectory,
      },
    })
  }
}

class GenerateEndPointType {
  private readonly results: Result[]

  constructor(results: Result[]) {
    this.results = results
  }

  generateImport() {
    // import { GraphQLGetUserTweetsResponse } from './graphql/get/user-tweets'
    return this.results
      .map((result) => {
        const name = Utils.getName(
          result.type,
          result.name,
          result.method,
          result.statusCode
        )
        const filename = Utils.getFilename(
          result.type,
          result.name,
          result.method,
          result.statusCode
        )
        return `import { ${name} } from './${filename}'`
      })
      .join('\n')
  }

  getMethods(type: RequestType) {
    return this.results
      .filter((result) => result.type === type.toLowerCase())
      .map((result) => result.method)
      .filter((value, index, self) => self.indexOf(value) === index)
  }

  generateEndPointType(type: RequestType, method: string) {
    /*
    export type GraphQLGetEndpoint =
      | 'AuthenticatedUserTFLists'
      | 'Bookmarks'
    */
    const head = `export type ${type}${method}Endpoint =`
    const types = this.results
      .filter(
        (result) =>
          result.type === type.toLowerCase() && result.method === method
      )
      .map((result) => {
        return `  | '${result.name}'`
      })
    if (types.length === 0) {
      return null
    }
    return `${head}\n${types.join('\n')}`
  }

  generateResponseType(type: RequestType, method: string) {
    /*
    export type GraphQLGetEndPointResponseType<T extends GraphQLGetEndpoint> =
      T extends 'AuthenticatedUserTFLists'
        ? GraphQLGetAuthenticatedUserTFListsResponse
        : T extends 'Bookmarks'
        ? GraphQLGetBookmarksResponse
        : never
    */
    const head = `export type ${type}${method}EndPointResponseType<T extends ${type}${method}Endpoint> =`
    const types = this.results
      .filter((result) => result.type === type.toLowerCase())
      .map((result) => {
        const name = Utils.getName(
          result.type,
          result.name,
          result.method,
          result.statusCode
        )
        return `  T extends '${result.name}' ? ${name} :`
      })
    return `${head}\n${types.join('\n')}\n  never`
  }

  generateEndpointResponseType(types: readonly RequestType[]) {
    const head =
      'export type EndPointResponseType<M extends HttpMethod, T extends RequestType, N extends GraphQLEndpoint | RESTEndpoint> = '

    const results = []
    for (const type of types) {
      if (types.at(0) !== type) {
        results.push(':')
      }

      results.push(`T extends '${type}' ?`)

      const methods = this.getMethods(type)
      for (const method of methods) {
        // 最後以外は : をつける
        if (methods.at(0) !== method) {
          results.push(':')
        }

        results.push(
          `  M extends '${method.toUpperCase()}' ?`,
          `    N extends ${type}${method}Endpoint ?`,
          `      ${type}${method}EndPointResponseType<N> :`,
          '      never :',
          '    never'
        )
      }
    }

    return `${head}\n${results.join('\n')}`
  }

  generate(directory: string) {
    const types = ['GraphQL', 'REST'] as const

    const data = []

    const imports = this.generateImport()
    data.push(imports, "import { HttpMethod, RequestType } from '../scraper'")

    for (const type of types) {
      const unionTypes: string[] = []

      const methods = this.getMethods(type)
      for (const method of methods) {
        const endpointType = this.generateEndPointType(type, method)
        const responseType = this.generateResponseType(type, method)

        if (!endpointType || !responseType) {
          continue
        }

        data.push(endpointType, responseType)

        unionTypes.push(`  | ${type}${method}Endpoint`)
      }

      if (unionTypes.length === 0) {
        unionTypes.push('  | never')
      }
      data.push(`export type ${type}Endpoint =\n${unionTypes.join('\n')}\n`)
    }

    data.push(this.generateEndpointResponseType(types))

    fs.writeFileSync(
      `${directory}/endpoints.ts`,
      data.map((d) => d.trim()).join('\n\n')
    )
  }
}

;(async () => {
  const logger = Logger.configure('generate-types')
  try {
    await TwitterGenerateTypes.main()
  } catch (error) {
    logger.error('An error occurred while generating types', error as Error)
  }
})()
