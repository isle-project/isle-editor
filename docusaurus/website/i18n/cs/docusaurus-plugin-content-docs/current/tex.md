---
id: tex
title: LaTeX Equations
sidebar_label: LaTeX Equations
---

`TeX` je prvek ISLE, který lze použít k zobrazení rovnic LaTeXu. Pod kapotou používá komponenta [KaTeX](https://github.com/Khan/KaTeX) pro bleskurychlé vykreslování.

## Možnosti

* __raw__ | `(string|number) (required)`: Doslovný `řetězec` LaTeXu, který se má vykreslit. Akceptuje také `čísla`. Default: `none`.
* __displayMode__ | `boolean`: `boolean` určující, zda se má rovnice zobrazit inline nebo v režimu zobrazení. Default: `false`.
* __numbered__ | `boolean`: řídí, zda se má u rovnic v režimu zobrazení zobrazit číslo rovnice.. Default: `false`.
* __style__ | `object`: `object` s dvojicemi klíč-hodnota CSS, které se použijí na kontejner rovnice.. Default: `{}`.
* __tag__ | `string`: Vlastní znaky zobrazené pro zobrazení rovnic na pravé straně. Výchozí hodnota je číslo rovnice uvnitř lekce.. Default: `none`.
* __elems__ | `object`: `objekt`, přičemž `klíče` označují znaky LaTeXu a jejich odpovídající hodnoty jsou konfigurační `objekty`, které jsou interaktivní. Nastavením volby `tooltip` se při najetí na znaky LaTeXu zobrazí nápověda. Nastavení vlastnosti `proměnná` zobrazí vstupní posuvník pro změnu příslušné stavové proměnné; v tomto případě jsou podporovány další vlastnosti `legenda`, `min`, `max` a `krok`.. Default: `{}`.
* __popoverPlacement__ | `string`: pozice popoveru pro zadané `elems` (buď `top`, `right`, `bottom`, nebo `left`).. Default: `'bottom'`.
* __onPopover__ | `function`: zpětné volání `funkce` při zapnutí nebo vypnutí vyskakovacího okna ovládacího prvku; jako jediný argument přijímá stav zobrazení jako boolean.. Default: `onPopover() {}`.
* __onClick__ | `function`: zpětné volání `funkce` vyvolané vždy, když uživatel klikne na rovnici.. Default: `none`.


## Příklady

```jsx live
<TeX
    raw="2 + 3 = 5"
    displayMode={true}
/>
```



