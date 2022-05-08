import { Expect, Equal } from '../utils';

type cases = [
  Expect<Equal<Push<[], 1>, [1]>>,
  Expect<Equal<Push<[1, 2], '3'>, [1, 2, '3']>>,
  Expect<Equal<Push<['1', 2, '3'], boolean>, ['1', 2, '3', boolean]>>,
  // BUG FIXME
  Expect<Equal<Push<['1', 2, '3'], '3'>, ['1', 2, '3', '3']>>
];

type Push<T extends readonly any[], U> = [...T, U];
