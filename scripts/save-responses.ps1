$env:NODE_ENV="development"

get-content .env | foreach {
  $name, $value = $_.split('=')
  set-content env:\$name $value
}

pnpm save-responses
