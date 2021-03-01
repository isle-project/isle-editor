---
id: data-sampler 
title: Data Sampler
sidebar_label: Data Sampler
---

Component to sample observations from a dataset and pass it to child components.

## Options

* __data__ | `object (required)`: data object with keys corresponding to column variables. Default: `none`.
* __sampleSize__ | `number`: default sample size. Default: `50`.
* __minSampleSize__ | `number`: minimum allowed sample size. Default: `1`.
* __maxSampleSize__ | `number`: maximum allowed sample size. Default: `none`.


## Examples

```jsx live
<DataSampler data={heartdisease} >
  {( sample ) => {
    return <DataTable
      data={sample}
    />;
  }}
</DataSampler>
```

