---
id: switch
title: Switch Components
sidebar_label: Switch Components
---

Komponentas "Switch" leidžia rodyti vieną elementą iš kelių elementų sąrašo. Vartotojai gali peržiūrėti skirtingus žymės "Switch" vaikus spustelėdami šiuo metu rodomą elementą.

## Parinktys

* __active__ | `boolean`: kontroliuoja, ar jungiklis yra aktyvus, ar ne.. Default: `true`.
* __tooltip__ | `string`: įrankių užuomina, rodoma užvedus pelės žymeklį ant jungiklio elemento. Default: `none`.
* __tooltipPos__ | `string`: įrankio užrašo vieta (`top`, `left`, `right` arba `bottom`).. Default: `'top'`.
* __className__ | `string`: aprėpiančio span elemento klasės pavadinimas. Default: `''`.
* __style__ | `object`: CSS eilutės stiliai. Default: `{}`.
* __onChange__ | `function`: atgalinis skambutis, iškviečiamas, kai elementai perjungiami. Pirmasis argumentas - šiuo metu rodomo vaiko indeksas.. Default: `onChange() {}`.


## Pavyzdžiai

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
