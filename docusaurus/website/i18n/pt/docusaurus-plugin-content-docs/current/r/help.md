---
id: r-help
title: R Help
sidebar_label: R Help
---

Faça palavras puxar a documentação R em uma janela modal quando clicada.

## Opções

* __func__ | `string`: nome da "funçãoR" para a qual abrir a documentação. Se não for fornecido, o conteúdo da etiqueta "Ajuda" é assumido como igual ao nome da função.. Default: `''`.
* __library__ | `string`: nome do pacote R no qual a função reside. Default: `'base'`.
* __visible__ | `boolean`: controla se a janela modal de ajuda deve ser aberta na partida. Default: `false`.


## Exemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'From Library', value: 'otherLibrary' },
        { label: 'Visible on Startup', value: 'visible' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<span><RHelp>sum</RHelp> is used to sum the elements of a vector.</span>
```

</TabItem>

<TabItem value="otherLibrary" >

```jsx live
<span><RHelp library="graphics">hist</RHelp> is used to create a histogram.</span>
```

</TabItem>

<TabItem value="visible" >

```jsx live
<span><RHelp visible={true} >sum</RHelp> is used to sum the elements of a vector.</span>
```

</TabItem>

</Tabs>
