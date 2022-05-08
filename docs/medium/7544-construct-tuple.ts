import { Equal, Expect } from '../utils';

type cases = [
  Expect<Equal<ConstructTuple<0>, []>>,
  Expect<Equal<ConstructTuple<2>, [unknown, unknown]>>,
  Expect<Equal<ConstructTuple<999>['length'], 999>>,
  // @ts-expect-error
  Expect<Equal<ConstructTuple<1000>['length'], 1000>>
];

type ConstructTuple<T extends number, R extends unknown[] = []> = R['length'] extends T
  ? R
  : ConstructTuple<T, [...R, unknown]>;

type MaxC = ConstructTuple<47>['length'];
