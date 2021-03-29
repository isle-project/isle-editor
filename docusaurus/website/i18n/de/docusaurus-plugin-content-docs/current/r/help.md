---
id: r-help
title: R Help
sidebar_label: R Help
---

Bringen Sie Wörter dazu, die R-Dokumentation in einem modalen Fenster aufzurufen, wenn sie angeklickt werden.

## Optionen

* __func__ | `string`: Name der `R-Funktion`, für die die Dokumentation geöffnet werden soll. Falls nicht angegeben, wird angenommen, dass der Inhalt des `RHelp`-Tags gleich dem Namen der Funktion ist. Default: `''`.
* __library__ | `string`: Name des R-Pakets, in dem sich die Funktion befindet. Default: `'base'`.
* __visible__ | `boolean`: steuert, ob das modale Hilfefenster beim Starten geöffnet werden soll. Default: `false`.


## Beispiele

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
