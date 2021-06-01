---
id: number-survey
title: Number Survey
sidebar_label: Number Survey
---

Egy felmérési komponens, amelyben az oktató valós időben gyűjthet numerikus felmérési adatokat a hallgatóktól.

## Opciók

* __question__ | `(string|node)`: a megjelenítendő kérdés. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: szabályozza, hogy ugyanaz a felhasználó (vagy munkamenet, ha névtelen) több választ is adhat-e). Default: `false`.
* __anonymous__ | `boolean`: Lehetővé teszi a diákok számára, hogy névtelenül nyújtsák be az adatokat. Vegye figyelembe, hogy ha ez az opció "true" értékre van állítva, akkor az oktatók nem láthatják a beküldő diák azonosítóját.. Default: `false`.
* __step__ | `(number|string)`: A "string" vagy "numerikus" érték, amely a nyilak lépését jelzi, amikor a kurzort a beviteli mező fölé mozgatjuk. Ha `'any'`, akkor a lépésszám `1` lesz.. Default: `'any'`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.
* __onSubmit__ | `function`: callback függvény, amely akkor hívódik elő, amikor a diákok elküldik a választ. Default: `onSubmit() {}`.


## Példák

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

