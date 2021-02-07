---
id: accordion
title: Accordion
sidebar_label: Accordion
---

Um componente de acordeão que controla os deslizadores verticais.

## Options

* __active__ | `number`: índice de deslizamento a ser aberto no início. Default: `none`.
* __canCloseAll__ | `boolean`: se é possível derrubar todos os cabeçalhos. Default: `false`.
* __headers__ | `array<(string|node)>`: matriz de nomes de cabeçalho. Default: `none`.
* __headerStyle__ | `object`: também se pode atribuir um estilo às barras de cabeçalho. Default: `none`.
* __headerClassName__ | `string`: isto anula o nome da classe dada dos cabeçalhos. Default: `none`.
* __onChange__ | `function`: chamada de retorno invocada com índice de novo deslizador vertical ativo. Default: `onChange() {}`.
* __className__ | `string`: nome da classe para mergulho externo. Default: `''`.
* __style__ | `object`: Estilos em linha de CSS para mergulho externo. Default: `none`.


## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="firstOpened"
    values={[
        { label: 'First item opened', value: 'firstOpened' },
        { label: 'All items can close', value: 'allClosed' },
    ]}
    lazy
>
<TabItem value="firstOpened">

```jsx live
<Accordion headers={[ 'First Question', 'Second Question' ]} active={0} >
    <FreeTextQuestion />
    <FreeTextQuestion />
</Accordion>
```

</TabItem>
<TabItem value="allClosed">

```jsx live
<Accordion headers={[ 'First Question', 'Second Question' ]} canCloseAll >
    <FreeTextQuestion />
    <FreeTextQuestion />
</Accordion>
```

</TabItem>
</Tabs>

