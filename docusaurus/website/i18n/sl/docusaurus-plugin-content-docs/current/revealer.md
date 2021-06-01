---
id: revealer 
title: Revealer
sidebar_label: Revealer
---

Komponenta ISLE, ki jo lahko inštruktorji uporabijo za selektivno prikazovanje ali skrivanje vsebine otrok vsem učencem med poukom.

## Možnosti

* __message__ | `(string|node)`: sporočilo, ki se prikaže, ko je vsebina skrita. Default: `none`.
* __show__ | `boolean`: nadzoruje, ali se na začetku prikažejo podrejeni elementi.. Default: `false`.


## Primeri

```jsx live
<Revealer
        id="mudgelove"
    >
        <div>
            <h3>Content that will be revealed.</h3>
        </div>
</Revealer>
``` 

