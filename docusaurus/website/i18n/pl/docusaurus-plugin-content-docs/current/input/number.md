---
id: number-input
title: Number Input
sidebar_label: Number Input
---

Element wejściowy numeru. Może być używany jako część deski rozdzielczej ISLE lub autonomiczny. W tym ostatnim przypadku, chcesz obsługiwać zmiany poprzez atrybut `onChange` lub powiązać wartość ze zmienną globalną poprzez atrybut `bind`.

## Opcje

* __bind__ | `string`: nazwa zmiennej globalnej dla numeru, który ma być przypisany do. Default: `''`.
* __defaultValue__ | `number`: wartość wskazująca domyślną wartość wejścia podczas uruchamiania. Default: `0`.
* __disabled__ | `boolean`: boolean wskazujący, czy wejście jest aktywne, czy nie. Default: `false`.
* __inline__ | `boolean`: wskazuje, czy wejście jest wyświetlane w linii. Default: `false`.
* __legend__ | `(string|node)`: ciąg znaków wskazujący tekst wyświetlany obok wprowadzonego numeru. Default: `none`.
* __max__ | `number`: numer wskazujący maksymalną wartość, która może zostać dodana. Default: `null`.
* __min__ | `number`: numer wskazujący najmniejszą możliwą wartość, która może zostać dodana. Default: `null`.
* __numbersOnly__ | `boolean`: kontroluje, czy akceptowane są tylko numery. Default: `true`.
* __placeholder__ | `string`: undefined. Default: `'0'`.
* __onBlur__ | `function`: funkcja wywołania zwrotnego w przypadku zastosowania metody rozmycia. Default: `onBlur() {}`.
* __onChange__ | `function`: funkcja wywołania zwrotnego, która jest wywoływana przy zmianie numeru wejściowego. Default: `onChange() {}`.
* __onKeyDown__ | `function`: funkcja callback, którą można wywołać po naciśnięciu dowolnego klawisza. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: funkcja wywołania zwrotnego, którą należy wywołać po wprowadzeniu dowolnego klawisza. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: funkcja wywołania zwrotnego, która jest wywoływana po zwolnieniu klawisza. Default: `onKeyUp() {}`.
* __step__ | `(number|string)`: liczba określająca zmiany przyrostowe przy użyciu strzałek przyrostowych. Default: `1`.
* __style__ | `object`: Style CSS inline. Default: `{}`.
* __inputStyle__ | `object`: Style CSS w linii dla elementu wejściowego. Default: `{}`.
* __value__ | `number`: wartość liczbowa (dla składnika kontrolowanego). Default: `none`.
* __tooltip__ | `string`: łańcuch tooltip (jeśli nie jest ustawiony, to tooltip jest generowany automatycznie). Default: `none`.
* __tooltipPlacement__ | `string`: kierunek końcówki narzędzia. Default: `'left'`.


## Przykłady

```jsx live
<NumberInput
    legend="Number of observations"
    defaultValue={20}
    step={5}
/>
```

