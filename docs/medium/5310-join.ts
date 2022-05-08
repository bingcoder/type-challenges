import { Equal, Expect, ExpectFalse, NotEqual } from '../utils';

type cases = [
  Expect<Equal<Join<['a', 'p', 'p', 'l', 'e'], '-'>, 'a-p-p-l-e'>>,
  Expect<Equal<Join<['Hello', 'World'], ' '>, 'Hello World'>>,
  Expect<Equal<Join<['2', '2', '2'], 1>, '21212'>>,
  Expect<Equal<Join<['o'], 'u'>, 'o'>>
];

// type Join<T extends any[], U extends string | number, S extends string = ''> = T['length'] extends 1
//   ? `${S}${T[0]}`
//   : T extends [infer F, ...infer R]
//   ? Join<R, U, `${S}${F & string}${U}`>
//   : never;

// your answers
type Join<T extends unknown[], U extends string | number> = T extends [infer First, ...infer Rest]
  ? `${First & string}${Rest['length'] extends 0 ? '' : U}${Join<Rest, U>}`
  : '';
