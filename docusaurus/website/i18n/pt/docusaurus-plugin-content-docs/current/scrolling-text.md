---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

Um componente de fundo dinâmico que percorre uma lista de textos em um intervalo especificado.

## Opções

* __text__ | `array<string>`: texto ou lista de textos a serem exibidos. Default: `[]`.
* __loop__ | `boolean`: indica se o processo deve ser exibido infinitamente. Default: `false`.
* __direction__ | `string`: a direção do fluxo do texto (ou "esquerda", "direita", "para cima", "para baixo", "para baixo", "focagem", ou "redemoinho"). Default: `'right'`.
* __hold__ | `number`: o tempo que o texto permanece parado (em segundos). Default: `5`.
* __wait__ | `number`: o tempo antes da chegada de um novo texto (em segundos). Default: `3`.
* __inTime__ | `number`: tempo do efeito de entrada (em segundos). Default: `1`.
* __outTime__ | `number`: tempo do efeito de saída (em segundos). Default: `1`.
* __className__ | `string`: nome da classe. Default: `''`.
* __style__ | `object`: Estilos de CSS do texto. Default: `{}`.


## Exemplos


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'List of Texts', value: 'list' },
        { label: 'Background Image', value: 'backgroundImage' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<ScrollingText
    text= "This is a text re-appearing every five seconds"
    style={{ fontSize: 44, color: 'blue' }}
    wait={5}
    hold={2}
    loop
/>
```

</TabItem>

<TabItem value="list">

```jsx live
<ScrollingText
    text={[ 'One', 'Two', 'Three', 'Four'  ]}
    style={{ fontSize: 84, color: 'red', textAlign: 'center' }}
    loop
    direction="left"
    wait={.5}
    hold={2}
/>
```

</TabItem>

<TabItem value="backgroundImage">

```jsx live
<ScrollingText
    text={[ 'One', 'Two', 'Three', 'Four'  ]}
    style={{ fontSize: 84, color: 'white', textAlign: 'center', backgroundImage: 'url(https://bit.ly/3qlRgoR)', backgroundSize: '1200px 200px' }}
    loop
    direction="left"
    wait={.5}
    hold={2}
/>
```

</TabItem>

</Tabs>
