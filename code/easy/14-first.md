# 第一个元素

实现一个`First<T>`，接受一个数组`T`返回第一个元素的类型。

## 例如

```typescript
type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3
```

## 要点

- `T extends any[]`泛型约束
- 考虑空数组`[]`情况

## 解答

```typescript
type First<T extends any[]> T extends [] ? never : T[0]
```

## 测试

## 更多解答

[![分享你的解答](https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal)](https://tsch.js.org/14/answer/zh-CN) [![查看解答](https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white)](https://tsch.js.org/14/solutions)
