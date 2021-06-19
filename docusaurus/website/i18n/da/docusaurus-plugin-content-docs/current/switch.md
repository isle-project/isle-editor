---
id: switch
title: Switch Components
sidebar_label: Switch Components
---

Switch-komponenten gør det muligt at vise et element ud af en liste med flere elementer. Brugerne kan gå gennem de forskellige børn af Switch-taggen ved at klikke på det element, der vises i øjeblikket.

## Indstillinger

* __active__ | `boolean`: kontrollerer, om kontakten er aktiv eller ej. Default: `true`.
* __tooltip__ | `string`: tooltip, der vises, når man holder musen hen over switch-elementet. Default: `none`.
* __tooltipPos__ | `string`: placering af værktøjstip (enten `top`, `left`, `right` eller `bottom`). Default: `'top'`.
* __className__ | `string`: klassens navn for det omsluttende span-element. Default: `''`.
* __style__ | `object`: CSS inline-stilarter. Default: `{}`.
* __onChange__ | `function`: callback, der påkaldes, når der skiftes mellem elementer. Modtager som sit første argument indekset for det aktuelt viste barn. Default: `onChange() {}`.


## Eksempler

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
