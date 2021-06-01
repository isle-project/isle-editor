---
id: expire 
title: Expire
sidebar_label: Expire
---

Komponenta expire způsobí, že se všechny její potomci po uplynutí zadaného času stanou neviditelnými.

## Možnosti

* __active__ | `boolean`: řídí, zda má být počítadlo aktivní. Default: `false`.
* __delay__ | `number`: počet milisekund před zmizením komponenty. Default: `1000`.


## Příklady

```jsx live
<Expire>
    <span>When active, I will disappear after one second</span>
</Expire>
```



