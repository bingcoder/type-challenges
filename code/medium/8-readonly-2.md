# Readonly-2

实现一个`MyReadonly<T, K>`，它接受两个参数，提供`K`时，`T`的`K`属性为只读，未提供`K`，全部为只读属性。

## 例如

```typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

const todo: MyReadonly<Todo, 'title' | 'description'> = {
  title: 'Hey',
  description: 'foobar',
  completed: false,
};

todo.title = 'Hello'; // Error: cannot reassign a readonly property
todo.description = 'barFoo'; // Error: cannot reassign a readonly property
todo.completed = true; // OK
```

## 解答

```typescript
type MyReadonly<T, K extends keyof T = keyof T> = Readonly<Pick<T, K>> & Omit<T, K>;
```

## 测试

## 更多解答

[![分享你的解答](https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal)](https://tsch.js.org/9/answer/zh-CN) [![查看解答](https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white)](https://tsch.js.org/9/solutions)
