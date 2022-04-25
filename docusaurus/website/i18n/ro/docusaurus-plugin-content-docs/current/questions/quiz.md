---
id: quiz 
title: Quiz
sidebar_label: Quiz
---

O componentă de chestionar care afișează o secvență de componente de întrebări.

## Opțiuni

* __confidence__ | `boolean`: dacă se afișează o scală Likert care solicită încrederea în răspunsul utilizatorului. Default: `false`.
* __forceConfidence__ | `boolean`: controlează dacă un utilizator trebuie să furnizeze un nivel de încredere înainte de a trece la următoarea întrebare. Default: `false`.
* __count__ | `number`: numărul de întrebări care trebuie incluse în chestionar. Default: `none`.
* __questions__ | `array (required)`: o serie de întrebări din care vor fi selectate aleatoriu întrebări. Default: `none`.
* __active__ | `boolean`: controlează dacă cronometrul pentru chestionar este activ sau nu. Default: `true`.
* __duration__ | `number`: durata testului (în minute); odată ce timpul a expirat, va fi afișată pagina de rezumat.. Default: `none`.
* __skippable__ | `boolean`: controlează dacă întrebările din chestionar pot fi sărite.. Default: `true`.
* __footerNodes__ | `array`: matrice de noduri care trebuie afișate în subsolul fiecărei întrebări. Default: `[]`.
* __nextLabel__ | `string`: eticheta butonului pentru a trece la întrebarea următoare. Default: `none`.
* __provideFeedback__ | `boolean`: controlează dacă se afișează studenților feedback-ul privind corectitudinea răspunsurilor lor după finalizarea testului. Default: `true`.
* __showFinishButton__ | `boolean`: controlează dacă se afișează sau nu butonul pentru a termina testul și a trece direct la pagina de rezultate. Default: `false`.
* __finishLabel__ | `string`: eticheta butonului pentru a termina testul. Default: `none`.
* __downloadButton__ | `boolean`: controlează dacă se afișează sau nu un buton pentru descărcarea răspunsurilor. Default: `true`.
* __repeatable__ | `boolean`: controlează dacă testul poate fi repetat. Default: `false`.
* __onFinished__ | `function`: callback invocat atunci când testul se termină și este afișată pagina de rezultate. Default: `onFinished() {}`.
* __onSubmit__ | `function`: callback invocat atunci când utilizatorul trimite un răspuns. Default: `onSubmit() {}`.


## Exemple

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
