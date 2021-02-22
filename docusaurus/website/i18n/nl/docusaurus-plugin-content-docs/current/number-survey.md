---
id: number-survey
title: Number Survey
sidebar_label: Number Survey
---

Een enquêteonderdeel waarbij de docent in real-time numerieke enquêtegegevens van studenten kan verzamelen.

## Opties

* __question__ | `(string|node)`: de te tonen vraag. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: bepaalt of dezelfde gebruiker (of sessie indien anoniem) meerdere antwoorden mag indienen). Default: `false`.
* __anonymous__ | `boolean`: Maakt het mogelijk voor de studenten om anoniem gegevens in te dienen. Merk op dat als deze optie is ingesteld op "true", dan zullen de instructeurs niet in staat zijn om de ID van de inzendende student te zien.. Default: `false`.
* __step__ | `(number|string)`: Een `string` of `numerieke` waarde die de stap van de pijlen aangeeft die gezien worden wanneer de cursor boven het invoerveld zweeft. Als `'any'`, zal de stap worden ingesteld op `1`.. Default: `'any'`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.
* __onSubmit__ | `function`: terugbelfunctie ingeroepen zodra de leerlingen een antwoord indienen. Default: `onSubmit() {}`.


## Voorbeelden

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

