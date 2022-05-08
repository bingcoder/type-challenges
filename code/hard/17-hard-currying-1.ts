import { Equal, Expect } from '../utils';

const curried1 = Currying((a: string, b: number, c: boolean) => true);
const curried2 = Currying(
  (a: string, b: number, c: boolean, d: boolean, e: boolean, f: string, g: boolean) => true
);

type cases = [
  Expect<Equal<typeof curried1, (a: string) => (b: number) => (c: boolean) => true>>,
  Expect<
    Equal<
      typeof curried2,
      (
        a: string
      ) => (
        b: number
      ) => (c: boolean) => (d: boolean) => (e: boolean) => (f: string) => (g: boolean) => true
    >
  >
];

type C<T> = T extends (...args: infer P) => infer R
  ? P extends [infer F, ...infer Rest]
    ? (a: F) => C<(...p: Rest) => R>
    : R
  : T;
// type C<T> = T extends (...args: infer P) => infer R
//   ? P extends [infer F, ...infer Rest]
//     ? (a: F) => C<(...p: Rest) => R>
//     : R
//   : T;

declare function Currying<T>(fn: T): C<T>;

type A = typeof curried2;

const curried3 = Currying((a: string, b: number, c: boolean) => true);
type B = typeof curried3;
