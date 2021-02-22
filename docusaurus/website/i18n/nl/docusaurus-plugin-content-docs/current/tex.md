---
id: tex
title: LaTeX Equations
sidebar_label: LaTeX Equations
---

`TeX` is een ISLE-element dat kan worden gebruikt om LaTeX-vergelijkingen weer te geven. Onder de motorkap gebruikt het element [KaTeX](https://github.com/Khan/KaTeX) voor een razendsnelle weergave.

## Opties

* __raw__ | `(string|number) (required)`: De letterlijke LaTeX `string` om weer te geven. Accepteert ook `cijfers`. Default: `none`.
* __displayMode__ | `boolean`: Boolean' geeft aan of de vergelijking inline of in de weergavemodus moet worden weergegeven.. Default: `false`.
* __numbered__ | `boolean`: bepaalt of er een vergelijkingsnummer moet worden weergegeven voor de weergave van vergelijkingen voor de weergavemodus. Default: `false`.
* __style__ | `object`: `Object` met CSS-sleutelwaardeparen die op de vergelijkingscontainer moeten worden toegepast.. Default: `{}`.
* __tag__ | `string`: Aangepaste tekens die worden weergegeven voor de weergave van vergelijkingen aan de rechterkant. Standaardinstelling van het nummer van de vergelijking in de les. Default: `none`.
* __elems__ | `object`: `Object` met `toetsen` die de LaTeX karakters en hun corresponderende waarden aangeven als configuratie `objecten` om ze interactief te maken. Het instellen van een `tooltip` optie zal een tooltip tonen wanneer u met de muis over de LaTeX-tekens gaat. Het instellen van een `variabele` eigenschap zal een invoerschuifbalk tonen om de respectievelijke toestandsvariabele te wijzigen; in dit geval worden aanvullende eigenschappen `legend`, `min`, `max` en `stap` ondersteund.. Default: `{}`.
* __popoverPlacement__ | `string`: popoverpositie voor de opgegeven `elementen` (ofwel `top`, `right`, `bottom`, of `left`). Default: `'top'`.
* __onPopover__ | `function`: callback `functie` wanneer een control popover aan of uit wordt geschakeld; ontvangt de display status als een boolean als enige argument. Default: `onPopover() {}`.
* __onClick__ | `function`: callback `functie` aangeroepen wanneer een gebruiker op de vergelijking klikt. Default: `none`.


## Voorbeelden

```jsx live
<TeX
    raw="2 + 3 = 5"
    displayMode={true}
/>
```



