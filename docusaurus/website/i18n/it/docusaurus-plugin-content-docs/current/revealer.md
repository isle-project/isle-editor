---
id: revealer 
title: Revealer
sidebar_label: Revealer
---

Un componente ISLE che gli istruttori possono utilizzare per rivelare o nascondere selettivamente il contenuto dei bambini a tutti gli studenti durante la lezione.

## Opzioni

* __message__ | `(string|node)`: messaggio da visualizzare quando il contenuto è nascosto. Default: `none`.
* __show__ | `boolean`: controlla se visualizzare inizialmente gli elementi figli. Default: `false`.


## Esempi

```jsx live
<Revealer
        id="mudgelove"
    >
        <div>
            <h3>Content that will be revealed.</h3>
        </div>
</Revealer>
``` 

