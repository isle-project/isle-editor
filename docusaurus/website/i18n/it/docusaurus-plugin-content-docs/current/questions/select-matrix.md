---
id: select-question-matrix
title: Select Question Matrix
sidebar_label: Select Question Matrix
---

Una domanda con una risposta composta da più caselle di selezione.

## Opzioni

* __question__ | `(string|node)`: domanda da visualizzare nella parte superiore della matrice delle domande selezionate. Default: `''`.
* __rows__ | `array`: etichette di fila. Default: `[]`.
* __cols__ | `array`: etichette a colonna. Default: `[]`.
* __options__ | `object`: con coppie chiave-valore con chiavi aventi la forma `row:col`, p.e. `0:0`, `0:1`, `1:0` ecc. e i loro valori corrispondenti sono array delle possibili scelte di risposta per le singole domande selezionate. Default: `{}`.
* __solution__ | `object`: oggetto soluzione con coppie chiave-valore con chiavi che hanno la forma `row:col`, p.e. `0:0`, `0:1`, `1:0` ecc. e i loro valori corrispondenti sono l'indice dell'elemento di risposta corretto dalla rispettiva matrice `options`. Default: `{}`.
* __hints__ | `array<(string|node)>`: suggerimenti che forniscono indicazioni su come rispondere alla domanda. Default: `[]`.
* __hintPlacement__ | `string`: posizionamento dei suggerimenti (`top`, `left`, `right` o `bottom`). Default: `'bottom'`.
* __feedback__ | `boolean`: controlla se visualizzare i pulsanti di feedback. Default: `true`.
* __provideFeedback__ | `string`: se fornire un feedback "nessuno", un feedback "individuale" sulla/e risposta/e fornita/e o un feedback "generale" per tutte le domande. Default: `'individual'`.
* __allowIncomplete__ | `boolean`: se consentire l'invio senza selezione in ogni casella di selezione. Default: `false`.
* __nTries__ | `number`: dopo quanti tentativi non vengono accettate altre risposte (se "fornire feedback" non è "nessuno"). Default: `3`.
* __failureMsg__ | `string`: testo di notifica visualizzato in seguito all'invio di risposte errate. Default: `none`.
* __successMsg__ | `string`: testo di notifica visualizzato al momento dell'invio delle risposte corrette. Default: `none`.
* __cellLabels__ | `object`: etichette per le celle definite dall'oggetto con chiavi aventi il formato `row:col. Default: `{}`.
* __chat__ | `boolean`: controlla se l'elemento deve avere una chat integrata. Default: `false`.
* __panelProps__ | `object`: proprietà aggiuntive da passare al componente esterno <Panel /> . Default: `{}`.
* __className__ | `string`: nome della classe. Default: `''`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.
* __onSubmit__ | `function`: funzione di callback invocata all'invio con le risposte come primo parametro e un booleano che indica la correttezza come secondo parametro. Default: `onSubmit() {}`.


## Esempi


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

