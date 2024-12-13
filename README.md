# compare-ts-api-libraries

Code Generator Comparison for TypeScript from OpenAPI - December 2024

## openapi-typescript

### Install

```
% npm install openapi-fetch
% npm install --save-dev openapi-typescript
```

### Generate client codes

```
% npm run openapi-typescript

> compare-ts-api-libraries@0.0.0 openapi-typescript
> openapi-typescript ./openapi/api.yaml -o ./src/openapi-typescript-client/schema.d.ts

✨ openapi-typescript 7.4.4
(node:85138) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
🚀 ./openapi/api.yaml → ./src/openapi-typescript-client/schema.d.ts [16.2ms]
```

Ignore warning...

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
