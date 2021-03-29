---
id: r-table
title: R Table
sidebar_label: R Table
---

Componente para renderizar um quadro de dados R ou matriz em um display tabular.

## Opções

* __code__ | `string`: Código R devolvendo um quadro de dados.frame contendo os dados a serem exibidos na tabela. Default: `''`.
* __libraries__ | `array`: R bibliotecas que devem ser carregadas automaticamente quando o `código` de entrada é executado. Default: `[]`.
* __prependCode__ | `(string|array)`: R código `tring` (ou `array` de blocos de código R) a ser prepenso ao código armazenado no `código` ao avaliar. Default: `''`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.


## Exemplos


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Using Libraries', value: 'usingLibraries' },
        { label: 'Custom Style', value: 'customStyle' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<RTable
    code={`data <- matrix( runif(64), nrow=8, ncol=8); 
    data`}
/>
```

</TabItem>

<TabItem value="usingLibraries" >

```jsx live
<RTable 
    libraries={[ 'dplyr' ]}
    code="starwars"
/>
```

</TabItem>

<TabItem value="customStyle" >

```jsx live
<RTable 
    libraries={[ 'dplyr' ]}
    code="starwars"
    style={{ width: '400px' }}
/>
```

</TabItem>

</Tabs>
