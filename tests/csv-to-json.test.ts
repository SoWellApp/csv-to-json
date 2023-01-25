import { csvToJSON } from "../src/csv-to-json"
import { isEqual } from "lodash"

test('it converts csv to json', () => {
  const tests = [
    {
      input: [
        ["a__b__c", "value 1"],
        ["d", "value 2"],
        ["e__f", "value 3"],
      ], expected: {
        a: {
          b: {
            c: "value 1"
          }
        },
        d: "value 2",
        e: {
          f: "value 3"
        }
      }
    },
    {
      input: [
        ["a__b", "value 1"],
        ["a__c", "value 2"],
      ], expected: {
        a: {
          b: "value 1",
          c: "value 2"
        }
      }
    },
    {
      input: [
        ["a__b", "value 1"],
        ["a__c", "value 2"],
        ["d", "value 3"],
        ["e__f__g", "value 4"],
        ["e__h", "value 5"],
      ],
      expected: {
        a: { b: 'value 1', c: 'value 2' },
        d: 'value 3',
        e: { f: { g: 'value 4' }, h: 'value 5' }
      }
    }
  ]

  tests.forEach((test) => {
    const actual = csvToJSON(test.input)
    expect(actual).toStrictEqual(test.expected)
  })
})