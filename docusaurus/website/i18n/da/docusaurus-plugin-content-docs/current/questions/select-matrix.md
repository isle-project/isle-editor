---
id: select-question-matrix
title: Select Question Matrix
sidebar_label: Select Question Matrix
---

Et spørgsmål med et svar, der består af flere afkrydsningsfelter.

## Indstillinger

* __question__ | `(string|node)`: spørgsmål, der skal vises øverst i matrixen for valg af spørgsmål. Default: `''`.
* __rows__ | `array`: rækkeetiketter. Default: `[]`.
* __cols__ | `array`: kolonneetiketter. Default: `[]`.
* __options__ | `object`: objekt med nøgle-værdipar med nøgler af formen `row:col`, f.eks. `0:0`, `0:1`, `1:0` osv., og deres tilsvarende værdier er arrays af de mulige svarmuligheder for de enkelte udvalgte spørgsmål. Default: `{}`.
* __solution__ | `object`: løsningsobjekt med nøgle-værdipar med nøgler af formen `row:col`, f.eks. `0:0`, `0:1`, `1:0` osv., og deres tilsvarende værdier er indekset for det korrekte svarelement fra det respektive `options`-array.. Default: `{}`.
* __hints__ | `array<(string|node)>`: tips, der giver vejledning om, hvordan spørgsmålet skal besvares. Default: `[]`.
* __hintPlacement__ | `string`: placeringen af vejledningerne (enten `top`, `left`, `right` eller `bottom`). Default: `'bottom'`.
* __feedback__ | `boolean`: styrer, om der skal vises feedback-knapper. Default: `true`.
* __provideFeedback__ | `string`: om der skal gives "ingen" feedback overhovedet, "individuel" feedback på de(t) indsendte svar eller "samlet" feedback for alle spørgsmål. Default: `'individual'`.
* __allowIncomplete__ | `boolean`: om der skal tillades indsendelser, uden at der er foretaget et valg i hvert afkrydsningsfelt. Default: `false`.
* __nTries__ | `number`: efter hvor mange forsøg der ikke accepteres flere svar (hvis `provideFeedback` ikke er `none`). Default: `3`.
* __failureMsg__ | `string`: Meddelelsestekst, der vises ved indsendelse af forkerte svar. Default: `none`.
* __successMsg__ | `string`: Meddelelsestekst, der vises ved indsendelse af korrekte svar. Default: `none`.
* __cellLabels__ | `object`: etiketter for celler defineret af objekt med nøgler i formatet `row:col`.. Default: `{}`.
* __chat__ | `boolean`: kontrollerer, om elementet skal have en integreret chat. Default: `false`.
* __panelProps__ | `object`: yderligere egenskaber, der skal overføres til den ydre <Panel /> -komponent. Default: `{}`.
* __className__ | `string`: klassens navn. Default: `''`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.
* __onSubmit__ | `function`: callback-funktion, der påkaldes ved indsendelse med svarene som første parameter og en boolean, der angiver korrekthed, som anden parameter. Default: `onSubmit() {}`.


## Eksempler


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

