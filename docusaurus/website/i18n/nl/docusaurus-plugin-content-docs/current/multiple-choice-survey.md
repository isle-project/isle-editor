---
id: multiple-choice-survey 
title: Multiple Choice Survey
sidebar_label: Multiple Choice Survey
---

Een enquêteonderdeel waarbij de docent in real-time meerkeuzegegevens van studenten kan verzamelen.

## Opties

* __question__ | `(string|node)`: tekenreeks die de vraag aan de leerlingen aangeeft. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: controleert of men de studenten wil toestaan de enquête meerdere malen te beantwoorden. Default: `false`.
* __anonymous__ | `boolean`: controleert of de antwoorden van de studenten geanonimiseerd zijn. Default: `false`.
* __answers__ | `array`: array met antwoordkeuzes voor de leerlingen. Default: `[]`.
* __multipleAnswers__ | `boolean`: geeft aan of de leerlingen meer dan één antwoord mogen kiezen. Merk op dat dit verschilt van allowMultipleAnswers in die zin dat de leerlingen de vraag meermaals mogen stellen. Default: `false`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.
* __onSubmit__ | `function`: functie die moet worden opgeroepen wanneer een antwoord wordt ingediend. Default: `onSubmit() {}`.


## Voorbeelden

```jsx live
<MultipleChoiceSurvey
    anonymous
    question="Are you left- or right-handed"
    answers={[ 'Left-handed', 'Right-handed' ]}
/>
```

