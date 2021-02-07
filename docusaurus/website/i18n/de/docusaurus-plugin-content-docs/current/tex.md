---
id: tex
title: LaTeX Equations
sidebar_label: LaTeX Equations
---

TeX" ist ein ISLE-Element, das zur Anzeige von LaTeX-Gleichungen verwendet werden kann. Unter der Haube verwendet die Komponente [KaTeX](https://github.com/Khan/KaTeX) für rasend schnelles Rendering.

## Options

* __raw__ | `(string|number) (required)`: Die wörtliche LaTeX-Zeichenkette, die wiedergegeben werden soll. Akzeptiert auch `Nummern`. Default: `none`.
* __displayMode__ | `boolean`: `boolean`, das angibt, ob die Gleichung inline oder im Anzeigemodus angezeigt werden soll. Default: `false`.
* __numbered__ | `boolean`: steuert, ob eine Gleichungsnummer für Gleichungen im Anzeigemodus angezeigt werden soll. Default: `false`.
* __style__ | `object`: `Objekt` mit CSS-Schlüssel-Wert-Paaren, die auf den Gleichungs-Container angewendet werden sollen. Default: `{}`.
* __tag__ | `string`: Benutzerdefinierte Zeichen, die für Anzeigegleichungen auf der rechten Seite angezeigt werden. Standardmäßig wird die Nummer der Gleichung innerhalb der Lektion angezeigt. Default: `none`.
* __elems__ | `object`: `Objekt`, wobei `Schlüssel` LaTeX-Zeichen bezeichnen und die entsprechenden Werte Konfigurations-`Objekte` sind, um sie interaktiv zu machen. Das Setzen einer `tooltip`-Option zeigt einen Tooltip an, wenn der Mauszeiger über die LaTeX-Zeichen bewegt wird. Das Setzen einer `variable`-Eigenschaft zeigt einen Eingabeschieberegler zum Ändern der jeweiligen Zustandsvariablen an; in diesem Fall werden zusätzlich die Eigenschaften `legend`, `min`, `max` und `step` unterstützt. Default: `{}`.
* __popoverPlacement__ | `string`: Popover-Position für die angegebenen `Elemente` (entweder `oben`, `right`, `unten` oder `left`). Default: `'top'`.
* __onPopover__ | `function`: Callback `Funktion`, wenn ein Control-Popover ein- oder ausgeschaltet wird; erhält als einziges Argument den Anzeigestatus als Boolean. Default: `onPopover() {}`.
* __onClick__ | `function`: Callback `Funktion`, die aufgerufen wird, wenn ein Benutzer auf die Gleichung klickt. Default: `none`.


## Examples

```jsx live
<TeX
    raw="2 + 3 = 5"
    displayMode={true}
/>
```



