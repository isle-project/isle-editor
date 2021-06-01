---
id: proportions-survey
title: Proportions Survey
sidebar_label: Proportions Survey
---

Componentă care permite unui grup de persoane să voteze asupra ponderii și importanței unor opțiuni date.

## Opțiuni

* __allowMultipleAnswers__ | `boolean`: controlează dacă se dorește să se permită elevilor să răspundă la sondaj de mai multe ori.. Default: `false`.
* __anonymous__ | `boolean`: controlează dacă răspunsurile elevilor sunt anonimizate. Default: `false`.
* __colors__ | `array`: matrice de culori pentru componentele graficului circular. Dacă nu este definită, se va utiliza o scară de culori predefinită.. Default: `none`.
* __disabled__ | `boolean`: controlează dacă sondajul este dezactivat sau nu. Default: `false`.
* __group__ | `string`: titlul afișajului grupului. Default: `'group results'`.
* __groupHeight__ | `number`: proporțiile înălțimii de intrare pentru afișarea grupului (în px). Default: `100`.
* __legends__ | `array`: etichete de legendă care descriu opțiunile care urmează să fie cântărite. Default: `[]`.
* __margin__ | `string`: marja de intrare proporțională (în px). Default: `'40px'`.
* __onSubmit__ | `function`: funcția callback invocată odată ce studenții trimit un răspuns. Default: `onSubmit() {}`.
* __personalHeight__ | `number`: proporțiile înălțimii de intrare pentru fiecare elev în parte (în px). Default: `200`.
* __precision__ | `number`: precizia afișată a valorilor proporțiilor. Default: `2`.
* __question__ | `(string|node)`: întrebarea care urmează să fie afișată. Default: `''`.
* __step__ | `number`: pasul săgeților afișate la trecerea cursorului deasupra căsuței de intrare. Default: `0.25`.


## Exemple

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



