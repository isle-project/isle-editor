---
id: runner 
title: Runner
sidebar_label: Runner
---

Компонент бегунка будет выполнять поставленную функцию либо один раз, либо с заданным интервалом.

## Options

* __active__ | `boolean`: контролирует, должен ли бегун быть активен. После активации в заданном интервале (или один раз) вызывается функция `onEvaluate`.. Default: `true`.
* __interval__ | `number`: число миллисекунд между вызовами `onEvaluate`. Если интервал не задан, то функция вызывается только один раз. Default: `none`.
* __onEvaluate__ | `function`: вызываемая функция. Default: `onEvaluate() {}`.


## Examples

```jsx live
<Runner
    interval={2000}
    onEvaluate={() => { console.log( 'Two seconds have passed...' ); }}
/>
```



