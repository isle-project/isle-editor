---
id: unveil 
title: Unveil
sidebar_label: Unveil
---

The appear component will cause all of its children to become visible after a specified amount of time.

## Options

* __active__ | `boolean`: controls whether the counter should be active. Default: `false`.
* __delay__ | `number`: number of milliseconds before component appears. Default: `1000`.


## Examples

```jsx live
<Unveil delay={5000} >
    <span>When active, I will appear after five seconds...</span>
</Unveil>
```



