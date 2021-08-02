---
id: seal 
title: Seal
sidebar_label: Seal
---

Schvalovací pečeť.

## Možnosti

* __active__ | `boolean`: kontroluje, zda je pečeť aktivní nebo šedá.. Default: `true`.
* __onClick__ | `function`: funkce zpětného volání vyvolaná při kliknutí na poznámku. Default: `onClick() {}`.
* __scale__ | `number`: velikost objektu (pokud není explicitně nastavena, velikost pečeti se nezmění).. Default: `none`.
* __innerStyle__ | `object`: styl pro vnitřní okruh. Default: `{}`.
* __lower__ | `string`: spodní text. Default: `'The lower text'`.
* __lowerArc__ | `number`: oblouk pro spodní text. Default: `150`.
* __noOrnaments__ | `boolean`: zabraňuje vykreslení ornamentů. Default: `false`.
* __removable__ | `boolean`: řídí, zda se poznámka po kliknutí odstraní.. Default: `false`.
* __style__ | `object`: styl prvku. Default: `none`.
* __title__ | `(string|node)`: název pečeti. Default: `'Enter a title'`.
* __upper__ | `string`: horní text. Default: `'The upper text'`.
* __upperArc__ | `number`: oblouk pro horní text. Default: `150`.


## Příklady

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
