import { Equal, Expect } from '../utils';

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>
];

type Without<T extends unknown[], U extends number | number[], R extends any[] = []> = T extends [
  infer F,
  ...infer L
]
  ? F extends (U extends number[] ? U[number] : U)
    ? Without<L, U, R>
    : Without<L, U, [...R, F]>
  : R;
