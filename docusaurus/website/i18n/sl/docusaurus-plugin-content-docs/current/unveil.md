---
id: unveil 
title: Unveil
sidebar_label: Unveil
---

Komponenta appear povzroči, da vsi njeni otroci postanejo vidni po določenem času.

## Možnosti

* __active__ | `boolean`: nadzoruje, ali naj bo števec aktiven.. Default: `false`.
* __delay__ | `number`: število milisekund, preden se prikaže komponenta. Default: `1000`.


## Primeri

```jsx live
<Unveil delay={5000} >
    <span>When active, I will appear after five seconds...</span>
</Unveil>
```



