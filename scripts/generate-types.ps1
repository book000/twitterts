$env:NODE_OPTIONS="--max-old-space-size=8000"
$env:NODE_ENV="development"

pnpm generate-types
pnpm fix