---
id: select-question-matrix
title: Select Question Matrix
sidebar_label: Select Question Matrix
---

Een vraag met een antwoord bestaande uit meerdere selectievakjes.

## Opties

* __question__ | `(string|node)`: vraag die bovenin de geselecteerde vragenmatrix moet worden weergegeven. Default: `''`.
* __rows__ | `array`: rij-etiketten. Default: `[]`.
* __cols__ | `array`: kolomlabels. Default: `[]`.
* __options__ | `object`: object met sleutelwaardeparen met toetsen die de vorm `rij:col` hebben, bijvoorbeeld `0:0`, `0:1`, `1:0` etc., en de bijbehorende waarden zijn arrays van de mogelijke antwoordkeuzes voor de individuele selectievragen. Default: `{}`.
* __solution__ | `object`: Oplossingsobject met sleutelwaardeparen met toetsen die de vorm `rij:col` hebben, bijvoorbeeld `0:0`, `0:1`, `1:0` etc., en hun corresponderende waarden zijn de index van het juiste antwoordelement uit de respectievelijke `opties` array. Default: `{}`.
* __hints__ | `array<(string|node)>`: tips die een leidraad bieden voor het beantwoorden van de vraag. Default: `[]`.
* __hintPlacement__ | `string`: plaatsing van de hints (ofwel `top`, `left`, `right`, of `bottom`). Default: `'bottom'`.
* __feedback__ | `boolean`: regelt of er terugmeldingsknoppen moeten worden weergegeven. Default: `true`.
* __provideFeedback__ | `string`: of er `geen` feedback wordt gegeven, `individuele` feedback op het (de) ingediende antwoord(en), of `overal` feedback voor alle vragen. Default: `'individual'`.
* __allowIncomplete__ | `boolean`: of de inzendingen moeten worden toegestaan zonder dat in elk selectievakje een keuze is gemaakt. Default: `false`.
* __nTries__ | `number`: na hoeveel pogingen geen verdere antwoorden worden geaccepteerd (als `provideFeedback` niet `niet` is). Default: `1`.
* __failureMsg__ | `string`: meldingstekst die wordt weergegeven bij het indienen van onjuiste antwoorden. Default: `none`.
* __successMsg__ | `string`: meldingstekst die wordt weergegeven bij het indienen van de juiste antwoorden. Default: `none`.
* __cellLabels__ | `object`: labels voor cellen gedefinieerd door object met sleutels in het formaat `row:col`. Default: `{}`.
* __chat__ | `boolean`: bepaalt of het element een geïntegreerde chat moet hebben. Default: `false`.
* __className__ | `string`: klassennaam. Default: `''`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.
* __onSubmit__ | `function`: callback-functie die wordt aangeroepen bij de indiening met de antwoorden als eerste en een booleaanse functie die de juistheid als tweede parameter aangeeft. Default: `onSubmit() {}`.


## Voorbeelden

```jsx live
<SelectQuestionMatrix
    rows={[ 'First Row' ]} 
    cols={[ 'First Column', 'Second Column' ]} 
    options={{ '0:0': [ 'Incorrect', 'Correct' ], '0:1':  [ 'Incorrect', 'Incorrect', 'Correct' ] }} 
    solution={{ '0:0': 1, '0:1': 2 }}
/>
```
