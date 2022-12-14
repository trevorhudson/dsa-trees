"use strict";

/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }

  /** sumValues(): add up all values of invoking node and its children.
   * Returns sum as an integer. */
  sumValues(acc = 0) {
    if (this.children.length === 0) return this.val;

    for (let child of this.children) {
      acc += child.sumValues();

    }

    return acc += this.val;
  }



  /** countEvens(): starting from the invoking node and moving through its
   * children, count how many nodes have even values. Returns that count as
   * an integer. */
  countEvens(count = 0) {
    let isEven = this.val%2 === 0 
                            ? 1
                            : 0

    //BASE CASE. Return 1 if even. Return 0 if not
    if (this.children.length === 0){
    }
    
    for(let child of this.children){
      count += child.countEvens();

    }
    return isEven + count;
  }

  /** numGreater(lowerBound): starting from the invoking node and moving through
   * its children, return a count of the number of nodes whose value is greater
   * than lowerBound. */
  numGreater(lowerBound) {
    let count = 0;
    let isGreater = this.val > lowerBound
                    ? 1
                    : 0
    
    //BASE CASE. Return 1 if even. Return 0 if not
    if (this.children.length === 0){
    }
    
    for(let child of this.children){
      count += child.numGreater(lowerBound);
    }

    return isGreater + count;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all values in the tree. */
  sumValues() {
    if (this.root == null) return 0;
    return this.root.sumValues();

  }

  /** countEvens(): count all nodes in the tree that have even values. */
  countEvens() {
    if (this.root == null) return 0;
    return this.root.countEvens();
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */
  numGreater(lowerBound) {
    if (this.root == null) return 0;
    return this.root.numGreater(lowerBound);
  }
}

module.exports = { Tree, TreeNode };
