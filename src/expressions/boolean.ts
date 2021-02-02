import {
  evaluate
} from '../expression'

import {
  EvaluationContext,
  Expression,
} from '../types'

import { $$VALUE } from './value'

/**
 * @function $boolean
 * @param {*} valueExp
 * @returns {boolean}
 */
export const $boolean = (
  context:EvaluationContext,
  valueExp:Expression = $$VALUE
) => Boolean(evaluate(context, valueExp))

export const BOOLEAN_EXPRESSIONS = {
  $boolean
}
