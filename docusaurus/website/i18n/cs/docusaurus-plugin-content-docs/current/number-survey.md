---
id: number-survey
title: Number Survey
sidebar_label: Number Survey
---

Průzkumná složka, v níž může instruktor od studentů v reálném čase shromažďovat číselné údaje z průzkumu.

## Možnosti

* __question__ | `(string|node)`: otázka, která se má zobrazit. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: řídí, zda může tentýž uživatel (nebo relace, pokud je anonymní) odeslat více odpovědí.). Default: `false`.
* __anonymous__ | `boolean`: Umožňuje studentům odesílat údaje anonymně. Všimněte si, že pokud je tato možnost nastavena na "true", instruktoři nebudou moci vidět ID odesílajícího studenta.. Default: `false`.
* __step__ | `(number|string)`: `Řetězec` nebo `číselná` hodnota udávající krok šipek, které se zobrazí při najetí kurzoru nad vstupní pole. Pokud je `'libovolný``, bude krok nastaven na `1`.. Default: `'any'`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.
* __onSubmit__ | `function`: funkce zpětného volání vyvolaná, jakmile studenti odešlou odpověď.. Default: `onSubmit() {}`.


## Příklady

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

