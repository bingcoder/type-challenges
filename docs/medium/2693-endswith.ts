import { Equal, Expect, ExpectFalse, NotEqual } from '../utils';

type cases = [
  Expect<Equal<EndsWith<'abc', 'bc'>, true>>,
  Expect<Equal<EndsWith<'abc', 'abc'>, true>>,
  Expect<Equal<EndsWith<'abc', 'd'>, false>>
];

type EndsWith<T extends string, U extends string> = T extends `${infer F}${U}` ? true : false;
