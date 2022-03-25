---
id: range-question
title: Range Question
sidebar_label: Range Question
---

Rozsahová otázka, ktorá od študentov vyžaduje, aby uviedli dolný a horný koncový bod.

## Možnosti

* __question__ | `(string|node)`: zobrazená otázka. Default: `''`.
* __solution__ | `array<number>`: dvojprvkové pole obsahujúce koncové body správneho rozsahu. Default: `none`.
* __hintPlacement__ | `string`: umiestnenie nápovedy (buď `top`, `left`, `right` alebo `bottom`). Default: `'top'`.
* __hints__ | `array<(string|node)>`: nápovedy, ktoré poskytujú návod, ako odpovedať na otázku. Default: `[]`.
* __labels__ | `array`: dvojprvkové pole vlastných štítkov iných ako "Lower" a "Upper". Default: `none`.
* __feedback__ | `boolean`: ovláda, či sa majú zobrazovať tlačidlá spätnej väzby.. Default: `true`.
* __chat__ | `boolean`: kontroluje, či má mať prvok integrovaný chat. Default: `false`.
* __digits__ | `number`: počet číslic, ktoré sa musia zhodovať medzi riešením a odpoveďou zadanou používateľom. Ak nie je zadaná alebo je nastavená na null, komponent kontroluje prísnu rovnosť. Ak je nastavená na 0, kontroluje sa rovnosť celých čísel. Default: `3`.
* __max__ | `number`: maximálna vstupná hodnota. Default: `null`.
* __min__ | `number`: minimálna vstupná hodnota. Default: `null`.
* __provideFeedback__ | `boolean`: označuje, či sa má po odoslaní odpovede žiakom zobraziť spätná väzba vrátane správnej odpovede.. Default: `true`.
* __allowMultipleAnswers__ | `boolean`: kontroluje, či je možné odoslať viacero odpovedí.. Default: `false`.
* __until__ | `Date`: čas, dokedy by študenti mali mať možnosť predložiť odpovede.. Default: `none`.
* __points__ | `number`: maximálny počet bodov udelených pri klasifikácii. Default: `10`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.
* __onChangeLower__ | `function`: spätné volanie spustené po zmene dolnej hranice používateľom. Default: `onChangeLower() {}`.
* __onChangeUpper__ | `function`: spätné volanie spustené po zmene hornej hranice používateľom. Default: `onChangeUpper() {}`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.
* __onSubmit__ | `function`: spätné volanie vyvolané po odoslaní odpovede; ako prvý parameter má `boolean` označujúci, či bola odpoveď správne zodpovedaná (ak je to možné, inak `null`), a ako druhý parameter zadanú odpoveď. Default: `onSubmit() {}`.


## Príklady

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
