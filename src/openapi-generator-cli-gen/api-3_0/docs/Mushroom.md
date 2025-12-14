
# Mushroom


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`description` | string
`orderable` | boolean
`size` | string
`tastiness` | number
`conditions` | [{ [key: string]: MushroomConditionsValue; }](MushroomConditionsValue.md)
`duplicateCheck` | boolean

## Example

```typescript
import type { Mushroom } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": しめじ,
  "description": きのこの概要,
  "orderable": null,
  "size": null,
  "tastiness": 90,
  "conditions": {"color":"red","height":50},
  "duplicateCheck": true,
} satisfies Mushroom

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Mushroom
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


