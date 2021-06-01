---
id: unveil 
title: Unveil
sidebar_label: Unveil
---

Komponenten appear får alle dens børn til at blive synlige efter et bestemt tidsrum.

## Indstillinger

* __active__ | `boolean`: kontrollerer, om tælleren skal være aktiv. Default: `false`.
* __delay__ | `number`: antal millisekunder før komponent vises. Default: `1000`.


## Eksempler

```jsx live
<Unveil delay={5000} >
    <span>When active, I will appear after five seconds...</span>
</Unveil>
```



