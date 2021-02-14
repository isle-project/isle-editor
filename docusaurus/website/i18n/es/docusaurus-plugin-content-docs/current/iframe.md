---
id: iframe 
title: IFrame
sidebar_label: IFrame
---

Un componente de iFrame.

## Options

* __src__ | `string (required)`: URL de la fuente. Default: `none`.
* __fullscreen__ | `boolean`: controla si se muestra el iFrame en modo de pantalla completa. Default: `false`.
* __title__ | `string`: Título del iFrame. Default: `'An iFrame'`.
* __width__ | `number`: Anchura del iFrame (en px). Default: `900`.
* __height__ | `number`: Altura del iFrame (en px). Default: `600`.
* __className__ | `string`: nombre de la clase. Default: `''`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.


## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Controlled Size', value: 'controlledSize' },
        { label: 'Custom CSS', value: 'withCSS' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<IFrame src="https://wikipedia.org" />
```

</TabItem>

<TabItem value="controlledSize" >

```jsx live
<IFrame src="https://wikipedia.org" 
  width={600} 
  height={400} 
/>
```
</TabItem>

<TabItem value="withCSS" >

```jsx live
<IFrame src="https://wikipedia.org" 
    width={600} 
    height={600} 
    style={{ outline: '10px solid black' }}
/>
```
</TabItem>

</Tabs>


