---
id: typewriter 
title: Typewriter
sidebar_label: Typewriter
---

Komponent ISLE, który pozwala na stworzenie efektu maszyny do pisania.

## Options

* __delay__ | `number`: początkowe opóźnienie przed uruchomieniem maszyny do pisania (w milisekundach). Default: `none`.
* __hold__ | `number`: jeśli tekst jest tablicą łańcuchów, przytrzymaj określony czas trwania, pełny zostanie wyświetlony zanim przejdzie do następnego elementu tablicy. Default: `2000`.
* __interval__ | `number`: przedział czasowy maszyny do pisania (w milisekundach). Default: `100`.
* __random__ | `boolean`: jeśli ustawiony jest losowy, naciśnięcia klawiszy będą wykonywane z pewną, "ludzką" losowością. Default: `false`.
* __sound__ | `boolean`: naciśnięcie klawisza na klawiaturze będzie również słyszalne. Default: `false`.
* __style__ | `object`: Style CSS inline. Default: `{}`.
* __text__ | `(string|array<string>)`: pełny tekst, który ma zostać wyświetlony. Default: `''`.


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

