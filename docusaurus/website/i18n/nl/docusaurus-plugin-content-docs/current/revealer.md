---
id: revealer 
title: Revealer
sidebar_label: Revealer
---

Een ISLE component die docenten kunnen gebruiken om selectief de inhoud van kinderen te onthullen of te verbergen aan alle leerlingen tijdens de les.

## Opties

* __message__ | `(string|node)`: bericht dat moet worden weergegeven wanneer de inhoud verborgen is. Default: `none`.
* __show__ | `boolean`: bepaalt of er in eerste instantie kinderelementen moeten worden weergegeven. Default: `false`.


## Voorbeelden

```jsx live
<Revealer
        id="mudgelove"
    >
        <div>
            <h3>Content that will be revealed.</h3>
        </div>
</Revealer>
``` 

