---
id: select-question-matrix
title: Select Question Matrix
sidebar_label: Select Question Matrix
---

Kysymys, jonka vastaus koostuu useista valintaruuduista.

## Vaihtoehdot

* __question__ | `(string|node)`: kysymys, joka näytetään valintakysymysmatriisin yläreunassa.. Default: `''`.
* __rows__ | `array`: rivien merkinnät. Default: `[]`.
* __cols__ | `array`: sarakkeiden merkinnät. Default: `[]`.
* __options__ | `object`: objekti, jossa on avain-arvopareja, joiden avaimet ovat muotoa `row:col`, esim. `0:0`, `0:1`, `1:0` jne., ja niiden vastaavat arvot ovat yksittäisten valintakysymysten mahdollisten vastausvaihtoehtojen taulukoita.. Default: `{}`.
* __solution__ | `object`: ratkaisuobjekti, jossa on avain-arvopareja, joiden avaimet ovat muotoa `row:col`, esim. `0:0`, `0:1`, `1:0` jne. ja joiden vastaavat arvot ovat oikean vastauselementin indeksi vastaavasta `options`-joukosta.. Default: `{}`.
* __hints__ | `array<(string|node)>`: vihjeitä, joissa annetaan ohjeita kysymykseen vastaamiseen.. Default: `[]`.
* __hintPlacement__ | `string`: vihjeiden sijainti (joko `top`, `left`, `right` tai `bottom`).. Default: `'bottom'`.
* __feedback__ | `boolean`: ohjaa, näytetäänkö palautepainikkeet. Default: `true`.
* __provideFeedback__ | `string`: annetaanko palautetta "ei lainkaan", "yksittäistä" palautetta annetuista vastauksista vai "yleistä" palautetta kaikista kysymyksistä.. Default: `'individual'`.
* __allowIncomplete__ | `boolean`: sallitaanko lähettäminen ilman kussakin valintaruudussa tehtyä valintaa.. Default: `false`.
* __nTries__ | `number`: kuinka monen yrityksen jälkeen vastauksia ei enää hyväksytä (jos `provideFeedback` ei ole `none`).. Default: `3`.
* __failureMsg__ | `string`: ilmoitusteksti, joka näytetään virheellisten vastausten lähettämisen yhteydessä. Default: `none`.
* __successMsg__ | `string`: ilmoitusteksti, joka näytetään oikeiden vastausten lähettämisen yhteydessä. Default: `none`.
* __cellLabels__ | `object`: sellaisten solujen merkinnät, jotka on määritelty objektilla, jonka avaimet ovat muotoa `row:col`.. Default: `{}`.
* __chat__ | `boolean`: valvoo, onko elementillä integroitu chat. Default: `false`.
* __panelProps__ | `object`: lisäominaisuudet, jotka välitetään ulommalle <Panel /> -komponentille.. Default: `{}`.
* __className__ | `string`: luokan nimi. Default: `''`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.
* __onChange__ | `function`: callback-funktio, joka kutsutaan vastausten muuttuessa. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback-funktio, joka käynnistetään lähetyksen yhteydessä ja jonka ensimmäisenä parametrina ovat vastaukset ja toisena boolean-parametrina oikeellisuutta osoittava boolean-arvo.. Default: `onSubmit() {}`.


## Esimerkkejä


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

