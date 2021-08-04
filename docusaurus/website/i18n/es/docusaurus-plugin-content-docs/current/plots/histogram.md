---
id: histogram
title: Histogram
sidebar_label: Histogram
---

Un histograma.

## Opciones

* __data__ | `object (required)`: objeto de las matrices de valor. Default: `none`.
* __variable__ | `string (required)`: variable a mostrar. Default: `none`.
* __group__ | `(string|Factor)`: variable de agrupación. Default: `none`.
* __title__ | `string`: título del histograma. Default: `none`.
* __groupMode__ | `string`: si superponer los histogramas agrupados unos sobre otros (`Superponer`) o en parcelas separadas una al lado de la otra (`Facetas`). Default: `'Overlay'`.
* __displayDensity__ | `boolean`: controla si se muestran los valores de densidad en lugar de los recuentos en el eje y. Default: `false`.
* __densityType__ | `string`: cuando se muestran las densidades, se puede superponer una distribución paramétrica (`Normal`, `Uniforme`, o `Exponencial`) o una estimación de la densidad del núcleo no paramétrica (`Data-driven`). Default: `none`.
* __bandwidthAdjust__ | `number`: ajuste manual del ancho de banda de la densidad del kernel (aplicable sólo cuando `densityType` se establece como `Data-driven`). Default: `1`.
* __binStrategy__ | `string`: la estrategia de los contenedores (`Automático`, `Seleccionar # de contenedores`, o `Ajustar el ancho de los contenedores`). Default: `'Automatic'`.
* __nBins__ | `number`: número personalizado de contenedores. Default: `none`.
* __nCols__ | `number`: número de columnas cuando se muestra un histograma agrupado facetado. Default: `none`.
* __xBins__ | `{start,size,end}`: con propiedades de "inicio", "tamaño" y "fin" que rigen el comportamiento de los contenedores. Default: `{}`.
* __sameXRange__ | `boolean`: si es verdadero, el rango del eje x para cada faceta será el mismo que el histograma general. Default: `false`.
* __sameYRange__ | `boolean`: si es verdadero, el rango del eje y para cada faceta será el mismo que el histograma general. Default: `false`.


## Ejemplos

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
