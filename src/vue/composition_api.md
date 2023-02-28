# Composition API

## Watch

### Watch props
Watch props thì phải dùng function

```ts
watch(() => props.myProp, (val) => {/*...*/})
```

### Watch nhiều biến
```js
watch([bien1, bien2, bien3], (val) => {/* ... */});
watch({ ten1: bien1, ten2: bien2 }, (val) => {/* ... */})
```

## Props

```ts
const props = defineProps({
  // prop kiêu boolean và default value
  booleanProp: propTypes.bool.def(true),
  // KDL cho props trong typescript
  tenProp: {
    type: Object as PropType<KDL>,
    default: () => { /*...*/ }
  },
  // KDL cho function prop cũng đc
  tenFuncProp: {
    type: Function as PropType<(param: KDL) => KDLReturn>,
  },
})

```