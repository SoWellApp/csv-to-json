const SEPARATOR = "__"
export const csvToJSON = (input: string[][]) => {
  const result: Record<string, string | unknown> = {}
  input.forEach(line => {
    if (line.length < 2) throw "Invalid input"
    const value = line[1]

    const keys = line[0].split(SEPARATOR)
    let path = "result"
    keys.forEach((key, index) => {
      path += `.${key}`
      if (index === keys.length - 1) {
        eval(`${path} = "${value}"`)
      } else {
        eval(`if (${path} === undefined) ${path} = {}`)
      }
    })
  })
  return result
}