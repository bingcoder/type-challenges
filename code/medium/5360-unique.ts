import { Equal, Expect } from '../utils';

type cases = [
  Expect<Equal<Unique<[1, 1, 2, 2, 3, 3]>, [1, 2, 3]>>,
  Expect<Equal<Unique<[1, 2, 3, 4, 4, 5, 6, 7]>, [1, 2, 3, 4, 5, 6, 7]>>,
  Expect<Equal<Unique<[1, 'a', 2, 'b', 2, 'a']>, [1, 'a', 2, 'b']>>,
  Expect<
    Equal<
      Unique<[string, number, 1, 'a', 1, string, 2, 'b', 2, number]>,
      [string, number, 1, 'a', 2, 'b']
    >
  >,
  Expect<Equal<Unique<[unknown, unknown, any, any, never, never]>, [unknown, any, never]>>
];

type If<C extends boolean, T, F> = C extends true ? T : F;
type Includes<T extends readonly any[], U> = T extends [infer F, ...infer R]
  ? If<Equal<F, U>, true, Includes<R, U>>
  : false;

type Unique<T, R extends any[] = []> = T extends [infer F, ...infer L]
  ? Unique<L, If<Includes<R, F>, R, [...R, F]>>
  : R;

type UU = Unique<[string, number, 1, 'a', 1, string, 2, 'b', 2, number]>;
