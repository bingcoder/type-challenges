export class Tree<T> {
  constructor(private tree: T[]) {}

  bfs(callback: (c: T) => boolean) {
    const queue = [...this.tree];
    let current;
    while ((current = queue.shift())) {
      if (callback(current)) return current;
      if ((current as any).children?.length) {
        queue.push(...((current as any).children || []));
      }
    }
  }
  forEach(callback: (c: T) => void) {
    this.bfs((c) => {
      callback(c);
      return false;
    });
  }
}
