---
id: select-question-matrix
title: Select Question Matrix
sidebar_label: Select Question Matrix
---

Jautājums ar atbildi, kas sastāv no vairākiem izvēles rūtiņām.

## Iespējas

* __question__ | `(string|node)`: jautājums, kas tiks parādīts atlases jautājumu matricas augšpusē.. Default: `''`.
* __rows__ | `array`: rindu etiķetes. Default: `[]`.
* __cols__ | `array`: kolonnu etiķetes. Default: `[]`.
* __options__ | `object`: objekts ar atslēgu-vērtību pāriem, kuru atslēgas ir formā `row:col`, piemēram, `0:0`, `0:1`, `1:0` utt., un to atbilstošās vērtības ir atsevišķu atlases jautājumu iespējamo atbilžu masīvi.. Default: `{}`.
* __solution__ | `object`: risinājuma objekts ar atslēgu-vērtību pāriem, kuru atslēgas ir formā `row:col`, piemēram, `0:0`, `0:1`, `1:0` utt., un to atbilstošās vērtības ir pareizās atbildes elementa indekss no attiecīgā `options` masīva.. Default: `{}`.
* __hints__ | `array<(string|node)>`: norādījumi, kā atbildēt uz jautājumu.. Default: `[]`.
* __hintPlacement__ | `string`: mājienu izvietojums (`top`, `left`, `right` vai `bottom`).. Default: `'bottom'`.
* __feedback__ | `boolean`: kontrolē, vai tiek rādītas atgriezeniskās saites pogas.. Default: `true`.
* __provideFeedback__ | `string`: vai vispār sniegt `nevienu` atgriezenisko saiti, `individuālu` atgriezenisko saiti par iesniegto(-ajām) atbildi(-ēm) vai `kopējo` atgriezenisko saiti par visiem jautājumiem.. Default: `'individual'`.
* __allowIncomplete__ | `boolean`: vai atļaut iesniegšanu bez izvēles katrā izvēles lodziņā.. Default: `false`.
* __nTries__ | `number`: pēc cik mēģinājumiem vairs netiek pieņemtas atbildes (ja `provideFeedback` nav `none`).. Default: `3`.
* __failureMsg__ | `string`: paziņojuma teksts, kas tiek parādīts pēc nepareizu atbilžu iesniegšanas. Default: `none`.
* __successMsg__ | `string`: paziņojuma teksts, kas tiek parādīts pēc pareizo atbilžu iesniegšanas. Default: `none`.
* __cellLabels__ | `object`: etiķetes šūnām, ko definē objekts ar atslēgām formātā `row:col`.. Default: `{}`.
* __chat__ | `boolean`: kontrolē, vai elementam ir jābūt integrētam tērzēšanas. Default: `false`.
* __panelProps__ | `object`: papildu rekvizīti, kas jānodod ārējam <Panel /> komponentam.. Default: `{}`.
* __className__ | `string`: klases nosaukums. Default: `''`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.
* __onSubmit__ | `function`: atsauces funkcija, kas tiek izsaukta pēc iesniegšanas ar atbildēm kā pirmo parametru un boolean, kas norāda pareizību, kā otro parametru.. Default: `onSubmit() {}`.


## Piemēri


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

