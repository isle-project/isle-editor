---
id: seal 
title: Seal
sidebar_label: Seal
---

Un sigillo di approvazione.

## Opzioni

* __active__ | `boolean`: controlla se la guarnizione è attiva o grigia. Default: `true`.
* __onClick__ | `function`: funzione di richiamata invocata quando si fa clic sulla nota. Default: `onClick() {}`.
* __scale__ | `number`: dimensione dell'oggetto (se non esplicitamente impostato, la guarnizione non viene ridimensionata). Default: `none`.
* __innerStyle__ | `object`: lo stile per il cerchio interno. Default: `{}`.
* __lower__ | `string`: il testo in basso. Default: `'The lower text'`.
* __lowerArc__ | `number`: l'arco per il testo inferiore. Default: `150`.
* __noOrnaments__ | `boolean`: impedisce la resa degli ornamenti. Default: `false`.
* __removable__ | `boolean`: controlla se la nota viene rimossa quando si fa clic su. Default: `false`.
* __style__ | `object`: lo stile per l'elemento. Default: `none`.
* __title__ | `(string|node)`: titolo del sigillo. Default: `'Enter a title'`.
* __upper__ | `string`: il testo `top`. Default: `'The upper text'`.
* __upperArc__ | `number`: l'arco per il testo superiore. Default: `150`.


## Esempi

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
