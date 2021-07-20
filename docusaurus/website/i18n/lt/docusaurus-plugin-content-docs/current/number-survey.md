---
id: number-survey
title: Number Survey
sidebar_label: Number Survey
---

Apklausos komponentas, kuriame dėstytojas gali rinkti skaitinius apklausos duomenis iš studentų realiuoju laiku.

## Parinktys

* __question__ | `(string|node)`: rodomas klausimas. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: kontroliuoja, ar tas pats naudotojas (arba sesija, jei ji anoniminė) gali pateikti kelis atsakymus).. Default: `false`.
* __anonymous__ | `boolean`: Mokiniai gali anonimiškai pateikti duomenis. Atkreipkite dėmesį, kad jei ši parinktis nustatyta į "true", dėstytojai negalės matyti duomenis pateikusio studento ID.. Default: `false`.
* __step__ | `(number|string)`: `stringa` arba `skaitmeninė` reikšmė, nurodanti rodyklių žingsnį, matomą žymeklį užvedus virš įvesties lauko. Jei `'any``, žingsnis bus nustatytas į `1`.. Default: `'any'`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.
* __onSubmit__ | `function`: grįžtamojo ryšio funkcija, iškviečiama mokiniams pateikus atsakymą.. Default: `onSubmit() {}`.


## Pavyzdžiai

```jsx live
<NumberSurvey
    allowMultipleAnswers={true}
    id="generic_mean_question"
    question="Submit a number"
    defaultValue={0}
    step="any"
/>
```

