"use strict";

/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** minDepth(): return the minimum depth from the invoking node -- that is,
   * the length of the shortest path from the invoking node to a leaf. */
  //Queue. Check on higher level then children
  minDepth() {

    if (this.left === null || this.right === null) return 1;
    let left_dist = 0;
    let right_dist = 0;

    if (this.left) {
      left_dist += this.left.minDepth();
    }
    if (this.right) {
      right_dist += this.right.minDepth();
    }

    return 1 + Math.min(left_dist, right_dist);
  }

  /** maxDepth(): return the maximum depth from the invoking node -- that is,
   * the length of the longest path from the invoking node to a leaf. */
  maxDepth() {

    if (this.left === null && this.right === null) return 1;

    let left_dist = 0;
    let right_dist = 0;

    if (this.left) {
      left_dist += this.left.maxDepth();
    }
    if (this.right) {
      right_dist += this.right.maxDepth();
    }

    return 1 + Math.max(left_dist, right_dist);

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
  * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

    //base case 
    if(this.left === null && this.right === null) {
      return this.val > lowerBound
              ? this.val
              : null;
    }

    //Special case
    if (this.val === lowerBound + 1) return this.val;

    let leftResult = null;
    let rightResult = null;
    //recursive case
    if(this.left){
      leftResult = this.left.nextLarger(lowerBound)
    }
    if(this.right){
      rightResult = this.right.nextLarger(lowerBound)
    }

    if(leftResult && rightResult) return Math.min(leftResult, rightResult);
    else if(rightResult) return rightResult;
    return leftResult;

  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  minDepth() {
    if (this.root == null) return 0;

    return this.root.minDepth();
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  maxDepth() {
    if (this.root == null) return 0;

    return this.root.maxDepth();
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

    if (this.root === null) return null;
    return this.root.nextLarger(lowerBound);


  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
