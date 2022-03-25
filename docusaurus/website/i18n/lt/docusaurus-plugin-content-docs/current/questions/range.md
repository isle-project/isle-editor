---
id: range-question
title: Range Question
sidebar_label: Range Question
---

Klausimo apie intervalą komponentas, kuriame mokinių prašoma nurodyti apatinį ir viršutinį galinį tašką.

## Parinktys

* __question__ | `(string|node)`: rodomas klausimas. Default: `''`.
* __solution__ | `array<number>`: dviejų elementų masyvas, kuriame yra teisingo intervalo galiniai taškai.. Default: `none`.
* __hintPlacement__ | `string`: užuominų vieta (`top`, `left`, `right` arba `bottom`).. Default: `'top'`.
* __hints__ | `array<(string|node)>`: užuominos, kuriose pateikiamos rekomendacijos, kaip atsakyti į klausimą.. Default: `[]`.
* __labels__ | `array`: dviejų elementų masyvą, kuriame yra pasirinktinių etikečių, išskyrus "Lower" ir "Upper".. Default: `none`.
* __feedback__ | `boolean`: kontroliuoja, ar rodyti grįžtamojo ryšio mygtukus.. Default: `true`.
* __chat__ | `boolean`: kontroliuoja, ar elementas turi turėti integruotą pokalbių. Default: `false`.
* __digits__ | `number`: skaitmenų, kurie turi sutapti tarp sprendinio ir naudotojo pateikto atsakymo, skaičius. Jei nepateikta arba nustatyta kaip null, komponentas tikrina griežtą lygybę. Jei nustatyta 0, tikrinama sveikųjų skaičių lygybė.. Default: `3`.
* __max__ | `number`: didžiausia įvesties vertė. Default: `null`.
* __min__ | `number`: mažiausia įvesties vertė. Default: `null`.
* __provideFeedback__ | `boolean`: nurodo, ar mokiniams pateikus atsakymus turėtų būti rodomas grįžtamasis ryšys, įskaitant teisingą atsakymą.. Default: `true`.
* __allowMultipleAnswers__ | `boolean`: kontroliuoja, ar galima pateikti kelis atsakymus.. Default: `false`.
* __until__ | `Date`: laikas, per kurį mokiniams turėtų būti leista pateikti atsakymus.. Default: `none`.
* __points__ | `number`: maksimalus balų skaičius, suteikiamas vertinant. Default: `10`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.
* __onChangeLower__ | `function`: grįžtamasis skambutis, inicijuojamas naudotojui pakeitus apatinę ribą.. Default: `onChangeLower() {}`.
* __onChangeUpper__ | `function`: grįžtamasis skambutis, inicijuojamas naudotojui pakeitus viršutinę ribą.. Default: `onChangeUpper() {}`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.
* __onSubmit__ | `function`: grįžtamasis skambutis, iškviečiamas, kai pateikiamas atsakymas; pirmasis parametras yra `boolean`, nurodantis, ar atsakymas buvo teisingas (jei tinka, `null`, jei ne), o antrasis parametras - pateiktas atsakymas.. Default: `onSubmit() {}`.


## Pavyzdžiai

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
