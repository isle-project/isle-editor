---
id: gate 
title: Gate
sidebar_label: Gate
---

Egy ISLE komponens, amely lehetővé teszi, hogy gyermekeit csak a fenntartott közönség számára jelenítse meg.

## Opciók

* __user__ | `boolean`: ha be van állítva, a korlátos tartalom megjelenik a felhasználók számára.. Default: `false`.
* __notUser__ | `boolean`: ha be van állítva, a zárolt tartalom **nem** jelenik meg a felhasználók számára. Default: `false`.
* __enrolled__ | `boolean`: ha be van állítva, akkor a zárolt tartalom megjelenik a kurzusra beiratkozott hallgatók számára.. Default: `false`.
* __notEnrolled__ | `boolean`: ha be van állítva, a zárolt tartalom **nem** jelenik meg a kurzusra beiratkozott hallgatók számára.. Default: `false`.
* __owner__ | `boolean`: ha be van állítva, a zárolt tartalom a kurzus tulajdonosának (általában az oktatónak) jelenik meg.. Default: `false`.
* __notOwner__ | `boolean`: ha be van állítva, a zárolt tartalom **nem** jelenik meg a kurzus tulajdonosa (általában az oktató) számára.. Default: `false`.
* __after__ | `Date`: az idő, amely után a kapu tartalmának láthatóvá kell válnia.. Default: `none`.
* __until__ | `Date`: az idő, amíg a kapu tartalma láthatóvá válik. Default: `none`.
* __banner__ | `node`: egy egyéni üzenet, amely az alapértelmezett üzenet helyett megjelenik azoknak a látogatóknak, akik számára a kapu gyermekei nem láthatók.. Default: `none`.
* __disabled__ | `boolean`: ha egy kapu le van tiltva, a banner megjelenik, függetlenül attól, hogy mi történik.. Default: `false`.
* __showOwnerInPresentationMode__ | `boolean`: szabályozza, hogy a kapu tartalma megjelenjen-e prezentációs módban, amikor a kapu látható a `tulajdonos` számára.. Default: `false`.
* __check__ | `function`: callback függvény, amely egy "bólé" értéket ad vissza, amely jelzi, hogy a gate-nek meg kell-e jelenítenie a gyermek komponenseket; a függvényt akkor hívja meg, amikor munkamenet-akciók érkeznek.. Default: `none`.


## Példák

```jsx live
<Gate 
    banner={<h2>You have to be logged in to see the content</h2>}
    user 
>
    <h1>For users only</h1>
</Gate>
``` 



