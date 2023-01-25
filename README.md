## csv-to-json
### Summary
A light-weight utility to convert CSV into JSON object and JSON file

### Commands
* yarn start: run the demo file **src/index.ts**
* yarn test: run the jest test suit
### Usage
```ts
import { csvToJSON } from  "./csv-to-json"

const  input = [
  ["a__b", "value 1"],
  ["a__c", "value 2"],
  ["d", "value 3"],
  ["e__f__g", "value 4"],
  ["e__h", "value 5"],
]

const  output = csvToJSON(input)
/**
* output = {
*   a: { b: "value 1", c: "value 2" };
*   d: "value 3",
*   e: { f: { g: "value 4" }, h: "value 5" },
* }
*/
```