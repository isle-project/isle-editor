---
id: switch
title: Switch Components
sidebar_label: Switch Components
---

Switch-komponentti mahdollistaa yhden elementin näyttämisen useista elementeistä koostuvasta luettelosta. Käyttäjät voivat selata Switch-tunnisteen eri lapsia napsauttamalla parhaillaan näytettävää elementtiä.

## Vaihtoehdot

* __active__ | `boolean`: ohjaa, onko kytkin aktiivinen vai ei. Default: `true`.
* __tooltip__ | `string`: työkaluvihje, joka näytetään, kun hiiren kursori siirretään kytkinelementin päälle.. Default: `none`.
* __tooltipPos__ | `string`: työkaluvihjeen sijainti (joko `top`, `left`, `right` tai `bottom`).. Default: `'top'`.
* __className__ | `string`: ympäröivän span-elementin luokan nimi. Default: `''`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.
* __onChange__ | `function`: callback, jota kutsutaan, kun elementtejä vaihdetaan. Vastaanottaa ensimmäisenä argumenttinaan parhaillaan näytettävän lapsen indeksin.. Default: `onChange() {}`.


## Esimerkkejä

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
