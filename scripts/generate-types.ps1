$prev_node_options = $env:NODE_OPTIONS
$prev_page_limit = $env:PAGE_LIMIT

if ($prev_node_options -and $prev_node_options -like '*--max-old-space-size=*') {
  $env:NODE_OPTIONS = $prev_node_options
} else {
  $env:NODE_OPTIONS = "--max-old-space-size=8000"
}

if ($prev_page_limit) {
  $env:PAGE_LIMIT = $prev_page_limit
} else {
  $env:PAGE_LIMIT = 3000
}

$env:NODE_ENV="development"


get-content .env | foreach {
  $name, $value = $_.split('=')
  set-content env:\$name $value
}

pnpm generate-types
pnpm fix