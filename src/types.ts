export type Expression = any[]

export type ExpressionInterpreter = (context:EvaluationContext, ...args:any[]) => any

export type EvaluationScope = {
  $$PARENT_SCOPE?: EvaluationScope,
  $$VALUE?: any,
  $$ARRAY?: any[],
  $$INDEX?: number,
  $$ACC?: any,
  $$SORT_A?: any,
  $$SORT_B?: any,
  [key: string]: any
}

export type EvaluationContext = {
  interpreters: {
    [key: string]: ExpressionInterpreter
  },
  scope: EvaluationScope
}

export type ISODate = string

export type AnyExpression = Expression | any
export type NumberExpression = Expression | number
export type ArrayExpression = Expression | any[]
export type StringExpression = Expression | string
export type PlainObjectExpression = Expression | { [key:string]: any }
export type BooleanExpression = Expression | boolean
export type ISODateExpression = Expression | ISODate
