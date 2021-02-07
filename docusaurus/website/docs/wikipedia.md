---
id: wikipedia 
title: Wikipedia
sidebar_label: Wikipedia
---

The **Wikipedia** component scans the **Wikipedia** and returns an entry if anything valid is found under the entered search term.

## Options

* __defaultEntry__ | `string`: default entry to display. Default: `none`.
* __style__ | `object`: CSS inline styles. Default: `{}`.


## Examples

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
