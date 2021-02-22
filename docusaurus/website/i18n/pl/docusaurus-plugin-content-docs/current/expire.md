---
id: expire 
title: Expire
sidebar_label: Expire
---

Element wygasający spowoduje, że wszystkie jego dzieci staną się niewidoczne po określonym czasie.

## Opcje

* __active__ | `boolean`: kontroluje, czy licznik powinien być aktywny. Default: `false`.
* __delay__ | `number`: liczba milisekund przed zniknięciem składnika. Default: `1000`.


## Przykłady

```jsx live
<Expire>
    <span> I will disappear </span>
</Expire>
```



