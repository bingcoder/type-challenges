import { Alike, Expect } from '../utils';

declare const a: Chainable;

const result1 = a
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get();

const result2 = a
  .option('name', 'another name')
  // @ts-expect-error
  .option('name', 1)
  .get();

type cases = [Expect<Alike<typeof result1, Expected1>>, Expect<Alike<typeof result2, Expected2>>];

type Expected1 = {
  foo: number;
  bar: {
    value: string;
  };
  name: string;
};

type Expected2 = {
  name: string;
};

type Chainable<T = {}> = {
  option<K extends string, V>(
    key: Exclude<K, keyof T>,
    value: V
  ): Chainable<
    T &
      (K extends keyof T
        ? {}
        : {
            [k in K]: V;
          })
  >;
  get(): T;
};
