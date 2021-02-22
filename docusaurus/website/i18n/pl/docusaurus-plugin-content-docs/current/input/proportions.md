---
id: proportions-input 
title: Proportions Input
sidebar_label: Proportions Input
---

Składnik wejściowy proporcji. Może być używany jako część deski rozdzielczej ISLE lub autonomiczny. W tym drugim przypadku, chcesz obsługiwać zmiany poprzez atrybut `onChange` lub powiązać wartość ze zmienną globalną poprzez atrybut `bind`.

## Opcje

* __colors__ | `array<string>`: Zestawienie kolorów dla elementów wykresu kołowego. Jeśli nie zostanie zdefiniowana, zostanie użyta niestandardowa skala kolorów. Default: `none`.
* __disabled__ | `boolean`: kontroluje, czy pole wprowadzania danych jest nieaktywne. Default: `false`.
* __height__ | `number`: proporcje wysokość wejścia (w px). Default: `200`.
* __legends__ | `array`: etykiety grupowe. Default: `[]`.
* __onChange__ | `function`: funkcja wywołania zwrotnego, którą należy wywołać po dokonaniu wyboru. Default: `onChange(){}`.
* __precision__ | `number`: wyświetlana precyzja wartości proporcji. Default: `1`.
* __step__ | `number`: krok strzałek widoczny po najechaniu kursorem nad pole wprowadzania danych. Default: `0.1`.


## Przykłady

```jsx live
<ProportionsInput
    user
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

