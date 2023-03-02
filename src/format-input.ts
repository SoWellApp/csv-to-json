import fs from "fs"
export function formatInput(filePath: string) {
  const data = fs.readFileSync(filePath)
  const lines = data.toString().split("\r\n")
  return lines.map((line) => line.split(";"))
}