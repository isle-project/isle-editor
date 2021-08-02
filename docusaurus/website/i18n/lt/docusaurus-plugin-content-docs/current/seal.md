---
id: seal 
title: Seal
sidebar_label: Seal
---

Patvirtinimo antspaudas.

## Parinktys

* __active__ | `boolean`: kontroliuoja, ar antspaudas yra aktyvus, ar pilkos spalvos.. Default: `true`.
* __onClick__ | `function`: grįžtamojo ryšio funkcija, iškviečiama, kai paspaudžiamas užrašas.. Default: `onClick() {}`.
* __scale__ | `number`: objekto dydis (jei aiškiai nenustatytas, antspaudo mastelis nekeičiamas).. Default: `none`.
* __innerStyle__ | `object`: vidinio rato stilius. Default: `{}`.
* __lower__ | `string`: apatinis tekstas. Default: `'The lower text'`.
* __lowerArc__ | `number`: apatinio teksto lanko. Default: `150`.
* __noOrnaments__ | `boolean`: neleidžia atvaizduoti ornamentų. Default: `false`.
* __removable__ | `boolean`: kontroliuoja, ar paspaudus pastabą ji bus pašalinta.. Default: `false`.
* __style__ | `object`: elemento stilius. Default: `none`.
* __title__ | `(string|node)`: antspaudo pavadinimas. Default: `'Enter a title'`.
* __upper__ | `string`: viršutinį tekstą. Default: `'The upper text'`.
* __upperArc__ | `number`: viršutinio teksto lankas. Default: `150`.


## Pavyzdžiai

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
