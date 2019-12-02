/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+draft_js
 * @format
 */

// Based on https://w3c.github.io/selection-api/#selection-interface
class Selection {
  constructor({range}) {
    this.rangeCount = range ? 1 : 0;
    this.focusNode = (range && range.node) || null;
    this.focusOffset = (range && range.startOffset) || 0;
    this.range = range || null;
  }

  getRangeAt(idx) {
    if (idx !== 0 || this.rangeCount <= 0) {
      throw new Error('IndexSizeError');
    }
    return this.range;
  }

  addRange(range) {
    this.range = range;
    this.rangeCount = 1;
  }
}

module.exports = Selection;
