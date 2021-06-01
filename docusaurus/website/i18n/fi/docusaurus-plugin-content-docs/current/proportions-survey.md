---
id: proportions-survey
title: Proportions Survey
sidebar_label: Proportions Survey
---

Komponentti, jonka avulla ryhmä ihmisiä voi äänestää annettujen vaihtoehtojen painotuksista ja tärkeydestä.

## Vaihtoehdot

* __allowMultipleAnswers__ | `boolean`: valvoo, halutaanko oppilaiden antaa vastata kyselyyn useita kertoja.. Default: `false`.
* __anonymous__ | `boolean`: valvoo, anonymisoidaanko opiskelijoiden vastaukset. Default: `false`.
* __colors__ | `array`: piirakkakaavion komponenttien värit. Jos sitä ei ole määritetty, käytetään ennalta määritettyä väriasteikkoa.. Default: `none`.
* __disabled__ | `boolean`: valvoo, poistetaanko kysely käytöstä. Default: `false`.
* __group__ | `string`: ryhmän näytön otsikko. Default: `'group results'`.
* __groupHeight__ | `number`: mittasuhteet syöttökorkeus ryhmänäyttöä varten (px). Default: `100`.
* __legends__ | `array`: tarrat, jotka kuvaavat punnittavia vaihtoehtoja.. Default: `[]`.
* __margin__ | `string`: syöttöprosentti (px). Default: `'40px'`.
* __onSubmit__ | `function`: callback-funktio, joka käynnistyy, kun oppilas lähettää vastauksen.. Default: `onSubmit() {}`.
* __personalHeight__ | `number`: mittasuhteet yksittäisen oppilaan syöttökorkeus (px). Default: `200`.
* __precision__ | `number`: suhteellisten arvojen näytetty tarkkuus. Default: `2`.
* __question__ | `(string|node)`: näytettävä kysymys. Default: `''`.
* __step__ | `number`: nuolien askel, joka näkyy, kun kursori viedään syöttöruudun yläpuolelle.. Default: `0.25`.


## Esimerkkejä

```jsx live
<ProportionsSurvey 
    id="Survey"
    question="Decide what is important"
    group="Group decision"
    nElements={3}
    colors = {[ "red", "blue", "gold" ]}
    personalHeight={300}
    groupHeight={200}
    margin="80px"
    legends={[ "bitcoin", "old", "diamonds" ]}
/>
```



