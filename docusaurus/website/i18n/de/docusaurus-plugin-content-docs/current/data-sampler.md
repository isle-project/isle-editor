---
id: data-sampler 
title: Data Sampler
sidebar_label: Data Sampler
---

Komponente, um Beobachtungen aus einem Datensatz abzutasten und an untergeordnete Komponenten zu übergeben.

## Optionen

* __data__ | `object (required)`: Datenobjekt mit Schlüsseln, die den Spaltenvariablen entsprechen. Default: `none`.
* __sampleSize__ | `number`: Standardprobenumfang. Default: `50`.
* __minSampleSize__ | `number`: minimal zulässiger Stichprobenumfang. Default: `1`.
* __maxSampleSize__ | `number`: maximal zulässiger Stichprobenumfang. Default: `none`.


## Beispiele

```jsx live
<DataSampler data={heartdisease} >
  {( sample ) => {
    return <DataTable
      data={sample}
    />;
  }}
</DataSampler>
```

