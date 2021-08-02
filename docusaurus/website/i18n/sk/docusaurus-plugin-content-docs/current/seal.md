---
id: seal 
title: Seal
sidebar_label: Seal
---

Schvaľovacia pečať.

## Možnosti

* __active__ | `boolean`: kontroluje, či je pečať aktívna alebo šedá.. Default: `true`.
* __onClick__ | `function`: spätná funkcia vyvolaná po kliknutí na poznámku. Default: `onClick() {}`.
* __scale__ | `number`: veľkosť objektu (ak nie je explicitne nastavená, veľkosť pečate sa nezmení). Default: `none`.
* __innerStyle__ | `object`: štýl pre vnútorný okruh. Default: `{}`.
* __lower__ | `string`: spodný text. Default: `'The lower text'`.
* __lowerArc__ | `number`: oblúk pre spodný text. Default: `150`.
* __noOrnaments__ | `boolean`: zabraňuje vykresľovaniu ornamentov. Default: `false`.
* __removable__ | `boolean`: kontroluje, či sa poznámka po kliknutí odstráni.. Default: `false`.
* __style__ | `object`: štýl pre prvok. Default: `none`.
* __title__ | `(string|node)`: názov pečate. Default: `'Enter a title'`.
* __upper__ | `string`: horný text. Default: `'The upper text'`.
* __upperArc__ | `number`: oblúk pre horný text. Default: `150`.


## Príklady

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
