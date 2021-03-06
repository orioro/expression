import { evaluate } from '../expression'
import { $value } from './value'
import { NUMBER_EXPRESSIONS } from './number'

const interpreters = {
  $value,
  ...NUMBER_EXPRESSIONS,
}

test('$numberInt', () => {
  expect(
    evaluate(
      {
        interpreters,
        scope: { $$VALUE: '10.50' },
      },
      ['$numberInt']
    )
  ).toEqual(10)

  expect(
    evaluate(
      {
        interpreters,
        scope: { $$VALUE: 10.5 },
      },
      ['$numberInt']
    )
  ).toEqual(10.5)

  expect(() => {
    evaluate(
      {
        interpreters,
        scope: { $$VALUE: true },
      },
      ['$numberInt']
    )
  }).toThrow(TypeError)
})

test('$numberFloat', () => {
  expect(
    evaluate(
      {
        interpreters,
        scope: { $$VALUE: '10.50' },
      },
      ['$numberFloat']
    )
  ).toEqual(10.5)

  expect(
    evaluate(
      {
        interpreters,
        scope: { $$VALUE: 10.5 },
      },
      ['$numberInt']
    )
  ).toEqual(10.5)

  expect(() => {
    evaluate(
      {
        interpreters,
        scope: { $$VALUE: true },
      },
      ['$numberInt']
    )
  }).toThrow(TypeError)
})
