---
id: data-sampler 
title: Data Sampler
sidebar_label: Data Sampler
---

Komponents, lai atlasītu novērojumus no datu kopas un nodotu tos pakārtotajiem komponentiem.

## Iespējas

* __data__ | `object (required)`: datu objekts ar atslēgām, kas atbilst kolonnu mainīgajiem. Default: `none`.
* __sampleSize__ | `number`: noklusējuma izlases lielums. Default: `50`.
* __minSampleSize__ | `number`: minimālais pieļaujamais parauga lielums. Default: `1`.
* __maxSampleSize__ | `number`: maksimālais pieļaujamais parauga lielums. Default: `none`.


## Piemēri

```jsx live
<DataSampler data={heartdisease} >
  {( sample ) => {
    return <DataTable
      data={sample}
    />;
  }}
</DataSampler>
```

