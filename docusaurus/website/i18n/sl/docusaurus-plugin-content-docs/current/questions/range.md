---
id: range-question
title: Range Question
sidebar_label: Range Question
---

Sestavni del vprašanja o razponu, ki od učencev zahteva, da navedejo spodnjo in zgornjo končno točko.

## Možnosti

* __question__ | `(string|node)`: prikazano vprašanje. Default: `''`.
* __solution__ | `array<number>`: polje dveh elementov, ki vsebuje končne točke pravilnega območja. Default: `none`.
* __hintPlacement__ | `string`: umestitev namigov (`top`, `left`, `right` ali `bottom`). Default: `'top'`.
* __hints__ | `array<(string|node)>`: napotki, kako odgovoriti na vprašanje.. Default: `[]`.
* __labels__ | `array`: polje dveh elementov oznak po meri, razen "Lower" in "Upper".. Default: `none`.
* __feedback__ | `boolean`: nadzoruje, ali se prikažejo gumbi za povratne informacije.. Default: `true`.
* __chat__ | `boolean`: nadzoruje, ali naj ima element integriran klepet.. Default: `false`.
* __digits__ | `number`: število številk, ki se morajo ujemati med rešitvijo in odgovorom, ki ga je podal uporabnik. Če ni podana ali je nastavljena na nič, komponenta preveri strogo enakost. Če je nastavljena na 0, se preveri enakost celih števil.. Default: `3`.
* __max__ | `number`: največja vhodna vrednost. Default: `null`.
* __min__ | `number`: najmanjša vhodna vrednost. Default: `null`.
* __nTries__ | `number`: po koliko poskusih je treba zagotoviti povratno informacijo (če je `provideFeedback` `true`). Default: `1`.
* __provideFeedback__ | `boolean`: označuje, ali naj se po tem, ko učenci pošljejo svoje odgovore, prikaže povratna informacija, vključno s pravilnim odgovorom.. Default: `true`.
* __submitAfterFeedback__ | `boolean`: nadzoruje, ali je treba omogočiti ponovno predložitev tudi po tem, ko je bila rešitev razkrita.. Default: `false`.
* __until__ | `Date`: čas, do katerega lahko učenci oddajo odgovore.. Default: `none`.
* __points__ | `number`: največje število točk, ki se dodelijo pri razvrščanju. Default: `10`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.
* __onChangeLower__ | `function`: povratni klic, ki se sproži, ko uporabnik spremeni spodnjo mejo.. Default: `onChangeLower() {}`.
* __onChangeUpper__ | `function`: povratni klic, ki se sproži, ko uporabnik spremeni zgornjo mejo.. Default: `onChangeUpper() {}`.
* __onChange__ | `function`: povratni klic, ki se sproži, ko uporabnik spremeni mejo (s spodnjo in zgornjo mejo kot argumentoma).. Default: `onChange() {}`.
* __onSubmit__ | `function`: povratni klic, ki se sproži ob oddaji odgovora; kot prvi parameter ima `boolean`, ki označuje, ali je bil odgovor pravilen (če velja, sicer `null`), kot drugi parameter pa posredovani odgovor.. Default: `onSubmit() {}`.


## Primeri

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
