---
id: data-sampler 
title: Data Sampler
sidebar_label: Data Sampler
---

Komponentti, joka poimii havaintoja tietokokonaisuudesta ja välittää ne lapsikomponenteille.

## Vaihtoehdot

* __data__ | `object (required)`: tieto-objekti, jonka avaimet vastaavat sarakemuuttujia. Default: `none`.
* __sampleSize__ | `number`: otoksen oletuskoko. Default: `50`.
* __minSampleSize__ | `number`: pienin sallittu otoskoko. Default: `1`.
* __maxSampleSize__ | `number`: suurin sallittu otoskoko. Default: `none`.


## Esimerkkejä

```jsx live
<DataSampler data={heartdisease} >
  {( sample ) => {
    return <DataTable
      data={sample}
    />;
  }}
</DataSampler>
```

