---
id: r-help
title: R Help
sidebar_label: R Help
---

Veiciet, lai pēc klikšķa uz vārdiem modālajā logā tiktu izvilkta R dokumentācija.

## Iespējas

* __func__ | `string`: tās `R funkcijas` nosaukums, kuras dokumentācija jāatver. Ja nav norādīts, tiek pieņemts, ka `RHelp` taga saturs ir vienāds ar funkcijas nosaukumu.. Default: `''`.
* __library__ | `string`: R pakotnes nosaukums, kurā atrodas funkcija.. Default: `'base'`.
* __visible__ | `boolean`: kontrolē, vai palīdzības modālais logs ir jāatver pie palaišanas.. Default: `false`.


## Piemēri

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
