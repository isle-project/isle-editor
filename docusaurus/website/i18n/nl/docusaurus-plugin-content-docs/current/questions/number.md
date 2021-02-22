---
id: number-question 
title: Number Question
sidebar_label: Number Question
---

Een aantal vraagcomponenten.

## Opties

* __question__ | `(string|node)`: nummervraag. Default: `''`.
* __hintPlacement__ | `string`: plaatsing van de hints (ofwel `top`, `left`, `right`, of `bottom`). Default: `'top'`.
* __hints__ | `array<(string|node)>`: tips die een leidraad bieden voor het beantwoorden van de vraag. Default: `[]`.
* __feedback__ | `boolean`: regelt of er terugmeldingsknoppen moeten worden weergegeven. Default: `true`.
* __solution__ | `(number|array<number>)`: een numeriek antwoord op het probleem (of meerdere juiste antwoorden als er een array wordt geleverd). Default: `none`.
* __digits__ | `number`: aantal cijfers waarvoor het antwoord van de student moet overeenkomen met de oplossing om als correct te worden beschouwd. Stel in op 0 om als geheel getal overeen te komen. Als het op nul staat, zal het zoeken naar een exacte overeenkomst.. Default: `3`.
* __max__ | `number`: maximaal toegestane invoerwaarde. Default: `null`.
* __min__ | `number`: minimaal toegestane invoerwaarde. Default: `null`.
* __defaultValue__ | `number`: voorgeselecteerde waarde van het ingevoerde aantal. Default: `0`.
* __provideFeedback__ | `boolean`: geeft aan of de feedback, inclusief het juiste antwoord, moet worden weergegeven nadat de leerlingen hun antwoorden hebben ingediend. Default: `true`.
* __nTries__ | `number`: na hoeveel pogingen er feedback moet worden gegeven (als `provideFeedback` `true` is). Default: `1`.
* __disableSubmitNotification__ | `boolean`: controleert of de aanmeldingskennisgevingen moeten worden uitgeschakeld. Default: `false`.
* __chat__ | `boolean`: bepaalt of het element een geïntegreerde chat moet hebben. Default: `false`.
* __until__ | `Date`: tijd tot de studenten de gelegenheid krijgen om antwoorden in te dienen. Default: `none`.
* __points__ | `number`: maximumaantal punten voor de indeling in klassen. Default: `10`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.
* __onChange__ | `function`: callback die wordt geactiveerd nadat de waarde van het getalveld is veranderd; ontvangt de huidige waarde als enige argument. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback ingeroepen bij het inzenden van het antwoord; heeft als eerste parameter een `boolean` die aangeeft of het antwoord correct is beantwoord (indien van toepassing, `null` anders) en het verstrekte antwoord als tweede parameter. Default: `onSubmit() {}`.


## Voorbeelden

```jsx live
<NumberQuestion
    question="What is the number PI - three digits after the period"
    solution={3.142}
/>
```
