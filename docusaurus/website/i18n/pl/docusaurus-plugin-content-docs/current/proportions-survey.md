---
id: proportions-survey
title: Proportions Survey
sidebar_label: Proportions Survey
---

Komponent, który pozwala grupie osób głosować nad wagą i znaczeniem danych opcji.

## Opcje

* __allowMultipleAnswers__ | `boolean`: kontroluje, czy chce się zezwolić uczniom na wielokrotne udzielanie odpowiedzi na ankietę. Default: `false`.
* __anonymous__ | `boolean`: kontroluje, czy odpowiedzi uczniów są anonimowe. Default: `false`.
* __colors__ | `array`: Zestawienie kolorów dla elementów wykresu kołowego. Jeśli nie zostanie zdefiniowana, zostanie użyta niestandardowa skala kolorów. Default: `none`.
* __disabled__ | `boolean`: kontroluje, czy badanie jest dezaktywowane. Default: `false`.
* __group__ | `string`: pozycja wyświetlania grupowego. Default: `'group results'`.
* __groupHeight__ | `number`: proporcje wysokość wejścia dla wyświetlania grupowego (w px). Default: `100`.
* __legends__ | `array`: legendarne etykiety opisujące opcje, które mają być ważone. Default: `[]`.
* __margin__ | `string`: proporcja marży wejściowej (w px). Default: `'40px'`.
* __onSubmit__ | `function`: funkcja wywołania zwrotnego, wywoływana po udzieleniu odpowiedzi przez studentów. Default: `onSubmit() {}`.
* __personalHeight__ | `number`: proporcje wysokość wejścia dla poszczególnych uczniów (w px). Default: `200`.
* __precision__ | `number`: wyświetlana precyzja wartości proporcji. Default: `2`.
* __question__ | `(string|node)`: pytanie, które ma zostać wyświetlone. Default: `''`.
* __step__ | `number`: krok strzałek widoczny po najechaniu kursorem nad pole wprowadzania danych. Default: `0.25`.


## Przykłady

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



