import { Equal, Expect } from '../utils';

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<20, 20>, false>>
];

// your answers
type GreaterThan<
  T extends number,
  U extends number,
  Ary extends unknown[] = []
> = Ary['length'] extends T
  ? false
  : Ary['length'] extends U
  ? true
  : GreaterThan<T, U, [...Ary, 1]>;
