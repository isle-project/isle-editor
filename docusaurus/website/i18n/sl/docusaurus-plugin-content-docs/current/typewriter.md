---
id: typewriter 
title: Typewriter
sidebar_label: Typewriter
---

Komponenta ISLE, ki omogoča ustvarjanje učinka pisalnega stroja.

## Možnosti

* __delay__ | `number`: začetni zamik pred začetkom delovanja pisalnega stroja (v milisekundah). Default: `none`.
* __hold__ | `number`: če je besedilo polje nizov, funkcija hold določa trajanje prikaza vrstice, preden se preide na naslednji element v polju.. Default: `2000`.
* __interval__ | `number`: interval pisalnega stroja (v milisekundah). Default: `100`.
* __random__ | `boolean`: če je nastavljena možnost random, se bodo pritiski na tipke izvajali z določeno "humano" naključnostjo.. Default: `false`.
* __sound__ | `boolean`: sliši se tudi vneseni pritisk tipke.. Default: `false`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.
* __text__ | `(string|array<string>)`: celotno besedilo, ki se prikaže, ali niz besedil, ki se prikažejo zaporedno.. Default: `''`.


## Primeri

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Delay and Sound', value: 'delayAndSound' },
        { label: 'With CSS', value: 'withCSS' },
        { label: 'Array of Strings', value: 'array' },
        { label: 'Humanized', value: 'humanized' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Typewriter text="Lorem ipsum" />
```

</TabItem>

<TabItem value="delayAndSound">

```jsx live
<Typewriter text="Lorem ipsum" sound delay={2000} />
```

</TabItem>

<TabItem value="withCSS">

```jsx live
<Typewriter text="Styled Text" style={{ fontSize: 66, color: 'red'}} />
```

</TabItem>

<TabItem value="array">

```jsx live
<Typewriter text={["First Entry", "Second Entry", "Third Entry"]}  hold={2000} />
```

</TabItem>

<TabItem value="humanized">

```jsx live
<Typewriter text="This is a humanized performance" random interval={170} />
```

</TabItem>

</Tabs>

