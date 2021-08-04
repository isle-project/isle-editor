---
id: select-question-matrix
title: Select Question Matrix
sidebar_label: Select Question Matrix
---

Въпрос с отговор, състоящ се от няколко полета за избор.

## Опции

* __question__ | `(string|node)`: въпрос, който да се показва в горната част на матрицата за избор на въпрос. Default: `''`.
* __rows__ | `array`: етикети на редове. Default: `[]`.
* __cols__ | `array`: етикети на колони. Default: `[]`.
* __options__ | `object`: обект с двойки ключове-стойности с ключове с формата `row:col`, например `0:0`, `0:1`, `1:0` и т.н., а съответстващите им стойности са масиви от възможните варианти на отговори за отделните въпроси за избор. Default: `{}`.
* __solution__ | `object`: обект за решение с двойки ключове-стойности с ключове с формата `реда:колона`, например `0:0`, `0:1`, `1:0` и т.н., а съответните им стойности са индексът на елемента на правилния отговор от съответния масив `опции`.. Default: `{}`.
* __hints__ | `array<(string|node)>`: подсказки, които дават насоки за това как да отговорите на въпроса. Default: `[]`.
* __hintPlacement__ | `string`: разположение на подсказките (или `top`, `right`, `left`, или `bottom`). Default: `'bottom'`.
* __feedback__ | `boolean`: контролира дали да се показват бутони за обратна връзка. Default: `true`.
* __provideFeedback__ | `string`: дали да предоставите "никаква" обратна връзка изобщо, "индивидуална" обратна връзка за подадения отговор(и) или "обща" обратна връзка за всички въпроси.. Default: `'individual'`.
* __allowIncomplete__ | `boolean`: дали да разрешите подаване на данни без избор, направен във всяко поле за избор. Default: `false`.
* __nTries__ | `number`: след колко опита не се приемат допълнителни отговори (ако `provideFeedback` не е `none`). Default: `3`.
* __failureMsg__ | `string`: текст на известие, който се показва при подаване на неправилни отговори. Default: `none`.
* __successMsg__ | `string`: текст на известие, който се показва при подаване на верни отговори. Default: `none`.
* __cellLabels__ | `object`: етикети за клетки, дефинирани от обект с ключове с формат `row:col`. Default: `{}`.
* __chat__ | `boolean`: контролира дали елементът трябва да има интегриран чат. Default: `false`.
* __panelProps__ | `object`: допълнителни свойства, които да се предават на външния компонент <Panel /> . Default: `{}`.
* __className__ | `string`: име на класа. Default: `''`.
* __style__ | `object`: CSS инлайн стилове. Default: `{}`.
* __onSubmit__ | `function`: функция за обратна връзка, която се извиква при подаване с отговорите като първи и булев параметър, указващ коректност, като втори параметър. Default: `onSubmit() {}`.


## Примери


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

