---
id: multiple-choice-survey 
title: Multiple Choice Survey
sidebar_label: Multiple Choice Survey
---

Kyselykomponentti, jossa ohjaaja voi kerätä monivalintakyselyn tietoja opiskelijoilta reaaliaikaisesti.

## Vaihtoehdot

* __question__ | `(string|node)`: merkkijono, joka osoittaa oppilaille esitettävän kysymyksen. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: valvoo, halutaanko oppilaiden antaa vastata kyselyyn useita kertoja.. Default: `false`.
* __anonymous__ | `boolean`: valvoo, anonymisoidaanko opiskelijoiden vastaukset. Default: `false`.
* __answers__ | `array`: oppilaiden vastausvaihtoehtoja osoittava joukko. Default: `[]`.
* __multipleAnswers__ | `boolean`: osoittaa, voivatko oppilaat valita useamman kuin yhden vastauksen. Huomaa, että tämä eroaa allowMultipleAnswersista siinä, että allow antaa oppilaille mahdollisuuden lähettää kysymyksen useaan kertaan.. Default: `false`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.
* __onSubmit__ | `function`: funktio, jota kutsutaan, kun vastaus lähetetään. Default: `onSubmit() {}`.


## Esimerkkejä

```jsx live
<MultipleChoiceSurvey
    anonymous
    question="Are you left- or right-handed"
    answers={[ 'Left-handed', 'Right-handed' ]}
/>
```

