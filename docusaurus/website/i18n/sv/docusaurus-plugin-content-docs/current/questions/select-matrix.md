---
id: select-question-matrix
title: Select Question Matrix
sidebar_label: Select Question Matrix
---

En fråga med ett svar som består av flera valbara rutor.

## Alternativ

* __question__ | `(string|node)`: fråga som ska visas högst upp i matrisen för utvalda frågor.. Default: `''`.
* __rows__ | `array`: etiketter på raderna. Default: `[]`.
* __cols__ | `array`: kolumnetiketter. Default: `[]`.
* __options__ | `object`: objekt med nyckel-värdepar med nycklar av formen `row:col`, t.ex. `0:0`, `0:1`, `1:0` etc., och motsvarande värden är matriser med möjliga svarsalternativ för de enskilda frågorna.. Default: `{}`.
* __solution__ | `object`: lösningsobjekt med nyckel-värdepar med nycklar av formen `row:col`, t.ex. `0:0`, `0:1`, `1:0` etc., och deras motsvarande värden är indexet för det korrekta svarselementet från respektive `options`-matris.. Default: `{}`.
* __hints__ | `array<(string|node)>`: tips som ger vägledning om hur frågan ska besvaras. Default: `[]`.
* __hintPlacement__ | `string`: placering av tipsen (antingen `top`, `left`, `right` eller `bottom`). Default: `'bottom'`.
* __feedback__ | `boolean`: kontrollerar om återkopplingsknapparna ska visas. Default: `true`.
* __provideFeedback__ | `string`: om du ska ge "ingen" feedback alls, "individuell" feedback på de inlämnade svaren eller "övergripande" feedback för alla frågor. Default: `'individual'`.
* __allowIncomplete__ | `boolean`: Om det är tillåtet att tillåta inlämningar utan att ett val har gjorts i varje ruta.. Default: `false`.
* __nTries__ | `number`: efter hur många försök inga fler svar accepteras (om `provideFeedback` inte är `none`).. Default: `3`.
* __failureMsg__ | `string`: Meddelande som visas när felaktiga svar skickas in.. Default: `none`.
* __successMsg__ | `string`: Meddelandetext som visas när du skickar in rätt svar.. Default: `none`.
* __cellLabels__ | `object`: Etiketter för celler som definieras av objekt med nycklar i formatet `row:col`.. Default: `{}`.
* __chat__ | `boolean`: kontrollerar om elementet ska ha en integrerad chatt. Default: `false`.
* __panelProps__ | `object`: Ytterligare egenskaper som ska skickas till den yttre <Panel /> -komponenten.. Default: `{}`.
* __className__ | `string`: Klassnamn.. Default: `''`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.
* __onSubmit__ | `function`: callback-funktion som anropas vid inlämning med svaren som första parameter och en boolean som anger korrekthet som andra parameter.. Default: `onSubmit() {}`.


## Exempel


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Hints', value: 'withHints' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'Feedback Messages', value: 'feedbackMessages' }
        
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<SelectQuestionMatrix
    question="Test your art history knowledge"
    rows={[ 'Composer', 'Author' ]} 
    cols={[ '18th Century', '19th Century' ]} 
    options={{ 
        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], 
        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,
        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],
        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] 
    }} 
    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}
/>
```
</TabItem>

<TabItem value="withHints">

```jsx live
<SelectQuestionMatrix
  question="Test your art history knowledge"
    rows={[ 'Composer', 'Author' ]} 
    cols={[ '18th Century', '19th Century' ]} 
    options={{ 
        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], 
        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,
        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],
        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] 
    }} 
    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}
    hints={[
        'His father Johann Sebastian was a famous composer too',
        'He was famous for his FAUST - so definitely an author',
        'Poussin was an 18th century painter',
        'Courbet was a realistic painter'
    ]}
/>
```
</TabItem>

<TabItem value="withStyle">

```jsx live
<SelectQuestionMatrix
    style={{ 
        fontFamily: 'Georgia',
        fontSize: 22, 
        textShadow: '0 0  10px white',
        background: 'rgb(251,213,112)',
        background: 'radial-gradient(circle, yellow 0%, orange 30%, green 100%)'
    }}
    question="Test your art history knowledge"
    rows={[ 'Composer', 'Author' ]} 
    cols={[ '18th Century', '19th Century' ]} 
    options={{ 
        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], 
        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,
        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],
        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] }} 
    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}
/>
```
</TabItem>


<TabItem value="feedbackMessages">

```jsx live
<SelectQuestionMatrix
    question="Test your art history knowledge"
    failureMsg="Sorry, that was wrong." 
    successMsg ="Wow! Congratulations, you are a specialist!"
    rows={[ 'Composer', 'Author' ]} 
    cols={[ '18th Century', '19th Century' ]} 
    options={{ 
        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], 
        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,
        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],
        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] 
    }} 
    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}
/>
```

</TabItem>

</Tabs>

