# Insertion Sort

**Insertion Sort** is an algorithm which moves elements one at a time into the correct position. The algorithm consists of inserting one element at a time into the previously sorted part of the array, moving higher ranked elements up as necessary.

![Diagram](./insertionsort.png)

[![Dance](sortDance.png)](https://www.youtube.com/watch?v=ROalU379l3U)

[Interactive Visualization](https://visualgo.net/en/sorting)

### Worst Case Time Complexity: O(N<sup>2</sup>)

As the length of the array grows has to make N<sup>2</sup> comparisons.

Not efficient on reversed data sets.

`let arr = [5,4,3,2,1]`

### Best Case Time Complexity: O(N)

Only has to run through a nearly sorted array one time making a simple comparison at each index.

`let arr = [1,2,3,4]`

### Additional Resources

- [Insertion Sort Video | GeeksforGeeks](https://www.youtube.com/watch?v=OGzPmgsI-pQ)
- [Insertion Sorting for Beginners in JS](https://dev.to/ryan_dunton/insertion-sorting-for-beginners-in-js------fkg)
- [Rosettacode](https://rosettacode.org/wiki/Sorting_algorithms/Insertion_sort)
- [Insertion Sort Animation | Toptal](https://www.toptal.com/developers/sorting-algorithms/insertion-sort)