---
id: mosaicplot
title: Mosaic Plot
sidebar_label: Mosaic Plot
---

Ένα ψηφιδωτό οικόπεδο.

## Επιλογές

* __data__ | `object (required)`: αντικείμενο από πίνακες τιμών για κάθε μεταβλητή. Default: `none`.
* __variables__ | `array (required)`: πίνακας μεταβλητών προς εμφάνιση. Default: `none`.
* __showColors__ | `boolean`: ελέγχει αν θα εμφανίζονται χρώματα που δείχνουν τη σημασία. Default: `false`.
* __axisLabels__ | `string`: τοποθέτηση των ετικετών των αξόνων (είτε "παράλληλα με τον άξονα", "οριζόντια", "κάθετα στον άξονα" ή "κάθετα"). Default: `'parallel to the axis'`.


## Παραδείγματα

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Colored', value: 'colored' },
        { label: 'Axis Labels', value: 'axisLabels' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<MosaicPlot
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs' ]}
/>
```

</TabItem>

<TabItem value="colored">

```jsx live
<MosaicPlot
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs' ]}
    showColors
/>
```

</TabItem>

<TabItem value="axisLabels">

```jsx live
<MosaicPlot
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs' ]}
    showColors
    axisLabels="parallel to the axis"
/>
```

</TabItem>

</Tabs>
