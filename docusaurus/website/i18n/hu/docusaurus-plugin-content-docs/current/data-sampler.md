---
id: data-sampler 
title: Data Sampler
sidebar_label: Data Sampler
---

Komponens az adathalmazból történő megfigyelések mintavételezésére és a gyermek komponenseknek való átadására.

## Opciók

* __data__ | `object (required)`: adatobjektum az oszlopváltozóknak megfelelő kulcsokkal. Default: `none`.
* __sampleSize__ | `number`: alapértelmezett minta mérete. Default: `50`.
* __minSampleSize__ | `number`: minimálisan megengedett mintanagyság. Default: `1`.
* __maxSampleSize__ | `number`: maximálisan megengedett mintaméret. Default: `none`.


## Példák

```jsx live
<DataSampler data={heartdisease} >
  {( sample ) => {
    return <DataTable
      data={sample}
    />;
  }}
</DataSampler>
```

