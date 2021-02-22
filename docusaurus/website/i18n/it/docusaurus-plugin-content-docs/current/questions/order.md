---
id: order-question
title: Order Question
sidebar_label: Order Question
---

Un componente di domanda d'ordine che chiede allo studente di portare una collezione di elementi nell'ordine corretto.

## Options

* __question__ | `(string|node)`: domanda per la quale lo studente deve portare le "opzioni" disponibili nell'ordine corretto. Default: `''`.
* __options__ | `array (required)`: una serie di testi che lo studente deve portare nell'ordine corretto (si presume che sia l'ordine fornito). Default: `none`.
* __provideFeedback__ | `boolean`: controlla se mostrare una notifica che indica se la risposta inviata è corretta o meno. Default: `true`.
* __hintPlacement__ | `string`: posizionamento dei suggerimenti (in alto, a sinistra, a destra o in basso). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: suggerimenti che forniscono indicazioni su come rispondere alla domanda. Default: `[]`.
* __feedback__ | `boolean`: controlla se visualizzare i pulsanti di feedback. Default: `true`.
* __chat__ | `boolean`: controlla se l'elemento deve avere una chat integrata. Default: `false`.
* __failureMsg__ | `string`: messaggio da visualizzare quando lo studente invia una risposta errata. Default: `none`.
* __successMsg__ | `string`: messaggio da visualizzare quando lo studente invia la risposta corretta. Default: `none`.
* __disableSubmitNotification__ | `boolean`: controlla se disabilitare le notifiche di presentazione. Default: `false`.
* __until__ | `Date`: il tempo necessario per consentire agli studenti di presentare le risposte. Default: `none`.
* __points__ | `number`: numero massimo di punti assegnati in classifica. Default: `10`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.
* __onChange__ | `function`: callback che si attiva dopo aver trascinato un elemento; ha due parametri: un `booleano` che indica se gli elementi sono stati messi nell'ordine corretto e un `array` con l'ordine corrente. Default: `onChange() {}`.
* __onSubmit__ | `function`: richiamata al momento dell'invio della risposta; ha come unico parametro un `booleano` che indica se gli elementi sono stati messi nell'ordine corretto. Default: `onSubmit() {}`.


## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Hints', value: 'hints' },
        { label: 'Submit Function', value: 'submitFunction' },
        { label: 'With Points and Feedback Message', value: 'withGradingAndFeedback' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<OrderQuestion
    question="Order the letters alphabetically!"
    options={[
        "Alpha",
        "Beta",
        "Gamma",
        "Delta"
    ]}
/>
```
</TabItem>

<TabItem value="hints">

```jsx live
<OrderQuestion
    question="Order the letters alphabetically!"
    options={[
        "Alpha",
        "Beta",
        "Gamma",
        "Delta"
    ]}
    hints={[ 'Delta succeeds Gamma in the Greek alphabet' ]}
    hintPlacement="bottom"
/>
```
</TabItem>

<TabItem value="submitFunction">

```jsx live
<OrderQuestion
    question="Order the letters alphabetically!"
    options={[
        "A",
        "G",
        "V"
    ]}
    onSubmit={() => {
        alert( 'Any JavaScript function could be executed here...' );
    }}
/>
```
</TabItem>

<TabItem value="withGradingAndFeedback">

```jsx live
<OrderQuestion
    question="Arrange the events in historical order"
    options={[
        "Napoleon's coronation as emperor",
        "The Crimean War",
        "Bombing of Hiroshima",
        "Fall of the Berlin Wall",
        "Donald Trump's inauguration",
    ]}
    points={10}
    successMsg = "Great! Looks like you are a history expert"
/>
```
</TabItem>

</Tabs>
