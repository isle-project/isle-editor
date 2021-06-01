---
id: typewriter 
title: Typewriter
sidebar_label: Typewriter
---

Komponent ISLE, ktorý umožňuje vytvoriť efekt písacieho stroja.

## Možnosti

* __delay__ | `number`: počiatočné oneskorenie pred spustením písacieho stroja (v milisekundách). Default: `none`.
* __hold__ | `number`: ak je text poľom reťazcov, funkcia hold určuje dobu, počas ktorej sa riadok zobrazí, kým sa prejde na ďalšiu položku v poli. Default: `2000`.
* __interval__ | `number`: interval písacieho stroja (v milisekundách). Default: `100`.
* __random__ | `boolean`: ak je nastavená náhodnosť, stlačenia kláves sa budú vykonávať s určitou "ľudskou" náhodnosťou. Default: `false`.
* __sound__ | `boolean`: bude počuť aj stlačenie klávesu. Default: `false`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.
* __text__ | `(string|array<string>)`: celý text, ktorý sa má zobraziť, alebo pole textov, ktoré sa majú postupne zobraziť. Default: `''`.


## Príklady

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

