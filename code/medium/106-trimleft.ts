import { Equal, Expect } from '../utils';

type cases = [
  Expect<Equal<TrimLeft<'str'>, 'str'>>,
  Expect<Equal<TrimLeft<' str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
  Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>
];

// type TrimLeft<S extends string> = S extends `${infer F}${infer L}`
//   ? F extends ' ' | '\n' | '\t'
//     ? TrimLeft<L>
//     : S
//   : never;

type TrimLeft<S extends string> = S extends `${' ' | '\n' | '\t'}${infer L}` ? TrimLeft<L> : S;
type TrimRight<S extends string> = S extends `${infer L}${' ' | '\n' | '\t'}` ? TrimRight<L> : S;

type TL = TrimLeft<'\n\t  \n\t   str  ff \n\t  \n\t   '>;
type TR = TrimRight<'\n\t  \n\t   str  ff \n\t  \n\t   '>;
