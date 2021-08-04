---
id: select-question-matrix
title: Select Question Matrix
sidebar_label: Select Question Matrix
---

Pytanie z odpowiedzią składającą się z wielu pól wyboru.

## Opcje

* __question__ | `(string|node)`: pytanie, które ma być wyświetlane w górnej części matrycy pytań wybranych. Default: `''`.
* __rows__ | `array`: etykiety wierszy. Default: `[]`.
* __cols__ | `array`: etykiety kolumnowe. Default: `[]`.
* __options__ | `object`: obiekt z parami klucz-wartość z kluczami posiadającymi postać `row:col`, np. `0:0`, `0:1`, `1:0` itd., a odpowiadające im wartości są tablicami możliwych do wyboru odpowiedzi na poszczególne wybrane pytania. Default: `{}`.
* __solution__ | `object`: obiekt rozwiązania z parami klucz-wartość z kluczami o postaci `row:col`, np. `0:0`, `0:1`, `1:0` itd., a odpowiadające im wartości są indeksem prawidłowego elementu odpowiedzi z odpowiedniej tablicy `opcji. Default: `{}`.
* __hints__ | `array<(string|node)>`: podpowiedzi zawierające wskazówki, jak odpowiedzieć na pytanie. Default: `[]`.
* __hintPlacement__ | `string`: umieszczenie podpowiedzi (albo `top`, `left`, `right`, albo `bottom`). Default: `'bottom'`.
* __feedback__ | `boolean`: kontroluje, czy mają być wyświetlane przyciski sprzężenia zwrotnego. Default: `true`.
* __provideFeedback__ | `string`: czy w ogóle przekazywać "żadne" informacje zwrotne, "indywidualne" informacje zwrotne dotyczące przedłożonych odpowiedzi, czy też "ogólne" informacje zwrotne dotyczące wszystkich pytań. Default: `'individual'`.
* __allowIncomplete__ | `boolean`: czy zezwolić na składanie wniosków bez zaznaczenia w każdym polu wyboru. Default: `false`.
* __nTries__ | `number`: po ilu próbach nie są akceptowane żadne dalsze odpowiedzi (jeśli `provideFeedback` nie jest `żadna`). Default: `3`.
* __failureMsg__ | `string`: tekst powiadomienia wyświetlany po udzieleniu błędnych odpowiedzi. Default: `none`.
* __successMsg__ | `string`: tekst powiadomienia wyświetlany po udzieleniu prawidłowych odpowiedzi. Default: `none`.
* __cellLabels__ | `object`: etykiety dla komórek zdefiniowanych przez obiekt o kluczach w formacie `row:col`. Default: `{}`.
* __chat__ | `boolean`: kontroluje, czy dany element powinien mieć zintegrowaną rozmowę. Default: `false`.
* __panelProps__ | `object`: dodatkowe właściwości przekazywane do zewnętrznego komponentu <Panel /> . Default: `{}`.
* __className__ | `string`: nazwa klasy. Default: `''`.
* __style__ | `object`: Style CSS inline. Default: `{}`.
* __onSubmit__ | `function`: funkcja callback wywołana po przesłaniu odpowiedzi jako pierwsza i boolean wskazująca poprawność jako drugi parametr. Default: `onSubmit() {}`.


## Przykłady


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

