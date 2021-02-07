---
id: proportions-input 
title: Proportions Input
sidebar_label: Proportions Input
---

Een proportionele invoercomponent. Kan worden gebruikt als onderdeel van een ISLE-dashboard of stand-alone. In het laatste geval wilt u veranderingen verwerken via het `on-Change` attribuut of de waarde binden aan een globale variabele via het `bind` attribuut.

## Options

* __colors__ | `array<string>`: reeks kleuren voor de taartdiagrammen. Indien niet gedefinieerd, zal een aangepaste kleurenschaal worden gebruikt. Default: `none`.
* __disabled__ | `boolean`: controleert of het invoerveld is gedeactiveerd. Default: `false`.
* __height__ | `number`: verhoudingen invoerhoogte (in px). Default: `200`.
* __legends__ | `array`: groepslabels. Default: `[]`.
* __onChange__ | `function`: terugbelfunctie die moet worden ingeroepen wanneer een keuze wordt gemaakt. Default: `onChange(){}`.
* __precision__ | `number`: weergegeven nauwkeurigheid van de verhoudingen. Default: `1`.
* __step__ | `number`: de stap van de pijlen gezien bij het zweven met de cursor boven het invoerveld. Default: `0.1`.


## Examples

```jsx live
<ProportionsInput
    user
    id="Survey"
    question="Decide what is important"
    group="Group decision"
    nElements={3}
    colors = {[ "red", "blue", "gold" ]}
    personalHeight={300}
    groupHeight={200}
    margin="80px"
    legends={[ "bitcoin", "old", "diamonds" ]}
/>
```

