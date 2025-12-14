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

### call APIs

See `src/OpenapiTypescriptComponent.tsx`

## @openapitools/openapi-generator-cli

### Install

```
% npm install --save-dev @openapitools/openapi-generator-cli
```

### Generate client codes

Create `openapitools.json` file.

Run command.

```
% npm run openapi-generator-cli
```

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

### call APIs

See `src/HeyApiOpenapiTsComponent.tsx`
