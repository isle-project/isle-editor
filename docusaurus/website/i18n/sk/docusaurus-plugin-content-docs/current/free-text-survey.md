---
id: free-text-survey 
title: Free Text Survey
sidebar_label: Free Text Survey
---

Komponent ISLE pre otázky, na ktoré by mali študenti odpovedať formou voľného textu. Táto zložka sa od **Otázky s voľným textom** líši tým, že súhrnné skupinové údaje sa zobrazujú všetkým v reálnom čase.

## Možnosti

* __question__ | `(string|node)`: otázka, ktorú treba položiť študentom. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: kontroluje, či si študenti želajú odpovedať na dotazník viackrát.. Default: `false`.
* __anonymous__ | `boolean`: kontroluje, či sa odpovede študentov zbierajú anonymne.. Default: `false`.
* __rows__ | `number`: počet riadkov textu vo vstupnom poli. Default: `4`.
* __className__ | `string`: názov triedy. Default: `''`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.
* __onSubmit__ | `function`: funkcia spätného volania volaná po odoslaní odpovede. Default: `onSubmit() {}`.


## Príklady

```jsx live
<FreeTextSurvey 
    question="Where are you from?"
    anonymous
/>
``` 

