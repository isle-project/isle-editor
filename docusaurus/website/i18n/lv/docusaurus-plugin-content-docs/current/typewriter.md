---
id: typewriter 
title: Typewriter
sidebar_label: Typewriter
---

ISLE komponents, kas ļauj izveidot rakstāmmašīnas efektu.

## Iespējas

* __delay__ | `number`: sākotnējā aizkave pirms rakstāmmašīnas palaišanas (milisekundēs).. Default: `none`.
* __hold__ | `number`: ja teksts ir virkņu masīvs, hold norāda, cik ilgi rinda tiks rādīta, pirms tiks pāriet uz nākamo elementu masīvā.. Default: `2000`.
* __interval__ | `number`: rakstāmmašīnas intervāls (milisekundēs).. Default: `100`.
* __random__ | `boolean`: ja ir iestatīts izlases princips, taustiņi tiks izpildīti ar zināmu, "cilvēcīgu" nejaušību.. Default: `false`.
* __sound__ | `boolean`: būs dzirdams arī ievadītais taustiņš.. Default: `false`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.
* __text__ | `(string|array<string>)`: parādāmo pilnu tekstu vai secīgi parādāmo tekstu masīvu.. Default: `''`.


## Piemēri

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

