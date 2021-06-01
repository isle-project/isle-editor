---
id: data-sampler 
title: Data Sampler
sidebar_label: Data Sampler
---

Komponenta pro vzorkování pozorování z datové sady a jejich předávání podřízeným komponentám.

## Možnosti

* __data__ | `object (required)`: datový objekt s klíči odpovídajícími sloupcovým proměnným. Default: `none`.
* __sampleSize__ | `number`: výchozí velikost vzorku. Default: `50`.
* __minSampleSize__ | `number`: minimální povolená velikost vzorku. Default: `1`.
* __maxSampleSize__ | `number`: maximální povolená velikost vzorku. Default: `none`.


## Příklady

```jsx live
<DataSampler data={heartdisease} >
  {( sample ) => {
    return <DataTable
      data={sample}
    />;
  }}
</DataSampler>
```

