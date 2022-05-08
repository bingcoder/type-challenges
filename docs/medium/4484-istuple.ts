import { Equal, Expect, ExpectFalse, NotEqual } from '../utils';

type cases = [
  Expect<Equal<IsTuple<[]>, true>>,
  Expect<Equal<IsTuple<[number]>, true>>,
  Expect<Equal<IsTuple<readonly [1]>, true>>,
  Expect<Equal<IsTuple<{ length: 1 }>, false>>,
  Expect<Equal<IsTuple<number[]>, false>>
];

type IsTuple<T extends { length: number }> = T extends readonly unknown[]
  ? NotEqual<T['length'], number>
  : false;
