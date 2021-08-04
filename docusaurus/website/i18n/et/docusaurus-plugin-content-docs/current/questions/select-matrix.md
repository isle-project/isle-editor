---
id: select-question-matrix
title: Select Question Matrix
sidebar_label: Select Question Matrix
---

Küsimus, mille vastus koosneb mitmest valikukastist.

## Valikud

* __question__ | `(string|node)`: küsimus, mis kuvatakse küsimuste valimise maatriksi ülaosas.. Default: `''`.
* __rows__ | `array`: rea sildid. Default: `[]`.
* __cols__ | `array`: veergude sildid. Default: `[]`.
* __options__ | `object`: objekt võtme- ja väärtuse paaridega, mille võtmed on kujul `row:col`, nt `0:0`, `0:1`, `1:0` jne, ja nende vastavad väärtused on üksikute valikuküsimuste võimalike vastusevariantide massiivid.. Default: `{}`.
* __solution__ | `object`: lahenduse objekt, mille võtme- ja väärtuse paarid võtmed on kujul `row:col`, nt `0:0`, `0:1`, `1:0` jne, ja nende vastavad väärtused on õige vastuse elemendi indeks vastavast `options` massiivi elemendist. Default: `{}`.
* __hints__ | `array<(string|node)>`: vihjeid, mis annavad suuniseid küsimusele vastamiseks. Default: `[]`.
* __hintPlacement__ | `string`: vihjete paigutus (kas `top`, `left`, `right` või `bottom`).. Default: `'bottom'`.
* __feedback__ | `boolean`: kontrollib, kas tagasiside nuppe kuvada. Default: `true`.
* __provideFeedback__ | `string`: kas anda tagasisidet "üldse mitte mingi", "individuaalset" tagasisidet esitatud vastuse(te) kohta või "üldist" tagasisidet kõigi küsimuste kohta.. Default: `'individual'`.
* __allowIncomplete__ | `boolean`: kas lubada esitamist ilma igas valikukastis tehtud valikuta. Default: `false`.
* __nTries__ | `number`: pärast mitu katset ei aktsepteerita edasisi vastuseid (kui `provideFeedback` ei ole `none`).. Default: `3`.
* __failureMsg__ | `string`: valede vastuste esitamisel kuvatav teavitustekst. Default: `none`.
* __successMsg__ | `string`: õigete vastuste esitamisel kuvatav teavitustekst. Default: `none`.
* __cellLabels__ | `object`: märgised lahtritele, mis on määratletud objektiga, mille võtmed on formaadis `row:col`.. Default: `{}`.
* __chat__ | `boolean`: kontrollib, kas elemendil peaks olema integreeritud vestlus. Default: `false`.
* __panelProps__ | `object`: täiendavad omadused, mis edastatakse väliskomponendile <Panel />.. Default: `{}`.
* __className__ | `string`: klassi nimi. Default: `''`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.
* __onSubmit__ | `function`: tagasilöögifunktsioon, mis kutsutakse üles esitamisel ja mille esimeseks parameetriks on vastused ja teiseks parameetriks boolean, mis näitab korrektsust.. Default: `onSubmit() {}`.


## Näited


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

