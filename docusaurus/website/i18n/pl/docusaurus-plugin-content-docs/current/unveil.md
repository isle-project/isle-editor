---
id: unveil 
title: Unveil
sidebar_label: Unveil
---

Pojawienie się komponentu spowoduje, że wszystkie jego dzieci staną się widoczne po określonym czasie.

## Opcje

* __active__ | `boolean`: kontroluje, czy licznik powinien być aktywny. Default: `false`.
* __delay__ | `number`: liczba milisekund przed pojawieniem się składnika. Default: `1000`.


## Przykłady

```jsx live
<Unveil delay={5000} >
    <span>When active, I will appear after five seconds...</span>
</Unveil>
```



