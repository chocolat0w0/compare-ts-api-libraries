
# MushroomsPost422Response


## Properties

Name | Type
------------ | -------------
`detail` | string
`code` | [Http422InvalidRequestBodyCode](Http422InvalidRequestBodyCode.md)
`` | Array&lt;string&gt;

## Example

```typescript
import type { MushroomsPost422Response } from ''

// TODO: Update the object below with actual values
const example = {
  "detail": 処理できませんでした,
  "code": null,
  "": null,
} satisfies MushroomsPost422Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MushroomsPost422Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


