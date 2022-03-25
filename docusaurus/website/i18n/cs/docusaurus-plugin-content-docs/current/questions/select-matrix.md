---
id: select-question-matrix
title: Select Question Matrix
sidebar_label: Select Question Matrix
---

Otázka s odpovědí, která se skládá z několika políček.

## Možnosti

* __question__ | `(string|node)`: otázka, která se zobrazí v horní části matice vybraných otázek.. Default: `''`.
* __rows__ | `array`: štítky řádků. Default: `[]`.
* __cols__ | `array`: popisky sloupců. Default: `[]`.
* __options__ | `object`: objekt s dvojicemi klíč-hodnota s klíči ve tvaru `řádek:sloupec`, např. `0:0`, `0:1`, `1:0` atd., a jejich odpovídajícími hodnotami jsou pole možných variant odpovědí pro jednotlivé výběrové otázky.. Default: `{}`.
* __solution__ | `object`: objekt řešení s dvojicemi klíč-hodnota s klíči ve tvaru `řádek:sloupec`, např. `0:0`, `0:1`, `1:0` atd., a jejich odpovídajícími hodnotami jsou indexy prvků správné odpovědi z příslušného pole `možnosti`.. Default: `{}`.
* __hints__ | `array<(string|node)>`: nápovědy, jak odpovědět na otázku.. Default: `[]`.
* __hintPlacement__ | `string`: umístění nápovědy (buď `top`, `left`, `right`, nebo `bottom`).. Default: `'bottom'`.
* __feedback__ | `boolean`: řídí, zda se mají zobrazovat tlačítka zpětné vazby. Default: `true`.
* __provideFeedback__ | `string`: zda poskytnout `žádnou` zpětnou vazbu vůbec, `individuální` zpětnou vazbu k předloženým odpovědím nebo `celkovou` zpětnou vazbu ke všem otázkám.. Default: `'individual'`.
* __allowIncomplete__ | `boolean`: zda povolit podání bez výběru v každém výběrovém poli.. Default: `false`.
* __nTries__ | `number`: po kolika pokusech se nepřijímají žádné další odpovědi (pokud `provideFeedback` není `none`).. Default: `3`.
* __failureMsg__ | `string`: text oznámení zobrazený při odeslání nesprávné odpovědi. Default: `none`.
* __successMsg__ | `string`: text oznámení zobrazený po odeslání správných odpovědí. Default: `none`.
* __cellLabels__ | `object`: popisky pro buňky definované objektem s klíči ve formátu `řádek:sloupec`. Default: `{}`.
* __chat__ | `boolean`: řídí, zda má mít prvek integrovaný chat. Default: `false`.
* __panelProps__ | `object`: další vlastnosti, které se předávají vnější komponentě <Panel />.. Default: `{}`.
* __className__ | `string`: název třídy. Default: `''`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.
* __onSubmit__ | `function`: funkce zpětného volání vyvolaná při odeslání s odpověďmi jako prvním a logickým parametrem označujícím správnost jako druhým parametrem.. Default: `onSubmit() {}`.


## Příklady


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

