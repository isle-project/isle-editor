---
id: revealer 
title: Revealer
sidebar_label: Revealer
---

Egy ISLE-összetevő, amelyet az oktatók arra használhatnak, hogy a gyerekek tartalmát szelektíven felfedjék vagy elrejtsék az összes diák számára az óra során.

## Opciók

* __message__ | `(string|node)`: a tartalom elrejtésekor megjelenítendő üzenet. Default: `none`.
* __show__ | `boolean`: szabályozza, hogy kezdetben megjelenítse-e a gyermek elemeket. Default: `false`.


## Példák

```jsx live
<Revealer
        id="mudgelove"
    >
        <div>
            <h3>Content that will be revealed.</h3>
        </div>
</Revealer>
``` 

