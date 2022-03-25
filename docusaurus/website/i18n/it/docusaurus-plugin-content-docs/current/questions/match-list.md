---
id: match-list-question 
title: Match List Question
sidebar_label: Match List Question
---

Un componente ISLE che rende una domanda in cui l'allievo deve far corrispondere gli elementi di due liste tra loro nel modo corretto.

## Opzioni

* __question__ | `(string|node)`: domanda da visualizzare in cima al componente domanda della lista delle partite. Default: `''`.
* __elements__ | `array<{a,b}>`: un `array` che contiene le coppie corrette visualizzate nella parte superiore del componente di domanda a testo libero. Ogni elemento `array` deve essere un `oggetto` con proprietà `a` e `b`; fornire elementi con solo proprietà `a` o `b` per aggiungere le risposte del distrattore. Default: `[]`.
* __hintPlacement__ | `string`: posizionamento dei suggerimenti (`top`, `left`, `right` o `bottom`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: suggerimenti che forniscono indicazioni su come rispondere alla domanda. Default: `[]`.
* __provideFeedback__ | `boolean`: indica se la soluzione deve essere accessibile dopo che gli studenti hanno inviato le loro risposte. Default: `true`.
* __feedback__ | `boolean`: controlla se visualizzare i pulsanti di feedback. Default: `true`.
* __chat__ | `boolean`: controlla se l'elemento deve avere una chat integrata. Default: `false`.
* __colorScale__ | `array`: se impostati, i colori forniti vengono utilizzati per le piastrelle. Default: `none`.
* __shuffle__ | `string`: specifica se mischiare le colonne ``left``, ``right`` o `entrambi` i cui elementi devono essere abbinati; fornire `none` o qualsiasi altro valore per non mischiare gli elementi su entrambi i lati (può essere utile nel caso in cui non ci sia una soluzione presente). Default: `'both'`.
* __disableSubmitNotification__ | `boolean`: controlla se disabilitare le notifiche di presentazione. Default: `false`.
* __submissionMsg__ | `string`: notifica visualizzata quando il discente invia la sua risposta per la prima volta. Default: `'You have successfully submitted your answer.'`.
* __resubmissionMsg__ | `string`: notifica visualizzata per tutti gli invii dopo il primo. Default: `'You have successfully re-submitted your answer.'`.
* __until__ | `Date`: il tempo necessario per consentire agli studenti di presentare le risposte. Default: `none`.
* __points__ | `number`: numero massimo di punti assegnati in classifica. Default: `10`.
* __className__ | `string`: nome della classe. Default: `''`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.
* __onSubmit__ | `function`: richiamata invocata quando gli studenti inviano una risposta. Default: `onSubmit() {}`.


## Esempi

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Markdown', value: 'withMarkdown' },
        { label: 'With Solution & Style', value: 'withFeedback' },
        { label: 'Shuffle Right', value: 'shuffleRight' },
        { label: 'Points for Grading', value: 'grading' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<MatchListQuestion
    question="Please match the symbols and the respective chemical element."
    elements={[
        { a: 'Be', b: 'Berlyllium' },
        { a: 'Br', b: 'Bromine' },
        { a: 'Ar', b: 'Argon' },
        { a: 'Ac' , b: 'Actinium'},
        { b: 'Arsenic' },
        { b: 'Boron' }
    ]}
    provideFeedback={false}
/>
```
</TabItem>

<TabItem value="withMarkdown">

```jsx live
<MatchListQuestion
    question={<span>Please match the **symbols** and the respective *chemical* element.</span>}
    style={{ color: 'darkblue'}}
    elements={[
        { a: 'Ac' , b: 'Actinium'},
        { a: 'Ar', b: 'Argon' },
        { a: 'Be', b: 'Berlyllium' },
        { a: 'Br', b: 'Bromine' },
        { b: 'Arsenic' },
        { b: 'Boron' }
    ]}
/>
```
</TabItem>

<TabItem value="withFeedback">

```jsx live
<MatchListQuestion
    question="Please match the symbols and the respective chemical element."
    style={{ color: 'darkblue'}}
    elements={[
        { a: 'Ac' , b: 'Actinium'},
        { a: 'Ar', b: 'Argon' },
        { a: 'Be', b: 'Berlyllium' },
        { a: 'Br', b: 'Bromine' },
        { b: 'Arsenic' },
        { b: 'Boron' }
    ]}
/>
```
</TabItem>

<TabItem value="shuffleRight">

```jsx live
<MatchListQuestion
    question="Please match the correct surnames and first names of these statisticians."
    elements={[
        { a: 'Carl Friedrich', b: 'Gauß' },
        { a: 'Florence', b: 'Nightingale' },
        { a: 'Francis', b: 'Galton' },
        { a: 'John W.', b: 'Tukey' },
        { a: 'Karl', b: 'Pearson' },
        { a: 'Ronald', b: 'Fisher' }
    ]}
    shuffle="right"
/>
```
</TabItem>

<TabItem value="grading">

```jsx live
<MatchListQuestion
    question="Please match the correct surnames and first names of these statisticians."
    elements={[
        { a: 'Ronald', b: 'Fisher' },
        { a: 'Florence', b: 'Nightingale' },
        { a: 'Karl', b: 'Pearson' },
        { a: 'John W.', b: 'Tukey' },
        { a: 'Francis', b: 'Galton' },
        { a: 'Carl Friedrich', b: 'Gauß' }
    ]}
    points={20}
/>
```
</TabItem>

</Tabs>
