---
id: match-list-question 
title: Match List Question
sidebar_label: Match List Question
---

ISLE komponents, kas atveido jautājumu, kurā skolēnam ir pareizi jāsalāgo elementi no diviem sarakstiem.

## Iespējas

* __question__ | `(string|node)`: jautājums, kas tiks parādīts atbilstības saraksta jautājuma komponenta augšpusē.. Default: `''`.
* __elements__ | `array<{a,b}>`: `matu masīvs`, kurā ir pareizie pāri, kas parādās brīvā teksta jautājuma komponenta augšpusē. Katram `maseja` elementam jābūt `objektam` ar `a` un `b` īpašībām; lai pievienotu atbildes, kas novērš atbildes, sniedziet elementus tikai ar `a` vai `b` īpašībām.. Default: `[]`.
* __hintPlacement__ | `string`: mājienu izvietojums (`top`, `left`, `right` vai `bottom`).. Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: norādījumi, kā atbildēt uz jautājumu.. Default: `[]`.
* __provideFeedback__ | `boolean`: norāda, vai risinājumam jābūt pieejamam pēc tam, kad skolēni ir iesnieguši savas atbildes.. Default: `true`.
* __feedback__ | `boolean`: kontrolē, vai tiek rādītas atgriezeniskās saites pogas.. Default: `true`.
* __chat__ | `boolean`: kontrolē, vai elementam ir jābūt integrētam tērzēšanas. Default: `false`.
* __colorScale__ | `array`: ja iestatīts, tiek izmantotas piegādātās krāsas flīzēm.. Default: `none`.
* __shuffle__ | `string`: norāda, vai sajaukt `kreisās`, `labās` vai `apakšējās` kolonnas, kuru elementi jāsaskaņo; norādiet `none` vai jebkuru citu vērtību, lai nesajauktu elementus abās pusēs (var būt noderīgi gadījumā, ja nav risinājuma).. Default: `'both'`.
* __disableSubmitNotification__ | `boolean`: kontrolē, vai atspējot iesniegšanas paziņojumus.. Default: `false`.
* __submissionMsg__ | `string`: paziņojums, kas tiek parādīts, kad skolēns pirmo reizi iesniedz atbildi.. Default: `'You have successfully submitted your answer.'`.
* __resubmissionMsg__ | `string`: paziņojums tiek parādīts par visiem iesniegumiem pēc pirmā iesnieguma.. Default: `'You have successfully re-submitted your answer.'`.
* __until__ | `Date`: laiks, līdz skolēniem jāļauj iesniegt atbildes. Default: `none`.
* __points__ | `number`: maksimālais punktu skaits, ko piešķir klasifikācijā. Default: `10`.
* __className__ | `string`: klases nosaukums. Default: `''`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.
* __onSubmit__ | `function`: atgriezeniskais zvans, kas tiek izsaukts, kad skolēni iesniedz atbildi.. Default: `onSubmit() {}`.


## Piemēri

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
