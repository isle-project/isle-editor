---
id: switch
title: Switch Components
sidebar_label: Switch Components
---

Le composant "Switch" permet d'afficher un élément parmi une liste de plusieurs éléments. L'utilisateur peut faire défiler les différents enfants de la balise Switch en cliquant sur celui qui est actuellement affiché.

## Options

* __active__ | `boolean`: contrôle si l'interrupteur est actif ou non. Default: `true`.
* __tooltip__ | `string`: info-bulle affichée lors du survol de l'élément de commutation. Default: `none`.
* __tooltipPos__ | `string`: le placement de l'infobulle (soit `top`, `left`, `right` ou `bottom`). Default: `'top'`.
* __className__ | `string`: le nom de la classe de l'élément de portée enveloppante. Default: `''`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.
* __onChange__ | `function`: rappel invoqué lors de la commutation des éléments. Reçoit comme premier argument l'index de l'enfant actuellement affiché. Default: `onChange() {}`.


## Exemples

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
