# Parameters

实现内置的 Parameters<T>。

## 例如

```typescript
type P = Parameters<(arg1: string, arg2: number) => void>; // expected to be [string, number]
```

## 解答

```typescript
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
```

## 测试

## 更多解答

[![分享你的解答](https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal)](https://tsch.js.org/3312/answer/zh-CN) [![查看解答](https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white)](https://tsch.js.org/3312/solutions)
