---
id: seal 
title: Seal
sidebar_label: Seal
---

An approval seal.

## Options

* __active__ | `boolean`: controls whether seal is active or grayed out. Default: `true`.
* __onClick__ | `function`: callback function invoked when the note is clicked. Default: `onClick() {}`.
* __scale__ | `number`: object size (if not explicitly set, the seal is not rescaled). Default: `none`.
* __innerStyle__ | `object`: the style for the inner circle. Default: `{}`.
* __lower__ | `string`: the lower text. Default: `'The lower text'`.
* __lowerArc__ | `number`: the arc for the lower text. Default: `150`.
* __noOrnaments__ | `boolean`: prevents rendering of the ornaments. Default: `false`.
* __removable__ | `boolean`: controls whether the note is removed when clicked. Default: `false`.
* __style__ | `object`: the style for the element. Default: `none`.
* __title__ | `(string|node)`: seal title. Default: `'Enter a title'`.
* __upper__ | `string`: the upper text. Default: `'The upper text'`.
* __upperArc__ | `number`: the arc for the upper text. Default: `150`.


## Examples

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
