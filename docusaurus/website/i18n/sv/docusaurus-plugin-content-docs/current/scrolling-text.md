---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

En dynamisk bakgrundskomponent som går igenom en lista med texter med ett visst intervall.

## Alternativ

* __text__ | `(string|array<string>)`: text eller en lista över texter som ska visas. Default: `[]`.
* __loop__ | `boolean`: anger om processen ska visas i all oändlighet. Default: `false`.
* __direction__ | `string`: textflödets riktning (antingen `left`, `right`, "upp", "ner", "spårning", "fokus" eller "virvel").. Default: `'right'`.
* __hold__ | `number`: den tid som texten står stilla (i sekunder). Default: `5`.
* __wait__ | `number`: tiden innan en ny text kommer in (i sekunder). Default: `3`.
* __inTime__ | `number`: tid för ingångseffekten (i sekunder). Default: `1`.
* __outTime__ | `number`: tid för utfasningseffekten (i sekunder). Default: `1`.
* __className__ | `string`: klassens namn. Default: `''`.
* __style__ | `object`: CSS-stilar för texten. Default: `{}`.


## Exempel


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
    text="This is a text re-appearing every five seconds"
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
