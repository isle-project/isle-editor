---
id: typewriter 
title: Typewriter
sidebar_label: Typewriter
---

ISLE komponent, mis võimaldab luua kirjutusmasina efekti.

## Valikud

* __delay__ | `number`: algne viivitus enne kirjutusmasina käivitamist (millisekundites). Default: `none`.
* __hold__ | `number`: kui tekst on stringide massiivi, määrab hold kindlaks, kui kaua rida kuvatakse enne, kui see läheb üle massiivi järgmisele elemendile.. Default: `2000`.
* __interval__ | `number`: kirjutusmasina intervall (millisekundites). Default: `100`.
* __random__ | `boolean`: kui on seatud juhuslikkus, tehakse klahvivajutused teatud "humaanse" juhuslikkusega.. Default: `false`.
* __sound__ | `boolean`: kuuldub ka trükitud klahvivajutus. Default: `false`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.
* __text__ | `(string|array<string>)`: kuvatav terviktekst või järjestikku kuvatavate tekstide massiivi.. Default: `''`.


## Näited

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

