---
id: data-sampler 
title: Data Sampler
sidebar_label: Data Sampler
---

Composante permettant d'échantillonner les observations d'un ensemble de données et de les transmettre à des composantes enfantines.

## Options

* __data__ | `object (required)`: objet de données avec des clés correspondant aux variables de colonne. Default: `none`.
* __sampleSize__ | `number`: taille de l'échantillon par défaut. Default: `50`.
* __minSampleSize__ | `number`: la taille minimale autorisée de l'échantillon. Default: `1`.
* __maxSampleSize__ | `number`: la taille maximale autorisée de l'échantillon. Default: `none`.


## Exemples

```jsx live
<DataSampler data={heartdisease} >
  {( sample ) => {
    return <DataTable
      data={sample}
    />;
  }}
</DataSampler>
```

