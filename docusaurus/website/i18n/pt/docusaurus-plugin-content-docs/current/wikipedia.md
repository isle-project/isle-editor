---
id: wikipedia 
title: Wikipedia
sidebar_label: Wikipedia
---

O componente **Wikipedia*** escaneia o **Wikipedia** e retorna um artigo - se algo válido for encontrado sob o termo de busca inserido.

## Opções

* __defaultEntry__ | `string`: entrada padrão para exibir. Default: `none`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.


## Exemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Entry', value: 'withEntry' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Wikipedia />
```

</TabItem>

<TabItem value="withEntry">

```jsx live
<Wikipedia defaultEntry="Angela Merkel" />
```

</TabItem>

</Tabs>
