---
id: expire 
title: Expire
sidebar_label: Expire
---

Az expire komponens hatására az összes gyermeke egy megadott idő után láthatatlanná válik.

## Opciók

* __active__ | `boolean`: szabályozza, hogy a számláló aktív legyen-e. Default: `false`.
* __delay__ | `number`: az alkatrész eltűnése előtti milliszekundumok száma. Default: `1000`.


## Példák

```jsx live
<Expire>
    <span>When active, I will disappear after one second</span>
</Expire>
```



