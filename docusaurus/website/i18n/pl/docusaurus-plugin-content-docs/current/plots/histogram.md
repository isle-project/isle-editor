---
id: histogram
title: Histogram
sidebar_label: Histogram
---

Histogram.

## Opcje

* __data__ | `object (required)`: przedmiot tablice wartości. Default: `none`.
* __variable__ | `string (required)`: zmienna do wyświetlania. Default: `none`.
* __group__ | `(string|Factor)`: zmienna grupowania. Default: `none`.
* __title__ | `string`: tytuł histogramu. Default: `none`.
* __groupMode__ | `string`: czy nakładać na siebie zgrupowane histogramy (`Overlay`), czy też w oddzielnych działkach obok siebie (`Facets`). Default: `'Overlay'`.
* __displayDensity__ | `boolean`: kontroluje, czy wartości gęstości mają być wyświetlane zamiast zliczane na osi y. Default: `false`.
* __densityType__ | `string`: przy wyświetlaniu gęstości można albo nałożyć rozkład parametryczny (`Normalny`, `Uniformalny` lub `Exponential`), albo nieparametryczną ocenę gęstości jądra (`Data-driven`). Default: `none`.
* __densityParams__ | `array<number>`: parametry rozkładu dla gęstości, gdy używany jest rozkład parametryczny ([mu, sigma] dla rozkładu normalnego, [a, b] dla rozkładu jednostajnego, [lambda] dla rozkładu wykładniczego). Default: `[]`.
* __bandwidthAdjust__ | `number`: ręczne dostosowanie szerokości pasma gęstości jądra (dotyczy tylko gdy `densityType` jest ustawione na `Data-driven`). Default: `1`.
* __binStrategy__ | `string`: Strategia kosza (`Automatyczna`, `Wybieranie # koszy`, lub `Ustawianie szerokości kosza`). Default: `'Automatic'`.
* __nBins__ | `number`: niestandardowa liczba pojemników. Default: `none`.
* __nCols__ | `number`: liczba kolumn podczas wyświetlania fasetowanego histogramu grupowego. Default: `none`.
* __xBins__ | `{start,size,end}`: obiekt z "startem", "rozmiarem" i "końcowymi" właściwościami regulującymi zachowanie kosza. Default: `{}`.
* __sameXRange__ | `boolean`: jeśli prawda, to zakres osi x dla każdej fasety będzie taki sam jak histogram ogólny. Default: `false`.
* __sameYRange__ | `boolean`: jeśli prawda, to zakres osi y dla każdej fasety będzie taki sam jak histogram ogólny. Default: `false`.


## Przykłady

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
