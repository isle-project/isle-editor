---
id: polaroid
title: Polaroid
sidebar_label: Polaroid
---

Um componente que exibe uma imagem no estilo de uma polaroid.

## Options

* __image__ | `string`: a URL da imagem a ser exibida na moldura polaroid. Default: `none`.
* __draggable__ | `boolean`: controla se é possível arrastar a polaroide ao redor da tela. Default: `false`.
* __showPin__ | `boolean`: controla se deve mostrar um pino. Default: `false`.
* __stain__ | `boolean`: controla se deve mostrar uma mancha de café. Default: `false`.
* __width__ | `number`: largura polaroid (em px). Default: `350`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.
* __onClick__ | `function`: manipulador de eventos invocado quando a imagem é clicada (recebe a identificação da Polaroid como parâmetro). Default: `none`.


## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Pin & Draggable', value: 'pinnedAndDraggable' },
        { label: 'Custom Width', value: 'customWidth' },
        { label: 'Handling Clicks', value: 'handlingClicks' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Polaroid image="https://bit.ly/2MGl7K0" />
```

</TabItem>

<TabItem value="pinnedAndDraggable">

```jsx live
<Polaroid showPin draggable image="https://bit.ly/2MGl7K0" />
```

</TabItem>

<TabItem value="customWidth">

```jsx live
<Polaroid width={200}
 image="https://bit.ly/2MGl7K0" />
```

</TabItem>

<TabItem value="handlingClicks">

```jsx live
<Polaroid image="https://bit.ly/2MGl7K0" 
 onClick={() => {
     alert( 'The polaroid has been clicked...' );
 }} />
```

</TabItem>

</Tabs>
