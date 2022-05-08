/// <reference types="vite/client" />
declare module 'virtual:docs-tree-generator' {
  type TreeData =
    | { key: string; title: string; value: string; language: string; isLeaf: true }
    | { key: string; title: string; children: TreeData[] };
  const docTree: TreeData[] = [];
  export default docTree;
}
