---
id: match-list-question 
title: Match List Question
sidebar_label: Match List Question
---

O componentă ISLE care redă o întrebare în care cursantul trebuie să potrivească elemente din două liste în mod corect.

## Opțiuni

* __question__ | `(string|node)`: întrebarea care trebuie afișată în partea de sus a componentei de întrebări din lista de corespondență. Default: `''`.
* __elements__ | `array<{a,b}>`: un `array` care conține perechile corecte afișate în partea de sus a componentei de întrebare cu text liber. Fiecare element `array` trebuie să fie un `object` cu proprietățile `a` și `b`; pentru a adăuga răspunsuri de distragere a atenției, furnizați elemente care au doar proprietățile `a` sau `b`.. Default: `[]`.
* __hintPlacement__ | `string`: plasarea indicilor (fie `top`, `left`, `right`, sau `bottom`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: indicii care oferă îndrumări privind modul de răspuns la întrebare. Default: `[]`.
* __provideFeedback__ | `boolean`: indică dacă soluția trebuie să fie accesibilă după ce cursanții își trimit răspunsurile. Default: `true`.
* __feedback__ | `boolean`: controlează dacă se afișează butoanele de feedback. Default: `true`.
* __chat__ | `boolean`: controlează dacă elementul trebuie să aibă un chat integrat. Default: `false`.
* __colorScale__ | `array`: dacă este setat, culorile furnizate sunt folosite pentru dale. Default: `none`.
* __shuffle__ | `string`: specifică dacă se amestecă coloanele `left`, `right` sau `both` ale căror elemente trebuie să fie potrivite; furnizează `none` sau orice altă valoare pentru a nu amesteca elementele de pe ambele părți (poate fi util în cazul în care nu există o soluție).. Default: `'both'`.
* __disableSubmitNotification__ | `boolean`: controlează dacă se dezactivează sau nu notificările de trimitere. Default: `false`.
* __submissionMsg__ | `string`: notificare afișată atunci când persoana care învață își trimite răspunsul pentru prima dată. Default: `'You have successfully submitted your answer.'`.
* __resubmissionMsg__ | `string`: notificare afișată pentru toate trimiterile după prima trimitere. Default: `'You have successfully re-submitted your answer.'`.
* __until__ | `Date`: timpul până la care elevii ar trebui să fie lăsați să trimită răspunsurile. Default: `none`.
* __points__ | `number`: numărul maxim de puncte acordate în cadrul clasificării. Default: `10`.
* __className__ | `string`: numele clasei. Default: `''`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.
* __onChange__ | `function`: callback invocat atunci când elevii schimbă un răspuns. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback invocat atunci când studenții trimit un răspuns. Default: `onSubmit() {}`.


## Exemple

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
