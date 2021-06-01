---
id: data-sampler 
title: Data Sampler
sidebar_label: Data Sampler
---

Komponent, et võtta vaatlusi andmekogumist ja edastada need alakomponentidele.

## Valikud

* __data__ | `object (required)`: andmeobjekt, mille võtmed vastavad veeru muutujatele. Default: `none`.
* __sampleSize__ | `number`: vaikimisi valimi suurus. Default: `50`.
* __minSampleSize__ | `number`: minimaalne lubatud valimi suurus. Default: `1`.
* __maxSampleSize__ | `number`: maksimaalne lubatud valimi suurus. Default: `none`.


## Näited

```jsx live
<DataSampler data={heartdisease} >
  {( sample ) => {
    return <DataTable
      data={sample}
    />;
  }}
</DataSampler>
```

