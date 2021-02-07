---
id: clt-sample
title: CLT Sample
sidebar_label: CLT Sample
---

Een leercomponent die de Centrale Limietstheorie (CLT) illustreert bij het bemonsteren van een aangeleverde dataset.

## Options

* __data__ | `object (required)`: gegevensobject met toetsen komen overeen met namen van variabelen en waarden die de waarden van de respectieve variabelen bevatten. Default: `none`.
* __hidePopulationStdev__ | `boolean`: verbergen van de standaardafwijking van de bevolking. Default: `false`.
* __samples__ | `(array<number>|number)`: array van getallen of een enkel getal dat de te trekken steekproefgroottes aanduidt. Default: `25`.
* __populationProbabilities__ | `boolean`: de vraag of er vergelijkingen moeten worden weergegeven voor de berekening van de waarschijnlijkheid van de bevolking. Default: `false`.
* __quantiles__ | `boolean`: of het instrument voor de berekening van eventuele kwantielen moet worden getoond. Default: `false`.
* __variables__ | `array (required)`: namen van variabelen die kunnen worden bemonsterd uit. Default: `none`.


## Examples

```jsx live
<LearnSampleCLT />
```

