
# Http422UnprocessableEntity


## Properties

Name | Type
------------ | -------------
`detail` | string
`code` | string

## Example

```typescript
import type { Http422UnprocessableEntity } from ''

// TODO: Update the object below with actual values
const example = {
  "detail": 処理できませんでした,
  "code": unprocessable_entity,
} satisfies Http422UnprocessableEntity

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Http422UnprocessableEntity
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


