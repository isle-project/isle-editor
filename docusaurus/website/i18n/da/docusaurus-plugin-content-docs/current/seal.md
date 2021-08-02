---
id: seal 
title: Seal
sidebar_label: Seal
---

Et godkendelsesstempel.

## Indstillinger

* __active__ | `boolean`: kontrollerer, om forseglingen er aktiv eller gråtonet. Default: `true`.
* __onClick__ | `function`: callback-funktion, der påkaldes, når der klikkes på noten. Default: `onClick() {}`.
* __scale__ | `number`: objektstørrelse (hvis den ikke udtrykkeligt er angivet, ændres forseglingen ikke i størrelse). Default: `none`.
* __innerStyle__ | `object`: stilen for den indre cirkel. Default: `{}`.
* __lower__ | `string`: den nederste tekst. Default: `'The lower text'`.
* __lowerArc__ | `number`: buen for den nederste tekst. Default: `150`.
* __noOrnaments__ | `boolean`: forhindrer gengivelse af ornamenter. Default: `false`.
* __removable__ | `boolean`: styrer, om noten skal fjernes, når der klikkes på den. Default: `false`.
* __style__ | `object`: stilen for elementet. Default: `none`.
* __title__ | `(string|node)`: segl titel. Default: `'Enter a title'`.
* __upper__ | `string`: den øverste tekst. Default: `'The upper text'`.
* __upperArc__ | `number`: buen for den øverste tekst. Default: `150`.


## Eksempler

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
