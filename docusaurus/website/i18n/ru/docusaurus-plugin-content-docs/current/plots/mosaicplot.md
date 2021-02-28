---
id: mosaicplot
title: Mosaic Plot
sidebar_label: Mosaic Plot
---

Мозаичный сюжет.

## Варианты

* __data__ | `object (required)`: массивы значений для каждой переменной. Default: `none`.
* __variables__ | `array (required)`: массив переменных для отображения. Default: `none`.
* __showColors__ | `boolean`: управляет отображением цветов, показывающих значение. Default: `false`.
* __axisLabels__ | `string`: позиционирование меток осей (либо `параллельно оси`, `горизонтально`, `перпендикулярно оси`, либо `вертикально`). Default: `'parallel to the axis'`.


## Примеры

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Colored', value: 'colored' },
        { label: 'Axis Labels', value: 'axisLabels' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<MosaicPlot
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs' ]}
/>
```

</TabItem>

<TabItem value="colored">

```jsx live
<MosaicPlot
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs' ]}
    showColors
/>
```

</TabItem>

<TabItem value="axisLabels">

```jsx live
<MosaicPlot
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs' ]}
    showColors
    axisLabels="parallel to the axis"
/>
```

</TabItem>

</Tabs>
