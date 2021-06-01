---
id: typewriter 
title: Typewriter
sidebar_label: Typewriter
---

En ISLE-komponent som gör det möjligt att skapa en skrivmaskineffekt.

## Alternativ

* __delay__ | `number`: inledande fördröjning innan skrivmaskinen startar (i millisekunder). Default: `none`.
* __hold__ | `number`: Om text är en array av strängar, anger hold hur länge raden ska visas innan den övergår till nästa objekt i arrayen.. Default: `2000`.
* __interval__ | `number`: Intervallet för skrivmaskinen (i millisekunder).. Default: `100`.
* __random__ | `boolean`: Om slumpmässigt är inställt kommer tangenttryckningarna att utföras med en viss "mänsklig" slumpmässighet.. Default: `false`.
* __sound__ | `boolean`: det inskrivna tangenttrycket hörs också. Default: `false`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.
* __text__ | `(string|array<string>)`: den fullständiga texten som ska visas eller en rad texter som ska visas i sekvens.. Default: `''`.


## Exempel

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

