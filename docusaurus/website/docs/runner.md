---
id: runner 
title: Runner
sidebar_label: Runner
---

The runner component will execute a supplied function either once or at a given interval.

## Examples

```jsx live
<Runner
    interval={2000}
    onEvaluate={() => { console.log( 'Two seconds have passed...' ); }}
/>
```



## Options

* __active__ | `boolean`: controls whether the runner should be active. Upon activation, the `onEvaluate` function is called in the given interval (or once). Default: `true`.
* __interval__ | `number`: number of milliseconds between invocations of `onEvaluate`. If no interval is set, the function is only invoked once. Default: `none`.
* __onEvaluate__ | `function`: function to be invoked. Default: `onEvaluate() {}`.
