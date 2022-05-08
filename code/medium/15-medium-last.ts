import { Equal, Expect } from '../utils';

type cases = [
  Expect<Equal<Last<[]>, never>>,
  Expect<Equal<Last<[1]>, 1>>,
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>
];

// type Last<T extends any[]> = T['length'] extends 1
//   ? T[0]
//   : T extends [infer F, ...infer R]
//   ? Last<R>
//   : never;

type Last<T extends readonly any[]> = T extends [...infer R, infer L] ? L : never;
