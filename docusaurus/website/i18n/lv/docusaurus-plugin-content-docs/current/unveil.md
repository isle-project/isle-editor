---
id: unveil 
title: Unveil
sidebar_label: Unveil
---

Komponente parādīsies, un visi tās bērni kļūs redzami pēc noteikta laika perioda.

## Iespējas

* __active__ | `boolean`: kontrolē, vai skaitītājam jābūt aktīvam. Default: `false`.
* __delay__ | `number`: milisekunžu skaits pirms komponenta parādīšanās. Default: `1000`.


## Piemēri

```jsx live
<Unveil delay={5000} >
    <span>When active, I will appear after five seconds...</span>
</Unveil>
```



