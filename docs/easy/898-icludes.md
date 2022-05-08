# Includes

在类型系统里实现`Array.includes`方法，返回类型是`true or false `。

## 例如

```typescript
type Result = Includes<['a', 'b', 'c'], 'a'>; // expected to be true
```

## 解答

```typescript
type If<C extends boolean, T, F> = C extends true ? T : F;
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
  ? true
  : false;
type Includes<T extends any[], U> = T extends [infer F, ...infer R]
  ? If<Equal<F, U>, true, Includes<R, U>>
  : false;
```

## 测试

## 更多解答

[![分享你的解答](https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal)](https://tsch.js.org/898/answer/zh-CN) [![查看解答](https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white)](https://tsch.js.org/898/solutions)
