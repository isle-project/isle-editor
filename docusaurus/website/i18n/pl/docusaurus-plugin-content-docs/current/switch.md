---
id: switch
title: Switch Components
sidebar_label: Switch Components
---

Komponent przełącznika pozwala na wyświetlenie jednego elementu z listy kilku elementów. Użytkownicy mogą przełączać się pomiędzy różnymi dziećmi znacznika Switch, klikając na aktualnie wyświetlany element.

## Options

* __active__ | `boolean`: kontroluje, czy przełącznik jest aktywny, czy nie. Default: `true`.
* __tooltip__ | `string`: etykieta narzędzi wyświetlana po najechaniu na element przełączający. Default: `none`.
* __tooltipPos__ | `string`: umiejscowienie końcówki narzędzia (`top`, `lewo`, `prawo` lub `dół`). Default: `'top'`.
* __className__ | `string`: nazwa klasy dla zamkniętego elementu przęsła. Default: `''`.
* __style__ | `object`: Style CSS inline. Default: `{}`.
* __onChange__ | `function`: wywołanie zwrotne po włączeniu elementów. Otrzymuje jako swój pierwszy argument indeks aktualnie wyświetlanego dziecka. Default: `onChange() {}`.


## Examples

```jsx live
<Switch>
    <span>Option 1</span>
    <span>Option 2</span>
</Switch>
```



