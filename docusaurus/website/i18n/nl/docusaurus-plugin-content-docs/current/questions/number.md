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
* __digits__ | `number`: aantal cijfers waarvoor het antwoord van de leerling overeen moet komen met de oplossing om als juist beschouwd te worden. Stel in op 0 om een geheel getal te gebruiken. Indien ingesteld op null zal het zoeken naar een exacte overeenkomst. Default: `3`.
* __max__ | `number`: maximaal toegestane invoerwaarde. Default: `null`.
* __min__ | `number`: minimaal toegestane invoerwaarde. Default: `null`.
* __defaultValue__ | `number`: voorgeselecteerde waarde van het ingevoerde aantal. Default: `none`.
* __provideFeedback__ | `boolean`: geeft aan of de feedback, inclusief het juiste antwoord, moet worden weergegeven nadat de leerlingen hun antwoorden hebben ingediend. Default: `true`.
* __submitAfterFeedback__ | `boolean`: controleert of men opnieuw moet kunnen indienen, zelfs nadat de oplossing is onthuld. Default: `false`.
* __nTries__ | `number`: na hoeveel pogingen er feedback moet worden gegeven (als `provideFeedback` `true` is). Default: `1`.
* __disableSubmitNotification__ | `boolean`: controleert of de aanmeldingskennisgevingen moeten worden uitgeschakeld. Default: `false`.
* __chat__ | `boolean`: bepaalt of het element een geïntegreerde chat moet hebben. Default: `false`.
* __until__ | `Date`: tijd tot de studenten de gelegenheid krijgen om antwoorden in te dienen. Default: `none`.
* __points__ | `number`: maximumaantal punten voor de indeling in klassen. Default: `10`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.
* __onChange__ | `function`: callback die wordt geactiveerd nadat de waarde van het getalveld is veranderd; ontvangt de huidige waarde als enige argument. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback ingeroepen bij het inzenden van het antwoord; heeft als eerste parameter een `boolean` die aangeeft of het antwoord correct is beantwoord (indien van toepassing, `null` anders) en het verstrekte antwoord als tweede parameter. Default: `onSubmit() {}`.


## Voorbeelden

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Markdown', value: 'markdownStyling' },
        { label: 'With CSS', value: 'withCSS' }
        
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<NumberQuestion
    question="What is the number Pi? (include at least three digits after the decimal point)"
    solution={3.142}
/>
```
</TabItem>

<TabItem value="markdownStyling">

```jsx live
<NumberQuestion
    question={<span>What is the number $\pi$? (include at least _three_ digits after the decimal point)</span>}
    solution={3.142}
/>
```
</TabItem>

<TabItem value="withCSS">

```jsx live
<NumberQuestion
    question={<span style={{ fontSize: 25, color: 'darkorange'}}>What is the number PI - three digits after the period</span>}
    solution={3.142}
/>
```
</TabItem>

</Tabs>
