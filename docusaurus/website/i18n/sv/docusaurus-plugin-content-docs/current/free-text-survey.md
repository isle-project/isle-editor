---
id: free-text-survey 
title: Free Text Survey
sidebar_label: Free Text Survey
---

En ISLE-komponent för frågor där elevernas svar ska ges i form av fritext. Det som skiljer den här komponenten från **FreeTextQuestion** är att de aggregerade gruppdata visas för alla i realtid.

## Alternativ

* __question__ | `(string|node)`: frågan som ska ställas till eleverna. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: kontrollerar om man vill låta eleverna besvara enkäten flera gånger eller inte.. Default: `false`.
* __anonymous__ | `boolean`: kontrollerar om elevernas svar samlas in anonymt. Default: `false`.
* __rows__ | `number`: antal textrader i inmatningsfältet. Default: `4`.
* __className__ | `string`: klassens namn. Default: `''`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.
* __onSubmit__ | `function`: callback-funktion som anropas när ett svar har lämnats in. Default: `onSubmit() {}`.


## Exempel

```jsx live
<FreeTextSurvey 
    question="Where are you from?"
    anonymous
/>
``` 

