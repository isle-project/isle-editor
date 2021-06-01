---
id: switch
title: Switch Components
sidebar_label: Switch Components
---

Componenta Switch permite afișarea unui singur element dintr-o listă de mai multe elemente. Utilizatorii pot trece prin diferiți copii ai etichetei Switch făcând clic pe cel afișat în prezent.

## Opțiuni

* __active__ | `boolean`: controlează dacă comutatorul este activ sau nu. Default: `true`.
* __tooltip__ | `string`: tooltip afișat atunci când treceți deasupra elementului de comutare. Default: `none`.
* __tooltipPos__ | `string`: plasarea tooltip-ului (fie `top`, `left`, `right`, sau `bottom`). Default: `'top'`.
* __className__ | `string`: numele clasei pentru elementul de încadrare span. Default: `''`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.
* __onChange__ | `function`: callback invocat atunci când elementele sunt schimbate. Primește ca prim argument indexul copilului afișat în mod curent.. Default: `onChange() {}`.


## Exemple

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
