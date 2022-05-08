import { Equal, Expect } from '../utils';

type cases = [
  Expect<Equal<Flatten<[]>, []>>,
  Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
  Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
  Expect<Equal<Flatten<[{ foo: 'bar'; 2: 10 }, 'foobar']>, [{ foo: 'bar'; 2: 10 }, 'foobar']>>
];

type Flatten1<T extends any[], U extends any[] = []> = T extends [infer F, ...infer R]
  ? F extends any[]
    ? Flatten1<[...F, ...R], U>
    : Flatten1<R, [...U, F]>
  : U;
type Flatten<T extends any[]> = T extends [infer F, ...infer R]
  ? [...(F extends any[] ? Flatten<F> : [F]), ...Flatten<R>]
  : [];
