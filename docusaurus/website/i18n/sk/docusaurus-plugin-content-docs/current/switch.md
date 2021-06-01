---
id: switch
title: Switch Components
sidebar_label: Switch Components
---

Komponent Switch umožňuje zobraziť jeden prvok zo zoznamu viacerých prvkov. Používatelia môžu prechádzať rôznymi deťmi značky Switch kliknutím na aktuálne zobrazený prvok.

## Možnosti

* __active__ | `boolean`: kontroluje, či je prepínač aktívny alebo nie. Default: `true`.
* __tooltip__ | `string`: nápovedu zobrazenú pri prejdení nad prvkom prepínača. Default: `none`.
* __tooltipPos__ | `string`: umiestnenie nápovedy (buď `hore`, `vľavo`, `vpravo` alebo `dole`). Default: `'top'`.
* __className__ | `string`: názov triedy pre obklopujúci prvok span. Default: `''`.
* __style__ | `object`: Riadkové štýly CSS. Default: `{}`.
* __onChange__ | `function`: spätné volanie vyvolané pri prepnutí prvkov. Ako prvý argument prijíma index aktuálne zobrazeného dieťaťa. Default: `onChange() {}`.


## Príklady

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
