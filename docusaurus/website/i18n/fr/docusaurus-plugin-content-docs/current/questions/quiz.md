---
id: quiz 
title: Quiz
sidebar_label: Quiz
---

Un élément de quiz affichant une séquence d'éléments de questions.

## Options

* __confidence__ | `boolean`: s'il faut afficher une échelle de Likert demandant la confiance de la réponse de l'utilisateur. Default: `false`.
* __forceConfidence__ | `boolean`: contrôle si un utilisateur doit fournir un niveau de confiance avant de passer à la question suivante. Default: `false`.
* __count__ | `number`: nombre de questions à inclure dans le quiz. Default: `none`.
* __questions__ | `array (required)`: un ensemble de questions parmi lesquelles les questions seront choisies au hasard. Default: `none`.
* __active__ | `boolean`: contrôle si la minuterie du quiz est active. Default: `true`.
* __duration__ | `number`: durée du quiz (en minutes) ; une fois le temps écoulé, la page de résumé s'affiche. Default: `none`.
* __skippable__ | `boolean`: contrôle si les questions du quiz peuvent être sautées. Default: `true`.
* __footerNodes__ | `array`: une série de nœuds à afficher dans le pied de page de chaque question. Default: `[]`.
* __nextLabel__ | `string`: étiquette du bouton pour passer à la question suivante. Default: `none`.
* __provideFeedback__ | `boolean`: contrôle s'il faut montrer aux élèves un retour d'information sur l'exactitude de leurs réponses après le test. Default: `true`.
* __showFinishButton__ | `boolean`: contrôle l'affichage ou non d'un bouton pour terminer le quiz et passer directement à la page des résultats. Default: `false`.
* __finishLabel__ | `string`: étiquette du bouton pour terminer le quiz. Default: `none`.
* __downloadButton__ | `boolean`: contrôle l'affichage ou non d'un bouton pour le téléchargement des réponses. Default: `true`.
* __repeatable__ | `boolean`: undefined. Default: `false`.
* __onFinished__ | `function`: rappel invoqué lorsque le quiz est terminé et que la page des résultats est affichée. Default: `onFinished() {}`.
* __onSubmit__ | `function`: rappel invoqué lorsque l'utilisateur soumet une réponse. Default: `onSubmit() {}`.


## Exemples

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
