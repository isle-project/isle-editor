---
id: typewriter 
title: Typewriter
sidebar_label: Typewriter
---

Komponenta ISLE, která umožňuje vytvořit efekt psacího stroje.

## Možnosti

* __delay__ | `number`: počáteční zpoždění před spuštěním psacího stroje (v milisekundách). Default: `none`.
* __hold__ | `number`: pokud je text polem řetězců, funkce hold určuje dobu, po kterou bude řádek zobrazen, než se přejde na další položku v poli.. Default: `2000`.
* __interval__ | `number`: interval psacího stroje (v milisekundách). Default: `100`.
* __random__ | `boolean`: pokud je nastavena náhodnost, budou stisky kláves prováděny s určitou "lidskou" náhodností.. Default: `false`.
* __sound__ | `boolean`: bude slyšet i stisknutí klávesy.. Default: `false`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.
* __text__ | `(string|array<string>)`: celý text, který se má zobrazit, nebo pole textů, které se mají zobrazit postupně.. Default: `''`.


## Příklady

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

