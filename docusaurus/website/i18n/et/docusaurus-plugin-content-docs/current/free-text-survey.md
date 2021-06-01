---
id: free-text-survey 
title: Free Text Survey
sidebar_label: Free Text Survey
---

ISLE-komponent küsimuste jaoks, mille puhul õpilased peaksid esitama vastused vaba tekstina. See komponent erineb **FreeTextQuestionist** selle poolest, et koondatud rühmaandmed kuvatakse kõigile reaalajas.

## Valikud

* __question__ | `(string|node)`: küsimus, mida õpilastele esitada. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: kontrollib, kas soovitakse, et õpilased saaksid vastata küsitlusele mitu korda.. Default: `false`.
* __anonymous__ | `boolean`: kontrollib, kas õpilaste vastuseid kogutakse anonüümselt. Default: `false`.
* __rows__ | `number`: tekstiridade arv sisendväljal. Default: `4`.
* __className__ | `string`: klassi nimi. Default: `''`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.
* __onSubmit__ | `function`: callback-funktsioon, mida kutsutakse üles, kui vastus on esitatud. Default: `onSubmit() {}`.


## Näited

```jsx live
<FreeTextSurvey 
    question="Where are you from?"
    anonymous
/>
``` 

