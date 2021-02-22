---
id: free-text-survey 
title: Free Text Survey
sidebar_label: Free Text Survey
---

Komponent ISLE dla pytań, na które odpowiedzi uczniów powinny być dostarczone w formie wolnego tekstu. To co odróżnia ten komponent od **FreeTextQuestion** to fakt, że zagregowane dane grupowe są wyświetlane wszystkim w czasie rzeczywistym.

## Opcje

* __question__ | `(string|node)`: pytanie, które należy zadać uczniom. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: kontroluje, czy chce się zezwolić uczniom na wielokrotne udzielanie odpowiedzi na ankietę. Default: `false`.
* __anonymous__ | `boolean`: kontroluje, czy odpowiedzi studentów są zbierane anonimowo. Default: `false`.
* __rows__ | `number`: liczba wierszy tekstu w polu wprowadzania danych. Default: `4`.
* __className__ | `string`: nazwa klasy. Default: `''`.
* __style__ | `object`: Style CSS inline. Default: `{}`.
* __onSubmit__ | `function`: funkcja callback wywoływana po przesłaniu odpowiedzi. Default: `onSubmit() {}`.


## Przykłady

```jsx live
<FreeTextSurvey 
    question="Where are you from?"
    anonymous
/>
``` 

