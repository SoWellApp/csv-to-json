import fs from "fs"
import path from "path"
import { csvToJSON } from "./csv-to-json"
const input = [
  ["a__b", "value 1"],
  ["a__c", "value 2"],
  ["d", "value 3"],
  ["e__f__g", "value 4"],
  ["e__h", "value 5"],
]
const output = csvToJSON(input)
const data = JSON.stringify(output, null, 2)

try {
  const outputFile = path.join("src", "output", "data.json")
  fs.writeFileSync(outputFile, data)
  console.log("See result here:", outputFile)
} catch (error) {
  console.error(error)
}
