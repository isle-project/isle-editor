---
id: switch
title: Switch Components
sidebar_label: Switch Components
---

Komponent przełącznika pozwala na wyświetlenie jednego elementu z listy kilku elementów. Użytkownicy mogą przełączać się pomiędzy różnymi dziećmi znacznika Switch, klikając na aktualnie wyświetlany element.

## Opcje

* __active__ | `boolean`: kontroluje, czy przełącznik jest aktywny, czy nie. Default: `true`.
* __tooltip__ | `string`: etykieta narzędzi wyświetlana po najechaniu na element przełączający. Default: `none`.
* __tooltipPos__ | `string`: umiejscowienie końcówki narzędzia (`top`, `left`, `right` lub `bottom`). Default: `'top'`.
* __className__ | `string`: nazwa klasy dla zamkniętego elementu przęsła. Default: `''`.
* __style__ | `object`: Style CSS inline. Default: `{}`.
* __onChange__ | `function`: wywołanie zwrotne po włączeniu elementów. Otrzymuje jako swój pierwszy argument indeks aktualnie wyświetlanego dziecka. Default: `onChange() {}`.


## Przykłady

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Custom Tooltip', value: 'withTooltip' },
        { label: 'With Style', value: 'withStyle' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Switch>
    <span>Option 1</span>
    <span>Option 2</span>
</Switch>
```

</TabItem>

<TabItem value="withTooltip">

```jsx live
<Switch tooltip="Just click and see" tooltipPos="left">
    <span>Option 1</span>
    <span>Option 2</span>
</Switch>
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<Switch  
  style={{ fontSize: 80, fontFamily: 'Open Sans Condensed'}} 
>
    <span>Some Clouds</span>
    <img src="https://bit.ly/3rLGE30" />
    <img src ="https://bit.ly/2OzxEj3" />
</Switch>
```

</TabItem>

</Tabs>
