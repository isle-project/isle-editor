---
id: runner 
title: Runner
sidebar_label: Runner
---

Компонентът runner ще изпълни предоставената функция еднократно или на определен интервал от време.

## Опции

* __active__ | `boolean`: контролира дали бегачът трябва да бъде активен. При активиране функцията `onEvaluate` се извиква през зададения интервал от време (или еднократно).. Default: `true`.
* __interval__ | `number`: брой милисекунди между извикванията на `onEvaluate`. Ако не е зададен интервал, функцията се извиква само веднъж. Default: `none`.
* __onEvaluate__ | `function`: функция, която да бъде извикана. Default: `onEvaluate() {}`.


## Примери

```jsx live
<Runner
    interval={2000}
    onEvaluate={() => { console.log( 'Two seconds have passed...' ); }}
/>
```



