---
id: typewriter 
title: Typewriter
sidebar_label: Typewriter
---

Um componente ISLE que lhe permite criar um efeito de máquina de escrever.

## Opções

* __delay__ | `number`: atraso inicial antes do início da máquina de escrever (em milissegundos). Default: `none`.
* __hold__ | `number`: se o texto for um conjunto de cordas, segure especificado a duração que o texto completo será exibido antes de passar para o próximo item do conjunto. Default: `2000`.
* __interval__ | `number`: o intervalo da máquina de escrever (em milissegundos). Default: `100`.
* __random__ | `boolean`: se for aleatório, os toques de tecla serão realizados com uma certa aleatoriedade, "humana. Default: `false`.
* __sound__ | `boolean`: o toque de tecla digitado também será ouvido. Default: `false`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.
* __text__ | `(string|array<string>)`: o texto completo a ser exibido. Default: `''`.


## Exemplos

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

