# Exclude

实现内置的`Exclude<T, U>`，从联合类型中排除`U`。

## 例如

```typescript
type A = 'a' | 'b' | 'c';

type B = Exclude<A, 'a'>; // expected to be 'b'|'c'
```

## 要点

- 分布条件类型：当条件类型作用于泛型且给定联合类型时，它将变为分布型

  ```typescript
  type ToArray<T> = T extends any ? T[] : never;

  type StrArrOrNumArr = ToArray<string | number>; // expected to be string[] | number[]

  // distributes on StrArrOrNumArr
  // ToArray<string> | ToArray<number> // string[] | number[]

  // 通常分发性是需要的，如何避免这种行为
  type ToArray<T> = [T] extends [any] ? T[] : never;

  type StrArrOrNumArr = ToArray<string | number>; // expected to be(string | number)[]
  ```

- `never`和其他类型的组成的联合类型，没有`never`

  ```typescript
  type Ne = never | 'a'; // expected to be 'a'
  ```

## 解答

```typescript
type Exclude<T, U> = T extends U ? never : T;
```

## 测试

## 更多解答

[![分享你的解答](https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal)](https://tsch.js.org/43/answer/zh-CN) [![查看解答](https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white)](https://tsch.js.org/43/solutions)
