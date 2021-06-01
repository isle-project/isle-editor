---
id: data-sampler 
title: Data Sampler
sidebar_label: Data Sampler
---

Komponent na výber vzorky pozorovaní zo súboru údajov a jej odovzdanie podriadeným komponentom.

## Možnosti

* __data__ | `object (required)`: dátový objekt s kľúčmi zodpovedajúcimi stĺpcovým premenným. Default: `none`.
* __sampleSize__ | `number`: predvolená veľkosť vzorky. Default: `50`.
* __minSampleSize__ | `number`: minimálna povolená veľkosť vzorky. Default: `1`.
* __maxSampleSize__ | `number`: maximálna povolená veľkosť vzorky. Default: `none`.


## Príklady

```jsx live
<DataSampler data={heartdisease} >
  {( sample ) => {
    return <DataTable
      data={sample}
    />;
  }}
</DataSampler>
```

