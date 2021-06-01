---
id: number-survey
title: Number Survey
sidebar_label: Number Survey
---

Komponent prieskumu, v ktorom môže inštruktor zbierať číselné údaje z prieskumu od študentov v reálnom čase.

## Možnosti

* __question__ | `(string|node)`: otázka, ktorá sa má zobraziť. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: kontroluje, či ten istý používateľ (alebo relácia, ak je anonymná) môže odoslať viacero odpovedí). Default: `false`.
* __anonymous__ | `boolean`: Umožňuje študentom anonymne odosielať údaje. Upozorňujeme, že ak je táto možnosť nastavená na "true", inštruktori nebudú môcť vidieť ID odosielajúceho študenta.. Default: `false`.
* __step__ | `(number|string)`: `Reťazec` alebo `číselná` hodnota udávajúca krok šípok, ktoré sa zobrazia po nabehnutí kurzora nad vstupné pole. Ak je `'ľubovoľný``, krok bude nastavený na `1`. Default: `'any'`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.
* __onSubmit__ | `function`: spätné volanie vyvolané po odoslaní odpovede študentom. Default: `onSubmit() {}`.


## Príklady

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

