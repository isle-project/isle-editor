---
id: seal 
title: Seal
sidebar_label: Seal
---

En godkännandestämpel.

## Alternativ

* __active__ | `boolean`: kontrollerar om förseglingen är aktiv eller gråmarkerad. Default: `true`.
* __onClick__ | `function`: callback-funktion som aktiveras när anteckningen klickas. Default: `onClick() {}`.
* __scale__ | `number`: objektstorlek (om den inte uttryckligen anges, skalas inte förseglingen om).. Default: `none`.
* __innerStyle__ | `object`: stilen för den inre cirkeln. Default: `{}`.
* __lower__ | `string`: den nedre texten. Default: `'The lower text'`.
* __lowerArc__ | `number`: bågen för den nedre texten. Default: `150`.
* __noOrnaments__ | `boolean`: förhindrar rendering av ornamenten. Default: `false`.
* __removable__ | `boolean`: kontrollerar om notisen tas bort när man klickar på den. Default: `false`.
* __style__ | `object`: stilen för elementet. Default: `none`.
* __title__ | `(string|node)`: sigill titel. Default: `'Enter a title'`.
* __upper__ | `string`: den övre texten. Default: `'The upper text'`.
* __upperArc__ | `number`: bågen för den övre texten. Default: `150`.


## Exempel

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
