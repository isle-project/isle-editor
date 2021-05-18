---
id: typewriter 
title: Typewriter
sidebar_label: Typewriter
---

Un componente ISLE che permette di creare un effetto macchina da scrivere.

## Opzioni

* __delay__ | `number`: ritardo iniziale prima dell'avvio della macchina da scrivere (in millisecondi). Default: `none`.
* __hold__ | `number`: se il testo è un array di stringhe, tenere specificato la durata che l'intero sarà visualizzato prima che passi all'elemento successivo dell'array. Default: `2000`.
* __interval__ | `number`: l'intervallo della macchina da scrivere (in millisecondi). Default: `100`.
* __random__ | `boolean`: se è impostata la casualità, le battute dei tasti saranno eseguite con una certa casualità "umana". Default: `false`.
* __sound__ | `boolean`: si sentirà anche la battitura a macchina. Default: `false`.
* __style__ | `object`: Stili in linea CSS. Default: `{}`.
* __text__ | `(string|array<string>)`: il testo completo da visualizzare. Default: `''`.


## Esempi

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

