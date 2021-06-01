---
id: typewriter 
title: Typewriter
sidebar_label: Typewriter
---

Egy ISLE komponens, amely lehetővé teszi az írógép effekt létrehozását.

## Opciók

* __delay__ | `number`: kezdeti késleltetés az írógép indítása előtt (milliszekundumban). Default: `none`.
* __hold__ | `number`: ha a text egy stringekből álló tömb, a hold megadja, hogy a sor mennyi ideig jelenjen meg, mielőtt a tömb következő elemére tér át.. Default: `2000`.
* __interval__ | `number`: az írógép intervalluma (ezredmásodpercben). Default: `100`.
* __random__ | `boolean`: ha a véletlenszerűség van beállítva, akkor a billentyűleütések egy bizonyos, "humánus" véletlenszerűséggel történnek.. Default: `false`.
* __sound__ | `boolean`: a beírt billentyűleütés is hallható lesz. Default: `false`.
* __style__ | `object`: CSS inline stílusok. Default: `{}`.
* __text__ | `(string|array<string>)`: a teljes megjelenítendő szöveg vagy a megjelenítendő szövegek tömbje, amelyeket egymás után kell megjeleníteni. Default: `''`.


## Példák

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

