---
id: quiz 
title: Quiz
sidebar_label: Quiz
---

Een quizcomponent met een opeenvolging van vraagcomponenten.

## Opties

* __confidence__ | `boolean`: of er een Likert-weegschaal moet worden getoond die het vertrouwen van de gebruiker vraagt. Default: `false`.
* __forceConfidence__ | `boolean`: controleert of een gebruiker een vertrouwensniveau moet bieden voordat hij naar de volgende vraag overgaat. Default: `false`.
* __count__ | `number`: aantal vragen om in de quiz op te nemen. Default: `none`.
* __questions__ | `array (required)`: reeks vragen waaruit willekeurig gekozen zal worden. Default: `none`.
* __active__ | `boolean`: bepaalt of de timer voor de quiz actief is. Default: `true`.
* __duration__ | `number`: duur van de quiz (in minuten); als de tijd voorbij is, wordt de overzichtspagina weergegeven. Default: `none`.
* __skippable__ | `boolean`: controleert of vragen in de quiz overgeslagen kunnen worden. Default: `true`.
* __footerNodes__ | `array`: array van knooppunten die in de voettekst van elke vraag moeten worden weergegeven. Default: `[]`.
* __nextLabel__ | `string`: label van de knop om door te gaan naar de volgende vraag. Default: `none`.
* __provideFeedback__ | `boolean`: controleert of de leerlingen na afloop van de quiz feedback krijgen over de juistheid van hun antwoorden. Default: `true`.
* __showFinishButton__ | `boolean`: bepaalt of de knop moet worden weergegeven om de quiz af te sluiten en direct naar de resultatenpagina te springen. Default: `false`.
* __finishLabel__ | `string`: label van knop om de quiz af te ronden. Default: `none`.
* __downloadButton__ | `boolean`: bepaalt of er een knop moet worden weergegeven voor het downloaden van de antwoorden. Default: `true`.
* __repeatable__ | `boolean`: undefined. Default: `false`.
* __onFinished__ | `function`: terugbellen wordt aangeroepen als de quiz klaar is en de resultatenpagina wordt weergegeven. Default: `onFinished() {}`.
* __onSubmit__ | `function`: terugbellen wordt aangeroepen wanneer de gebruiker een antwoord indient. Default: `onSubmit() {}`.


## Voorbeelden

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
