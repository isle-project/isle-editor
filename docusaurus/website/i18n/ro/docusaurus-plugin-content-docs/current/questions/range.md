---
id: range-question
title: Range Question
sidebar_label: Range Question
---

O componentă de întrebare de tip "interval" care le cere elevilor să furnizeze un punct final inferior și unul superior.

## Opțiuni

* __question__ | `(string|node)`: întrebare afișată. Default: `''`.
* __solution__ | `array<number>`: matrice cu două elemente care conține punctele finale ale intervalului corect. Default: `none`.
* __hintPlacement__ | `string`: plasarea indicilor (fie `top`, `left`, `right`, sau `bottom`). Default: `'top'`.
* __hints__ | `array<(string|node)>`: indicii care oferă îndrumări privind modul de răspuns la întrebare. Default: `[]`.
* __labels__ | `array`: matrice cu două elemente de etichete personalizate, altele decât "Lower" și "Upper".. Default: `none`.
* __feedback__ | `boolean`: controlează dacă se afișează butoanele de feedback. Default: `true`.
* __chat__ | `boolean`: controlează dacă elementul trebuie să aibă un chat integrat. Default: `false`.
* __digits__ | `number`: numărul de cifre care trebuie să corespundă între soluție și răspunsul furnizat de utilizator. În cazul în care nu este dată sau este setată ca fiind nulă, componenta verifică egalitatea strictă. Dacă este setată la 0, se verifică egalitatea între numere întregi.. Default: `3`.
* __max__ | `number`: valoarea maximă de intrare. Default: `null`.
* __min__ | `number`: valoarea minimă de intrare. Default: `null`.
* __provideFeedback__ | `boolean`: indică dacă feedback-ul care include răspunsul corect trebuie afișat după ce cursanții își trimit răspunsurile. Default: `true`.
* __allowMultipleAnswers__ | `boolean`: controlează dacă se pot trimite răspunsuri multiple. Default: `false`.
* __until__ | `Date`: timpul până la care studenții ar trebui să fie lăsați să trimită răspunsurile. Default: `none`.
* __points__ | `number`: numărul maxim de puncte acordate în cadrul clasificării. Default: `10`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.
* __onChangeLower__ | `function`: callback declanșat după ce limita inferioară este modificată de către utilizator. Default: `onChangeLower() {}`.
* __onChangeUpper__ | `function`: callback declanșat după ce limita superioară este modificată de către utilizator. Default: `onChangeUpper() {}`.
* __onChange__ | `function`: callback declanșat după ce o limită este modificată de utilizator (cu limita inferioară și superioară ca argumente). Default: `onChange() {}`.
* __onSubmit__ | `function`: callback invocat atunci când răspunsul este trimis; are ca prim parametru un `boolean` care indică dacă răspunsul a fost dat corect (dacă este cazul, `null` în caz contrar) și răspunsul furnizat ca al doilea parametru. Default: `onSubmit() {}`.


## Exemple

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
