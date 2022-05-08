import { Equal, Expect } from '../utils';

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>
];

type LengthOfString<S extends string, U extends any[] = []> = S extends `${infer F}${infer R}`
  ? LengthOfString<R, [...U, F]>
  : U['length'];
