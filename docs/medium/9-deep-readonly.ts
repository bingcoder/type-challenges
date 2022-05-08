import { Equal, Expect } from '../utils';

type cases = [Expect<Equal<DeepReadonly<X>, Expected>>];

type X = {
  a: () => 22;
  b: string;
  c: {
    d: boolean;
    e: {
      g: {
        h: {
          i: true;
          j: 'string';
        };
        k: 'hello';
      };
    };
  };
};

type Expected = {
  readonly a: () => 22;
  readonly b: string;
  readonly c: {
    readonly d: boolean;
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true;
          readonly j: 'string';
        };
        readonly k: 'hello';
      };
    };
  };
};

type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends Record<string, unknown> ? DeepReadonly<T[P]> : T[P];
};

// { [k: string]: any } or Record<string, any> 所有引用类型都可通过检查

const a: Record<string, any> = {};
const b: Record<string, any> = [];
const c: Record<string, any> = new Map();
// 基本类型不通过
// const d: Record<string, any> = undefined null 1 'x', true;

// { [k: string]: unknown } or Record<string, unknown>

const a1: Record<string, unknown> = {};
// @ts-expect-error
const b2: Record<string, unknown> = [];
// @ts-expect-error
const c3: Record<string, unknown> = new Map();
