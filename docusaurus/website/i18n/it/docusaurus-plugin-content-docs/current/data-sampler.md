---
id: data-sampler 
title: Data Sampler
sidebar_label: Data Sampler
---

Componente per campionare le osservazioni da un set di dati e passarle ai componenti figli.

## Opzioni

* __data__ | `object (required)`: oggetto dati con chiavi corrispondenti a variabili di colonna. Default: `none`.
* __sampleSize__ | `number`: dimensione predefinita del campione. Default: `50`.
* __minSampleSize__ | `number`: dimensione minima consentita del campione. Default: `1`.
* __maxSampleSize__ | `number`: dimensione massima consentita del campione. Default: `none`.


## Esempi

```jsx live
<DataSampler data={heartdisease} >
  {( sample ) => {
    return <DataTable
      data={sample}
    />;
  }}
</DataSampler>
```

