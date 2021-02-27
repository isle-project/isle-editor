---
id: heatmap
title: Heat Map
sidebar_label: Heat Map
---

Um mapa de calor para visualizar uma relação entre duas variáveis.

## Opções

* __data__ | `object (required)`: objeto de arrays de valor para cada variável. Default: `none`.
* __x__ | `string (required)`: variável do eixo x. Default: `none`.
* __y__ | `string (required)`: variável y-eixo. Default: `none`.
* __group__ | `(string|Factor)`: variável de agrupamento. Default: `none`.
* __overlayPoints__ | `boolean`: controla se devem ser sobrepostos pontos para cada observação. Default: `false`.
* __smoothSpan__ | `number`: vão de suavização. Default: `0.66`.
* __regressionMethod__ | `array<string>`: matriz contendo `linear` e/ou `smooth` para sobrepor uma linha de regressão linear e/ou suavizada. Default: `none`.
* __alternateColor__ | `boolean`: controla se deve ser utilizado um esquema de cores alternativo para o mapa térmico. Default: `false`.
* __commonXAxis__ | `boolean`: controla se deve ser usado um eixo x comum ao criar múltiplos mapas de calor por valor de uma variável de agrupamento. Default: `false`.
* __commonYAxis__ | `boolean`: controla se deve ser usado um eixo y comum ao criar múltiplos mapas de calor por valor de uma variável de agrupamento. Default: `false`.


## Exemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Group', value: 'withGroup' },
        { label: 'Alternate Color', value: 'alternateColor' },
        { label: 'Overlay Points', value: 'overlayPoints' },
        { label: 'Regression Method', value: 'regressionMethod' },
    ]}
    lazy
>



<TabItem value="minimal">

```jsx live
<HeatMap 
    data={heartdisease} 
    x="Interventions"
    y="Age"
/>
```

</TabItem>


<TabItem value="withGroup">

```jsx live
<HeatMap 
    alternateColor
    group="Gender"
    data={heartdisease} 
    x="Interventions"
    y="Age"
    commonXAxis
/>
```

</TabItem>

<TabItem value="alternateColor">

```jsx live
<HeatMap 
    alternateColor
    group="Gender"
    data={heartdisease} 
    x="Interventions"
    y="Age"
    commonXAxis
/>
```

</TabItem>

<TabItem value="overlayPoints">

```jsx live
<HeatMap 
    data={heartdisease} 
    x="Interventions"
    y="Age"
    overlayPoints 
/>
```

</TabItem>


<TabItem value="regressionMethod">

```jsx live
<HeatMap 
    data={heartdisease} 
    x="Interventions"
    y="Age"
    regressionMethod={[ 'linear', 'smooth' ]} 
/>
```

</TabItem>

</Tabs>
