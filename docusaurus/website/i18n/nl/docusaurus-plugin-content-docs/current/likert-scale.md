---
id: likert-scale
title: Likert Scale
sidebar_label: Likert Scale
---

Een component met een vraag en een vijfpuntsschaal voor studenten om te beantwoorden.

## Opties

* __question__ | `(string|node)`: af te drukken vraag. Default: `''`.
* __options__ | `array`: een reeks van vijf elementen die de labels voor de verschillende schaalniveaus bevatten. Default: `none`.
* __noMultipleResponses__ | `boolean`: meerdere inzendingen van een enkele student weigeren. Default: `false`.
* __disableSubmitNotification__ | `boolean`: controleert of de aanmeldingskennisgevingen moeten worden uitgeschakeld. Default: `false`.
* __className__ | `string`: klassennaam. Default: `''`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.


## Voorbeelden

```jsx live
<LikertScale 
    id="discrimination" 
    question="After your initial analysis of the data, how likely do you think it is that players are discriminated against by soccer referees because of their skin tone?" 
    options={[ 'Very unlikely', 'Unlikely', 'Neither unlikely nor likely', 'Likely', 'Very Likely']} 
/>
```

