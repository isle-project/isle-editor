---
id: expire 
title: Expire
sidebar_label: Expire
---

Expire-komponentti saa kaikki sen lapset muuttumaan näkymättömiksi tietyn ajan kuluttua.

## Vaihtoehdot

* __active__ | `boolean`: valvoo, onko laskurin oltava aktiivinen. Default: `false`.
* __delay__ | `number`: millisekuntien määrä ennen komponentin katoamista. Default: `1000`.


## Esimerkkejä

```jsx live
<Expire>
    <span>When active, I will disappear after one second</span>
</Expire>
```



