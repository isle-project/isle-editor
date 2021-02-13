---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

Un componente dinamico di sfondo che scorre ciclicamente attraverso una lista di testi ad un intervallo di tempo specificato.

## Options

* __text__ | `array<string>`: testo o elenco di testi da visualizzare. Default: `[]`.
* __loop__ | `boolean`: indica se il processo deve essere visualizzato all'infinito. Default: `false`.
* __direction__ | `string`: la direzione del flusso di testo (o "sinistra", "destra", "su", "giù", "traccia", "messa a fuoco" o "turbinio"). Default: `'right'`.
* __hold__ | `number`: il tempo in cui il testo rimane fermo (in secondi). Default: `5`.
* __wait__ | `number`: il tempo prima che arrivi un nuovo testo (in secondi). Default: `3`.
* __inTime__ | `number`: tempo dell'effetto ingresso (in secondi). Default: `1`.
* __outTime__ | `number`: tempo dell'effetto di uscita (in secondi). Default: `1`.
* __className__ | `string`: nome della classe. Default: `''`.
* __style__ | `object`: Stili CSS del testo. Default: `{}`.


## Examples

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



