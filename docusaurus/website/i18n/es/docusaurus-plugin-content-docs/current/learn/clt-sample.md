---
id: clt-sample
title: CLT Sample
sidebar_label: CLT Sample
---

Un componente de aprendizaje que ilustra el Teorema del Límite Central (CLT) cuando se toma una muestra de un conjunto de datos suministrados.

## Options

* __data__ | `object (required)`: El objeto de datos con claves corresponde a los nombres de las variables y los valores que contienen los valores de las respectivas variables. Default: `none`.
* __hidePopulationStdev__ | `boolean`: ocultar la visualización de la desviación estándar de la población. Default: `false`.
* __samples__ | `(array<number>|number)`: una serie de números o un solo número que denota los tamaños de las muestras que se pueden extraer. Default: `25`.
* __populationProbabilities__ | `boolean`: si mostrar ecuaciones para el cálculo de las probabilidades de la población. Default: `false`.
* __quantiles__ | `boolean`: si mostrar la herramienta para el cálculo de cualquier cuantil. Default: `false`.
* __variables__ | `array (required)`: nombres de las variables que pueden ser muestreadas de. Default: `none`.


## Examples

```jsx live
<LearnSampleCLT />
```

