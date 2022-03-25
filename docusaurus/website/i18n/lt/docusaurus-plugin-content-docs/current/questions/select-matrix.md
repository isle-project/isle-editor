---
id: select-question-matrix
title: Select Question Matrix
sidebar_label: Select Question Matrix
---

Klausimas su atsakymu, sudarytas iš kelių pasirinkimo langelių.

## Parinktys

* __question__ | `(string|node)`: klausimas, kuris bus rodomas pasirinktos klausimų matricos viršuje.. Default: `''`.
* __rows__ | `array`: eilučių etiketės. Default: `[]`.
* __cols__ | `array`: stulpelių etiketės. Default: `[]`.
* __options__ | `object`: objektas su rakto ir vertės poromis, kurių raktai turi formą `row:col`, pvz., `0:0`, `0:1`, `1:0` ir t. t., o jų atitinkamos reikšmės yra galimų atsakymų variantų masyvai atskiriems pasirinktiems klausimams.. Default: `{}`.
* __solution__ | `object`: sprendimo objektas su raktų ir verčių poromis, kurių raktai turi formą `row:col`, pvz., `0:0`, `0:1`, `1:0` ir t. t., o jų atitinkamos reikšmės yra teisingo atsakymo elemento indeksas iš atitinkamo `options` masyvo.. Default: `{}`.
* __hints__ | `array<(string|node)>`: užuominos, kuriose pateikiamos rekomendacijos, kaip atsakyti į klausimą.. Default: `[]`.
* __hintPlacement__ | `string`: užuominų vieta (`top`, `left`, `right` arba `bottom`).. Default: `'bottom'`.
* __feedback__ | `boolean`: kontroliuoja, ar rodyti grįžtamojo ryšio mygtukus.. Default: `true`.
* __provideFeedback__ | `string`: ar pateikti "jokio" grįžtamojo ryšio, "individualų" grįžtamąjį ryšį apie pateiktą (-us) atsakymą (-us), ar "bendrą" grįžtamąjį ryšį apie visus klausimus.. Default: `'individual'`.
* __allowIncomplete__ | `boolean`: ar leisti pateikti informaciją, jei kiekviename pasirinkimo langelyje nėra padarytas pasirinkimas.. Default: `false`.
* __nTries__ | `number`: po kiek bandymų nebepriimami jokie atsakymai (jei `provideFeedback` nėra `none`). Default: `3`.
* __failureMsg__ | `string`: pranešimo tekstas, rodomas pateikus neteisingus atsakymus.. Default: `none`.
* __successMsg__ | `string`: pranešimo tekstas, rodomas pateikus teisingus atsakymus.. Default: `none`.
* __cellLabels__ | `object`: objekto apibrėžtų langelių su raktais, kurių formatas `row:col`, etiketės. Default: `{}`.
* __chat__ | `boolean`: kontroliuoja, ar elementas turi turėti integruotą pokalbių. Default: `false`.
* __panelProps__ | `object`: papildomos savybės, perduodamos išoriniam <Panel /> komponentui.. Default: `{}`.
* __className__ | `string`: klasės pavadinimas. Default: `''`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.
* __onSubmit__ | `function`: grįžtamojo ryšio funkcija, iškviečiama pateikus atsakymus, kurių pirmasis parametras yra atsakymai, o antrasis - teisingumą rodantis loginis rodiklis.. Default: `onSubmit() {}`.


## Pavyzdžiai


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

