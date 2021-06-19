---
id: switch
title: Switch Components
sidebar_label: Switch Components
---

Komponent Switch võimaldab kuvada ühte elementi mitmest elemendist koosnevast nimekirjast. Kasutajad saavad lülitussildi erinevaid lapsi läbida, klõpsates hetkel kuvataval elemendil.

## Valikud

* __active__ | `boolean`: kontrollib, kas lüliti on aktiivne või mitte. Default: `true`.
* __tooltip__ | `string`: tööriistavihik, mis kuvatakse, kui viidakse hiirega üle lülituselemendi. Default: `none`.
* __tooltipPos__ | `string`: tööriistakriipsu paigutus (kas `top`, `left`, `right` või `bottom`).. Default: `'top'`.
* __className__ | `string`: ümbritseva span elemendi klassi nimi. Default: `''`.
* __style__ | `object`: CSS inline stiilid. Default: `{}`.
* __onChange__ | `function`: callback, mis kutsutakse esile, kui elemendid vahetatakse. Saab esimese argumendina hetkel kuvatava lapse indeksi.. Default: `onChange() {}`.


## Näited

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Custom Tooltip', value: 'withTooltip' },
        { label: 'With Style', value: 'withStyle' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Switch>
    <span>Option 1</span>
    <span>Option 2</span>
</Switch>
```

</TabItem>

<TabItem value="withTooltip">

```jsx live
<Switch tooltip="Just click and see" tooltipPos="left">
    <span>Option 1</span>
    <span>Option 2</span>
</Switch>
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<Switch  
  style={{ fontSize: 80, fontFamily: 'Open Sans Condensed'}} 
>
    <span>Some Clouds</span>
    <img src="https://bit.ly/3rLGE30" />
    <img src ="https://bit.ly/2OzxEj3" />
</Switch>
```

</TabItem>

</Tabs>
