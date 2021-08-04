---
id: select-question-matrix
title: Select Question Matrix
sidebar_label: Select Question Matrix
---

Egy kérdés, amelynek válasza több válaszdobozból áll.

## Opciók

* __question__ | `(string|node)`: a kérdés kiválasztása mátrix tetején megjelenítendő kérdés. Default: `''`.
* __rows__ | `array`: sorcímkék. Default: `[]`.
* __cols__ | `array`: oszlopcímkék. Default: `[]`.
* __options__ | `object`: objektum kulcs-érték párokkal, amelyek kulcsai a `sor:oszlop` formájúak, pl. `0:0`, `0:1`, `1:0` stb., és a hozzájuk tartozó értékek az egyes select kérdések lehetséges válaszlehetőségeit tartalmazó tömbök.. Default: `{}`.
* __solution__ | `object`: megoldás objektum kulcs-érték párokkal, amelyek kulcsainak a `sor:oszlop` formája van, pl. `0:0`, `0:1`, `1:0` stb., és a hozzájuk tartozó értékek a megfelelő válasz elemének indexe a megfelelő `opciók` tömbből.. Default: `{}`.
* __hints__ | `array<(string|node)>`: a kérdés megválaszolására vonatkozó útmutatásokat ad. Default: `[]`.
* __hintPlacement__ | `string`: a tippek elhelyezése (vagy `top`, `left`, `right`, vagy `bottom`). Default: `'bottom'`.
* __feedback__ | `boolean`: szabályozza, hogy megjelenjenek-e a visszajelző gombok. Default: `true`.
* __provideFeedback__ | `string`: hogy egyáltalán "semmilyen" visszajelzést, "egyéni" visszajelzést adjon a beadott válasz(ok)ra, vagy "általános" visszajelzést az összes kérdésre vonatkozóan.. Default: `'individual'`.
* __allowIncomplete__ | `boolean`: engedélyezi-e, hogy az egyes jelölőnégyzetekben történő kiválasztás nélkül is lehessen benyújtani a pályázatokat. Default: `false`.
* __nTries__ | `number`: hány próbálkozás után nem fogadunk el további válaszokat (ha a `provideFeedback` nem `none`). Default: `3`.
* __failureMsg__ | `string`: a hibás válaszok elküldésekor megjelenő értesítő szöveg. Default: `none`.
* __successMsg__ | `string`: a helyes válaszok elküldésekor megjelenő értesítő szöveg. Default: `none`.
* __cellLabels__ | `object`: a `sor:oszlop` formátumú kulcsokkal rendelkező objektum által meghatározott cellák címkéi. Default: `{}`.
* __chat__ | `boolean`: szabályozza, hogy az elemnek legyen-e integrált chatje. Default: `false`.
* __panelProps__ | `object`: további tulajdonságok, amelyeket a külső <Panel /> komponensnek kell átadni.. Default: `{}`.
* __className__ | `string`: osztály neve. Default: `''`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.
* __onSubmit__ | `function`: callback függvény, amely az elküldéskor hívódik elő a válaszokkal, mint első, és egy boolean értékkel, amely a helyességet jelzi, mint második paraméter.. Default: `onSubmit() {}`.


## Példák


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

