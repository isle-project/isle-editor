---
id: data-sampler 
title: Data Sampler
sidebar_label: Data Sampler
---

Komponent do pobierania próbek obserwacji ze zbioru danych i przekazywania ich do komponentów dziecięcych.

## Opcje

* __data__ | `object (required)`: obiekt danych z kluczami odpowiadającymi zmiennym kolumnowym. Default: `none`.
* __sampleSize__ | `number`: domyślna wielkość próby. Default: `50`.
* __minSampleSize__ | `number`: minimalna dopuszczalna wielkość próbki. Default: `1`.
* __maxSampleSize__ | `number`: maksymalna dopuszczalna wielkość próbki. Default: `none`.


## Przykłady

```jsx live
<DataSampler data={heartdisease} >
  {( sample ) => {
    return <DataTable
      data={sample}
    />;
  }}
</DataSampler>
```

