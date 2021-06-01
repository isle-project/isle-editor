---
id: switch
title: Switch Components
sidebar_label: Switch Components
---

Komponenta Switch omogoča prikaz enega elementa s seznama več elementov. Uporabniki lahko s klikom na trenutno prikazano oznako Switch prehajajo med različnimi otroki te oznake.

## Možnosti

* __active__ | `boolean`: nadzoruje, ali je stikalo aktivno ali ne.. Default: `true`.
* __tooltip__ | `string`: namig, ki se prikaže ob podrsavanju nad elementom stikala. Default: `none`.
* __tooltipPos__ | `string`: postavitev namigov (`zgoraj`, `levo`, `desno` ali `spodaj`).. Default: `'top'`.
* __className__ | `string`: ime razreda za obkrožajoči element span. Default: `''`.
* __style__ | `object`: Vnosni slogi CSS. Default: `{}`.
* __onChange__ | `function`: povratni klic, ki se sproži ob preklopu elementov. Kot prvi argument prejme indeks trenutno prikazanega otroka.. Default: `onChange() {}`.


## Primeri

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
