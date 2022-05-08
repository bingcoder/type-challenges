import { Equal, Expect } from '../utils';

type cases = [Expect<Equal<Fibonacci<3>, 2>>, Expect<Equal<Fibonacci<8>, 21>>];

type Fibonacci<T extends number> = any;
