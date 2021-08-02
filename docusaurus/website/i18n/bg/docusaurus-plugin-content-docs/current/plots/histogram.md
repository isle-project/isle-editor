---
id: histogram
title: Histogram
sidebar_label: Histogram
---

Хистограма.

## Опции

* __data__ | `object (required)`: обект от масиви със стойности. Default: `none`.
* __variable__ | `string (required)`: променлива за показване. Default: `none`.
* __group__ | `(string|Factor)`: променлива за групиране. Default: `none`.
* __groupMode__ | `string`: дали групираните хистограми да се наслагват една върху друга (`Overlay`) или в отделни графики една до друга (`Facets`). Default: `'Overlay'`.
* __displayDensity__ | `boolean`: контролира дали да се показват стойности на плътността вместо бройки по оста y. Default: `false`.
* __densityType__ | `string`: когато се показват плътности, може да се наслагва параметрично разпределение (`Normal`, `Uniform` или `Exponential`) или непараметрична ядрена оценка на плътността (`Data-driven`).. Default: `none`.
* __bandwidthAdjust__ | `number`: ръчно регулиране на ширината на честотната лента на плътността на ядрото (приложимо само когато `densityType` е зададено на `Data-driven`). Default: `1`.
* __binStrategy__ | `string`: стратегия за биниране (`Автоматично`, `Избор на # на бини` или `Задаване на ширина на бина`). Default: `'Automatic'`.
* __nBins__ | `number`: потребителски брой контейнери. Default: `none`.
* __nCols__ | `number`: брой колони при показване на фасетна групирана хистограма. Default: `none`.
* __xBins__ | `{start,size,end}`: обект със свойства `начало`, `размер` и `край`, определящи поведението при биниране. Default: `{}`.
* __sameXRange__ | `boolean`: ако е вярно, обхватът по оста x за всеки аспект ще бъде същият като общата хистограма. Default: `false`.
* __sameYRange__ | `boolean`: ако е вярно, обхватът по оста y за всеки аспект ще бъде същият като общата хистограма. Default: `false`.


## Примери

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Grouped', value: 'grouped' },
        { label: 'Facetted Plot', value: 'groupModeFactes' },
        { label: 'Display Density', value: 'displayDensity' },
        { label: 'No of Bins', value: 'noBins' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Age"
/>
```

</TabItem>

<TabItem value="grouped">

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Age"
    group="Gender"
/>
```

</TabItem>

<TabItem value="groupModeFactes">

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Age"
    group="Gender"
    nCols={2}
    groupMode="Facets"
/>
```

</TabItem>

<TabItem value="displayDensity">

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Age"
    group="Gender"
    displayDensity 
    densityType="Uniform"
/>
```

</TabItem>

<TabItem value="noBins">

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Age"
    group="Gender"
    binStrategy="Select # of bins"
    nBins={90}
/>
```

</TabItem>

</Tabs>
