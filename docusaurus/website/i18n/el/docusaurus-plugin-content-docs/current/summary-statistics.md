---
id: summary-statistics 
title: Summary Statistics
sidebar_label: Summary Statistics
---

Συνοπτικά στατιστικά στοιχεία.

## Επιλογές

* __data__ | `object (required)`: αντικείμενο των πινάκων τιμών. Default: `none`.
* __variables__ | `array<string> (required)`: μεταβλητή(ες) για την οποία θα υπολογιστούν στατιστικά στοιχεία. Default: `none`.
* __statistics__ | `array<string> (required)`: στατιστικά στοιχεία που πρέπει να υπολογιστούν για τις επιλεγμένες μεταβλητές (είτε `Mean`, `Median`, `Min`, `Max`, `Range`, `Interquartile Range`, `Standard Deviation`, `Variance`, `Correlation`, `Correlation Matrix`, `Skewness`, `Excess Kurtosis`, `First Quartile`, `Third Quartile`, ή `Quantile`). Default: `none`.
* __secondVariable__ | `string`: δεύτερη μεταβλητή για τη στατιστική συσχέτισης. Default: `none`.
* __omit__ | `boolean`: ελέγχει αν θα παραλείπονται οι ελλείπουσες τιμές. Default: `false`.
* __group__ | `array<(string|Factor)>`: όνομα της/των μεταβλητής/ων ομαδοποίησης. Default: `none`.
* __quantiles__ | `array`: πίνακας των κβαντιλίων που πρέπει να υπολογιστούν για το στατιστικό `Quantile`. Default: `none`.


## Παραδείγματα

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Grouped', value: 'group' },
        { label: 'Quantiles', value: 'quantiles' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<SummaryStatistics 
    data={heartdisease} 
    variables={[ 'Age', 'Cost' ]}
    statistics={[ 'Mean', 'Standard Deviation' ]}
/>
```

</TabItem>

<TabItem value="group" >

```jsx live
<SummaryStatistics 
    data={heartdisease} 
    variables={[ 'Age', 'Cost' ]}
    statistics={[ 'Mean', 'Standard Deviation' ]}
    group={[ 'Gender' ]}
/>
```
</TabItem>

<TabItem value="quantiles">

```jsx live
<SummaryStatistics 
    data={heartdisease} 
    variables={[ 'Age', 'Cost' ]}
    statistics={[ 'Quantile' ]}
    quantiles={[ 0.1, 0.25, 0.5, 0.75, 0.9 ]}
/>
```

</TabItem>

</Tabs>
