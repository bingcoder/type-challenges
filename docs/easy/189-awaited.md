# Awaited

有一个`Promise<E>`对象，实现`Awaited<T>`，获取类型`E`。

## 例如

```typescript
type A = Awaited<Promise<string>>; // expected to be string

type B = Awaited<Promise<Promise<string | number>>>; // expected to be string | number
```

## 要点

- 条件类型中推断：`extends` `infer`

  ```typescript
  type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
  ```

- 递归

## 解答

```typescript
type Awaited<T extends Promise<any>> = T extends Promise<infer E>
  ? E extends Promise<any>
    ? Awaited<E>
    : E
  : never;
```

## 测试

## 更多解答

[![分享你的解答](https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal)](https://tsch.js.org/189/answer/zh-CN) [![查看解答](https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white)](https://tsch.js.org/189/solutions)
