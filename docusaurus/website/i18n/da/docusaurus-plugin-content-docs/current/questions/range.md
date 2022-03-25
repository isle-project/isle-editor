---
id: range-question
title: Range Question
sidebar_label: Range Question
---

En spørgeskemakomponent, der beder eleverne om at angive et nedre og øvre endepunkt.

## Indstillinger

* __question__ | `(string|node)`: viste spørgsmål. Default: `''`.
* __solution__ | `array<number>`: et array med to elementer, der indeholder endepunkterne for det korrekte område. Default: `none`.
* __hintPlacement__ | `string`: placeringen af vejledningerne (enten `top`, `left`, `right` eller `bottom`). Default: `'top'`.
* __hints__ | `array<(string|node)>`: tips, der giver vejledning om, hvordan spørgsmålet skal besvares. Default: `[]`.
* __labels__ | `array`: et array med to elementer af andre brugerdefinerede etiketter end "Lower" og "Upper". Default: `none`.
* __feedback__ | `boolean`: styrer, om der skal vises feedback-knapper. Default: `true`.
* __chat__ | `boolean`: kontrollerer, om elementet skal have en integreret chat. Default: `false`.
* __digits__ | `number`: antal cifre, der skal stemme overens mellem løsningen og det af brugeren angivne svar. Hvis det ikke er angivet eller er sat til nul, kontrollerer komponenten, at der er streng lighed. Hvis den er sat til 0, kontrolleres der for heltalslighed.. Default: `3`.
* __max__ | `number`: maksimal indgangsværdi. Default: `null`.
* __min__ | `number`: mindste indgangsværdi. Default: `null`.
* __provideFeedback__ | `boolean`: angiver, om der skal vises feedback, herunder det korrekte svar, efter at eleverne har indsendt deres svar. Default: `true`.
* __allowMultipleAnswers__ | `boolean`: kontrollerer, om man kan indsende flere svar. Default: `false`.
* __until__ | `Date`: den tid, der skal gå, før de studerende kan afgive svar. Default: `none`.
* __points__ | `number`: det maksimale antal point, der kan tildeles ved bedømmelsen. Default: `10`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.
* __onChangeLower__ | `function`: callback, der udløses, når den nedre grænse ændres af brugeren. Default: `onChangeLower() {}`.
* __onChangeUpper__ | `function`: callback, der udløses, når den øvre grænse ændres af brugeren. Default: `onChangeUpper() {}`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback, der påkaldes, når svaret er indsendt; har som første parameter en `boolean`, der angiver, om svaret blev besvaret korrekt (hvis det er relevant, ellers `null`), og det indsendte svar som anden parameter. Default: `onSubmit() {}`.


## Eksempler

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
