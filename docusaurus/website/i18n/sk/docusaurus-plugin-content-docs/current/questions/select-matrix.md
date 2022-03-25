---
id: select-question-matrix
title: Select Question Matrix
sidebar_label: Select Question Matrix
---

Otázka s odpoveďou pozostávajúca z viacerých výberových polí.

## Možnosti

* __question__ | `(string|node)`: otázka, ktorá sa má zobraziť v hornej časti matice vybraných otázok. Default: `''`.
* __rows__ | `array`: štítky riadkov. Default: `[]`.
* __cols__ | `array`: štítky stĺpcov. Default: `[]`.
* __options__ | `object`: objekt s dvojicami kľúč-hodnota s kľúčmi v tvare `riadok:stĺpec`, napr. `0:0`, `0:1`, `1:0` atď., a ich zodpovedajúce hodnoty sú polia možných odpovedí pre jednotlivé otázky select. Default: `{}`.
* __solution__ | `object`: objekt riešenia s dvojicami kľúč-hodnota s kľúčmi v tvare `riadok:stĺpec`, napr. `0:0`, `0:1`, `1:0` atď., a ich zodpovedajúce hodnoty sú indexy správnych prvkov odpovede z príslušného poľa `možnosti`. Default: `{}`.
* __hints__ | `array<(string|node)>`: nápovedy, ktoré poskytujú návod, ako odpovedať na otázku. Default: `[]`.
* __hintPlacement__ | `string`: umiestnenie nápovedy (buď `top`, `left`, `right` alebo `bottom`). Default: `'bottom'`.
* __feedback__ | `boolean`: ovláda, či sa majú zobrazovať tlačidlá spätnej väzby.. Default: `true`.
* __provideFeedback__ | `string`: či chcete poskytnúť `žiadnu` spätnú väzbu, `individuálnu` spätnú väzbu na predložené odpovede alebo `celkovú` spätnú väzbu na všetky otázky.. Default: `'individual'`.
* __allowIncomplete__ | `boolean`: či povoliť odosielanie bez výberu v každom výberovom poli.. Default: `false`.
* __nTries__ | `number`: po koľkých pokusoch sa neprijmú žiadne ďalšie odpovede (ak `provideFeedback` nie je `none`). Default: `3`.
* __failureMsg__ | `string`: text oznámenia zobrazený pri odoslaní nesprávnych odpovedí. Default: `none`.
* __successMsg__ | `string`: text oznámenia zobrazený po odoslaní správnych odpovedí. Default: `none`.
* __cellLabels__ | `object`: štítky pre bunky definované objektom s kľúčmi vo formáte `riadok:stĺpec`. Default: `{}`.
* __chat__ | `boolean`: kontroluje, či má mať prvok integrovaný chat. Default: `false`.
* __panelProps__ | `object`: ďalšie vlastnosti, ktoré sa majú odovzdať vonkajšej zložke <Panel /> . Default: `{}`.
* __className__ | `string`: názov triedy. Default: `''`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.
* __onSubmit__ | `function`: spätné volanie vyvolané po odoslaní s odpoveďami ako prvým a logickým parametrom označujúcim správnosť ako druhým parametrom. Default: `onSubmit() {}`.


## Príklady


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

