---
id: data-sampler 
title: Data Sampler
sidebar_label: Data Sampler
---

Komponentas, skirtas imti stebėjimus iš duomenų rinkinio ir perduoti juos antriniams komponentams.

## Parinktys

* __data__ | `object (required)`: duomenų objektas su raktais, atitinkančiais stulpelių kintamuosius. Default: `none`.
* __sampleSize__ | `number`: numatytasis imties dydis. Default: `50`.
* __minSampleSize__ | `number`: mažiausias leistinas imties dydis. Default: `1`.
* __maxSampleSize__ | `number`: didžiausias leistinas imties dydis. Default: `none`.


## Pavyzdžiai

```jsx live
<DataSampler data={heartdisease} >
  {( sample ) => {
    return <DataTable
      data={sample}
    />;
  }}
</DataSampler>
```

