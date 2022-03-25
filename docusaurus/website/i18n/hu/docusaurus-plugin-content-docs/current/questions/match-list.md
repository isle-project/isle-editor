---
id: match-list-question 
title: Match List Question
sidebar_label: Match List Question
---

Egy ISLE komponens, amely egy olyan kérdést jelenít meg, amelyben a tanulónak két lista elemeit kell a megfelelő módon egymáshoz illesztenie.

## Opciók

* __question__ | `(string|node)`: a mérkőzéslista kérdéskomponensének tetején megjelenítendő kérdés. Default: `''`.
* __elements__ | `array<{a,b}>`: egy "tömb", amely a helyes párokat tartalmazza, és a szabad szöveges kérdéskomponens tetején jelenik meg. Minden `array` elemnek egy `objektumnak` kell lennie `a` és `b` tulajdonságokkal; a zavaró válaszok hozzáadásához csak `a` vagy `b` tulajdonságú elemeket kell megadnia.. Default: `[]`.
* __hintPlacement__ | `string`: a tippek elhelyezése (vagy `top`, `left`, `right`, vagy `bottom`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: a kérdés megválaszolására vonatkozó útmutatásokat ad. Default: `[]`.
* __provideFeedback__ | `boolean`: jelzi, hogy a megoldásnak a tanulók válaszainak elküldése után is elérhetőnek kell-e lennie.. Default: `true`.
* __feedback__ | `boolean`: szabályozza, hogy megjelenjenek-e a visszajelző gombok. Default: `true`.
* __chat__ | `boolean`: szabályozza, hogy az elemnek legyen-e integrált chatje. Default: `false`.
* __colorScale__ | `array`: ha be van állítva, akkor a megadott színeket használják a csempékhez.. Default: `none`.
* __shuffle__ | `string`: megadja, hogy a "bal", "jobb" vagy "mindkét" oszlopot, amelyek elemeit össze kell egyeztetni, meg kell-e keverni; a "nincs" vagy bármely más érték megadása esetén az elemek egyik oldalon sem lesznek megkeverve (hasznos lehet abban az esetben, ha nincs megoldás jelen). Default: `'both'`.
* __disableSubmitNotification__ | `boolean`: szabályozza a benyújtási értesítések letiltását. Default: `false`.
* __submissionMsg__ | `string`: a tanuló első válaszának elküldésekor megjelenő értesítés. Default: `'You have successfully submitted your answer.'`.
* __resubmissionMsg__ | `string`: az első beadványt követő összes beadványra megjelenő értesítés. Default: `'You have successfully re-submitted your answer.'`.
* __until__ | `Date`: a tanulóknak a válaszok benyújtásáig rendelkezésre álló idő. Default: `none`.
* __points__ | `number`: az osztályozás során adható maximális pontszám. Default: `10`.
* __className__ | `string`: osztály neve. Default: `''`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback, amit akkor hívnak meg, amikor a diákok beküldik a választ. Default: `onSubmit() {}`.


## Példák

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
