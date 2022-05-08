# Concat

在类型系统里实现`Array.concat`方法，接受 2 个参数，返回的合并后的新类型。

## 例如

```typescript
type Result = Concat<[1], [2]>; // expected to be [1, 2]
```

## 解答

```typescript
type Resule<T extends any[], U extends any[]> = [...T, ...U];
```

## 测试

## 更多解答

[![分享你的解答](https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal)](https://tsch.js.org/533/answer/zh-CN) [![查看解答](https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white)](https://tsch.js.org/533/solutions)
