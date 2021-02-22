---
id: typewriter 
title: Typewriter
sidebar_label: Typewriter
---

Een ISLE-component waarmee u een schrijfmachine-effect kunt creëren.

## Opties

* __delay__ | `number`: aanvankelijke vertraging voor de start van de schrijfmachine (in milliseconden). Default: `none`.
* __hold__ | `number`: Als tekst een array van strings is, houdt u de opgegeven duur aan voordat de volledige tekst naar het volgende item in de array gaat.. Default: `2000`.
* __interval__ | `number`: het interval van de typemachine (in milliseconden). Default: `100`.
* __random__ | `boolean`: als random is ingesteld, zullen de toetsaanslagen worden uitgevoerd met een bepaalde, "humane" willekeurigheid.. Default: `false`.
* __sound__ | `boolean`: de getypte toetsaanslag zal ook worden gehoord. Default: `false`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.
* __text__ | `(string|array<string>)`: de volledige tekst die moet worden weergegeven. Default: `''`.


## Voorbeelden

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

