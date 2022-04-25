---
id: match-list-question 
title: Match List Question
sidebar_label: Match List Question
---

Een ISLE-component die een vraag stelt waarbij de leerling elementen uit twee lijsten op de juiste manier met elkaar moet matchen.

## Opties

* __question__ | `(string|node)`: vraag die boven aan de vraag van de wedstrijdlijst moet worden weergegeven. Default: `''`.
* __elements__ | `array<{a,b}>`: een `array` met de juiste paren bovenin de vrije tekstvraagcomponent. Elk `array` element moet een `object` zijn met `a` en `b` eigenschappen; lever elementen met alleen `a` of `b` eigenschappen om afleidende antwoorden toe te voegen. Default: `[]`.
* __hintPlacement__ | `string`: plaatsing van de hints (ofwel `top`, `left`, `right`, of `bottom`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: tips die een leidraad bieden voor het beantwoorden van de vraag. Default: `[]`.
* __provideFeedback__ | `boolean`: geeft aan of de oplossing toegankelijk moet zijn nadat de leerlingen hun antwoorden hebben ingediend. Default: `true`.
* __feedback__ | `boolean`: regelt of er terugmeldingsknoppen moeten worden weergegeven. Default: `true`.
* __chat__ | `boolean`: bepaalt of het element een geïntegreerde chat moet hebben. Default: `false`.
* __colorScale__ | `array`: indien ingesteld, worden de bijgeleverde kleuren gebruikt voor de tegels. Default: `none`.
* __shuffle__ | `string`: geeft aan of de `linkse`, `rechtse`, of `beide` kolommen waarvan de elementen gematcht moeten worden, geschud moeten worden; geef `none` of een andere waarde om de elementen aan beide kanten niet te schudden (kan handig zijn als er geen oplossing aanwezig is). Default: `'both'`.
* __disableSubmitNotification__ | `boolean`: controleert of de aanmeldingskennisgevingen moeten worden uitgeschakeld. Default: `false`.
* __submissionMsg__ | `string`: kennisgeving weergegeven wanneer de leerling voor het eerst zijn antwoord indient. Default: `'You have successfully submitted your answer.'`.
* __resubmissionMsg__ | `string`: kennisgeving weergegeven voor alle inzendingen na de eerste. Default: `'You have successfully re-submitted your answer.'`.
* __until__ | `Date`: tijd tot de studenten de gelegenheid krijgen om antwoorden in te dienen. Default: `none`.
* __points__ | `number`: maximumaantal punten voor de indeling in klassen. Default: `10`.
* __className__ | `string`: klassennaam. Default: `''`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.
* __onChange__ | `function`: callback aangeroepen wanneer leerlingen een antwoord wijzigen. Default: `onChange() {}`.
* __onSubmit__ | `function`: terugbellen wordt ingeroepen als de studenten een antwoord indienen. Default: `onSubmit() {}`.


## Voorbeelden

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Markdown', value: 'withMarkdown' },
        { label: 'With Solution & Style', value: 'withFeedback' },
        { label: 'Shuffle Right', value: 'shuffleRight' },
        { label: 'Points for Grading', value: 'grading' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<MatchListQuestion
    question="Please match the symbols and the respective chemical element."
    elements={[
        { a: 'Be', b: 'Berlyllium' },
        { a: 'Br', b: 'Bromine' },
        { a: 'Ar', b: 'Argon' },
        { a: 'Ac' , b: 'Actinium'},
        { b: 'Arsenic' },
        { b: 'Boron' }
    ]}
    provideFeedback={false}
/>
```
</TabItem>

<TabItem value="withMarkdown">

```jsx live
<MatchListQuestion
    question={<span>Please match the **symbols** and the respective *chemical* element.</span>}
    style={{ color: 'darkblue'}}
    elements={[
        { a: 'Ac' , b: 'Actinium'},
        { a: 'Ar', b: 'Argon' },
        { a: 'Be', b: 'Berlyllium' },
        { a: 'Br', b: 'Bromine' },
        { b: 'Arsenic' },
        { b: 'Boron' }
    ]}
/>
```
</TabItem>

<TabItem value="withFeedback">

```jsx live
<MatchListQuestion
    question="Please match the symbols and the respective chemical element."
    style={{ color: 'darkblue'}}
    elements={[
        { a: 'Ac' , b: 'Actinium'},
        { a: 'Ar', b: 'Argon' },
        { a: 'Be', b: 'Berlyllium' },
        { a: 'Br', b: 'Bromine' },
        { b: 'Arsenic' },
        { b: 'Boron' }
    ]}
/>
```
</TabItem>

<TabItem value="shuffleRight">

```jsx live
<MatchListQuestion
    question="Please match the correct surnames and first names of these statisticians."
    elements={[
        { a: 'Carl Friedrich', b: 'Gauß' },
        { a: 'Florence', b: 'Nightingale' },
        { a: 'Francis', b: 'Galton' },
        { a: 'John W.', b: 'Tukey' },
        { a: 'Karl', b: 'Pearson' },
        { a: 'Ronald', b: 'Fisher' }
    ]}
    shuffle="right"
/>
```
</TabItem>

<TabItem value="grading">

```jsx live
<MatchListQuestion
    question="Please match the correct surnames and first names of these statisticians."
    elements={[
        { a: 'Ronald', b: 'Fisher' },
        { a: 'Florence', b: 'Nightingale' },
        { a: 'Karl', b: 'Pearson' },
        { a: 'John W.', b: 'Tukey' },
        { a: 'Francis', b: 'Galton' },
        { a: 'Carl Friedrich', b: 'Gauß' }
    ]}
    points={20}
/>
```
</TabItem>

</Tabs>
