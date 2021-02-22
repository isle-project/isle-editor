---
id: likert-scale
title: Likert Scale
sidebar_label: Likert Scale
---

Komponent pokazujący pytanie i pięciopunktową skalę odpowiedzi dla uczniów.

## Opcje

* __question__ | `(string|node)`: pytanie, które należy wydrukować. Default: `''`.
* __options__ | `array`: szereg pięciu elementów utrzymujących etykiety dla różnych poziomów skali. Default: `none`.
* __noMultipleResponses__ | `boolean`: uniemożliwiać wielokrotne składanie wniosków przez jednego studenta. Default: `false`.
* __disableSubmitNotification__ | `boolean`: kontrola, czy należy wyłączyć powiadomienia o złożeniu wniosku. Default: `false`.
* __className__ | `string`: nazwa klasy. Default: `''`.
* __style__ | `object`: Style CSS inline. Default: `{}`.


## Przykłady

```jsx live
<LikertScale 
    id="discrimination" 
    question="After your initial analysis of the data, how likely do you think it is that players are discriminated against by soccer referees because of their skin tone?" 
    options={[ 'Very unlikely', 'Unlikely', 'Neither unlikely nor likely', 'Likely', 'Very Likely']} 
/>
```

