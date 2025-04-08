# ecommerce_api
## Project Setup
```
npm init
```

```
npm install express
```

```
npm install -D typescript tsx @types/express
```

tsconfig.json
```
{
  "compilerOptions": {
    "module": "ESNext", // Use ESNext for ESM
    "target": "ES2020", // Target modern ECMAScript versions
    "moduleResolution": "node",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "outDir": "./dist", // Output directory for compiled files
    "strict": true, // Enable strict type-checking options
    "skipLibCheck": true, // Skip type checking of declaration files
    "resolveJsonModule": true, // Include JSON imports
    "forceConsistentCasingInFileNames": true,
    "noEmit": false, // Allow emitting output
    "isolatedModules": true, // Required for using ESM modules
    "baseUrl": ".", // Allow absolute imports relative to project root
    "paths": {
      "*": ["node_modules/*"]
    }
  }
}
```

package.json

```
"type": "module",
```

scripts ->
```
"dev": "node --import=tsx --watch --env-file=.env src/index.ts"
```

## Build
scripts ->
```
"build": "tsc"
```



