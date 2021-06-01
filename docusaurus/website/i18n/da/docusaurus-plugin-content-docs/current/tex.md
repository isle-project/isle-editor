---
id: tex
title: LaTeX Equations
sidebar_label: LaTeX Equations
---

`TeX` er et ISLE-element, der kan bruges til at vise LaTeX-ligninger. Under motorhjelmen bruger komponenten [KaTeX](https://github.com/Khan/KaTeX) til lynhurtig gengivelse.

## Indstillinger

* __raw__ | `(string|number) (required)`: Den bogstavelige LaTeX-streng, der skal gengives. Accepterer også `numbers`.. Default: `none`.
* __displayMode__ | `boolean`: `boolean`, der angiver, om ligningen skal vises inline eller i displaytilstand. Default: `false`.
* __numbered__ | `boolean`: styrer, om der skal vises et ligningsnummer for ligninger i visningstilstand. Default: `false`.
* __style__ | `object`: `object` med CSS-nøgle-værdipar, der skal anvendes på ligningsbeholderen. Default: `{}`.
* __tag__ | `string`: Brugerdefinerede tegn vises til visningsligninger i højre side. Standard er nummeret på ligningen i lektionen. Default: `none`.
* __elems__ | `object`: `object` med `nøgler`, der angiver LaTeX-tegn og deres tilsvarende værdier som konfigurations `objekter` for at gøre dem interaktive. Indstilling af en `tooltip` indstilling vil vise en tooltip når man holder musen over LaTeX-tegnene. Indstilling af en `variable`-egenskab vil vise en indtastningsskyder for at ændre den respektive tilstandsvariabel; i dette tilfælde understøttes yderligere egenskaber `legend`, `min`, `max` og `step`.. Default: `{}`.
* __popoverPlacement__ | `string`: popover-position for de angivne `elems` (enten `top`, `right`, `bottom` eller `left`). Default: `'top'`.
* __onPopover__ | `function`: callback-funktion, når en popover-kontrol er slået til eller fra; modtager visningsstatus som boolsk værdi som eneste argument. Default: `onPopover() {}`.
* __onClick__ | `function`: callback-funktion, der påkaldes, når en bruger klikker på ligningen. Default: `none`.


## Eksempler

```jsx live
<TeX
    raw="2 + 3 = 5"
    displayMode={true}
/>
```



