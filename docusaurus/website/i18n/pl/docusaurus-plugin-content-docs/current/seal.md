---
id: seal 
title: Seal
sidebar_label: Seal
---

Plomba homologacyjna.

## Opcje

* __active__ | `boolean`: kontroluje, czy pieczęć jest aktywna czy szara. Default: `true`.
* __onClick__ | `function`: funkcja callback wywoływana po kliknięciu notatki. Default: `onClick() {}`.
* __scale__ | `number`: rozmiar obiektu (jeśli nie jest wyraźnie określony, pieczęć nie jest skalowana). Default: `none`.
* __innerStyle__ | `object`: styl dla wewnętrznego kręgu. Default: `{}`.
* __lower__ | `string`: tekst dolny. Default: `'The lower text'`.
* __lowerArc__ | `number`: łuk dla dolnego tekstu. Default: `150`.
* __noOrnaments__ | `boolean`: zapobiega renderowaniu ozdób. Default: `false`.
* __removable__ | `boolean`: kontroluje, czy notatka jest usuwana po kliknięciu. Default: `false`.
* __style__ | `object`: styl dla elementu. Default: `none`.
* __title__ | `(string|node)`: tytuł stempla. Default: `'Enter a title'`.
* __upper__ | `string`: tekst górny. Default: `'The upper text'`.
* __upperArc__ | `number`: łuk dla tekstu górnego. Default: `150`.


## Przykłady

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
