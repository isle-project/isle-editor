---
id: switch
title: Switch Components
sidebar_label: Switch Components
---

Switch-komponenten gör det möjligt att visa ett element ur en lista med flera element. Användaren kan växla mellan de olika barnen till Switch-taggen genom att klicka på det som visas för tillfället.

## Alternativ

* __active__ | `boolean`: kontrollerar om växeln är aktiv eller inte. Default: `true`.
* __tooltip__ | `string`: tooltip som visas när man håller muspekaren över växelelementet. Default: `none`.
* __tooltipPos__ | `string`: placering av verktygstipsen (antingen `top`, `left`, `right` eller `bottom`). Default: `'top'`.
* __className__ | `string`: Klassnamn för det omslutande span-elementet.. Default: `''`.
* __style__ | `object`: CSS-stilar inline. Default: `{}`.
* __onChange__ | `function`: callback som aktiveras när element byts ut. Det första argumentet är indexet för det barn som visas för tillfället.. Default: `onChange() {}`.


## Exempel

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
