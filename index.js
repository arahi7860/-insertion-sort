// Insertion Sort

const insertionSort = (arr) => {
// Sort through an Array.
// Start at index 1(second element) so that it can be 
// compared to index 0 since index 0 is now considered sorted.
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1
    let tempArr = arr[i]
// The second index will be run through from RIGHT to LEFT until it finds 
// the correct location.
    while (j >= 0 && arr[j] > tempArr) {
      arr[j + 1] = arr[j]
      j--
    }
// Each element should move over by 1 to make room for the new element being sorted.
    arr[j+1] = tempArr
  }
  return arr
}

console.log(insertionSort([15, 12, 55, 2, 4, 19, 6]))







