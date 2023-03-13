# Array

## `flatMap`
`flatMap` và `flat` áp dụng cho mảng lồng trong mảng => trả phần tử của mảng lông trong đã được lấy ra ngoài
```js
const arrayNested = [[1, 2], [3, 4]];

const flattenedArray = arrayNested.flat();
console.log(flattenedArray); // [1, 2, 3, 4]

const doubledNestedArrayFlat = arrayNested.flatMap(arr => arr.map(num => num * 2));
console.log(doubledNestedArrayFlat); // [2, 4, 6, 8]
```