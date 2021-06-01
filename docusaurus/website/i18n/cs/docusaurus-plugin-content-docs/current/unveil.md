---
id: unveil 
title: Unveil
sidebar_label: Unveil
---

Komponenta appear způsobí, že se všechny její potomci po uplynutí zadaného času zviditelní.

## Možnosti

* __active__ | `boolean`: řídí, zda má být počítadlo aktivní. Default: `false`.
* __delay__ | `number`: počet milisekund před zobrazením komponenty. Default: `1000`.


## Příklady

```jsx live
<Unveil delay={5000} >
    <span>When active, I will appear after five seconds...</span>
</Unveil>
```



