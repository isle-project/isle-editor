---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

Een dynamische achtergrondcomponent die met een bepaald interval door een lijst van teksten heenloopt.

## Options

* __text__ | `array<string>`: tekst of lijst van teksten die moeten worden weergegeven. Default: `[]`.
* __loop__ | `boolean`: geeft aan of het proces oneindig moet worden weergegeven. Default: `false`.
* __direction__ | `string`: de richting van de tekststroom (ofwel `left`, `right`, `up`, `down`, `tracking`, `focus`, of `swirl`). Default: `'right'`.
* __hold__ | `number`: de tijd dat de tekst stil blijft staan (in seconden). Default: `5`.
* __wait__ | `number`: de tijd voordat een nieuwe tekst aankomt (in seconden). Default: `3`.
* __inTime__ | `number`: tijd van het ingangseffect (in seconden). Default: `1`.
* __outTime__ | `number`: tijd van het uitgangseffect (in seconden). Default: `1`.
* __className__ | `string`: klassennaam. Default: `''`.
* __style__ | `object`: CSS-stijlen van de tekst. Default: `{}`.


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



