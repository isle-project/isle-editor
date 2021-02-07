---
id: free-text-survey 
title: Free Text Survey
sidebar_label: Free Text Survey
---

Een ISLE component voor vragen waarbij de antwoorden van de studenten in de vorm van vrije tekst moeten worden aangeleverd. Wat deze component onderscheidt van de **FreeTexteuestion** is het feit dat de geaggregeerde groepsgegevens in real-time aan iedereen worden getoond.

## Options

* __question__ | `(string|node)`: de vraag aan de studenten. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: controleert of men de studenten wil toestaan de enquête meerdere malen te beantwoorden. Default: `false`.
* __anonymous__ | `boolean`: controleert of de antwoorden van de studenten anoniem worden verzameld. Default: `false`.
* __rows__ | `number`: aantal tekstregels in het invoerveld. Default: `4`.
* __className__ | `string`: klassennaam. Default: `''`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.
* __onSubmit__ | `function`: terugbelfunctie die wordt opgeroepen wanneer een antwoord wordt ingediend. Default: `onSubmit() {}`.


## Examples

```jsx live
<FreeTextSurvey 
    question="Where are you from?"
    anonymous
/>
``` 

