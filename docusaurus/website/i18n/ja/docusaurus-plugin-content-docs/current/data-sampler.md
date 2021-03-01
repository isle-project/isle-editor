---
id: data-sampler 
title: Data Sampler
sidebar_label: Data Sampler
---

データセットからオブザベーションをサンプリングし、子コンポーネントに渡すためのコンポーネント。

## オプション

* __data__ | `object (required)`: 列変数に対応するキーを持つデータオブジェクト. Default: `none`.
* __sampleSize__ | `number`: デフォルトサンプルサイズ. Default: `50`.
* __minSampleSize__ | `number`: 最小許容サンプルサイズ. Default: `1`.
* __maxSampleSize__ | `number`: 最大許容サンプルサイズ. Default: `none`.


## 例としては、以下のようなものがあります。

```jsx live
<DataSampler data={heartdisease} >
  {( sample ) => {
    return <DataTable
      data={sample}
    />;
  }}
</DataSampler>
```

