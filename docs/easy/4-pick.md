# Pick

实现内置`Pick<T, K>`，从类型 T 中选择出属性`K`。

## 例如

```typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
};
```

## 要点

- `K extends keyof T` 泛型约束，`K`为`T`类型的 key 的联合类型
- ` [P in K]` 循环`K`

## 解答

```typescript
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
```

## 测试

## 更多解答

<a href="https://tsch.js.org/4/answer/zh-CN" target="_blank"><img src="https://img.shields.io/badge/-%E5%88%86%E4%BA%AB%E4%BD%A0%E7%9A%84%E8%A7%A3%E7%AD%94-teal" alt="分享你的解答"/></a> <a href="https://tsch.js.org/4/solutions" target="_blank"><img src="https://img.shields.io/badge/-%E6%9F%A5%E7%9C%8B%E8%A7%A3%E7%AD%94-de5a77?logo=awesome-lists&logoColor=white" alt="查看解答"/></a>
