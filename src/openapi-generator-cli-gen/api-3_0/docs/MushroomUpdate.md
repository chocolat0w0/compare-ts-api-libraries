
# MushroomUpdate

きのこの部分更新で変更可能な項目

## Properties

Name | Type
------------ | -------------
`name` | string
`description` | string
`orderable` | boolean
`size` | string
`tastiness` | number
`conditions` | [{ [key: string]: MushroomConditionsValue; }](MushroomConditionsValue.md)
`duplicateCheck` | boolean

## Example

```typescript
import type { MushroomUpdate } from ''

// TODO: Update the object below with actual values
const example = {
  "name": 舞茸,
  "description": 香りが強い品種,
  "orderable": null,
  "size": null,
  "tastiness": 95,
  "conditions": {"color":"brown","height":60},
  "duplicateCheck": true,
} satisfies MushroomUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MushroomUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


