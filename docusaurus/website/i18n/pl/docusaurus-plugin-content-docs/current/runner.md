---
id: runner 
title: Runner
sidebar_label: Runner
---

Komponent prowadnicy wykona dostarczoną funkcję raz lub w określonym odstępie czasu.

## Options

* __active__ | `boolean`: kontroluje, czy biegacz powinien być aktywny. Po aktywacji, funkcja `onEvaluate` jest wołana w danym przedziale czasu (lub raz). Default: `true`.
* __interval__ | `number`: liczba milisekund pomiędzy inwokacjami `onEvaluate`. Jeśli nie ustawiono żadnego odstępu czasu, funkcja jest wywoływana tylko raz. Default: `none`.
* __onEvaluate__ | `function`: funkcja, na którą należy się powołać. Default: `onEvaluate() {}`.


## Examples

```jsx live
<Runner
    interval={2000}
    onEvaluate={() => { console.log( 'Two seconds have passed...' ); }}
/>
```



