---
id: number-input
title: Number Input
sidebar_label: Number Input
---

Een aantal invoercomponenten. Kan worden gebruikt als onderdeel van een ISLE-dashboard of stand-alone. In het laatste geval wilt u wijzigingen verwerken via het `on-Change` attribuut of de waarde binden aan een globale variabele via het `bind` attribuut.

## Opties

* __bind__ | `string`: naam van de globale variabele voor het toe te kennen nummer. Default: `''`.
* __defaultValue__ | `number`: waarde die de standaardwaarde van de invoer bij het opstarten aangeeft. Default: `0`.
* __disabled__ | `boolean`: boolean die aangeeft of de ingang actief is of niet. Default: `false`.
* __inline__ | `boolean`: geeft aan of de invoer inline wordt weergegeven. Default: `false`.
* __legend__ | `(string|node)`: tekenreeks die de tekst aangeeft die naast het ingevoerde nummer wordt weergegeven. Default: `none`.
* __max__ | `number`: getal dat de maximumwaarde aangeeft die mag worden ingevoerd. Default: `null`.
* __min__ | `number`: getal dat de kleinst mogelijke waarde aangeeft die kan worden ingevoegd. Default: `null`.
* __numbersOnly__ | `boolean`: controleert of alleen getallen worden geaccepteerd. Default: `true`.
* __placeholder__ | `string`: undefined. Default: `'0'`.
* __onBlur__ | `function`: terugbelfunctie die moet worden ingeroepen bij gebruik van een waasmethode. Default: `onBlur() {}`.
* __onChange__ | `function`: terugbelfunctie die moet worden aangeroepen wanneer de nummerinvoer wordt gewijzigd. Default: `onChange() {}`.
* __onKeyDown__ | `function`: terugbelfunctie die moet worden aangeroepen wanneer een toets wordt ingedrukt. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: terugbelfunctie die moet worden aangeroepen bij het invoeren van een willekeurige toets. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: terugbelfunctie die moet worden aangeroepen wanneer de toets wordt losgelaten. Default: `onKeyUp() {}`.
* __step__ | `(number|string)`: nummer dat de stapsgewijze veranderingen aangeeft bij gebruik van de stapsgewijze pijlen. Default: `1`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.
* __inputStyle__ | `object`: CSS inline stijlen voor invoerelement. Default: `{}`.
* __value__ | `number`: getalwaarde (voor gecontroleerde component). Default: `none`.
* __tooltip__ | `string`: tooltip string (indien niet ingesteld, wordt de tooltip automatisch gegenereerd). Default: `none`.
* __tooltipPlacement__ | `string`: richting van de tooltip. Default: `'left'`.


## Voorbeelden

```jsx live
<NumberInput
    legend="Number of observations"
    defaultValue={20}
    step={5}
/>
```

