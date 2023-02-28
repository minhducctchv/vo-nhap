# Lodash

## uniqBy

lọc các phần tử trùng của mảng

```js
lodash.uniqBy(array, [identity])
```
```js
// ví dụ
const arr = [{id: 1, name: 'mot'}, {id: 2, name: 'hai'}, {id: 1, name: 'ba'}]
lodash.uniqBy(array, 'id')
// => [{id: 1, name: 'mot'}, {id: 2, name: 'hai'}]

_.uniqBy([2.1, 1.2, 2.3], Math.floor);
// => [2.1, 1.2]
```