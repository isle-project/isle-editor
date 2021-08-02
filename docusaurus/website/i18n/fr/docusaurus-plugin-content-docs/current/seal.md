---
id: seal 
title: Seal
sidebar_label: Seal
---

Un sceau d'approbation.

## Options

* __active__ | `boolean`: contrôle si le phoque est actif ou grisé. Default: `true`.
* __onClick__ | `function`: fonction de rappel invoquée lorsque la note est cliquée. Default: `onClick() {}`.
* __scale__ | `number`: la taille de l'objet (si elle n'est pas explicitement définie, le sceau n'est pas redimensionné). Default: `none`.
* __innerStyle__ | `object`: le style pour le cercle intérieur. Default: `{}`.
* __lower__ | `string`: le texte inférieur. Default: `'The lower text'`.
* __lowerArc__ | `number`: l'arc pour le texte inférieur. Default: `150`.
* __noOrnaments__ | `boolean`: empêche la restitution des ornements. Default: `false`.
* __removable__ | `boolean`: contrôle si la note est retirée lorsqu'on clique dessus. Default: `false`.
* __style__ | `object`: le style de l'élément. Default: `none`.
* __title__ | `(string|node)`: titre du sceau. Default: `'Enter a title'`.
* __upper__ | `string`: le texte supérieur. Default: `'The upper text'`.
* __upperArc__ | `number`: l'arc pour le texte supérieur. Default: `150`.


## Exemples

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
