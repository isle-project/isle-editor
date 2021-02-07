---
id: weather 
title: Weather
sidebar_label: Weather
---

Um componente para exibir o tempo atual em um local designado.

## Options

* __location__ | `string`: nome do local. Default: `none`.
* __voiceID__ | `string`: identificador de controle de voz. Default: `none`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.


## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Custom Styling', value: 'withCSS' },
    ]}
    lazy
>
<TabItem value="minimal">

```jsx live
<Weather
    location="Pittsburgh"
/>
```

</TabItem>

<TabItem value="withCSS">

```jsx live
<Weather
    location="Pittsburgh"
    style={{ fontFamily: 'Courier', background: 'orange' }}
/>
```

</TabItem>

</Tabs>


