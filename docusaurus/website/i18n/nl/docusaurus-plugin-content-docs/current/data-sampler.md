---
id: data-sampler 
title: Data Sampler
sidebar_label: Data Sampler
---

Onderdeel om waarnemingen uit een dataset te bemonsteren en door te geven aan kinderonderdelen.

## Opties

* __data__ | `object (required)`: data-object met sleutels die corresponderen met kolomvariabelen. Default: `none`.
* __sampleSize__ | `number`: standaard steekproefgrootte. Default: `50`.
* __minSampleSize__ | `number`: minimum toegestane steekproefgrootte. Default: `1`.
* __maxSampleSize__ | `number`: maximaal toegestane steekproefgrootte. Default: `none`.


## Voorbeelden

```jsx live
<DataSampler data={heartdisease} >
  {( sample ) => {
    return <DataTable
      data={sample}
    />;
  }}
</DataSampler>
```

