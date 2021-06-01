---
id: r-table
title: R Table
sidebar_label: R Table
---

Компонент за визуализиране на рамка от данни или матрица на R в табличен вид.

## Опции

* __code__ | `string`: R код, който връща data.frame, съдържащ данните, които ще бъдат показани в таблицата. Default: `''`.
* __libraries__ | `array`: R библиотеки, които трябва да се зареждат автоматично при изпълнение на входния `код`. Default: `[]`.
* __prependCode__ | `(string|array)`: `нишка` от R-код (или `масив` от блокове R-код), която се добавя към кода, съхранен в `code`, при оценяване. Default: `''`.
* __style__ | `object`: CSS инлайн стилове. Default: `{}`.


## Примери


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Using Libraries', value: 'usingLibraries' },
        { label: 'Custom Style', value: 'customStyle' }
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

<TabItem value="customStyle" >

```jsx live
<RTable 
    libraries={[ 'dplyr' ]}
    code="starwars"
    style={{ width: '400px' }}
/>
```

</TabItem>

</Tabs>
