import {
  evaluate,
  evaluateString,
  evaluateStringOrArray,
  evaluateNumber,

  interpreter
} from '../expression'
import { $$VALUE } from './value'
import {
  EvaluationContext,
  Expression,
  StringExpression,
  NumberExpression
} from '../types'

/**
 * @function $string
 * @param {*} [valueExp=$$VALUE]
 * @returns {string}
 */
export const $string = (
  context:EvaluationContext,
  valueExp:Expression = $$VALUE
) => {
  const value = evaluate(context, valueExp)

  return typeof value === 'string' ? value : value.toString()
}

/**
 * @function $stringStartsWith
 * @param {string} query
 * @param {string} [strExp=$$VALUE]
 * @returns {boolean}
 */
export const $stringStartsWith = interpreter((
  query:string,
  str:string
):boolean => str.startsWith(query), [
  evaluateString,
  evaluateString
])

/**
 * @function $stringLength
 * @param {string} [strExp=$$VALUE]
 * @returns {number}
 */
export const $stringLength = interpreter((
  str:string
):number => str.length, [
  evaluateString
])

/**
 * @function $stringSubstr
 * @param {number} startExp
 * @param {number} endExp
 * @param {string} [strExp=$$VALUE]
 */
export const $stringSubstr = (
  context:EvaluationContext,
  startExp:NumberExpression,
  endExp:NumberExpression,
  strExp:StringExpression = $$VALUE
):string => (
  evaluateString(context, strExp)
    .substring(
      evaluateNumber(context, startExp),
      evaluateNumber.allowUndefined(context, endExp)
    )
)

/**
 * @function $stringConcat
 * @param {string} concatExp
 * @param {string} [baseExp=$$VALUE]
 * @returns {string}
 */
export const $stringConcat = (
  context:EvaluationContext,
  concatExp:StringExpression,
  baseExp:StringExpression = $$VALUE
):string => (
  evaluateString(context, baseExp)
    .concat(evaluateString(context, concatExp))
)

/**
 * @function $stringTrim
 * @param {string} [strExp=$$VALUE]
 * @returns {string}
 */
export const $stringTrim = (
  context:EvaluationContext,
  strExp:StringExpression = $$VALUE
):string => (
  evaluateString(context, strExp).trim()
)

/**
 * @function $stringPadStart
 * @param {number} targetLengthExp
 * @param {string} padStringExp
 * @param {string} [strExp=$$VALUE]
 * @returns {string}
 */
export const $stringPadStart = (
  context:EvaluationContext,
  targetLengthExp:NumberExpression,
  padStringExp:StringExpression = ' ',
  strExp:StringExpression = $$VALUE
):string => (
  evaluateString(context, strExp).padStart(
    evaluateNumber(context, targetLengthExp),
    evaluateString(context, padStringExp)
  )
)

/**
 * @function $stringPadEnd
 * @param {number} targetLengthExp
 * @param {string} padStringExp
 * @param {string} [strExp=$$VALUE]
 * @returns {string}
 */
export const $stringPadEnd = (
  context:EvaluationContext,
  targetLengthExp:NumberExpression,
  padStringExp:StringExpression = ' ',
  strExp:StringExpression = $$VALUE
):string => (
  evaluateString(context, strExp).padEnd(
    evaluateNumber(context, targetLengthExp),
    evaluateString(context, padStringExp)
  )
)

type RegExpTuple = [string, string]

const _regExp = (
  context:EvaluationContext,
  regExpExp:Expression | RegExpTuple | RegExp
) => {
  const regExp = evaluateStringOrArray(context, regExpExp)

  return typeof regExp === 'string'
    ? new RegExp(regExp)
    : new RegExp(regExp[0], regExp[1])
}

/**
 * @function $stringMatch
 * @param {string} regExpExp
 * @param {string} [valueExp=$$VALUE]
 * @returns {string[]}
 */
export const $stringMatch = (
  context:EvaluationContext,
  regExpExp:Expression | RegExpTuple | RegExp,
  valueExp:StringExpression = $$VALUE
):string[] => {
  const regExp = _regExp(context, regExpExp)
  const value = evaluateString(context, valueExp)

  const match = value.match(regExp)

  return match === null ? [] : [...match]
}

/**
 * @function $stringTest
 * @param {string} regExpExp
 * @param {string} [valueExp=$$VALUE]
 * @returns {boolean}
 */
export const $stringTest = (
  context:EvaluationContext,
  regExpExp:Expression | RegExpTuple | RegExp,
  valueExp:StringExpression = $$VALUE
):boolean => {
  const regExp = _regExp(context, regExpExp)
  const value = evaluateString(context, valueExp)

  return regExp.test(value)
}

/**
 * @function $stringReplace
 * @param {string | [string, string?]} searchExp
 * @param {string | StringExpression} replacementExp
 * @returns {string}
 */
export const $stringReplace = (
  context:EvaluationContext,
  searchExp:Expression | RegExpTuple | RegExp | string,
  replacementExp:StringExpression,
  valueExp:StringExpression = $$VALUE
):string => {
  let search = evaluateStringOrArray(context, searchExp)
  search = Array.isArray(search)
    ? new RegExp(search[0], search[1])
    : search

  const value = evaluateString(context, valueExp)

  return value.replace(search, match => evaluateString({
    ...context,
    scope: {
      $$VALUE: match,
      $$PARENT_SCOPE: context.scope,
    }
  }, replacementExp))
}

/**
 * @function $stringToUpperCase
 * @param {string} valueExp
 * @returns {string}
 */
export const $stringToUpperCase = (
  context:EvaluationContext,
  valueExp:StringExpression = $$VALUE
):string => evaluateString(context, valueExp).toUpperCase()

/**
 * @function $stringToLowerCase
 * @param {string} valueExp
 * @returns {string}
 */
export const $stringToLowerCase = (
  context:EvaluationContext,
  valueExp:StringExpression = $$VALUE
):string => evaluateString(context, valueExp).toLowerCase()

export const STRING_EXPRESSIONS = {
  $string,
  $stringStartsWith,
  $stringLength,
  $stringSubstr,
  $stringConcat,
  $stringTrim,
  $stringPadStart,
  $stringPadEnd,
  $stringMatch,
  $stringTest,
  $stringReplace,
  $stringToUpperCase,
  $stringToLowerCase
}
