---
id: revealer 
title: Revealer
sidebar_label: Revealer
---

Komponenta ISLE, kterou mohou instruktoři používat k selektivnímu odhalování nebo skrývání obsahu pro děti všem studentům během výuky.

## Možnosti

* __message__ | `(string|node)`: zpráva, která se zobrazí, když je obsah skrytý. Default: `none`.
* __show__ | `boolean`: řídí, zda se mají na začátku zobrazit podřízené prvky. Default: `false`.


## Příklady

```jsx live
<Revealer
        id="mudgelove"
    >
        <div>
            <h3>Content that will be revealed.</h3>
        </div>
</Revealer>
``` 

