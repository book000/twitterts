get-content .env | ForEach-Object {
  $name, $value = $_.split('=', 2)
  if ([string]::IsNullOrWhiteSpace($name) || $name.Contains('#')) {
    continue
  }
  set-content env:\$name $value
}