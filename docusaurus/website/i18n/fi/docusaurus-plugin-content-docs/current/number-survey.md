---
id: number-survey
title: Number Survey
sidebar_label: Number Survey
---

Kyselykomponentti, jossa ohjaaja voi kerätä numeerisia kyselytietoja opiskelijoilta reaaliaikaisesti.

## Vaihtoehdot

* __question__ | `(string|node)`: näytettävä kysymys. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: valvoo, voiko sama käyttäjä (tai istunto, jos hän on anonyymi) antaa useita vastauksia).. Default: `false`.
* __anonymous__ | `boolean`: Opiskelijat voivat toimittaa tiedot nimettöminä. Huomaa, että jos tämän vaihtoehdon arvoksi asetetaan "true", opettajat eivät näe tietoja lähettävän opiskelijan tunnusta.. Default: `false`.
* __step__ | `(number|string)`: Merkkijono tai numeerinen arvo, joka ilmaisee nuolten askeleen, joka näkyy, kun kursori viedään syöttöruudun yläpuolelle. Jos `'any'`, askeleen arvoksi asetetaan `1`.. Default: `'any'`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.
* __onSubmit__ | `function`: callback-funktio, joka käynnistyy, kun oppilas lähettää vastauksen.. Default: `onSubmit() {}`.


## Esimerkkejä

```jsx live
<NumberSurvey
    allowMultipleAnswers={true}
    id="generic_mean_question"
    question="Submit a number"
    defaultValue={0}
    step="any"
/>
```

