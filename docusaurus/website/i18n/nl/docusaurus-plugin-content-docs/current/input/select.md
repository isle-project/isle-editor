---
id: select-input
title: Select Input
sidebar_label: Select Input
---

Een selecte invoercomponent. Kan worden gebruikt als onderdeel van een ISLE-dashboard of stand-alone. In het laatste geval wilt u veranderingen afhandelen via het `on-Change` attribuut of de waarde binden aan een globale variabele via het `bind` attribuut.

## Opties

* __bind__ | `string`: naam van de globale variabele voor het toe te kennen nummer. Default: `''`.
* __clearable__ | `boolean`: booleaanse waarde die aangeeft of men de gemaakte keuze(s) duidelijk kan maken. Default: `none`.
* __defaultValue__ | `(number|string|array|object)`: standaardwaarde van de invoer bij het opstarten. Default: `none`.
* __disabled__ | `boolean`: controleert of de ingang actief is of niet. Default: `false`.
* __inline__ | `boolean`: geeft aan of de invoer inline wordt weergegeven. Default: `false`.
* __legend__ | `(string|node)`: tekst die naast de invoer wordt weergegeven. Default: `''`.
* __menuPlacement__ | `string`: plaatsing van het menu ten opzichte van de besturing (ofwel `auto`, `top`, of `bottom`). Default: `'auto'`.
* __multi__ | `boolean`: controleert of men meerdere antwoorden mag selecteren. Default: `false`.
* __onChange__ | `function`: terugbelfunctie die moet worden ingeroepen wanneer een keuze wordt gemaakt. Default: `onChange() {}`.
* __options__ | `array`: array van het aangeven van de beschikbare keuzes van de gebruiker. Default: `[]`.
* __placeholder__ | `string`: waarde die moet worden weergegeven voordat een eerste keuze wordt gemaakt. Default: `none`.
* __tooltip__ | `string`: tekst die wordt weergegeven wanneer men met de muis over de legende gaat. Default: `none`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.


## Voorbeelden

```jsx live
<SelectInput
    legend="Choose the test direction"
    defaultValue="two-sided"
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
/>
```

