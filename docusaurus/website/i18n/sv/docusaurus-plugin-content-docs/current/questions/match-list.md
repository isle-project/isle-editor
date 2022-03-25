---
id: match-list-question 
title: Match List Question
sidebar_label: Match List Question
---

En ISLE-komponent som visar en fråga där eleven måste matcha element från två listor med varandra på rätt sätt.

## Alternativ

* __question__ | `(string|node)`: fråga som ska visas högst upp i matchlistan frågekomponent.. Default: `''`.
* __elements__ | `array<{a,b}>`: ett "array" med de korrekta paren som visas överst i fritextfrågan. Varje `array`-element måste vara ett `object` med egenskaperna `a` och `b`; förse element med endast egenskaperna `a` eller `b` för att lägga till distraherande svar.. Default: `[]`.
* __hintPlacement__ | `string`: placering av tipsen (antingen `top`, `left`, `right` eller `bottom`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: tips som ger vägledning om hur frågan ska besvaras. Default: `[]`.
* __provideFeedback__ | `boolean`: anger om lösningen ska vara tillgänglig efter att eleverna har lämnat in sina svar.. Default: `true`.
* __feedback__ | `boolean`: kontrollerar om återkopplingsknapparna ska visas. Default: `true`.
* __chat__ | `boolean`: kontrollerar om elementet ska ha en integrerad chatt. Default: `false`.
* __colorScale__ | `array`: Om den är inställd används de medföljande färgerna för plattorna.. Default: `none`.
* __shuffle__ | `string`: anger om man ska blanda de "vänstra", "högra" eller "båda" kolumnerna vars element ska matchas; ange "ingen" eller något annat värde för att inte blanda elementen på någon av sidorna (kan vara användbart när det inte finns någon lösning).. Default: `'both'`.
* __disableSubmitNotification__ | `boolean`: kontrollerar om anmälningar om inlämning ska inaktiveras. Default: `false`.
* __submissionMsg__ | `string`: Meddelande som visas när eleven för första gången skickar in sitt svar.. Default: `'You have successfully submitted your answer.'`.
* __resubmissionMsg__ | `string`: Meddelande som visas för alla inlämningar efter den första.. Default: `'You have successfully re-submitted your answer.'`.
* __until__ | `Date`: tid fram till dess att eleverna ska få lämna in sina svar. Default: `none`.
* __points__ | `number`: Maximalt antal poäng som tilldelas vid betygsättning.. Default: `10`.
* __className__ | `string`: klassens namn. Default: `''`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback som aktiveras när eleverna lämnar in ett svar. Default: `onSubmit() {}`.


## Exempel

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
