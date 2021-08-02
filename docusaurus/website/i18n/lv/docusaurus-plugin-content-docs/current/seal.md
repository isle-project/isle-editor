---
id: seal 
title: Seal
sidebar_label: Seal
---

Apstiprinājuma zīmogs.

## Iespējas

* __active__ | `boolean`: kontrolē, vai zīmogs ir aktīvs vai pelēks.. Default: `true`.
* __onClick__ | `function`: atgriezeniskā zvana funkcija, kas tiek izsaukta, kad piezīme ir noklikšķināta.. Default: `onClick() {}`.
* __scale__ | `number`: objekta izmērs (ja nav skaidri noteikts, zīmoga mērogs netiek mainīts).. Default: `none`.
* __innerStyle__ | `object`: stils iekšējam lokam. Default: `{}`.
* __lower__ | `string`: apakšējais teksts. Default: `'The lower text'`.
* __lowerArc__ | `number`: apakšējā teksta loka. Default: `150`.
* __noOrnaments__ | `boolean`: novērš ornamentu atveidošanu. Default: `false`.
* __removable__ | `boolean`: kontrolē, vai pēc klikšķa uz piezīmes tiek noņemta.. Default: `false`.
* __style__ | `object`: elementa stilu. Default: `none`.
* __title__ | `(string|node)`: zīmoga nosaukums. Default: `'Enter a title'`.
* __upper__ | `string`: augšējais teksts. Default: `'The upper text'`.
* __upperArc__ | `number`: augšējā teksta loka. Default: `150`.


## Piemēri

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
