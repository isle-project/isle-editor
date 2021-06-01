---
id: multiple-choice-matrix 
title: Multiple Choice Matrix
sidebar_label: Multiple Choice Matrix
---

ISLE-komponentti, joka renderöi matriisin monivalintakysymyksistä, joissa on samat vastaukset.

## Vaihtoehdot

* __questions__ | `array (required)`: joukko kysymyksiä. Default: `none`.
* __answers__ | `array (required)`: joukko vastauksia. Default: `none`.
* __title__ | `(string|node)`: kysymysmatriisin yläosassa näytettävä otsikko. Default: `none`.
* __solution__ | `array<array>`: boolean-matriisi, jonka elementti osoittaa, onko kyseinen valintapainike tai valintaruutu rastitettava.. Default: `none`.
* __type__ | `string`: kysymystyyppi ("radio" vastaa "Valitse yksi", "valintaruutu" vastaa "Valitse kaikki soveltuvat").. Default: `'radio'`.
* __disableSubmitNotification__ | `boolean`: valvoo, poistetaanko lähetysilmoitukset käytöstä. Default: `false`.
* __onChange__ | `function`: callback, jota kutsutaan, kun valintaruudun/valintaruutupainikkeen arvo muuttuu; kutsutaan kaksiulotteisella boolean-määrityksellä, joka sisältää kunkin vastausvaihtoehdon aktiivisen tilan.. Default: `onChange() {}`.
* __onSubmit__ | `function`: callback, joka käynnistetään, kun käyttäjä napsauttaa "Lähetä"-painiketta; käynnistetään kaksiulotteisella boolean-määritteellä, joka sisältää kunkin vastausvaihtoehdon aktiivisen tilan.. Default: `onSubmit() {}`.


## Esimerkkejä

```jsx live
<MultipleChoiceMatrix 
    title="Do you think these concepts are important for an introductory statistics course, and do you (or your department) cover them in your introductory courses?" id="topics" 
    questions={[
        'Data Visualizations',
        'Hand calculations (e.g. standard deviation, z-scores)',
        'Combinatorics',
        'Basic probability theory (conditional probability, independence...)',
        'Calculus-based probability',
        'Sampling distributions',
        'Confidence intervals (traditional, formula-based)',
        'Boostrapping',
        'Hypothesis testing (traditional, e.g. t-test or chi-square formulas and tables)',
        'Simple linear regression',
        'Bayesian statistics',
        'Randomization- or simulation-based inference'
    ]}
    type="checkbox" 
    answers={[ 'I cover it', 'I think it\'s important' ]} 
/>
```
