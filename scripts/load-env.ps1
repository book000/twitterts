get-content .env | ForEach-Object {
  $name, $value = $_.split('=', 2)
  if ([string]::IsNullOrWhiteSpace($name) -or $name.Contains('#')) {
    return
  }
  set-content env:\$name $value
}