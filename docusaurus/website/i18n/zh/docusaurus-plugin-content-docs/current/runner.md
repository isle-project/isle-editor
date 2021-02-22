---
id: runner 
title: Runner
sidebar_label: Runner
---

runner组件将在给定的时间间隔内执行一次或一次提供的函数。

## 选项

* __active__ | `boolean`: 控制Runner是否应该被激活。激活后，在给定的时间间隔内调用 "onEvaluate "函数（或一次）。. Default: `true`.
* __interval__ | `number`: `onEvaluate'调用之间的毫秒数。如果没有设置间隔时间，则函数只被调用一次。. Default: `none`.
* __onEvaluate__ | `function`: 要调用的函数. Default: `onEvaluate() {}`.


## 例子

```jsx live
<Runner
    interval={2000}
    onEvaluate={() => { console.log( 'Two seconds have passed...' ); }}
/>
```



