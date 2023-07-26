export function bubbleSort(array) {
    const animations = [];
    const n = array.length;
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        // Push the indices of the two elements being compared to change their color
        animations.push([j, j + 1]);
        // Push the same indices again to revert their color
        animations.push([j, j + 1]);
  
        if (array[j] > array[j + 1]) {
          // Swap the two elements
          animations.push([j, array[j + 1]]);
          animations.push([j + 1, array[j]]);
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        } else {
          // No swap, push the same height values again for consistency
          animations.push([j, array[j]]);
          animations.push([j + 1, array[j + 1]]);
        }
      }
    }
  
    return animations;
  }
  