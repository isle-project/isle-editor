---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

Um componente de fundo dinâmico que percorre uma lista de textos em um intervalo especificado.

## Options

* __text__ | `array<string>`: texto ou lista de textos a serem exibidos. Default: `[]`.
* __loop__ | `boolean`: indica se o processo deve ser exibido infinitamente. Default: `false`.
* __direction__ | `string`: a direção do fluxo do texto (ou "esquerda", "direita", "para cima", "para baixo", "para baixo", "focagem", ou "redemoinho"). Default: `'right'`.
* __hold__ | `number`: o tempo que o texto permanece parado (em segundos). Default: `5`.
* __wait__ | `number`: o tempo antes da chegada de um novo texto (em segundos). Default: `3`.
* __inTime__ | `number`: tempo do efeito de entrada (em segundos). Default: `1`.
* __outTime__ | `number`: tempo do efeito de saída (em segundos). Default: `1`.
* __className__ | `string`: nome da classe. Default: `''`.
* __style__ | `object`: Estilos de CSS do texto. Default: `{}`.


## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Delay and Sound', value: 'delayAndSound' },
        { label: 'With CSS', value: 'withCSS' },
        { label: 'Array of Strings', value: 'array' },
        { label: 'Humanized', value: 'humanized' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Typewriter text="Lorem ipsum" />
```

</TabItem>

<TabItem value="delayAndSound">

```jsx live
<Typewriter text="Lorem ipsum" sound delay={2000} />
```

</TabItem>

<TabItem value="withCSS">

```jsx live
<Typewriter text="Styled Text" style={{ fontSize: 66, color: 'red'}} />
```

</TabItem>

<TabItem value="array">

```jsx live
<Typewriter text={["First Entry", "Second Entry", "Third Entry"]}  hold={2000} />
```

</TabItem>

<TabItem value="humanized">

```jsx live
<Typewriter text="This is a humanized performance" random interval={170} />
```

</TabItem>

</Tabs>



