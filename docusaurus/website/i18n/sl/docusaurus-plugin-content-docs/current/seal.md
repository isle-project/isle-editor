---
id: seal 
title: Seal
sidebar_label: Seal
---

Pečat odobritve.

## Možnosti

* __active__ | `boolean`: nadzoruje, ali je pečat aktiven ali siv ali ne.. Default: `true`.
* __onClick__ | `function`: funkcija povratne zveze, ki se sproži ob kliku na opombo.. Default: `onClick() {}`.
* __scale__ | `number`: velikost predmeta (če ni izrecno določena, se velikost pečata ne spremeni).. Default: `none`.
* __innerStyle__ | `object`: slog za notranji krog. Default: `{}`.
* __lower__ | `string`: spodnje besedilo. Default: `'The lower text'`.
* __lowerArc__ | `number`: lok za spodnje besedilo. Default: `150`.
* __noOrnaments__ | `boolean`: preprečuje upodabljanje ornamentov. Default: `false`.
* __removable__ | `boolean`: nadzoruje, ali se opomba odstrani, ko jo kliknete.. Default: `false`.
* __style__ | `object`: slog za element. Default: `none`.
* __title__ | `(string|node)`: naslov pečata. Default: `'Enter a title'`.
* __upper__ | `string`: zgornje besedilo. Default: `'The upper text'`.
* __upperArc__ | `number`: lok za zgornje besedilo. Default: `150`.


## Primeri

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
