---
id: switch
title: Switch Components
sidebar_label: Switch Components
---

Komponenta Switch umožňuje zobrazit jeden prvek ze seznamu několika prvků. Uživatelé mohou procházet různé potomky značky Switch kliknutím na aktuálně zobrazený prvek.

## Možnosti

* __active__ | `boolean`: řídí, zda je přepínač aktivní, nebo ne. Default: `true`.
* __tooltip__ | `string`: nápověda zobrazená při najetí na přepínací prvek. Default: `none`.
* __tooltipPos__ | `string`: umístění nápovědy (buď `nahoře`, `vlevo`, `vpravo`, nebo `dole`).. Default: `'top'`.
* __className__ | `string`: název třídy pro obklopující prvek span. Default: `''`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.
* __onChange__ | `function`: zpětné volání vyvolané při přepnutí prvků. Jako první argument obdrží index aktuálně zobrazeného podřízeného prvku.. Default: `onChange() {}`.


## Příklady

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
