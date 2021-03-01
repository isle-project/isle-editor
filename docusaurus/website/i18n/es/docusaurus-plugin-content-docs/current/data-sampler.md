---
id: data-sampler 
title: Data Sampler
sidebar_label: Data Sampler
---

Componente para muestrear las observaciones de un conjunto de datos y pasarlo a los componentes infantiles.

## Opciones

* __data__ | `object (required)`: objeto de datos con claves correspondientes a las variables de columna. Default: `none`.
* __sampleSize__ | `number`: tamaño de la muestra por defecto. Default: `50`.
* __minSampleSize__ | `number`: tamaño mínimo de muestra permitido. Default: `1`.
* __maxSampleSize__ | `number`: tamaño máximo de muestra permitido. Default: `none`.


## Ejemplos

```jsx live
<DataSampler data={heartdisease} >
  {( sample ) => {
    return <DataTable
      data={sample}
    />;
  }}
</DataSampler>
```

