---
id: panel 
title: Panel
sidebar_label: Panel
---

Componente de la tarjeta.

## Opciones

* __className__ | `string`: Nombre de la clase CSS. Default: `''`.
* __header__ | `(string|node)`: encabezado del panel. Default: `none`.
* __headerTag__ | `string`: utilizada para el encabezamiento del panel. Default: `'h3'`.
* __footer__ | `(string|node)`: panel de pie de página. Default: `none`.
* __minimizable__ | `boolean`: si el panel puede ser minimizado. Default: `false`.
* __defaultMinimized__ | `boolean`: controla si el panel debe minimizarse por defecto (sólo se aplica cuando `minimizable` se establece como `true`). Default: `false`.
* __fullscreen__ | `boolean`: si el panel puede hacerse a pantalla completa (sólo para los instructores). Default: `false`.
* __hideTooltip__ | `string`: La punta de la herramienta que se muestra sobre el botón de ocultar. Default: `none`.
* __trapFocus__ | `boolean`: si se atrapa el foco del usuario en el panel. Default: `false`.
* __bodyStyle__ | `object`: Estilos en línea CSS para el cuerpo. Default: `{}`.
* __footerStyle__ | `object`: Estilos en línea CSS para el pie de página. Default: `{}`.
* __bodyClassName__ | `string`: Nombre de la clase CSS para el cuerpo. Default: `''`.
* __footerClassName__ | `string`: Nombre de la clase CSS para el pie de página. Default: `''`.
* __style__ | `object`: Estilos en línea de CSS para el contenedor. Default: `{}`.
* __onHide__ | `function`: llamada de retorno invocada cuando se hace clic en el botón de cierre. Default: `none`.


## Ejemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Header', value: 'withHeader' },
        { label: 'Header and Footer', value: 'headerAndFooter' },
        { label: 'With CSS', value: 'withCSS' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Panel>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

</Panel>
```

</TabItem>

<TabItem value="withHeader">

```jsx live
<Panel header="Panel with Header">

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

</Panel>
```

</TabItem>

<TabItem value="headerAndFooter">

```jsx live
<Panel 
    header="Header" 
    footer={<h4>Footer</h4>}
>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

</Panel>
```

</TabItem>

<TabItem value="withCSS">

```jsx live
<Panel style={{ color: 'salmon', background: 'darkblue' }}>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

</Panel>
```

</TabItem>

</Tabs>
