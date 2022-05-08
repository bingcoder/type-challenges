import { Equal, Expect, ExpectFalse, NotEqual } from '../utils';

type cases = [
  Expect<Equal<FlipArguments<() => boolean>, () => boolean>>,
  Expect<Equal<FlipArguments<(foo: string) => number>, (foo: string) => number>>,
  Expect<
    Equal<
      FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>,
      (arg0: boolean, arg1: number, arg2: string) => void
    >
  >
];
type Reverse<T extends any[]> = T extends [infer F, ...infer R] ? [...Reverse<R>, F] : [];

type FlipArguments<T extends (...arg: any) => any> = T extends (...args: infer P) => infer R
  ? (...args: Reverse<P>) => R
  : never;

type T = FlipArguments<(foo: string, d: number) => number>;
