---
id: data-sampler 
title: Data Sampler
sidebar_label: Data Sampler
---

Komponenta za vzorčenje opazovanj iz nabora podatkov in njihovo posredovanje podrejenim komponentam.

## Možnosti

* __data__ | `object (required)`: podatkovni objekt s ključi, ki ustrezajo spremenljivkam stolpcev. Default: `none`.
* __sampleSize__ | `number`: privzeta velikost vzorca. Default: `50`.
* __minSampleSize__ | `number`: najmanjša dovoljena velikost vzorca. Default: `1`.
* __maxSampleSize__ | `number`: največja dovoljena velikost vzorca. Default: `none`.


## Primeri

```jsx live
<DataSampler data={heartdisease} >
  {( sample ) => {
    return <DataTable
      data={sample}
    />;
  }}
</DataSampler>
```

