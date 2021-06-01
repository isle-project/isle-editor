---
id: tex
title: LaTeX Equations
sidebar_label: LaTeX Equations
---

`TeX` är ett ISLE-element som kan användas för att visa LaTeX-ekvationer. Under huven använder komponenten [KaTeX](https://github.com/Khan/KaTeX) för en mycket snabb rendering.

## Alternativ

* __raw__ | `(string|number) (required)`: Den bokstavliga LaTeX-sträng som ska återges. Accepterar även `numbers`.. Default: `none`.
* __displayMode__ | `boolean`: `boolean` som anger om ekvationen ska visas inline eller i visningsläge.. Default: `false`.
* __numbered__ | `boolean`: Kontrollerar om ett ekvationsnummer ska visas för ekvationer i visningsläge.. Default: `false`.
* __style__ | `object`: `object` med CSS-nyckelvärdespar som ska tillämpas på ekvationsbehållaren.. Default: `{}`.
* __tag__ | `string`: Anpassade tecken som visas för ekvationer på displayen på höger sida. Standardvärdet är ekvationens nummer i lektionen.. Default: `none`.
* __elems__ | `object`: `object` med `keys` som betecknar LaTeX-tecken och motsvarande värden som är konfigurationsobjekt för att göra dem interaktiva. Om du ställer in ett `tooltip`-alternativ visas en tooltip när du håller muspekaren över LaTeX-tecknen. Genom att ställa in en egenskap `variable` visas ett inmatningsreglage för att ändra respektive tillståndsvariabel; i detta fall stöds ytterligare egenskaper `legend`, `min`, `max` och `step`.. Default: `{}`.
* __popoverPlacement__ | `string`: Popover-position för de angivna "elementen" (antingen "topp", "höger", "botten" eller "vänster").. Default: `'top'`.
* __onPopover__ | `function`: callback-funktion när en popover-funktion slås på eller av; tar emot visningsstatusen som ett boolsk värde som enda argument.. Default: `onPopover() {}`.
* __onClick__ | `function`: callback-funktion som aktiveras när en användare klickar på ekvationen.. Default: `none`.


## Exempel

```jsx live
<TeX
    raw="2 + 3 = 5"
    displayMode={true}
/>
```



