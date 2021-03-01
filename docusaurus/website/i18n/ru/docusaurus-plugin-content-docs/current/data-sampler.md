---
id: data-sampler 
title: Data Sampler
sidebar_label: Data Sampler
---

Компонент для выборки наблюдений из набора данных и передачи его дочерним компонентам.

## Варианты

* __data__ | `object (required)`: объект данных с ключами, соответствующими переменным столбца. Default: `none`.
* __sampleSize__ | `number`: размер выборки по умолчанию. Default: `50`.
* __minSampleSize__ | `number`: минимально допустимый размер выборки. Default: `1`.
* __maxSampleSize__ | `number`: максимально допустимый размер выборки. Default: `none`.


## Примеры

```jsx live
<DataSampler data={heartdisease} >
  {( sample ) => {
    return <DataTable
      data={sample}
    />;
  }}
</DataSampler>
```

