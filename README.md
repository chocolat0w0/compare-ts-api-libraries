# compare-ts-api-libraries

Code Generator Comparison for TypeScript from OpenAPI - December 2024

## openapi-typescript

### Install

```sh
npm i -D openapi-typescript
npm i openapi-fetch
```

### Generate client codes

```sh
npm run openapi-typescript-3_0

> compare-ts-api-libraries@0.0.0 openapi-typescript-3_0
> openapi-typescript ./openapi/api-3_0.yaml -o ./src/openapi-3_0-typescript-client/schema.d.ts

✨ openapi-typescript 7.10.1
🚀 ./openapi/api-3_0.yaml → ./src/openapi-3_0-typescript-client/schema.d.ts [27.4ms]
```

### Call APIs

See `src/OpenapiTypescriptComponent.tsx`

## @openapitools/openapi-generator-cli

### Install

```sh
npm i -D  @openapitools/openapi-generator-cli
```

### Generate client codes

Create `openapitools.json` file.

Set up Docker.

Run command.

```
npm run openapi-generator-cli-3_0

> compare-ts-api-libraries@0.0.0 openapi-generator-cli-3_0
> openapi-generator-cli generate --generator-key api-3_0
```

### Call APIs

Ser `src/OpenapiGeneratorCliComponent.tsx`

## @hey-api/openapi-ts

### Install

```
% npm install @hey-api/client-fetch
% npm install --save-dev @hey-api/openapi-ts
```

### Generate client codes

```
% npm run hey-api-openapi-ts
```

### Call APIs

See `src/HeyApiOpenapiTsComponent.tsx`
