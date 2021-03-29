---
id: r-help
title: R Help
sidebar_label: R Help
---

Laat woorden de R-documentatie in een modaal venster ophalen wanneer er op wordt geklikt.

## Opties

* __func__ | `string`: naam van de `R-functie` waarvoor de documentatie moet worden geopend. Indien niet geleverd, wordt de inhoud van de `RHelp`-tag verondersteld gelijk te zijn aan de naam van de functie.. Default: `''`.
* __library__ | `string`: naam van het R-pakket waarin de functie zich bevindt. Default: `'base'`.
* __visible__ | `boolean`: controleert of het hulpvenster bij het opstarten moet worden geopend.. Default: `false`.


## Voorbeelden


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
