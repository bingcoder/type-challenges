# Omit

实现内置的`Omit<T, K>`。

## 例如

```typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Omit<Todo, 'title' | 'description'>; // expected to be { completed: boolean }
```

## 解答

```typescript
type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
```

## 测试

## 更多解答

[![分享你的解答](https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal)](https://tsch.js.org/3/answer/zh-CN) [![查看解答](https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white)](https://tsch.js.org/3/solutions)
