---
id: r-table
title: R Table
sidebar_label: R Table
---

Компонент для отображения R-кадра данных или матрицы в табличном отображении.

## Варианты

* __code__ | `string`: R код, возвращающий data.frame, содержащий данные для отображения в таблице.. Default: `''`.
* __libraries__ | `array`: R библиотек, которые должны быть загружены автоматически при выполнении входного `кода`.. Default: `[]`.
* __prependCode__ | `(string|array)`: R код `строки` (или `массива` из блоков кода R), который при оценке будет препарировать к коду, хранящемуся в `коде`.. Default: `''`.
* __width__ | `number`: ширина (от 0 до 1). Default: `0.5`.


## Примеры


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Using Libraries', value: 'usingLibraries' },
        { label: 'Custom Width', value: 'customWidth' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<RTable
    code={`data <- matrix( runif(64), nrow=8, ncol=8); 
    data`}
/>
```

</TabItem>

<TabItem value="usingLibraries" >

```jsx live
<RTable 
    libraries={[ 'dplyr' ]}
    code="starwars"
/>
```

</TabItem>

<TabItem value="customWidth" >

```jsx live
<RTable 
    libraries={[ 'dplyr' ]}
    code="starwars"
    width={0.85}
/>
```

</TabItem>

</Tabs>
