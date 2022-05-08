import { Equal, Expect } from '../utils';

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

type cases = [Expect<Equal<Mutable<Readonly<Todo1>>, Todo1>>];

type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};
