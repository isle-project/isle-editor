---
id: select-question-matrix
title: Select Question Matrix
sidebar_label: Select Question Matrix
---

Vprašanje z odgovorom, sestavljenim iz več izbirnih polj.

## Možnosti

* __question__ | `(string|node)`: vprašanje, ki se prikaže na vrhu matrike izbranih vprašanj.. Default: `''`.
* __rows__ | `array`: oznake vrstic. Default: `[]`.
* __cols__ | `array`: oznake stolpcev. Default: `[]`.
* __options__ | `object`: objekt s pari ključ-vrednost s ključi v obliki `row:col`, npr. `0:0`, `0:1`, `1:0` itd., njihove ustrezne vrednosti pa so polja možnih izbir odgovorov za posamezna izbrana vprašanja. Default: `{}`.
* __solution__ | `object`: objekt rešitve s pari ključ-vrednost s ključi v obliki `vrstica:stolpec`, npr. `0:0`, `0:1`, `1:0` itd., njihove ustrezne vrednosti pa so indeksi elementa pravilnega odgovora iz ustreznega polja `možnosti`.. Default: `{}`.
* __hints__ | `array<(string|node)>`: napotki, kako odgovoriti na vprašanje.. Default: `[]`.
* __hintPlacement__ | `string`: umestitev namigov (`top`, `left`, `right` ali `bottom`). Default: `'bottom'`.
* __feedback__ | `boolean`: nadzoruje, ali se prikažejo gumbi za povratne informacije.. Default: `true`.
* __provideFeedback__ | `string`: ali želite zagotoviti `nikaj´ povratnih informacij, `posamezne´ povratne informacije o predloženih odgovorih ali `splošne´ povratne informacije za vsa vprašanja.. Default: `'individual'`.
* __allowIncomplete__ | `boolean`: ali dovoliti predložitev brez izbire v vsakem polju za izbiro.. Default: `false`.
* __nTries__ | `number`: po kolikšnem številu poskusov ni več odgovorov (če `provideFeedback` ni `none`). Default: `3`.
* __failureMsg__ | `string`: besedilo obvestila, ki se prikaže ob predložitvi napačnih odgovorov.. Default: `none`.
* __successMsg__ | `string`: besedilo obvestila, ki se prikaže ob predložitvi pravilnih odgovorov.. Default: `none`.
* __cellLabels__ | `object`: oznake za celice, ki jih določa objekt s ključi v obliki `row:col`.. Default: `{}`.
* __chat__ | `boolean`: nadzoruje, ali naj ima element integriran klepet.. Default: `false`.
* __panelProps__ | `object`: dodatne lastnosti, ki se posredujejo zunanji komponenti <Panel />.. Default: `{}`.
* __className__ | `string`: ime razreda. Default: `''`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.
* __onSubmit__ | `function`: funkcija povratnega klica, ki se sproži ob oddaji, z odgovori kot prvim in logičnim parametrom, ki označuje pravilnost, kot drugim parametrom.. Default: `onSubmit() {}`.


## Primeri


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

