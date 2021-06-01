---
id: expire 
title: Expire
sidebar_label: Expire
---

Komponenten expire gör att alla dess barn blir osynliga efter en viss tid.

## Alternativ

* __active__ | `boolean`: kontrollerar om räknaren ska vara aktiv. Default: `false`.
* __delay__ | `number`: antal millisekunder innan komponenten försvinner. Default: `1000`.


## Exempel

```jsx live
<Expire>
    <span>When active, I will disappear after one second</span>
</Expire>
```



