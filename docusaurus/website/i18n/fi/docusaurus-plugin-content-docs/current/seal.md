---
id: seal 
title: Seal
sidebar_label: Seal
---

Hyväksymismerkki.

## Vaihtoehdot

* __active__ | `boolean`: valvoo, onko tiiviste aktiivinen vai harmaana.. Default: `true`.
* __onClick__ | `function`: callback-funktio, joka käynnistetään, kun muistiinpanoa napsautetaan.. Default: `onClick() {}`.
* __scale__ | `number`: objektin koko (jos sitä ei ole nimenomaisesti asetettu, sinettiä ei skaalata uudelleen).. Default: `none`.
* __innerStyle__ | `object`: sisäpiirin tyyli. Default: `{}`.
* __lower__ | `string`: alempi teksti. Default: `'The lower text'`.
* __lowerArc__ | `number`: alemman tekstin kaari. Default: `150`.
* __noOrnaments__ | `boolean`: estää koristeiden renderöinnin. Default: `false`.
* __removable__ | `boolean`: valvoo, poistetaanko huomautus, kun sitä napsautetaan. Default: `false`.
* __style__ | `object`: elementin tyyli. Default: `none`.
* __title__ | `(string|node)`: sinetin nimi. Default: `'Enter a title'`.
* __upper__ | `string`: ylempi teksti. Default: `'The upper text'`.
* __upperArc__ | `number`: ylemmän tekstin kaari. Default: `150`.


## Esimerkkejä

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
