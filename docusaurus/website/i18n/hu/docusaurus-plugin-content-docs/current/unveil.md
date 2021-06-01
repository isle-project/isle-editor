---
id: unveil 
title: Unveil
sidebar_label: Unveil
---

A megjelenő komponens hatására az összes gyermeke láthatóvá válik egy megadott idő után.

## Opciók

* __active__ | `boolean`: szabályozza, hogy a számláló aktív legyen-e. Default: `false`.
* __delay__ | `number`: az alkatrész megjelenése előtti milliszekundumok száma. Default: `1000`.


## Példák

```jsx live
<Unveil delay={5000} >
    <span>When active, I will appear after five seconds...</span>
</Unveil>
```



