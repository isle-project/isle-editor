---
id: data-sampler 
title: Data Sampler
sidebar_label: Data Sampler
---

Komponent för att ta ut observationer från en datamängd och skicka dem till underordnade komponenter.

## Alternativ

* __data__ | `object (required)`: dataobjekt med nycklar som motsvarar kolumnvariabler. Default: `none`.
* __sampleSize__ | `number`: Standardstorlek för urvalet.. Default: `50`.
* __minSampleSize__ | `number`: minsta tillåtna urvalsstorlek.. Default: `1`.
* __maxSampleSize__ | `number`: högsta tillåtna urvalsstorlek.. Default: `none`.


## Exempel

```jsx live
<DataSampler data={heartdisease} >
  {( sample ) => {
    return <DataTable
      data={sample}
    />;
  }}
</DataSampler>
```

