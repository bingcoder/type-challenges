type cases = [
  Expect<Equal<BEM<'btn', ['price'], []>, 'btn__price'>>,
  Expect<
    Equal<
      BEM<'btn', ['price'], ['warning', 'success']>,
      'btn__price--warning' | 'btn__price--success'
    >
  >,
  Expect<
    Equal<BEM<'btn', [], ['small', 'medium', 'large']>, 'btn--small' | 'btn--medium' | 'btn--large'>
  >
];

// type BEM<B extends string, E extends string[], M extends string[]> = E extends []
//   ? M extends []
//     ? B
//     : `${B}--${M[number]}`
//   : M extends []
//   ? `${B}__${E[number]}`
//   : `${B}__${E[number]}--${M[number]}`;

type BEM<B extends string, E extends string[], M extends string[]> = `${B}${E extends []
  ? ''
  : `__${E[number]}`}${M extends [] ? '' : `--${M[number]}`}`;

type D = BEM<'btn', ['price', 'more'], ['warning', 'success']>;
