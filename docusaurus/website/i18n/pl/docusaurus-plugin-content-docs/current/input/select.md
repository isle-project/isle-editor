---
id: select-input
title: Select Input
sidebar_label: Select Input
---

Wybrany element wejściowy. Może być używany jako część deski rozdzielczej ISLE lub jako samodzielny element. W tym ostatnim przypadku, chcesz obsługiwać zmiany poprzez atrybut `onChange` lub powiązać wartość ze zmienną globalną poprzez atrybut `bind`.

## Opcje

* __bind__ | `string`: nazwa zmiennej globalnej dla numeru, który ma być przypisany do. Default: `''`.
* __clearable__ | `boolean`: wartość boolean wskazująca, czy można dokonać jednoznacznego wyboru. Default: `none`.
* __defaultValue__ | `(number|string|array|object)`: domyślna wartość wejścia przy uruchamianiu. Default: `none`.
* __disabled__ | `boolean`: kontroluje, czy wejście jest aktywne, czy nie. Default: `false`.
* __inline__ | `boolean`: wskazuje, czy wejście jest wyświetlane w linii. Default: `false`.
* __legend__ | `(string|node)`: tekst wyświetlany obok wejścia. Default: `''`.
* __menuPlacement__ | `string`: umiejscowienie menu w stosunku do sterowania (albo `auto`, `top`, albo `dół`). Default: `'auto'`.
* __multi__ | `boolean`: kontroluje, czy można wybrać wiele odpowiedzi. Default: `false`.
* __onChange__ | `function`: funkcja wywołania zwrotnego, którą należy wywołać po dokonaniu wyboru. Default: `onChange() {}`.
* __options__ | `array`: tablica wskazująca dostępne wybory użytkownika. Default: `[]`.
* __placeholder__ | `string`: wartość, która ma być wyświetlana przed dokonaniem wstępnego wyboru. Default: `none`.
* __tooltip__ | `string`: tekst wyświetlany po najechaniu na legendę. Default: `none`.
* __style__ | `object`: Style CSS inline. Default: `{}`.


## Przykłady

```jsx live
<SelectInput
    legend="Choose the test direction"
    defaultValue="two-sided"
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
/>
```

