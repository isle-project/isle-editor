---
id: unveil 
title: Unveil
sidebar_label: Unveil
---

Komponent appear muudab kõik oma lapsed nähtavaks määratud aja möödudes.

## Valikud

* __active__ | `boolean`: kontrollib, kas loendur peaks olema aktiivne. Default: `false`.
* __delay__ | `number`: millisekundite arv enne komponendi ilmumist. Default: `1000`.


## Näited

```jsx live
<Unveil delay={5000} >
    <span>When active, I will appear after five seconds...</span>
</Unveil>
```



