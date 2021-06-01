---
id: free-text-survey 
title: Free Text Survey
sidebar_label: Free Text Survey
---

Složka ISLE pro otázky, na které by studenti měli odpovídat formou volného textu. Tato komponenta se od **Volnotextové otázky** liší tím, že agregovaná skupinová data se zobrazují všem v reálném čase.

## Možnosti

* __question__ | `(string|node)`: otázka, kterou je třeba položit studentům. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: kontroluje, zda si studenti přejí odpovídat na dotazník vícekrát.. Default: `false`.
* __anonymous__ | `boolean`: kontroluje, zda jsou odpovědi studentů shromažďovány anonymně.. Default: `false`.
* __rows__ | `number`: počet řádků textu ve vstupním poli. Default: `4`.
* __className__ | `string`: název třídy. Default: `''`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.
* __onSubmit__ | `function`: funkce zpětného volání volaná při odeslání odpovědi. Default: `onSubmit() {}`.


## Příklady

```jsx live
<FreeTextSurvey 
    question="Where are you from?"
    anonymous
/>
``` 

