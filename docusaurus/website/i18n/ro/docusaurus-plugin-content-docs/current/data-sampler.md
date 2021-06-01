---
id: data-sampler 
title: Data Sampler
sidebar_label: Data Sampler
---

Componentă care eșantionează observațiile dintr-un set de date și le transmite componentelor copil.

## Opțiuni

* __data__ | `object (required)`: obiect de date cu chei corespunzătoare variabilelor de coloană. Default: `none`.
* __sampleSize__ | `number`: dimensiunea implicită a eșantionului. Default: `50`.
* __minSampleSize__ | `number`: dimensiunea minimă permisă a eșantionului. Default: `1`.
* __maxSampleSize__ | `number`: dimensiunea maximă permisă a eșantionului. Default: `none`.


## Exemple

```jsx live
<DataSampler data={heartdisease} >
  {( sample ) => {
    return <DataTable
      data={sample}
    />;
  }}
</DataSampler>
```

