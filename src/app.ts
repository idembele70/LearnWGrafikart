// type challenges

const tree1 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
} as const
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}
type Traversal<T, U extends keyof T> =
  T[U] extends TreeNode ? InorderTraversal<T[U]> : []
type InorderTraversal<T extends TreeNode | null> =
  T extends TreeNode ?
  [...Traversal<T, "left">, T["val"], ...Traversal<T, "right">] : T

type A = InorderTraversal<typeof tree1> // [1, 3, 2]
