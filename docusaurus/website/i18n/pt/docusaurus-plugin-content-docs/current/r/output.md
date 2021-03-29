---
id: r-output
title: R Output
sidebar_label: R Output
---

Componente para render R output dentro de uma lição de ISLE.

## Opções

* __code__ | `string`: Código R usado para avaliar. Default: `''`.
* __libraries__ | `array`: R bibliotecas que devem ser carregadas automaticamente quando o `código` de entrada é executado. Default: `[]`.
* __prependCode__ | `(string|array)`: Código R (ou `arranjo` de blocos de código) a ser preparado para o código armazenado no `código` ao avaliar. Default: `''`.
* __onPlots__ | `function`: chamada de retorno invocada com quaisquer parcelas geradas. Default: `onPlots() {}`.
* __onResult__ | `function`: chamada de retorno invocada com "erro" ("nulo" se a operação foi bem sucedida) e "resultado" segurando a saída R. Default: `onResult() {}`.


## Exemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Multiline', value: 'multiline' },
        { label: 'Loading Data', value: 'loadingData' },
        { label: 'Using Libraries', value: 'usingLibraries' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<ROutput code="runif(10)" />
```

</TabItem>

<TabItem value="multiline" >

```jsx live
<ROutput code={`
x <- runif( 100 );
y <- 3.0 * x + rnorm( 100 );
fit <- lm( y ~ x );
summary( fit );
`} />
```

</TabItem>

<TabItem value="loadingData" >

```jsx live
<ROutput 
    prependCode={'wages <- read.table( "https://raw.githubusercontent.com/stdlib-js/stdlib/develop/lib/node_modules/%40stdlib/datasets/berndt-cps-wages-1985/data/data.csv", header=TRUE, sep=",")'} 
    code="summary(wages)"
/>
```

</TabItem>

<TabItem value="usingLibraries" >

```jsx live
<ROutput 
    libraries={[ 'dplyr' ]}
    code={'starwars %>% filter(species == "Droid")'}
/>
```

</TabItem>

</Tabs>
