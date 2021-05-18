---
id: switch
title: Switch Components
sidebar_label: Switch Components
---

Компонент Switch позволяет отображать один элемент из списка нескольких. Пользователи могут прокручивать циклы через различные дочерние элементы тега Switch, нажимая на текущий отображаемый элемент.

## Варианты

* __active__ | `boolean`: управляет тем, активен переключатель или нет. Default: `true`.
* __tooltip__ | `string`: всплывающая подсказка, отображаемая при наведении курсора на переключающий элемент. Default: `none`.
* __tooltipPos__ | `string`: размещение подсказки (либо `top`, либо `left`, либо `right`, либо `bottom`). Default: `'top'`.
* __className__ | `string`: наименование класса для элемента пролёта корпуса. Default: `''`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.
* __onChange__ | `function`: обратный вызов при переключении элементов. Получает в качестве первого аргумента индекс отображаемого в данный момент дочернего элемента. Default: `onChange() {}`.


## Примеры

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
