---
id: r-help
title: R Help
sidebar_label: R Help
---

Faceți cuvintele să afișeze documentația R într-o fereastră modală atunci când se face clic pe ele.

## Opțiuni

* __func__ | `string`: numele funcției `R` pentru care se deschide documentația. Dacă nu este furnizat, conținutul etichetei `RHelp` se presupune a fi egal cu numele funcției.. Default: `''`.
* __library__ | `string`: numele pachetului R în care se află funcția. Default: `'base'`.
* __visible__ | `boolean`: controlează dacă fereastra modală de ajutor trebuie să fie deschisă la pornire. Default: `false`.


## Exemple

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'From Library', value: 'otherLibrary' },
        { label: 'Visible on Startup', value: 'visible' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<span><RHelp>sum</RHelp> is used to sum the elements of a vector.</span>
```

</TabItem>

<TabItem value="otherLibrary" >

```jsx live
<span><RHelp library="graphics">hist</RHelp> is used to create a histogram.</span>
```

</TabItem>

<TabItem value="visible" >

```jsx live
<span><RHelp visible={true} >sum</RHelp> is used to sum the elements of a vector.</span>
```

</TabItem>

</Tabs>
