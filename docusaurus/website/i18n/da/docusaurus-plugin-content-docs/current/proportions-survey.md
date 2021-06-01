---
id: proportions-survey
title: Proportions Survey
sidebar_label: Proportions Survey
---

Komponent, der gør det muligt for en gruppe af personer at stemme om vægtningen og vigtigheden af givne valgmuligheder.

## Indstillinger

* __allowMultipleAnswers__ | `boolean`: styrer, om man ønsker at tillade, at eleverne kan besvare undersøgelsen flere gange. Default: `false`.
* __anonymous__ | `boolean`: kontrollerer, om elevsvarene anonymiseres. Default: `false`.
* __colors__ | `array`: array af farver til komponenterne i cirkeldiagrammet. Hvis den ikke er defineret, anvendes en foruddefineret farveskala. Default: `none`.
* __disabled__ | `boolean`: styrer, om undersøgelsen skal deaktiveres. Default: `false`.
* __group__ | `string`: overskrift for gruppedisplay. Default: `'group results'`.
* __groupHeight__ | `number`: proportioner af indgangshøjden for gruppevisning (i px). Default: `100`.
* __legends__ | `array`: etiketter med en beskrivelse af de muligheder, der skal vejes. Default: `[]`.
* __margin__ | `string`: andel af inputmargin (i px). Default: `'40px'`.
* __onSubmit__ | `function`: callback-funktion, der påkaldes, når eleverne afgiver et svar. Default: `onSubmit() {}`.
* __personalHeight__ | `number`: proportioner input højde for den enkelte elev (i px). Default: `200`.
* __precision__ | `number`: viste præcision af proportionsværdier. Default: `2`.
* __question__ | `(string|node)`: det spørgsmål, der skal vises. Default: `''`.
* __step__ | `number`: det trin af pilene, der ses, når markøren svæver over indtastningsfeltet. Default: `0.25`.


## Eksempler

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



