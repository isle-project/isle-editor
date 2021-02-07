---
id: r-table
title: R Table
sidebar_label: R Table
---

Componente para renderizar um quadro de dados R ou matriz em um display tabular.

## Options

* __code__ | `string`: Código R devolvendo um quadro de dados.frame contendo os dados a serem exibidos na tabela. Default: `''`.
* __libraries__ | `array`: R bibliotecas que devem ser carregadas automaticamente quando o `código` de entrada é executado. Default: `[]`.
* __prependCode__ | `(string|array)`: R código `tring` (ou `array` de blocos de código R) a ser prepenso ao código armazenado no `código` ao avaliar. Default: `''`.
* __width__ | `number`: largura (entre 0 e 1). Default: `0.5`.


## Examples

```jsx live
<RTable
    code={`data <- matrix( runif(64), nrow=8, ncol=8); 
    data`}
/>
```

