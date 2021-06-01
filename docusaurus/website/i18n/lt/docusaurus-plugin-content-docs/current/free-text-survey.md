---
id: free-text-survey 
title: Free Text Survey
sidebar_label: Free Text Survey
---

ISLE komponentas, skirtas klausimams, į kuriuos mokiniai turėtų atsakyti laisvu tekstu. Šis komponentas skiriasi nuo **FreeTextQuestion** tuo, kad apibendrinti grupės duomenys rodomi visiems realiuoju laiku.

## Parinktys

* __question__ | `(string|node)`: klausimas, kurį reikia užduoti mokiniams.. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: kontroliuoja, ar norima leisti mokiniams į apklausą atsakyti kelis kartus.. Default: `false`.
* __anonymous__ | `boolean`: kontroliuoja, ar mokinių atsakymai renkami anonimiškai.. Default: `false`.
* __rows__ | `number`: teksto eilučių skaičius įvesties lauke. Default: `4`.
* __className__ | `string`: klasės pavadinimas. Default: `''`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.
* __onSubmit__ | `function`: grįžtamojo ryšio funkcija, iškviečiama, kai pateikiamas atsakymas.. Default: `onSubmit() {}`.


## Pavyzdžiai

```jsx live
<FreeTextSurvey 
    question="Where are you from?"
    anonymous
/>
``` 

