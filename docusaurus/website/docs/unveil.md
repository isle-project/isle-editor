---
id: unveil 
title: Unveil
sidebar_label: Unveil
---

The appear component will cause all of its children to become visible after a specified amount of time.

## Examples

```jsx live
<Unveil duration={5000} >
    <span> I will appear</span>
</Unveil>
```



## Options

* __active__ | `boolean`: controls whether the counter should be active. Default: `false`.
* __delay__ | `number`: number of milliseconds before component appears. Default: `1000`.
