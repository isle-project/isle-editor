---
id: revealer 
title: Revealer
sidebar_label: Revealer
---

ISLE komponent, mida õpetajad võivad kasutada selleks, et valikuliselt näidata või varjata laste sisu kõigile õpilastele tunni ajal.

## Valikud

* __message__ | `(string|node)`: sõnum, mis kuvatakse, kui sisu on peidetud. Default: `none`.
* __show__ | `boolean`: kontrollib, kas esialgu kuvatakse lapselemendid. Default: `false`.


## Näited

```jsx live
<Revealer
        id="mudgelove"
    >
        <div>
            <h3>Content that will be revealed.</h3>
        </div>
</Revealer>
``` 

