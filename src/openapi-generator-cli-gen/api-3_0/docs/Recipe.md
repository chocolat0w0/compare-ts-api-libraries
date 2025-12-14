
# Recipe


## Properties

Name | Type
------------ | -------------
`id` | string
`title` | string
`instructions` | string
`ingredients` | [Array&lt;Mushroom&gt;](Mushroom.md)

## Example

```typescript
import type { Recipe } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "title": きのこの炊き込みご飯,
  "instructions": きのこと調味料を入れて炊飯する。,
  "ingredients": null,
} satisfies Recipe

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Recipe
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


