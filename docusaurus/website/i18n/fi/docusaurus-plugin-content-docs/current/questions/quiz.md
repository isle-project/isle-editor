---
id: quiz 
title: Quiz
sidebar_label: Quiz
---

Tietokilpailukomponentti, joka näyttää kysymyskomponenttien sarjan.

## Vaihtoehdot

* __confidence__ | `boolean`: näytetäänkö Likertin asteikko, jossa kysytään käyttäjän vastauksen luotettavuutta.. Default: `false`.
* __forceConfidence__ | `boolean`: valvoo, onko käyttäjän annettava luottamustaso ennen seuraavaan kysymykseen siirtymistä.. Default: `false`.
* __count__ | `number`: tietokilpailuun sisällytettävien kysymysten määrä. Default: `none`.
* __questions__ | `array (required)`: kysymyssarja, josta kysymykset valitaan satunnaisesti.. Default: `none`.
* __active__ | `boolean`: valvoo, onko tietokilpailun ajastin aktiivinen.. Default: `true`.
* __duration__ | `number`: tietokilpailun kesto (minuutteina); kun aika on kulunut, yhteenvetosivu tulee näkyviin.. Default: `none`.
* __skippable__ | `boolean`: valvoo, voidaanko tietokilpailun kysymykset ohittaa.. Default: `true`.
* __footerNodes__ | `array`: kunkin kysymyksen alatunnisteessa näytettävien solmujen joukko.. Default: `[]`.
* __nextLabel__ | `string`: seuraavaan kysymykseen siirtymistä koskevan painikkeen merkintä. Default: `none`.
* __provideFeedback__ | `boolean`: valvoo, näytetäänkö opiskelijoille palautetta vastausten oikeellisuudesta tietokilpailun suorittamisen jälkeen.. Default: `true`.
* __showFinishButton__ | `boolean`: valvoo, näytetäänkö painike tietovisan loppuun saattamiseksi ja suoraan tulossivulle siirtymiseksi.. Default: `false`.
* __finishLabel__ | `string`: tietokilpailun loppuun saattamista koskevan painikkeen etiketti. Default: `none`.
* __downloadButton__ | `boolean`: valvoo, näytetäänkö vastausten lataamista varten painike.. Default: `true`.
* __repeatable__ | `boolean`: valvoo, voidaanko tietokilpailu toistaa. Default: `false`.
* __onFinished__ | `function`: callback, jota kutsutaan, kun tietokilpailu on päättynyt ja tulossivu näytetään.. Default: `onFinished() {}`.
* __onSubmit__ | `function`: callback, jota kutsutaan, kun käyttäjä lähettää vastauksen. Default: `onSubmit() {}`.


## Esimerkkejä

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
