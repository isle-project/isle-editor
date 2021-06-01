---
id: data-sampler 
title: Data Sampler
sidebar_label: Data Sampler
---

Компонент за вземане на извадки от набор от данни и предаването им на подчинени компоненти.

## Опции

* __data__ | `object (required)`: обект от данни с ключове, съответстващи на променливите на колоната. Default: `none`.
* __sampleSize__ | `number`: размер на извадката по подразбиране. Default: `50`.
* __minSampleSize__ | `number`: минимален допустим размер на извадката. Default: `1`.
* __maxSampleSize__ | `number`: максимален допустим размер на извадката. Default: `none`.


## Примери

```jsx live
<DataSampler data={heartdisease} >
  {( sample ) => {
    return <DataTable
      data={sample}
    />;
  }}
</DataSampler>
```

