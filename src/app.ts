// type challenges

type BEM<B extends string, E extends string[], M extends string[]> =
  `${B}${[E[number]] extends [never] ? "" : `___${E[number]}`}${[M[number]] extends [never] ? "" : `--${M[number]}`}`
type a = BEM<'btn', ['price'], []> //  'btn__price'
type b = BEM<'btn', ['price'], ['warning', 'success']> //  'btn__price--warning' | 'btn__price--success' 
type c = BEM<'btn', [], ['small', 'medium', 'large']> //  'btn--small' | 'btn--medium' | 'btn--large' 
