
# PaginationParts


## Properties

Name | Type
------------ | -------------
`count` | number
`next` | string
`previous` | string

## Example

```typescript
import type { PaginationParts } from ''

// TODO: Update the object below with actual values
const example = {
  "count": 100,
  "next": https://api.example.com/?limit=100&offset=500,
  "previous": https://api.example.com/?limit=100&offset=300,
} satisfies PaginationParts

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PaginationParts
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


