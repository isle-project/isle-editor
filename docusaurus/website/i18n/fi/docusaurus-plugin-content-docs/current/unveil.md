---
id: unveil 
title: Unveil
sidebar_label: Unveil
---

Näytetään-komponentti saa kaikki sen lapset näkymään tietyn ajan kuluttua.

## Vaihtoehdot

* __active__ | `boolean`: valvoo, onko laskurin oltava aktiivinen. Default: `false`.
* __delay__ | `number`: millisekuntien määrä ennen komponentin ilmestymistä. Default: `1000`.


## Esimerkkejä

```jsx live
<Unveil delay={5000} >
    <span>When active, I will appear after five seconds...</span>
</Unveil>
```



