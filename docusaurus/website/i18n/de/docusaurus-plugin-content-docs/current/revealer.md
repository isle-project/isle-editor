---
id: revealer 
title: Revealer
sidebar_label: Revealer
---

Eine ISLE-Komponente, mit der der Dozent während des Unterrichts selektiv Inhalte für alle Schüler anzeigen oder verbergen kann.

## Optionen

* __message__ | `(string|node)`: Meldung, die angezeigt werden soll, wenn der Inhalt ausgeblendet wird. Default: `none`.
* __show__ | `boolean`: steuert, ob untergeordnete Elemente anfänglich angezeigt werden sollen. Default: `false`.


## Beispiele

```jsx live
<Revealer
        id="mudgelove"
    >
        <div>
            <h3>Content that will be revealed.</h3>
        </div>
</Revealer>
``` 

