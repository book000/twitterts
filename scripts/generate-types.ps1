$env:NODE_OPTIONS="--max-old-space-size=8000"
$env:NODE_ENV="development"
$env:PAGE_LIMIT = 1000

get-content .env | foreach {
  $name, $value = $_.split('=')
  set-content env:\$name $value
}

pnpm generate-types
pnpm fix