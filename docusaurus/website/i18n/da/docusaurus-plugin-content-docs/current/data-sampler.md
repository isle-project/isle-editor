---
id: data-sampler 
title: Data Sampler
sidebar_label: Data Sampler
---

Komponent til at udtage observationer fra et datasæt og videregive dem til underordnede komponenter.

## Indstillinger

* __data__ | `object (required)`: dataobjekt med nøgler, der svarer til kolonnevariabler. Default: `none`.
* __sampleSize__ | `number`: standardprøvestørrelse. Default: `50`.
* __minSampleSize__ | `number`: mindste tilladte stikprøvestørrelse. Default: `1`.
* __maxSampleSize__ | `number`: maksimal tilladt stikprøvestørrelse. Default: `none`.


## Eksempler

```jsx live
<DataSampler data={heartdisease} >
  {( sample ) => {
    return <DataTable
      data={sample}
    />;
  }}
</DataSampler>
```

