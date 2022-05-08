import { Equal, Expect } from '../utils';

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>
];

type MinusOne<T extends number, U extends any[] = []> = [...U, 1]['length'] extends T
  ? U['length']
  : MinusOne<T, [never, ...U]>;

type T = MinusOne<46>;
// TODO
