---
id: revealer 
title: Revealer
sidebar_label: Revealer
---

En ISLE-komponent som lärare kan använda för att selektivt visa eller dölja barns innehåll för alla elever under lektionen.

## Alternativ

* __message__ | `(string|node)`: Meddelande som ska visas när innehållet är dolt.. Default: `none`.
* __show__ | `boolean`: kontrollerar om underordnade element ska visas från början eller inte. Default: `false`.


## Exempel

```jsx live
<Revealer
        id="mudgelove"
    >
        <div>
            <h3>Content that will be revealed.</h3>
        </div>
</Revealer>
``` 

