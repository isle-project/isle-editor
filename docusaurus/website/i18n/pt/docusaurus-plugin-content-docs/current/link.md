---
id: link
title: Link
sidebar_label: Link
---

Um componente para a exibição de um link.

## Opções

* __href__ | `string (required)`: URL do site para o link. Default: `none`.
* __download__ | `(string|boolean)`: especifica se o link deve ser baixado: definir para "verdadeiro" para forçar o download, ou uma string para especificar o nome do arquivo; se "falso", nenhum download é forçado. Default: `false`.
* __target__ | `string`: define onde o link é aberto: definido como `_blank` para nova janela, `_self` frame próprio, `_parent` para pai, `_top` para o corpo inteiro da janela, ou o nome do frame. Default: `'_blank'`.
* __windowFeatures__ | `string`: lista separada por vírgula de recursos de janela para quando o link é aberto em uma nova janela (ver: https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features). Default: `none`.
* __openWindow__ | `boolean`: undefined. Default: `false`.
* __className__ | `string`: nome da classe. Default: `''`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.


## Exemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'New Page', value: 'newPage' },
        { label: 'Image Link', value: 'imageLink' }
    ]}
    lazy
>
<TabItem value="minimal">

```jsx live
<Link href="https://wikipedia.org">Wikipedia</Link>
```

</TabItem>

<TabItem value="newPage">

```jsx live
<Link target="_blank" 
style={{ fontSize: 35}}
href="https://wikipedia.org">New Wikipedia Page</Link>
```
</TabItem>

<TabItem value="imageLink">

```jsx live
<Link target="_blank" 
style={{ fontSize: 35}}
href="https://wikipedia.org">
<img src= "https://bit.ly/3aM4OU7" /></Link>
```

</TabItem>

</Tabs>
