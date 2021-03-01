---
id: data-sampler 
title: Data Sampler
sidebar_label: Data Sampler
---

组件从数据集中抽取观测值的样本，并将其传递给子组件。

## 选项

* __data__ | `object (required)`: 数据对象，键与列变量相对应. Default: `none`.
* __sampleSize__ | `number`: 默认样本量. Default: `50`.
* __minSampleSize__ | `number`: 最小允许样本量. Default: `1`.
* __maxSampleSize__ | `number`: 最大允许样本量. Default: `none`.


## 例子

```jsx live
<DataSampler data={heartdisease} >
  {( sample ) => {
    return <DataTable
      data={sample}
    />;
  }}
</DataSampler>
```

