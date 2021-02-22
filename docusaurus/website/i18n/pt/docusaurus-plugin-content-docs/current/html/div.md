---
id: div
title: div
sidebar_label: div
---

Elemento genérico do recipiente.

## Opções

* __className__ | `string`: nome da classe. Default: `''`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.


## Exemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Regular HTML', value: 'regularHTML' },
        { label: 'With CSS', value: 'withCSS' },
        { label: 'Embedded Component', value: 'embeddedISLE' }
    ]}
    lazy
>
<TabItem value="minimal">

```jsx live
<div>
    Use a div as a generic container for other content.
</div>
```

</TabItem>

<TabItem value="regularHTML">

```jsx live
<div>
    <h3>Regular HTML</h3>
    <hr />
    <p>So if you are accustomed to HTML, you can use ISLE like any other HTML editor</p>
    <hr />
</div>
```
</TabItem>

<TabItem value="withCSS">

```jsx live
<div style={{ color: 'darkred', background: 'lightblue', padding: '6px'}}>
    <h3>Regular HTML</h3>
    <hr />
    <p>So if you are accustomed to HTML, you can use ISLE like any other HTML editor</p>
    <hr />
</div>
```
</TabItem>

<TabItem value="embeddedISLE">

```jsx live
<div style={{ padding: '6px'}}>
    <h3>Embedded ISLE Component</h3>
    <hr />
    <p>Plus - you can embed any ISLE component in here, like this R-Shell</p>
    <hr />
    <RShell code="abs(c(-2,3,-1))" />
</div>
```
</TabItem>

</Tabs>
