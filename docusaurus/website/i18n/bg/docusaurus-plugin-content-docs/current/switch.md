---
id: switch
title: Switch Components
sidebar_label: Switch Components
---

Компонентът Switch позволява показването на един елемент от списък с няколко елемента. Потребителите могат да преминават през различните деца на тага Switch, като щракнат върху текущо показваното.

## Опции

* __active__ | `boolean`: контролира дали превключвателят е активен или не. Default: `true`.
* __tooltip__ | `string`: подсказка за инструменти, показвана при преминаване с мишката над елемента на превключвателя. Default: `none`.
* __tooltipPos__ | `string`: разположение на подсказката за инструменти (`top`, `right`, `left` или `bottom`). Default: `'top'`.
* __className__ | `string`: име на класа на ограждащия елемент span. Default: `''`.
* __style__ | `object`: CSS инлайн стилове. Default: `{}`.
* __onChange__ | `function`: обратна връзка, извикана при превключване на елементи. Получава като първи аргумент индекса на текущо показваното дете. Default: `onChange() {}`.


## Примери

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
