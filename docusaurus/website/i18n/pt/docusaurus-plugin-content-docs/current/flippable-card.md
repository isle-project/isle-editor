---
id: flippable-card 
title: Flippable Card
sidebar_label: Flippable Card
---

Um componente ISLE que permite dois renderizados de dois lados.

## Options

* __button__ | `string`: etiqueta do botão. Default: `none`.
* __draggable__ | `boolean`: controla se o cartão pode ser arrastado. Default: `false`.
* __flipSpeedBackToFront__ | `number`: a velocidade com que o cartão passa do fundo para o primeiro plano, em segundos. Default: `1`.
* __flipSpeedFrontToBack__ | `number`: {número} a velocidade com que o cartão passa do primeiro plano para o segundo plano, em segundos. Default: `1`.
* __oneTime__ | `boolean`: indica se o processo de inversão pode ser executado apenas uma vez. Default: `false`.
* __perspective__ | `number`: Valor de propriedade do CSS para dar uma perspectiva ao elemento posicionado em 3d. Default: `1000`.
* __size__ | `number`: undefined. Default: `250`.
* __disabled__ | `boolean`: controla se o cartão virável está desativado. Default: `false`.
* __value__ | `boolean`: estado de virada do cartão (para componente controlado). Default: `none`.
* __defaultValue__ | `boolean`: estado inicial de viragem do cartão. Default: `false`.
* __containerStyle__ | `object`: Estilo CSS do recipiente. Default: `{}`.
* __frontStyle__ | `object`: Estilo CSS da placa frontal. Default: `{}`.
* __backStyle__ | `object`: Estilo CSS do cartão traseiro. Default: `{}`.
* __onChange__ | `function`: chamada de retorno invocada uma vez que o cartão é virado; recebe o status atual virado como seu único argumento. Default: `onChange() {}`.


## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With CSS', value: 'withCSS' },
        { label: 'Slow Motion', value: 'slowMo' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<FlippableCard containerStyle={{float: 'none'}} size={200}>
    <div>
        <img src="https://bit.ly/2YU5EbU" />
    </div>
    <div>
       <img src="https://bit.ly/3aGv9mp" />
    </div>
</FlippableCard>
```

</TabItem>

<TabItem value="withCSS">

```jsx live
<FlippableCard 
  containerStyle={{float: 'none'}} 
  frontStyle={{fontSize: 50, textAlign: 'center'}} 
  backStyle={{fontSize: 50, textAlign: 'center', background: 'purple', color: 'white'}} 
  >
    <div>
      FRONT
    </div>
    <div>
      BACK
    </div>
</FlippableCard>
```

</TabItem>

<TabItem value="slowMo">

```jsx live
<FlippableCard 
  flipSpeedBackToFront={7} 
  flipSpeedFrontToBack={7}   
  containerStyle={{float: 'none'}} 
  frontStyle={{fontSize: 50, textAlign: 'center'}} 
  backStyle={{fontSize: 50, textAlign: 'center', background: 'purple', color: 'white'}} 
  >
    <div>
      FRONT
    </div>
    <div>
      BACK
    </div>
</FlippableCard>
```

</TabItem>

</Tabs>
