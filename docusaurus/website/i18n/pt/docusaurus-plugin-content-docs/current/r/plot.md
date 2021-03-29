---
id: r-plot
title: R Plot
sidebar_label: R Plot
---

Componente para render uma trama R dentro de uma lição ISLE.

## Opções

* __code__ | `string`: Código R para gerar a trama. Default: `''`.
* __width__ | `(number|string)`: largura da parcela (em px). Default: `600`.
* __height__ | `(number|string)`: altura da parcela (em px). Default: `'auto'`.
* __draggable__ | `boolean`: controla se a trama deve ser arrastada. Default: `false`.
* __fileType__ | `string`: tipo de arquivo da trama (`png` ou `svg`). Default: `'svg'`.
* __libraries__ | `array`: R bibliotecas que devem ser carregadas automaticamente quando o `código` de entrada é executado. Default: `[]`.
* __prependCode__ | `(string|array)`: ou um trecho de código R a ser preparado para o código armazenado em "código" ao avaliar. Default: `''`.
* __meta__ | `object`: meta-informação da trama. Default: `none`.
* __className__ | `string`: nome da classe. Default: `''`.
* __onDone__ | `function`: chamada de retorno invocada com argumentos de `err`, `img` e `corpo` uma vez criada uma trama. Default: `onDone() {}`.


## Exemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Draggable', value: 'draggable' },
        { label: 'Custom Dimensions', value: 'customDimensions' },
        { label: 'Using Libraries', value: 'usingLibraries' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<RPlot code="hist( c(20,50,40,70,40,30) )" />
```

</TabItem>

<TabItem value="draggable" >

```jsx live
<RPlot draggable code="hist( c(20,50,40,70,40,30) )" />
```

</TabItem>

<TabItem value="customDimensions" >

```jsx live
<RPlot code="hist( c(20,50,40,70,40,30) )" width="900px" />
```

</TabItem>

<TabItem value="usingLibraries" >

```jsx live
<RPlot 
    libraries={[ 'ggplot2' ]}
    code="qplot(mpg, wt, data = mtcars)" 
/>
```

</TabItem>

</Tabs>
