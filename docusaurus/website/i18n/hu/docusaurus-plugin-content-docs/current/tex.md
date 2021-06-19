---
id: tex
title: LaTeX Equations
sidebar_label: LaTeX Equations
---

A `TeX` egy ISLE elem, amely LaTeX egyenletek megjelenítésére használható. A motorháztető alatt a komponens a [KaTeX](https://github.com/Khan/KaTeX) programot használja a villámgyors megjelenítéshez.

## Opciók

* __raw__ | `(string|number) (required)`: A megjelenítendő szó szerinti LaTeX `string`. A `numbers` is elfogadható. Default: `none`.
* __displayMode__ | `boolean`: `boolean`, amely jelzi, hogy az egyenletet sorban vagy kijelző módban jelenítse-e meg. Default: `false`.
* __numbered__ | `boolean`: szabályozza, hogy megjelenítse-e az egyenletszámot a kijelző módú egyenleteknél. Default: `false`.
* __style__ | `object`: `object` CSS kulcs-érték párokkal, amelyeket az egyenlet tárolójára kell alkalmazni.. Default: `{}`.
* __tag__ | `string`: A jobb oldalon megjelenített egyéni karakterek a kijelző egyenletekhez. Alapértelmezés szerint az egyenlet száma a leckén belül.. Default: `none`.
* __elems__ | `object`: `objektum`, ahol a `kulcsok` LaTeX karaktereket jelölnek, a hozzájuk tartozó értékek pedig konfigurációs `objektumok`, hogy interaktívvá tegyék őket. A `tooltip` opció beállításával a LaTeX karakterek fölött lebegve megjelenik egy tooltip. A `variable` tulajdonság beállítása egy beviteli csúszkát jelenít meg a megfelelő állapotváltozó megváltoztatására; ebben az esetben további tulajdonságok, a `legend`, `min`, `max` és `step` támogatottak.. Default: `{}`.
* __popoverPlacement__ | `string`: a popover pozíciója a megadott `elemek` esetében (vagy `top`, `right`, `bottom`, vagy `left`). Default: `'top'`.
* __onPopover__ | `function`: callback "funkció", amikor egy felugró ablakot be- vagy kikapcsolnak; egyedüli argumentumként a kijelző állapotát kapja boolean értékben. Default: `onPopover() {}`.
* __onClick__ | `function`: callback `funkció`, amely akkor hívódik elő, amikor a felhasználó rákattint az egyenletre.. Default: `none`.


## Példák

```jsx live
<TeX
    raw="2 + 3 = 5"
    displayMode={true}
/>
```



