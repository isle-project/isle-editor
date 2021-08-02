---
id: seal 
title: Seal
sidebar_label: Seal
---

Een keurmerk.

## Opties

* __active__ | `boolean`: controleert of het zegel actief of grijs is. Default: `true`.
* __onClick__ | `function`: terugbelfunctie die wordt aangeroepen wanneer op het biljet wordt geklikt. Default: `onClick() {}`.
* __scale__ | `number`: objectgrootte (als deze niet expliciet is ingesteld, wordt de verzegeling niet opnieuw verzegeld). Default: `none`.
* __innerStyle__ | `object`: de stijl voor de binnenste cirkel. Default: `{}`.
* __lower__ | `string`: de onderste tekst. Default: `'The lower text'`.
* __lowerArc__ | `number`: de boog voor de onderste tekst. Default: `150`.
* __noOrnaments__ | `boolean`: verhindert de weergave van de ornamenten. Default: `false`.
* __removable__ | `boolean`: controleert of de notitie wordt verwijderd wanneer er op wordt geklikt. Default: `false`.
* __style__ | `object`: de stijl voor het element. Default: `none`.
* __title__ | `(string|node)`: verzegelingstitel. Default: `'Enter a title'`.
* __upper__ | `string`: de bovenste tekst. Default: `'The upper text'`.
* __upperArc__ | `number`: de boog voor de bovenste tekst. Default: `150`.


## Voorbeelden

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
