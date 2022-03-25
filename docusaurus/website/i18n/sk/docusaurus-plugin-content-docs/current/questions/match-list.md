---
id: match-list-question 
title: Match List Question
sidebar_label: Match List Question
---

Komponent ISLE, ktorý zobrazuje otázku, v ktorej má žiak priradiť k sebe správne prvky z dvoch zoznamov.

## Možnosti

* __question__ | `(string|node)`: otázka, ktorá sa má zobraziť v hornej časti súčasti zoznamu otázok.. Default: `''`.
* __elements__ | `array<{a,b}>`: `množina` správnych dvojíc zobrazená v hornej časti komponentu voľného textu otázky. Každý prvok `array` musí byť `objekt` s vlastnosťami `a` a `b`; na pridanie distraktorových odpovedí dodajte prvky len s vlastnosťami `a` alebo `b`. Default: `[]`.
* __hintPlacement__ | `string`: umiestnenie nápovedy (buď `top`, `left`, `right` alebo `bottom`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: nápovedy, ktoré poskytujú návod, ako odpovedať na otázku. Default: `[]`.
* __provideFeedback__ | `boolean`: uvádza, či by riešenie malo byť prístupné po odoslaní odpovedí žiakov.. Default: `true`.
* __feedback__ | `boolean`: ovláda, či sa majú zobrazovať tlačidlá spätnej väzby.. Default: `true`.
* __chat__ | `boolean`: kontroluje, či má mať prvok integrovaný chat. Default: `false`.
* __colorScale__ | `array`: ak je nastavené, pre dlaždice sa použijú dodané farby. Default: `none`.
* __shuffle__ | `string`: určuje, či sa majú premiešať stĺpce `left`, `right` alebo `obidva`, ktorých prvky sa majú porovnať; zadaním hodnoty `none` alebo akejkoľvek inej hodnoty sa prvky na oboch stranách nepremiešajú (môže byť užitočné v prípade, že neexistuje žiadne riešenie). Default: `'both'`.
* __disableSubmitNotification__ | `boolean`: kontroluje, či sa majú vypnúť oznámenia o odoslaní.. Default: `false`.
* __submissionMsg__ | `string`: oznámenie zobrazené pri prvom odoslaní odpovede žiakom. Default: `'You have successfully submitted your answer.'`.
* __resubmissionMsg__ | `string`: oznámenie zobrazené pre všetky podania po prvom podaní. Default: `'You have successfully re-submitted your answer.'`.
* __until__ | `Date`: čas, dokedy by študenti mali mať možnosť predložiť odpovede.. Default: `none`.
* __points__ | `number`: maximálny počet bodov udelených pri klasifikácii. Default: `10`.
* __className__ | `string`: názov triedy. Default: `''`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.
* __onSubmit__ | `function`: spätné volanie vyvolané, keď študenti odošlú odpoveď. Default: `onSubmit() {}`.


## Príklady

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
