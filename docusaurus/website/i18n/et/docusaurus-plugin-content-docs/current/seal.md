---
id: seal 
title: Seal
sidebar_label: Seal
---

Heakskiidu pitser.

## Valikud

* __active__ | `boolean`: kontrollib, kas pitser on aktiivne või hallatud. Default: `true`.
* __onClick__ | `function`: Callback-funktsioon, mis kutsutakse esile, kui noodile vajutatakse. Default: `onClick() {}`.
* __scale__ | `number`: objekti suurus (kui seda ei ole selgesõnaliselt määratud, ei muudeta pitseri mõõtkava). Default: `none`.
* __innerStyle__ | `object`: stiil siseringi jaoks. Default: `{}`.
* __lower__ | `string`: alumine tekst. Default: `'The lower text'`.
* __lowerArc__ | `number`: alumise teksti kaari. Default: `150`.
* __noOrnaments__ | `boolean`: takistab ornamentide renderdamist. Default: `false`.
* __removable__ | `boolean`: kontrollib, kas märkus eemaldatakse, kui sellele klõpsatakse. Default: `false`.
* __style__ | `object`: elemendi stiil. Default: `none`.
* __title__ | `(string|node)`: pitseri nimetus. Default: `'Enter a title'`.
* __upper__ | `string`: ülemine tekst. Default: `'The upper text'`.
* __upperArc__ | `number`: ülemise teksti kaari. Default: `150`.


## Näited

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
