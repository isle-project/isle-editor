---
id: text-area
title: Text Area
sidebar_label: Text Area
---

Um componente de área de texto. Utilizado como componente autônomo, as mudanças devem ser tratadas através do atributo "Mudança".

## Opções

* __defaultValue__ | `string`: valor padrão da área de texto. Default: `''`.
* __value__ | `string`: valor do texto (para componente controlado). Default: `none`.
* __disabled__ | `boolean`: controla se a área de texto deve ser desativada. Default: `false`.
* __legend__ | `(string|node)`: texto da legenda. Default: `''`.
* __onBlur__ | `function`: função chamada de retorno invocada quando a área de texto perde o foco. Default: `onBlur() {}`.
* __onChange__ | `function`: função de chamada de retorno invocada com o novo texto quando o texto da área muda. Default: `onChange() {}`.
* __placeholder__ | `string`: texto de espaço reservado. Default: `none`.
* __resizable__ | `string`: controla se a área de texto deve ser redimensionável (pode ser "ambos", "horizontal", "vertical", ou "ninguém"). Default: `'none'`.
* __rows__ | `number`: número de filas. Default: `5`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.


## Exemplos

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Custom Style', value: 'customStyle' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<TextArea
    legend="Please enter a few sentences"
    placeholder="Enter text"
/>
```

</TabItem>

<TabItem value="customStyle">

<TextArea
    legend="Please enter a few sentences"
    placeholder="Enter text"
    style={{
        fontSize: 33,
        fontFamily: 'Georgia', 
        boxShadow: '0 0 4px black',
        background: 'rgb(238,174,202)', 
        background: 'radial-gradient(circle, rgba(255, 255, 0, 0.3) 44%, white 100%)' 
    }}
/>

</TabItem>

</Tabs>
