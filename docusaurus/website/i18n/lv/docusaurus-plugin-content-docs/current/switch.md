---
id: switch
title: Switch Components
sidebar_label: Switch Components
---

Slēdža komponents ļauj parādīt vienu elementu no vairāku elementu saraksta. Lietotāji var pārvietoties starp dažādiem pārslēdzēja taga bērniem, noklikšķinot uz pašlaik rādītā.

## Iespējas

* __active__ | `boolean`: kontrolē, vai slēdzis ir aktīvs vai nav. Default: `true`.
* __tooltip__ | `string`: Rīkjoslas uzraksts, kas tiek parādīts, uzbraucot virs slēdža elementa.. Default: `none`.
* __tooltipPos__ | `string`: uzraksta izvietojums (`augšā`, `kreisajā`, `pa kreisi`, `pa labi` vai `apakšā`).. Default: `'top'`.
* __className__ | `string`: klases nosaukums aptverošajam span elementam. Default: `''`.
* __style__ | `object`: CSS iebūvētie stili. Default: `{}`.
* __onChange__ | `function`: atgriezeniskais zvans, kas tiek izsaukts, kad elementi tiek pārslēgti. Kā pirmo argumentu saņem pašlaik rādītā bērna indeksu.. Default: `onChange() {}`.


## Piemēri

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
