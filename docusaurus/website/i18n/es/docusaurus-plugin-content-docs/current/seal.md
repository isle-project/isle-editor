---
id: seal 
title: Seal
sidebar_label: Seal
---

Un sello de aprobación.

## Opciones

* __active__ | `boolean`: controla si el sello está activo o en gris. Default: `true`.
* __onClick__ | `function`: función de devolución de llamada invocada cuando se hace clic en la nota. Default: `onClick() {}`.
* __scale__ | `number`: tamaño del objeto (si no se establece explícitamente, el sello no se reajusta). Default: `none`.
* __innerStyle__ | `object`: el estilo para el círculo interno. Default: `{}`.
* __lower__ | `string`: el texto inferior. Default: `'The lower text'`.
* __lowerArc__ | `number`: el arco para el texto inferior. Default: `150`.
* __noOrnaments__ | `boolean`: impide la reproducción de los adornos. Default: `false`.
* __removable__ | `boolean`: controla si la nota se elimina al hacer clic. Default: `false`.
* __style__ | `object`: el estilo para el elemento. Default: `none`.
* __title__ | `(string|node)`: título del sello. Default: `'Enter a title'`.
* __upper__ | `string`: el texto superior. Default: `'The upper text'`.
* __upperArc__ | `number`: el arco para el texto superior. Default: `150`.


## Ejemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'Removable', value: 'removable' },
        { label: 'Scaled', value: 'scaled' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Seal title="LESSON DONE" upper="Carnegie Mellon" upperArc={120} lower="University" lowerArc={105} />
```

</TabItem>


<TabItem value="withStyle">

```jsx live

<Seal 
  title="LESSON DONE" 
  style={{ backgroundImage: 'linear-gradient(white, silver, gainsboro)'}}
  innerStyle={{ backgroundImage:  'linear-gradient(gold, silver, white)' }}
  upper="Carnegie Mellon"  upperArc={120} 
  lower="University" lowerArc={105}
/>
```

</TabItem>

<TabItem value="removable">

```jsx live
<Seal 
  title="LESSON DONE" 
  noOrnaments
  removable
  style={{ backgroundImage: 'linear-gradient(white, silver, gainsboro)'}}
  innerStyle={{ backgroundImage:  'linear-gradient(gold, silver, white)' }}
  upper="Carnegie Mellon"  upperArc={120} 
  lower="University" lowerArc={105}
/>
```

</TabItem>

<TabItem value="scaled">

```jsx live
<Seal 
  title="BIG SEAL" 
  scale={1.15}
  style={{ fontWeight: 800, color: 'darkred', backgroundImage: 'linear-gradient(white, silver, gainsboro)'}}
  innerStyle={{ backgroundImage:  'linear-gradient(gold, silver, white)' }}
  upper="Carnegie Mellon" upperArc={120} 
  lower="University" lowerArc={105}
/>
```

</TabItem>

</Tabs>
