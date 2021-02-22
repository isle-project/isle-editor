---
id: wikipedia 
title: Wikipedia
sidebar_label: Wikipedia
---

De component **Wikipedia** scant de **Wikipedia** en geeft een artikel terug - als er iets geldigs wordt gevonden onder de ingevoerde zoekterm.

## Opties

* __defaultEntry__ | `string`: standaard vermelding om weer te geven. Default: `none`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.


## Voorbeelden

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Entry', value: 'withEntry' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Wikipedia />
```

</TabItem>

<TabItem value="withEntry">

```jsx live
<Wikipedia defaultEntry="Angela Merkel" />
```

</TabItem>

</Tabs>
