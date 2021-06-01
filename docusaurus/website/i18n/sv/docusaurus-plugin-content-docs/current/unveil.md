---
id: unveil 
title: Unveil
sidebar_label: Unveil
---

Komponenten appear gör att alla dess barn blir synliga efter en viss tid.

## Alternativ

* __active__ | `boolean`: kontrollerar om räknaren ska vara aktiv. Default: `false`.
* __delay__ | `number`: antal millisekunder innan komponenten visas. Default: `1000`.


## Exempel

```jsx live
<Unveil delay={5000} >
    <span>When active, I will appear after five seconds...</span>
</Unveil>
```



