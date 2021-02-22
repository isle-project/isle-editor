---
id: switch
title: Switch Components
sidebar_label: Switch Components
---

De Switch-component maakt het mogelijk om één element uit een lijst van meerdere elementen weer te geven. Gebruikers kunnen door de verschillende kinderen van de Switch-tag bladeren door te klikken op de op dat moment getoonde tag.

## Opties

* __active__ | `boolean`: regelt of de schakelaar actief is of niet. Default: `true`.
* __tooltip__ | `string`: tooltip weergegeven bij het zweven over het schakelelement. Default: `none`.
* __tooltipPos__ | `string`: plaatsing van de tooltip (ofwel `top`, `left`, `right`, of `bottom`). Default: `'top'`.
* __className__ | `string`: Klasse-naam voor het omhulsel van het overspanningselement. Default: `''`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.
* __onChange__ | `function`: terugbellen wordt aangeroepen wanneer elementen worden geschakeld. Ontvangt als eerste argument de index van het op dat moment getoonde kind. Default: `onChange() {}`.


## Voorbeelden

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
