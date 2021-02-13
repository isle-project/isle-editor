---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

Dynamiczny element tła, który przechodzi cyklicznie przez listę tekstów w określonym odstępie czasu.

## Options

* __text__ | `array<string>`: tekst lub lista tekstów do wyświetlenia. Default: `[]`.
* __loop__ | `boolean`: wskazuje, czy proces powinien być wyświetlany w nieskończoność. Default: `false`.
* __direction__ | `string`: kierunek przepływu tekstu (`lewy`, `prawy`, `w górę`, `w dół`, `śledzenie`, `ogniskowanie`, lub `wirowanie`). Default: `'right'`.
* __hold__ | `number`: czas, przez jaki tekst pozostaje nieruchomy (w sekundach). Default: `5`.
* __wait__ | `number`: czas do nadejścia nowego tekstu (w sekundach). Default: `3`.
* __inTime__ | `number`: czas efektu wejścia (w sekundach). Default: `1`.
* __outTime__ | `number`: czas efektu wyjścia (w sekundach). Default: `1`.
* __className__ | `string`: nazwa klasy. Default: `''`.
* __style__ | `object`: Style CSS tekstu. Default: `{}`.


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



