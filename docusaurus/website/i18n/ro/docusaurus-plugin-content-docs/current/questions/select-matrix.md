---
id: select-question-matrix
title: Select Question Matrix
sidebar_label: Select Question Matrix
---

O întrebare cu un răspuns format din mai multe casete de selectare.

## Opțiuni

* __question__ | `(string|node)`: întrebarea care trebuie afișată în partea de sus a matricei de selectare a întrebărilor. Default: `''`.
* __rows__ | `array`: etichete de rând. Default: `[]`.
* __cols__ | `array`: etichete de coloană. Default: `[]`.
* __options__ | `object`: obiect cu perechi cheie-valoare cu chei de forma `row:col`, de exemplu `0:0`, `0:1`, `1:0` etc., iar valorile corespunzătoare sunt array-uri cu variantele de răspuns posibile pentru fiecare întrebare selectată în parte.. Default: `{}`.
* __solution__ | `object`: obiect soluție cu perechi cheie-valoare cu chei de forma `row:col`, de exemplu `0:0`, `0:1`, `1:0` etc., iar valorile lor corespunzătoare sunt indicii elementului de răspuns corect din tabloul `options` respectiv.. Default: `{}`.
* __hints__ | `array<(string|node)>`: indicii care oferă îndrumări privind modul de răspuns la întrebare. Default: `[]`.
* __hintPlacement__ | `string`: plasarea indicilor (fie `top`, `left`, `right`, sau `bottom`). Default: `'bottom'`.
* __feedback__ | `boolean`: controlează dacă se afișează butoanele de feedback. Default: `true`.
* __provideFeedback__ | `string`: dacă se va oferi "niciun feedback", "feedback individual" pentru răspunsul (răspunsurile) trimis(e) sau "feedback general" pentru toate întrebările.. Default: `'individual'`.
* __allowIncomplete__ | `boolean`: dacă se permite transmiterea de documente fără a se face o selecție în fiecare căsuță de selectare. Default: `false`.
* __nTries__ | `number`: după câte încercări nu mai sunt acceptate alte răspunsuri (dacă `provideFeedback` nu este `none`). Default: `3`.
* __failureMsg__ | `string`: text de notificare afișat la trimiterea răspunsurilor incorecte. Default: `none`.
* __successMsg__ | `string`: text de notificare afișat la trimiterea răspunsurilor corecte. Default: `none`.
* __cellLabels__ | `object`: etichete pentru celulele definite de un obiect cu chei având formatul `row:col`.. Default: `{}`.
* __chat__ | `boolean`: controlează dacă elementul trebuie să aibă un chat integrat. Default: `false`.
* __panelProps__ | `object`: proprietăți suplimentare care trebuie transmise componentei exterioare <Panel /> . Default: `{}`.
* __className__ | `string`: numele clasei. Default: `''`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.
* __onSubmit__ | `function`: funcția callback invocată la trimiterea răspunsurilor ca prim parametru și un boolean care indică corectitudinea ca al doilea parametru. Default: `onSubmit() {}`.


## Exemple


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

