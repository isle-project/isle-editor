---
id: quiz 
title: Quiz
sidebar_label: Quiz
---

Komponent quizu przedstawiający sekwencję komponentów pytania.

## Opcje

* __confidence__ | `boolean`: czy wyświetlać skalę Likerta z zapytaniem o pewność odpowiedzi użytkownika. Default: `false`.
* __forceConfidence__ | `boolean`: kontroluje, czy użytkownik musi dostarczyć poziom zaufania przed przejściem do następnego pytania. Default: `false`.
* __count__ | `number`: liczba pytań do uwzględnienia w quizie. Default: `none`.
* __questions__ | `array (required)`: szereg pytań, z których pytania będą wybierane losowo. Default: `none`.
* __active__ | `boolean`: kontroluje, czy licznik czasu dla quizu jest aktywny. Default: `true`.
* __duration__ | `number`: czas trwania quizu (w minutach); po upłynięciu czasu wyświetlona zostanie strona podsumowująca. Default: `none`.
* __skippable__ | `boolean`: sprawdza, czy pytania w quizie są możliwe do pominięcia. Default: `true`.
* __footerNodes__ | `array`: szereg węzłów, które mają być wyświetlane w stopce każdego pytania. Default: `[]`.
* __nextLabel__ | `string`: etykieta przycisku do przejścia do następnego pytania. Default: `none`.
* __provideFeedback__ | `boolean`: kontroluje, czy po zakończeniu quizu uczniowie mają mieć możliwość pokazania informacji zwrotnej na temat poprawności swoich odpowiedzi. Default: `true`.
* __showFinishButton__ | `boolean`: kontroluje, czy należy wyświetlić przycisk do zakończenia quizu i przejść bezpośrednio do strony wyników. Default: `false`.
* __finishLabel__ | `string`: etykieta przycisku do zakończenia quizu. Default: `none`.
* __downloadButton__ | `boolean`: kontroluje, czy ma być wyświetlany przycisk do pobierania odpowiedzi. Default: `true`.
* __repeatable__ | `boolean`: określa, czy quiz może być powtarzany. Default: `false`.
* __onFinished__ | `function`: wywołanie zwrotne wywołane po zakończeniu quizu i wyświetleniu strony z wynikami. Default: `onFinished() {}`.
* __onSubmit__ | `function`: wywołanie zwrotne, gdy użytkownik udziela odpowiedzi. Default: `onSubmit() {}`.


## Przykłady

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
