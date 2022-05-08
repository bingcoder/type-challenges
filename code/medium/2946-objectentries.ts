import { Equal, Expect, ExpectFalse, NotEqual } from '../utils';

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null];

type cases = [
  Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
  Expect<Equal<ObjectEntries<{ key?: undefined }>, ['key', undefined]>>,
  Expect<Equal<ObjectEntries<{ key: undefined }>, ['key', undefined]>>
];
type Value<T> = T[keyof T];

type ObjectEntries<T> = Value<{
  [P in keyof Required<T>]: [
    P,
    T[P] extends infer F | undefined ? (F extends never ? undefined : F) : never
  ];
}>;
