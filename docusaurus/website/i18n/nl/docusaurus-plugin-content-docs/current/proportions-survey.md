---
id: proportions-survey
title: Proportions Survey
sidebar_label: Proportions Survey
---

Onderdeel dat een groep mensen in staat stelt om te stemmen over de gewichten en het belang van bepaalde opties.

## Options

* __allowMultipleAnswers__ | `boolean`: controleert of men de studenten wil toestaan de enquête meerdere malen te beantwoorden. Default: `false`.
* __anonymous__ | `boolean`: controleert of de antwoorden van de studenten geanonimiseerd zijn. Default: `false`.
* __colors__ | `array`: reeks van kleuren voor de taartdiagrammen. Indien niet gedefinieerd, zal een aangepaste kleurenschaal worden gebruikt. Default: `none`.
* __disabled__ | `boolean`: controleert of het onderzoek is gedeactiveerd. Default: `false`.
* __group__ | `string`: groepsweergavekop. Default: `'group results'`.
* __groupHeight__ | `number`: verhoudingen invoerhoogte voor groepsdisplay (in px). Default: `100`.
* __legends__ | `array`: legenda-etiketten die de te wegen opties beschrijven. Default: `[]`.
* __margin__ | `string`: proportionele inputmarge (in px). Default: `'40px'`.
* __onSubmit__ | `function`: terugbelfunctie ingeroepen zodra de leerlingen een antwoord indienen. Default: `onSubmit() {}`.
* __personalHeight__ | `number`: verhoudingen invoerhoogte voor individuele student (in px). Default: `200`.
* __precision__ | `number`: weergegeven nauwkeurigheid van de verhoudingen. Default: `2`.
* __question__ | `(string|node)`: de te tonen vraag. Default: `''`.
* __step__ | `number`: de stap van de pijlen gezien bij het zweven met de cursor boven het invoerveld. Default: `0.25`.


## Examples

```jsx live
<ProportionsSurvey 
    id="Survey"
    question="Decide what is important"
    group="Group decision"
    nElements={3}
    colors = {[ "red", "blue", "gold" ]}
    personalHeight={300}
    groupHeight={200}
    margin="80px"
    legends={[ "bitcoin", "old", "diamonds" ]}
/>
```



