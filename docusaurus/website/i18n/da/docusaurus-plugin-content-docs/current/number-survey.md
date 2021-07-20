---
id: number-survey
title: Number Survey
sidebar_label: Number Survey
---

En undersøgelseskomponent, hvor instruktøren kan indsamle numeriske undersøgelsesdata fra de studerende i realtid.

## Indstillinger

* __question__ | `(string|node)`: det spørgsmål, der skal vises. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: styrer, om den samme bruger (eller session, hvis den er anonym) kan indsende flere svar). Default: `false`.
* __anonymous__ | `boolean`: Gør det muligt for eleverne at indsende data anonymt. Bemærk, at hvis denne indstilling er indstillet til "true", vil underviserne ikke kunne se den indsendte elevs ID.. Default: `false`.
* __step__ | `(number|string)`: En `string` eller `numerisk` værdi, der angiver det trin af pilene, der ses, når markøren svæver over indtastningsfeltet. Hvis `'any'`, sættes trinnet til `1`.. Default: `'any'`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.
* __onSubmit__ | `function`: callback-funktion, der påkaldes, når eleverne afgiver et svar. Default: `onSubmit() {}`.


## Eksempler

```jsx live
<NumberSurvey
    allowMultipleAnswers={true}
    id="generic_mean_question"
    question="Submit a number"
    defaultValue={0}
    step="any"
/>
```

