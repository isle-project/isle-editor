---
id: free-text-survey 
title: Free Text Survey
sidebar_label: Free Text Survey
---

ISLE-komponentti kysymyksille, joihin oppilaiden on annettava vastaukset vapaan tekstin muodossa. Tämä komponentti eroaa **FreeTextQuestion**-komponentista siinä, että kootut ryhmätiedot näytetään kaikille reaaliajassa.

## Vaihtoehdot

* __question__ | `(string|node)`: oppilaille esitettävä kysymys. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: valvoo, halutaanko oppilaiden antaa vastata kyselyyn useita kertoja.. Default: `false`.
* __anonymous__ | `boolean`: valvoo, kerätäänkö opiskelijoiden vastaukset nimettöminä. Default: `false`.
* __rows__ | `number`: syöttökentän tekstirivien lukumäärä. Default: `4`.
* __className__ | `string`: luokan nimi. Default: `''`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.
* __onSubmit__ | `function`: callback-funktio, jota kutsutaan, kun vastaus lähetetään. Default: `onSubmit() {}`.


## Esimerkkejä

```jsx live
<FreeTextSurvey 
    question="Where are you from?"
    anonymous
/>
``` 

