---
id: free-text-survey 
title: Free Text Survey
sidebar_label: Free Text Survey
---

Egy ISLE-komponens olyan kérdésekhez, amelyekre a tanulóknak szabad szöveges formában kell válaszolniuk. Ezt a komponenst az különbözteti meg a **FreeTextQuestion**-tól, hogy az összesített csoportadatokat mindenki számára valós időben jeleníti meg.

## Opciók

* __question__ | `(string|node)`: a diákoknak feltett kérdés. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: szabályozza, hogy a tanulók többször is válaszolhassanak-e a felmérésre.. Default: `false`.
* __anonymous__ | `boolean`: ellenőrzi, hogy a diákok válaszait névtelenül gyűjtik-e. Default: `false`.
* __rows__ | `number`: a szöveges sorok száma a beviteli mezőben. Default: `4`.
* __className__ | `string`: osztály neve. Default: `''`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.
* __onSubmit__ | `function`: callback függvény, amelyet a válasz elküldésekor hívnak meg. Default: `onSubmit() {}`.


## Példák

```jsx live
<FreeTextSurvey 
    question="Where are you from?"
    anonymous
/>
``` 

