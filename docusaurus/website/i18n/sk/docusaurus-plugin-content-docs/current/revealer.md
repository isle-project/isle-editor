---
id: revealer 
title: Revealer
sidebar_label: Revealer
---

Komponent ISLE, ktorý môžu inštruktori používať na selektívne odhaľovanie alebo skrývanie obsahu pre deti všetkým študentom počas hodiny.

## Možnosti

* __message__ | `(string|node)`: správa, ktorá sa zobrazí, keď je obsah skrytý. Default: `none`.
* __show__ | `boolean`: kontroluje, či sa majú na začiatku zobraziť podriadené prvky.. Default: `false`.


## Príklady

```jsx live
<Revealer
        id="mudgelove"
    >
        <div>
            <h3>Content that will be revealed.</h3>
        </div>
</Revealer>
``` 

