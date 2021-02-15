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
        { label: 'List of Texts', value: 'list' },
        { label: 'Background Image', value: 'backgroundImage' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<ScrollingText
    text= "This is a text re-appearing every five seconds"
    style={{ fontSize: 44, color: 'blue' }}
    wait={5}
    hold={2}
    loop
/>
```

</TabItem>

<TabItem value="list">

```jsx live
<ScrollingText
    text={[ 'One', 'Two', 'Three', 'Four'  ]}
    style={{ fontSize: 84, color: 'red', textAlign: 'center' }}
    loop
    direction="left"
    wait={.5}
    hold={2}
/>
```

</TabItem>

<TabItem value="backgroundImage">

```jsx live
<ScrollingText
    text={[ 'One', 'Two', 'Three', 'Four'  ]}
    style={{ fontSize: 84, color: 'white', textAlign: 'center', backgroundImage: 'url(https://bit.ly/3qlRgoR)', backgroundSize: '1200px 200px' }}
    loop
    direction="left"
    wait={.5}
    hold={2}
/>
```

</TabItem>

</Tabs>
