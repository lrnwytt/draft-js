/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+draft_js
 * @format
 */

// Based on https://dom.spec.whatwg.org/#concept-range
class Range {
  constructor({startOffset, endOffset, node}) {
    this.startOffset = startOffset;
    this.endOffset = endOffset;
    this.node = node;
  }

  setEnd(node, offset) {
    this.endOffset = offset;
    this.node = node;
  }

  cloneRange() {
    return new Range({
      startOffset: this.startOffset,
      endOffset: this.endOffset,
      node: this.node,
    });
  }
}

module.exports = Range;
