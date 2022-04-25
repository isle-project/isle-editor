---
id: quiz 
title: Quiz
sidebar_label: Quiz
---

Un componente del quiz che mostra una sequenza di componenti di domanda.

## Opzioni

* __confidence__ | `boolean`: se visualizzare una bilancia Likert che chiede la sicurezza della risposta dell'utente. Default: `false`.
* __forceConfidence__ | `boolean`: controlla se un utente deve fornire un livello di fiducia prima di passare alla domanda successiva. Default: `false`.
* __count__ | `number`: numero di domande da includere nel quiz. Default: `none`.
* __questions__ | `array (required)`: array di domande da cui le domande saranno selezionate in modo casuale. Default: `none`.
* __active__ | `boolean`: controlla se il timer del quiz è attivo. Default: `true`.
* __duration__ | `number`: durata del quiz (in minuti); una volta scaduto il tempo, verrà visualizzata la pagina di riepilogo. Default: `none`.
* __skippable__ | `boolean`: controlla se le domande del quiz possono essere saltate. Default: `true`.
* __footerNodes__ | `array`: array di nodi da visualizzare nel piè di pagina di ogni domanda. Default: `[]`.
* __nextLabel__ | `string`: etichetta del pulsante per passare alla domanda successiva. Default: `none`.
* __provideFeedback__ | `boolean`: controlla se mostrare agli studenti un feedback sulla correttezza delle loro risposte dopo il completamento del quiz. Default: `true`.
* __showFinishButton__ | `boolean`: controlla se visualizzare il pulsante per finire il quiz e saltare direttamente alla pagina dei risultati. Default: `false`.
* __finishLabel__ | `string`: etichetta del pulsante per finire il quiz. Default: `none`.
* __downloadButton__ | `boolean`: controlla se visualizzare un pulsante per scaricare le risposte. Default: `true`.
* __repeatable__ | `boolean`: undefined. Default: `false`.
* __onFinished__ | `function`: richiamata quando il quiz è finito e viene visualizzata la pagina dei risultati. Default: `onFinished() {}`.
* __onSubmit__ | `function`: richiamata quando l'utente invia una risposta. Default: `onSubmit() {}`.


## Esempi

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Subset of Questions', value: 'subset' },
        { label: 'Not Skippable', value: 'notSkippable' },
        { label: 'Confidence Check', value: 'confidenceCheck' },,
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Quiz
    questions={[
        <FreeTextQuestion 
            question="What is the capital of France?" 
            rows={1} 
            solution="Paris" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Poland?" 
            rows={1} 
            solution="Warsaw" 
        />
    ]}
/>
```
</TabItem>

<TabItem value="subset">

```jsx live
<Quiz
    count={3}
    questions={[
        <FreeTextQuestion 
            question="What is the capital of France?" 
            rows={1} 
            solution="Paris" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Poland?" 
            rows={1} 
            solution="Warsaw" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Portugal?" 
            rows={1} 
            solution="Lisbon" 
        />,     
        <FreeTextQuestion 
            question="What is the capital of Egypt?" 
            rows={1} 
            solution="Cairo" 
        />
    ]}
/>
```
</TabItem>

<TabItem value="notSkippable" >

```jsx live
<Quiz
    skippable={false}
    questions={[
        <FreeTextQuestion 
            question="What is the capital of France?" 
            rows={1} 
            solution="Paris" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Poland?" 
            rows={1} 
            solution="Warsaw" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Portugal?" 
            rows={1} 
            solution="Lisbon" 
        />,     
        <FreeTextQuestion 
            question="What is the capital of Egypt?" 
            rows={1} 
            solution="Cairo" 
        />
    ]}
/>
```
</TabItem>

<TabItem value="confidenceCheck">

```jsx live
<Quiz
    confidence
    forceConfidence
    count={4}
    questions={[
        <FreeTextQuestion 
            question="What is the capital of France?" 
            rows={1} 
            solution="Paris" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Poland?" 
            rows={1} 
            solution="Warsaw" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Portugal?" 
            rows={1} 
            solution="Lisbon" 
        />,     
        <FreeTextQuestion 
            question="What is the capital of Egypt?" 
            rows={1} 
            solution="Cairo" 
        />
    ]}
/>
```
</TabItem>

</Tabs>
