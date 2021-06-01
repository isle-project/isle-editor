---
id: number-survey
title: Number Survey
sidebar_label: Number Survey
---

Komponenta ankete, v kateri lahko inštruktor od študentov v realnem času zbira številčne podatke iz ankete.

## Možnosti

* __question__ | `(string|node)`: vprašanje, ki se prikaže. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: določa, ali lahko isti uporabnik (ali seja, če je anonimna) pošlje več odgovorov). Default: `false`.
* __anonymous__ | `boolean`: Učenci lahko podatke predložijo anonimno. Če je ta možnost nastavljena na "true", inštruktorji ne bodo mogli videti ID študenta, ki je predložil podatke.. Default: `false`.
* __step__ | `(number|string)`: Vrednost `stringa` ali `številke`, ki označuje korak puščic, ki se prikaže, ko se kurzor pomakne nad vnosno polje. Če je `'poljuben``, bo korak nastavljen na `1`.. Default: `'any'`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.
* __onSubmit__ | `function`: povratna funkcija, ki se sproži, ko učenci oddajo odgovor.. Default: `onSubmit() {}`.


## Primeri

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

