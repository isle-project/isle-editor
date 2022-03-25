---
id: match-list-question 
title: Match List Question
sidebar_label: Match List Question
---

En ISLE-komponent, der gengiver et spørgsmål, hvor den lærende skal matche elementer fra to lister med hinanden på den korrekte måde.

## Indstillinger

* __question__ | `(string|node)`: spørgsmål, der skal vises øverst i spørgelistekomponenten for matchlisten. Default: `''`.
* __elements__ | `array<{a,b}>`: et `array` med de korrekte par, der vises øverst i den frie tekstkomponent. Hvert `array`-element skal være et `object` med `a` og `b`-egenskaber; angiv elementer med kun `a` eller `b`-egenskaber for at tilføje distraherende svar.. Default: `[]`.
* __hintPlacement__ | `string`: placeringen af vejledningerne (enten `top`, `left`, `right` eller `bottom`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: tips, der giver vejledning om, hvordan spørgsmålet skal besvares. Default: `[]`.
* __provideFeedback__ | `boolean`: angiver, om løsningen skal være tilgængelig, efter at eleverne har afgivet deres svar. Default: `true`.
* __feedback__ | `boolean`: styrer, om der skal vises feedback-knapper. Default: `true`.
* __chat__ | `boolean`: kontrollerer, om elementet skal have en integreret chat. Default: `false`.
* __colorScale__ | `array`: hvis indstillet, anvendes de medfølgende farver til fliserne. Default: `none`.
* __shuffle__ | `string`: angiver, om der skal blandes i kolonnerne `venstre`, `højre` eller `begge`, hvis elementer skal matches; angiv `none` eller en anden værdi for ikke at blande elementerne på begge sider (kan være nyttigt, hvis der ikke er nogen løsning til stede). Default: `'both'`.
* __disableSubmitNotification__ | `boolean`: kontrollerer, om meddelelser om indsendelse skal deaktiveres. Default: `false`.
* __submissionMsg__ | `string`: meddelelse, der vises, når den lærende først indsender sit svar. Default: `'You have successfully submitted your answer.'`.
* __resubmissionMsg__ | `string`: meddelelse, der vises for alle indsendelser efter den første. Default: `'You have successfully re-submitted your answer.'`.
* __until__ | `Date`: den tid, der skal gå, før de studerende kan afgive svar. Default: `none`.
* __points__ | `number`: det maksimale antal point, der kan tildeles ved bedømmelsen. Default: `10`.
* __className__ | `string`: klassens navn. Default: `''`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback, der påkaldes, når eleverne afgiver et svar. Default: `onSubmit() {}`.


## Eksempler

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
