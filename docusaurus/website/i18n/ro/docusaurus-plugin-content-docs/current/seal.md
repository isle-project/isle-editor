---
id: seal 
title: Seal
sidebar_label: Seal
---

Un sigiliu de aprobare.

## Opțiuni

* __active__ | `boolean`: controlează dacă sigiliul este activ sau nu. Default: `true`.
* __onClick__ | `function`: funcția de callback invocată atunci când se face clic pe notă. Default: `onClick() {}`.
* __scale__ | `number`: dimensiunea obiectului (dacă nu este setată explicit, sigiliul nu este redimensionat). Default: `none`.
* __innerStyle__ | `object`: stilul pentru cercul interior. Default: `{}`.
* __lower__ | `string`: textul inferior. Default: `'The lower text'`.
* __lowerArc__ | `number`: arcul pentru textul inferior. Default: `150`.
* __noOrnaments__ | `boolean`: împiedică redarea ornamentelor. Default: `false`.
* __removable__ | `boolean`: controlează dacă nota este eliminată atunci când se face clic pe ea. Default: `false`.
* __style__ | `object`: stilul pentru elementul respectiv. Default: `none`.
* __title__ | `(string|node)`: titlul sigiliului. Default: `'Enter a title'`.
* __upper__ | `string`: textul superior. Default: `'The upper text'`.
* __upperArc__ | `number`: arcul pentru textul de sus. Default: `150`.


## Exemple

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
