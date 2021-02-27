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
* __groupMode__ | `string`: si superponer los histogramas agrupados unos sobre otros (`Superponer`) o en parcelas separadas una al lado de la otra (`Facetas`). Default: `'Overlay'`.
* __displayDensity__ | `boolean`: controla si se muestran los valores de densidad en lugar de los recuentos en el eje y. Default: `false`.
* __densityType__ | `string`: cuando se muestran las densidades, se puede superponer una distribución paramétrica (`Normal`, `Uniforme`, o `Exponencial`) o una estimación de la densidad del núcleo no paramétrica (`Data-driven`). Default: `none`.
* __bandwidthAdjust__ | `number`: undefined. Default: `1`.
* __binStrategy__ | `string`: la estrategia de los contenedores (`Automático`, `Seleccionar # de contenedores`, o `Ajustar el ancho de los contenedores`). Default: `'Automatic'`.
* __nBins__ | `number`: número personalizado de contenedores. Default: `none`.
* __nCols__ | `number`: número de columnas cuando se muestra un histograma agrupado facetado. Default: `none`.
* __xBins__ | `{start,size,end}`: con propiedades de "inicio", "tamaño" y "fin" que rigen el comportamiento de los contenedores.. Default: `{}`.


## Ejemplos

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Cost"
    group="Drugs"
/>
```

