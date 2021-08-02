---
id: seal 
title: Seal
sidebar_label: Seal
---

Ein Prüfsiegel.

## Optionen

* __active__ | `boolean`: steuert, ob die Dichtung aktiv oder ausgegraut ist. Default: `true`.
* __onClick__ | `function`: Callback-Funktion, die aufgerufen wird, wenn die Note angeklickt wird. Default: `onClick() {}`.
* __scale__ | `number`: Objektgröße (wenn nicht explizit gesetzt, wird die Dichtung nicht neu skaliert). Default: `none`.
* __innerStyle__ | `object`: der Stil für den inneren Kreis. Default: `{}`.
* __lower__ | `string`: der untere Text. Default: `'The lower text'`.
* __lowerArc__ | `number`: den Bogen für den unteren Text. Default: `150`.
* __noOrnaments__ | `boolean`: verhindert das Rendering der Ornamente. Default: `false`.
* __removable__ | `boolean`: steuert, ob die Notiz beim Anklicken entfernt wird. Default: `false`.
* __style__ | `object`: der Stil für das Element. Default: `none`.
* __title__ | `(string|node)`: Siegel-Titel. Default: `'Enter a title'`.
* __upper__ | `string`: der obere Text. Default: `'The upper text'`.
* __upperArc__ | `number`: der Bogen für den oberen Text. Default: `150`.


## Beispiele

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
