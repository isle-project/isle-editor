---
id: match-list-question 
title: Match List Question
sidebar_label: Match List Question
---

Komponenta ISLE, ki prikaže vprašanje, v katerem mora učenec pravilno povezati elemente z dveh seznamov.

## Možnosti

* __question__ | `(string|node)`: vprašanje, ki se prikaže na vrhu komponente vprašanja seznama ujemanj.. Default: `''`.
* __elements__ | `array<{a,b}>`: `mrežo` s pravilnimi pari, ki je prikazana na vrhu komponente vprašanja s prostim besedilom. Vsak element `array` mora biti `objekt` z lastnostmi `a` in `b`; če želite dodati odgovore, ki odvračajo pozornost, dodajte elemente samo z lastnostmi `a` ali `b`.. Default: `[]`.
* __hintPlacement__ | `string`: umestitev namigov (`top`, `left`, `right` ali `bottom`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: napotki, kako odgovoriti na vprašanje.. Default: `[]`.
* __provideFeedback__ | `boolean`: označuje, ali naj bo rešitev dostopna, ko učenci oddajo svoje odgovore.. Default: `true`.
* __feedback__ | `boolean`: nadzoruje, ali se prikažejo gumbi za povratne informacije.. Default: `true`.
* __chat__ | `boolean`: nadzoruje, ali naj ima element integriran klepet.. Default: `false`.
* __colorScale__ | `array`: če je nastavljeno, se za ploščice uporabijo priložene barve. Default: `none`.
* __shuffle__ | `string`: določa, ali naj se premešajo `levi`, `desni` ali `oboji` stolpci, katerih elemente je treba uskladiti; če navedete `none` ali katero koli drugo vrednost, se elementi na obeh straneh ne premešajo (lahko je uporabno v primeru, ko ni rešitve).. Default: `'both'`.
* __disableSubmitNotification__ | `boolean`: nadzoruje, ali onemogočiti obvestila o predložitvi.. Default: `false`.
* __submissionMsg__ | `string`: obvestilo, ki se prikaže, ko učenec prvič odda svoj odgovor.. Default: `'You have successfully submitted your answer.'`.
* __resubmissionMsg__ | `string`: obvestilo, ki se prikaže za vse predložitve po prvi.. Default: `'You have successfully re-submitted your answer.'`.
* __until__ | `Date`: čas, do katerega lahko učenci oddajo odgovore.. Default: `none`.
* __points__ | `number`: največje število točk, ki se dodelijo pri razvrščanju. Default: `10`.
* __className__ | `string`: ime razreda. Default: `''`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.
* __onSubmit__ | `function`: povratni klic, ki se sproži, ko učenci oddajo odgovor.. Default: `onSubmit() {}`.


## Primeri

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
