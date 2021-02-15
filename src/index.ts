import { ARRAY_EXPRESSIONS } from './expressions/array'
import { BOOLEAN_EXPRESSIONS } from './expressions/boolean'
import { COMPARISON_EXPRESSIONS } from './expressions/comparison'
import { DATE_EXPRESSIONS } from './expressions/date'
import { FUNCTIONAL_EXPRESSIONS } from './expressions/functional'
import { LOGICAL_EXPRESSIONS } from './expressions/logical'
import { MATH_EXPRESSIONS } from './expressions/math'
import { NUMBER_EXPRESSIONS } from './expressions/number'
import { OBJECT_EXPRESSIONS } from './expressions/object'
import { STRING_EXPRESSIONS } from './expressions/string'
import { TYPE_EXPRESSIONS } from './expressions/type'
import { VALUE_EXPRESSIONS } from './expressions/value'

/**
 * @todo semantic-release Watch issue related to NPM_TOKEN
 *                        https://github.com/semantic-release/npm/issues/298
 *                        "npm automation tokens cannot create dist-tags #298"
 */

export const ALL_EXPRESSIONS = {
  ...ARRAY_EXPRESSIONS,
  ...BOOLEAN_EXPRESSIONS,
  ...COMPARISON_EXPRESSIONS,
  ...DATE_EXPRESSIONS,
  ...FUNCTIONAL_EXPRESSIONS,
  ...LOGICAL_EXPRESSIONS,
  ...MATH_EXPRESSIONS,
  ...NUMBER_EXPRESSIONS,
  ...OBJECT_EXPRESSIONS,
  ...STRING_EXPRESSIONS,
  ...TYPE_EXPRESSIONS,
  ...VALUE_EXPRESSIONS,
}

export * from './types'
export * from './expression'
export * from './expressions/array'
export * from './expressions/boolean'
export * from './expressions/comparison'
export * from './expressions/date'
export * from './expressions/functional'
export * from './expressions/logical'
export * from './expressions/math'
export * from './expressions/number'
export * from './expressions/object'
export * from './expressions/string'
export * from './expressions/type'
export * from './expressions/value'
