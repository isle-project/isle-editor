---
id: quiz 
title: Quiz
sidebar_label: Quiz
---

Eine Quizkomponente, die eine Folge von Fragekomponenten anzeigt.

## Optionen

* __confidence__ | `boolean`: ob eine Likert-Skala angezeigt werden soll, die nach dem Vertrauen in die Antwort des Benutzers fragt. Default: `false`.
* __forceConfidence__ | `boolean`: steuert, ob ein Benutzer eine Vertrauensstufe angeben muss, bevor er zur nächsten Frage übergehen kann. Default: `false`.
* __count__ | `number`: Anzahl der Fragen, die in das Quiz aufgenommen werden sollen. Default: `none`.
* __questions__ | `array (required)`: Array von Fragen, aus dem die Fragen zufällig ausgewählt werden. Default: `none`.
* __active__ | `boolean`: steuert, ob der Timer für das Quiz aktiv ist. Default: `true`.
* __duration__ | `number`: Dauer des Quiz (in Minuten); wenn die Zeit abgelaufen ist, wird die Zusammenfassungsseite angezeigt. Default: `none`.
* __skippable__ | `boolean`: steuert, ob Fragen im Quiz übersprungen werden können. Default: `true`.
* __footerNodes__ | `array`: Array von Knoten, die in der Fußzeile jeder Frage angezeigt werden sollen. Default: `[]`.
* __nextLabel__ | `string`: Beschriftung der Schaltfläche zum Weiterschalten zur nächsten Frage. Default: `none`.
* __provideFeedback__ | `boolean`: steuert, ob den Schülern nach Abschluss des Quiz eine Rückmeldung über die Korrektheit ihrer Antworten angezeigt werden soll. Default: `true`.
* __showFinishButton__ | `boolean`: steuert, ob die Schaltfläche zum Beenden des Quiz und zum direkten Springen zur Ergebnisseite angezeigt werden soll. Default: `false`.
* __finishLabel__ | `string`: Beschriftung der Schaltfläche zum Beenden des Quiz. Default: `none`.
* __downloadButton__ | `boolean`: steuert, ob eine Schaltfläche zum Herunterladen der Antworten angezeigt werden soll. Default: `true`.
* __repeatable__ | `boolean`: undefined. Default: `false`.
* __onFinished__ | `function`: Callback, der aufgerufen wird, wenn das Quiz beendet ist und die Ergebnisseite angezeigt wird. Default: `onFinished() {}`.
* __onSubmit__ | `function`: Callback, der aufgerufen wird, wenn der Benutzer eine Antwort sendet. Default: `onSubmit() {}`.


## Beispiele

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
