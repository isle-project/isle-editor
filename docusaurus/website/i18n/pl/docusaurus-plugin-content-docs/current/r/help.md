---
id: r-help
title: R Help
sidebar_label: R Help
---

Po kliknięciu słów wyciągnij dokumentację R w oknie modalnym.

## Opcje

* __func__ | `string`: nazwa funkcji `R`, dla której należy otworzyć dokumentację. Jeśli nie została dostarczona, przyjmuje się, że zawartość znacznika `RHelp` jest równa nazwie funkcji. Default: `''`.
* __library__ | `string`: nazwa pakietu R, w którym znajduje się dana funkcja. Default: `'base'`.
* __visible__ | `boolean`: kontroluje, czy okno pomocy modalnej powinno być otwarte podczas uruchamiania.. Default: `false`.


## Przykłady


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'From Library', value: 'otherLibrary' },
        { label: 'Visible on Startup', value: 'visible' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<span><RHelp>sum</RHelp> is used to sum the elements of a vector.</span>
```

</TabItem>

<TabItem value="otherLibrary" >

```jsx live
<span><RHelp library="graphics">hist</RHelp> is used to create a histogram.</span>
```

</TabItem>

<TabItem value="visible" >

```jsx live
<span><RHelp visible={true} >sum</RHelp> is used to sum the elements of a vector.</span>
```

</TabItem>

</Tabs>
