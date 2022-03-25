---
id: range-question
title: Range Question
sidebar_label: Range Question
---

Küsimuse osa, milles palutakse õpilastel esitada alumine ja ülemine lõpp-punkt.

## Valikud

* __question__ | `(string|node)`: kuvatav küsimus. Default: `''`.
* __solution__ | `array<number>`: kaheelemendiline massiivi, mis sisaldab õige vahemiku lõpp-punkte. Default: `none`.
* __hintPlacement__ | `string`: vihjete paigutus (kas `top`, `left`, `right` või `bottom`).. Default: `'top'`.
* __hints__ | `array<(string|node)>`: vihjeid, mis annavad suuniseid küsimusele vastamiseks. Default: `[]`.
* __labels__ | `array`: kaheelemendiline massiivi muudest kohandatud siltidest kui "Lower" ja "Upper".. Default: `none`.
* __feedback__ | `boolean`: kontrollib, kas tagasiside nuppe kuvada. Default: `true`.
* __chat__ | `boolean`: kontrollib, kas elemendil peaks olema integreeritud vestlus. Default: `false`.
* __digits__ | `number`: numbrite arv, mis peavad vastama lahenduse ja kasutaja antud vastuse vahel. Kui seda ei ole antud või see on null, kontrollib komponent ranget võrdsust. Kui väärtus on 0, kontrollitakse täisarvulist võrdsust.. Default: `3`.
* __max__ | `number`: maksimaalne sisendväärtus. Default: `null`.
* __min__ | `number`: minimaalne sisendväärtus. Default: `null`.
* __provideFeedback__ | `boolean`: näitab, kas pärast õppijate vastuste esitamist tuleb kuvada tagasisidet, mis sisaldab õiget vastust.. Default: `true`.
* __allowMultipleAnswers__ | `boolean`: kontrollib, kas saab esitada mitu vastust. Default: `false`.
* __until__ | `Date`: aega, kuni õpilastel peaks olema lubatud vastuseid esitada. Default: `none`.
* __points__ | `number`: hindamisel antavate punktide maksimaalne arv. Default: `10`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.
* __onChangeLower__ | `function`: callback, mis käivitub pärast seda, kui kasutaja muudab alampiiri.. Default: `onChangeLower() {}`.
* __onChangeUpper__ | `function`: tagasikutsumine, mis käivitub pärast seda, kui kasutaja on ülemist piiri muutnud.. Default: `onChangeUpper() {}`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback, mis kutsutakse üles, kui vastus on esitatud; esimese parameetrina on "boolean", mis näitab, kas vastus on õigesti vastatud (kui see on asjakohane, vastasel juhul "null") ja teise parameetrina esitatud vastus.. Default: `onSubmit() {}`.


## Näited

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
