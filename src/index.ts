import fs from "fs"
import path from "path"
import { csvToJSON } from "./csv-to-json"
import { formatInput } from "./format-input"
const input = formatInput(path.join("src", "input.csv"))
const output = csvToJSON(input)
const data = JSON.stringify(output, null, 2)

try {
  const outputFile = path.join("src", "output", "data.json")
  fs.writeFileSync(outputFile, data)
  console.log("See result here:", outputFile)
} catch (error) {
  console.error(error)
}
