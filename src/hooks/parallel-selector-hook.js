// Parallel-Selector Hook //

// Used for tracking selections from parallel lists ('types') of items, where
// overall state depends on how many items from each list are selected.

// Also handles 'confirming' the selection, taking a callback function to do
// something with the list of selected items from all associated lists.

// Current Limitations:
// - Tracks exactly one selection from each list.
// - Tracks whether or not a selection has been made from every associated list
//   in the `minSelected` state.

// TO DO: Refactor error handling to use proper error objects instead of only
// console.logs.

import { useState } from 'react';

// Utility Functions //

// Check if an item has been selected from each list.
function areMinSelected(selTracker) {
  if (Object.values(selTracker).includes(null)) return false;
  return true;
};

// Recursively build the initial state by adding each type one by one.
// (There is probably a better way to do this.)
function initSelection(types) {
  if (!types) return console.log(`initParTrack Err: 'types' = ${types}`);
  if (types.length < 1) return console.log(`initParTrack Err: 'types' is empty`);
  let initState = {};
  types.forEach(type => {
    initState = {
      ...initState,
      ...{[type]: null} // With nothing selected, initial value is `null`.
    };
  });
  return initState
};

const reduceToIds = (sel) => {
  let arr = [];
  for (let p in sel) arr.push(sel[p].id);
  return arr;
};

// Expects an array of strings.
export const useParallelSelector = (types) => {

  const [selTracker, setSelTracker] = useState(initSelection(types));
  const [minSelected, setMinSelected] = useState(false);

  // Expects an object with a unique `id` property.
  const selectHandler = (item) => {
    const alreadySelected = item.id === selTracker[item.type]?.id;
    alreadySelected ? unselect(item) : select(item);
    setMinSelected(areMinSelected(selTracker));

    // Store the entire item in the tracker for the matching type (list).
    function select(item) {
      const newSel = selTracker;
      newSel[item.type] = item;
      setSelTracker({...newSel});
    };

    // Set selection for matching type (list) to `null`.
    function unselect(item) {
      const newSel = selTracker;
      newSel[item.type] = null;
      setSelTracker({...newSel});
    };
  };

  const submitSelection = ({cb:[callback, ...args], reset}) => {
    const ids = reduceToIds(selTracker);

    // Optionally reset the tracker.
    if (reset) {
      setSelTracker(initSelection(types));
      setMinSelected(false);
    };

    // Call the callback. First arg is an array of (the ids of) selected items,
    // followed by any additional given args.
    return callback(ids, ...args);
  };

  return {
    selTracker,
    minSelected,
    selectHandler,
    submitSelection
  };
};