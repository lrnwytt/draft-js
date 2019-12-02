/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+draft_js
 * @format
 */

'use strict';

jest.disableAutomock();

const addFocusToSelection = require('setDraftEditorSelection')
  .addFocusToSelection;
const getSampleSelectionMocksForTesting = require('getSampleSelectionMocksForTesting');
const Selection = require('SelectionApi');
const Range = require('RangeApi');

let editorState = null;
let textNodes = null;

const resetRootNodeMocks = () => {
  ({editorState, textNodes} = getSampleSelectionMocksForTesting());
};

beforeEach(() => {
  resetRootNodeMocks();
});

describe('addFocusToSelection', () => {
  test('sets a new focus on the selection if selection.extend is unsupported', () => {
    const range = new Range({
      startOffset: 0,
      endOffset: 0,
      node: textNodes[0],
    });
    const selection = new Selection({range});
    const storedFocusNode = selection.focusNode;
    const storedFocusOffset = 3;
    addFocusToSelection(
      selection,
      storedFocusNode,
      storedFocusOffset,
      editorState.getSelection(),
    );
    expect(selection).toMatchSnapshot();
  });

  // If rangeCount is 0, selection.getRangeAt() will throw on various browsers
  test('the range is not updated if rangeCount is 0', () => {
    const selection = new Selection({});
    const storedFocusNode = selection.focusNode;
    const storedFocusOffset = 3;
    addFocusToSelection(
      selection,
      storedFocusNode,
      storedFocusOffset,
      editorState.getSelection(),
    );
    expect(selection).toMatchSnapshot();
  });
});
