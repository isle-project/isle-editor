---
id: switch
title: Switch Components
sidebar_label: Switch Components
---

Die Switch-Komponente ermöglicht die Anzeige eines Elements aus einer Liste mit mehreren Elementen. Benutzer können die verschiedenen Kinder des Switch-Tags durchlaufen, indem sie auf das aktuell angezeigte klicken.

## Optionen

* __active__ | `boolean`: steuert, ob der Schalter aktiv ist oder nicht. Default: `true`.
* __tooltip__ | `string`: Tooltip, der angezeigt wird, wenn der Mauszeiger über dem Schalterelement steht. Default: `none`.
* __tooltipPos__ | `string`: Platzierung des Tooltips (entweder `top`, `left`, `right` oder `bottom`). Default: `'top'`.
* __className__ | `string`: Klassenname für das umschließende span-Element. Default: `''`.
* __style__ | `object`: CSS-Inline-Stile. Default: `{}`.
* __onChange__ | `function`: Callback, der aufgerufen wird, wenn Elemente umgeschaltet werden. Erhält als erstes Argument den Index des aktuell angezeigten Childs. Default: `onChange() {}`.


## Beispiele

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
