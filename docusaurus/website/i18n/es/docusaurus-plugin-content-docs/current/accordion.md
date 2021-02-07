---
id: accordion
title: Accordion
sidebar_label: Accordion
---

Un componente de acordeón que controla los deslizadores verticales.

## Options

* __active__ | `number`: índice de deslizamiento que se abrirá al principio. Default: `none`.
* __canCloseAll__ | `boolean`: si uno puede colapsar todas las cabeceras. Default: `false`.
* __headers__ | `array<(string|node)>`: una serie de nombres de encabezamiento. Default: `none`.
* __headerStyle__ | `object`: también se puede asignar un estilo a las barras de la cabecera. Default: `none`.
* __headerClassName__ | `string`: esto anula el nombre de clase dado de los encabezados. Default: `none`.
* __onChange__ | `function`: llamada de retorno invocada con el índice del nuevo deslizador vertical activo. Default: `onChange() {}`.
* __className__ | `string`: nombre de la clase para la división exterior. Default: `''`.
* __style__ | `object`: Estilos en línea de CSS para la división exterior. Default: `none`.


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

