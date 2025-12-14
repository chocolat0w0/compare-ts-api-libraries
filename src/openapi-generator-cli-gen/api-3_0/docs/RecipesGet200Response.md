
# RecipesGet200Response


## Properties

Name | Type
------------ | -------------
`count` | number
`next` | string
`previous` | string
`results` | [Array&lt;Recipe&gt;](Recipe.md)

## Example

```typescript
import type { RecipesGet200Response } from ''

// TODO: Update the object below with actual values
const example = {
  "count": 100,
  "next": https://api.example.com/?limit=100&offset=500,
  "previous": https://api.example.com/?limit=100&offset=300,
  "results": null,
} satisfies RecipesGet200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RecipesGet200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


