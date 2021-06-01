---
id: number-survey
title: Number Survey
sidebar_label: Number Survey
---

Küsitluskomponent, mille raames võib õppejõud koguda üliõpilastelt reaalajas numbrilisi küsitlusandmeid.

## Valikud

* __question__ | `(string|node)`: kuvatav küsimus. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: kontrollib, kas sama kasutaja (või sessioon, kui see on anonüümne) võib esitada mitu vastust). Default: `false`.
* __anonymous__ | `boolean`: Võimaldab õpilastel esitada andmeid anonüümselt. Pange tähele, et kui see valik on seatud "true", siis ei näe juhendajad esitava üliõpilase ID-d.. Default: `false`.
* __step__ | `(number|string)`: String- või numbriline väärtus, mis näitab noole sammu, mis on näha, kui kursor viibib sisestuskasti kohal. Kui `'any'`, määratakse sammuks `1`.. Default: `'any'`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.
* __onSubmit__ | `function`: callback funktsioon, mis käivitub, kui õpilased esitavad vastuse. Default: `onSubmit() {}`.


## Näited

```jsx live
<NumberSurvey
    allowMultipleAnswers={true}
    anonymous="false"
    id="generic_mean_question"
    question="Submit a number"
    defaultValue={0}
    step="any"
/>
```

