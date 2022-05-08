# DeepReadonly

实现一个`DeepReadonly<T>`，它将`T`和它子对象递归地设为只读。

## 例如

```typescript
type X = {
  x: {
    a: 1;
    b: 'hi';
  };
  y: 'hey';
};

type Expected = {
  readonly x: {
    readonly a: 1;
    readonly b: 'hi';
  };
  readonly y: 'hey';
};

type Todo = DeepReadonly<X>; // should be same as `Expected`
```

## 要点

- Record<string, unknown> 和 Record<string, any> 为两种类型，后者匹配任何引用类型

  ```typescript
  const a: Record<string, any> = {};
  const b: Record<string, any> = [];
  const c: Record<string, any> = new Map();
  ```

## 解答

```typescript
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends Record<string, unknown> ? DeepReadonly<T[P]> : T[P];
};
```

## 测试

## 更多解答

[![分享你的解答](https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal)](https://tsch.js.org/9/answer/zh-CN) [![查看解答](https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white)](https://tsch.js.org/9/solutions)
