---
id: scrolling-text
title: Scrolling Text
sidebar_label: Scrolling Text
---

Dynamická komponenta na pozadí, která v zadaném intervalu cykluje seznam textů.

## Možnosti

* __text__ | `(string|array<string>)`: text nebo seznam textů, které se mají zobrazit. Default: `[]`.
* __loop__ | `boolean`: určuje, zda se proces má zobrazovat nekonečně dlouho.. Default: `false`.
* __direction__ | `string`: směr toku textu (buď `left`, `right`, `nahoru`, `dolů`, `sledování`, `ostření` nebo `vlnění`).. Default: `'right'`.
* __hold__ | `number`: doba, po kterou text zůstane v klidu (v sekundách). Default: `5`.
* __wait__ | `number`: doba, než přijde nová zpráva (v sekundách).. Default: `3`.
* __inTime__ | `number`: čas vstupního efektu (v sekundách). Default: `1`.
* __outTime__ | `number`: čas výstupního efektu (v sekundách). Default: `1`.
* __className__ | `string`: název třídy. Default: `''`.
* __style__ | `object`: CSS styly textu. Default: `{}`.


## Příklady


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
