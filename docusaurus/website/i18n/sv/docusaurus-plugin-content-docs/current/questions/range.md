---
id: range-question
title: Range Question
sidebar_label: Range Question
---

En fråga om intervall där eleverna ombeds ange en nedre och övre slutpunkt.

## Alternativ

* __question__ | `(string|node)`: visade frågan. Default: `''`.
* __solution__ | `array<number>`: en matris med två element som innehåller ändpunkterna för det korrekta intervallet.. Default: `none`.
* __hintPlacement__ | `string`: placering av tipsen (antingen `top`, `left`, `right` eller `bottom`). Default: `'top'`.
* __hints__ | `array<(string|node)>`: tips som ger vägledning om hur frågan ska besvaras. Default: `[]`.
* __labels__ | `array`: en matris med två element av andra anpassade etiketter än "Lower" och "Upper".. Default: `none`.
* __feedback__ | `boolean`: kontrollerar om återkopplingsknapparna ska visas. Default: `true`.
* __chat__ | `boolean`: kontrollerar om elementet ska ha en integrerad chatt. Default: `false`.
* __digits__ | `number`: Antal siffror som måste stämma överens mellan lösningen och det svar som användaren har angett. Om det inte anges eller är noll, kontrollerar komponenten att det råder strikt likhet. Om värdet är 0, kontrolleras helhetsjämlikhet.. Default: `3`.
* __max__ | `number`: maximalt ingångsvärde. Default: `null`.
* __min__ | `number`: Minsta inmatningsvärde.. Default: `null`.
* __provideFeedback__ | `boolean`: anger om återkoppling, inklusive det rätta svaret, ska visas efter att eleverna skickat in sina svar.. Default: `true`.
* __allowMultipleAnswers__ | `boolean`: kontrollerar om man kan lämna in flera svar. Default: `false`.
* __until__ | `Date`: tid fram till dess att eleverna ska få lämna in sina svar. Default: `none`.
* __points__ | `number`: Maximalt antal poäng som tilldelas vid betygsättning.. Default: `10`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.
* __onChangeLower__ | `function`: callback som utlöses när den nedre gränsen ändras av användaren. Default: `onChangeLower() {}`.
* __onChangeUpper__ | `function`: callback som utlöses när den övre gränsen ändras av användaren. Default: `onChangeUpper() {}`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback som aktiveras när svaret skickas in; har som första parameter en "boolean" som anger om svaret var korrekt besvarat (om tillämpligt, annars "noll") och det lämnade svaret som andra parameter.. Default: `onSubmit() {}`.


## Exempel

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
