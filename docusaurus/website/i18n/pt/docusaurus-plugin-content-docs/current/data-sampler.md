---
id: data-sampler 
title: Data Sampler
sidebar_label: Data Sampler
---

Componente para amostrar observações de um conjunto de dados e passá-lo para componentes infantis.

## Opções

* __data__ | `object (required)`: objeto de dados com chaves correspondentes às variáveis da coluna. Default: `none`.
* __sampleSize__ | `number`: tamanho padrão da amostra. Default: `50`.
* __minSampleSize__ | `number`: tamanho mínimo de amostra permitido. Default: `1`.
* __maxSampleSize__ | `number`: tamanho máximo de amostra permitido. Default: `none`.


## Exemplos

```jsx live
<DataSampler data={heartdisease} >
  {( sample ) => {
    return <DataTable
      data={sample}
    />;
  }}
</DataSampler>
```

