---
id: expire 
title: Expire
sidebar_label: Expire
---

The expire component will cause all of its children to become invisible after a specified amount of time.

## Options

* __active__ | `boolean`: controls whether the counter should be active. Default: `false`.
* __delay__ | `number`: number of milliseconds before component disappears. Default: `1000`.


## Examples

```jsx live
<Expire>
    <span>When active, I will disappear after one second</span>
</Expire>
```



