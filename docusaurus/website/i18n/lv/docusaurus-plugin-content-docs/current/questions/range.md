---
id: range-question
title: Range Question
sidebar_label: Range Question
---

Diapazona jautājuma komponents, kurā skolēniem jānorāda apakšējais un augšējais beigu punkts.

## Iespējas

* __question__ | `(string|node)`: parādīts jautājums. Default: `''`.
* __solution__ | `array<number>`: divu elementu masīvs, kas satur pareizā diapazona galapunktus.. Default: `none`.
* __hintPlacement__ | `string`: mājienu izvietojums (`top`, `left`, `right` vai `bottom`).. Default: `'top'`.
* __hints__ | `array<(string|node)>`: norādes, kā atbildēt uz jautājumu.. Default: `[]`.
* __labels__ | `array`: divu elementu masīvs ar pielāgotām etiķetēm, kas nav "Lower" un "Upper".. Default: `none`.
* __feedback__ | `boolean`: kontrolē, vai tiek rādītas atgriezeniskās saites pogas.. Default: `true`.
* __chat__ | `boolean`: kontrolē, vai elementam ir jābūt integrētam tērzēšanas. Default: `false`.
* __digits__ | `number`: ciparu skaits, kuriem jāatbilst risinājumam un lietotāja sniegtajai atbildei. Ja atbilde nav norādīta vai ir nulle, komponents pārbauda stingru vienlīdzību. Ja iestatīts uz 0, tiek pārbaudīta veselu skaitļu vienādība.. Default: `3`.
* __max__ | `number`: maksimālā ieejas vērtība. Default: `null`.
* __min__ | `number`: minimālā ieejas vērtība. Default: `null`.
* __provideFeedback__ | `boolean`: norāda, vai pēc tam, kad izglītojamie ir iesnieguši atbildes, ir jānorāda atgriezeniskā saite, tostarp pareizā atbilde.. Default: `true`.
* __allowMultipleAnswers__ | `boolean`: kontrolē, vai var iesniegt vairākas atbildes.. Default: `false`.
* __until__ | `Date`: laiks, līdz skolēniem jāļauj iesniegt atbildes. Default: `none`.
* __points__ | `number`: maksimālais punktu skaits, ko piešķir klasifikācijā. Default: `10`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.
* __onChangeLower__ | `function`: atsauces zvans, kas tiek aktivizēts pēc tam, kad lietotājs ir mainījis apakšējo robežu.. Default: `onChangeLower() {}`.
* __onChangeUpper__ | `function`: atgriezeniskais zvans, kas tiek aktivizēts pēc tam, kad lietotājs ir mainījis augšējo robežu.. Default: `onChangeUpper() {}`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.
* __onSubmit__ | `function`: atgriezeniskais zvans, kas tiek izsaukts, kad atbilde ir iesniegta; pirmais parametrs ir `boolean`, kas norāda, vai atbilde ir pareiza (ja ir, citādi `null`), bet otrais parametrs ir sniegtā atbilde.. Default: `onSubmit() {}`.


## Piemēri

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Hints', value: 'withHints' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'With Points and Feedback', value: 'withPoints' }
        
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<RangeQuestion
    style={{ fontSize: 17, }}
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
/>
```

</TabItem>

<TabItem value="withHints">

```jsx live
<RangeQuestion
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
    hints={['all this happened in the 17th century', 'it ended with the Peace of Westphalia in 1648']}
/>
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<RangeQuestion
    style={{ fontFamily: 'Georgia', boxShadow: '0 0  10px darkblue'}}
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
/>
```

</TabItem>

<TabItem value="withPoints">

```jsx live
<RangeQuestion
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
    hints={['all this happened in the 17th century', 'it ended with the Peace of Westphalia in 1648']}
    points={20}
    onSubmit={(res) => {
     if (res === true) {
      alert('Great, you have received 20 points');
     }
     else alert('sorry, this answer was wrong');
    }}
/>
```

</TabItem>

</Tabs>
