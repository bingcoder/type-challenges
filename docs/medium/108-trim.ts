import { Equal, Expect } from '../utils';

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>
];

type Trim1<S extends string> = S extends `${' ' | '\n' | '\t'}${infer L}`
  ? Trim<L>
  : S extends `${infer L}${' ' | '\n' | '\t'}`
  ? Trim<L>
  : S;

type TrimLeft<S extends string> = S extends `${' ' | '\n' | '\t'}${infer L}` ? TrimLeft<L> : S;
type TrimRight<S extends string> = S extends `${infer L}${' ' | '\n' | '\t'}` ? TrimRight<L> : S;

type Trim<S extends string> = TrimRight<TrimLeft<S>>;
