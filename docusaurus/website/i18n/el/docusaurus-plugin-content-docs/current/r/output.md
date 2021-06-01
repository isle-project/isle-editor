---
id: r-output
title: R Output
sidebar_label: R Output
---

Συστατικό για την απόδοση της εξόδου R μέσα σε ένα μάθημα ISLE.

## Επιλογές

* __code__ | `string`: Κώδικας R που χρησιμοποιείται για την αξιολόγηση. Default: `''`.
* __libraries__ | `array`: Βιβλιοθήκες R που θα πρέπει να φορτώνονται αυτόματα όταν εκτελείται ο "κώδικας" εισόδου. Default: `[]`.
* __prependCode__ | `(string|array)`: Κώδικας R (ή "συστοιχία" από τμήματα κώδικα) που θα προστεθεί στον κώδικα που είναι αποθηκευμένος στο "code" κατά την αξιολόγηση. Default: `''`.
* __onPlots__ | `function`: callback που καλείται με οποιαδήποτε παραγόμενα οικόπεδα. Default: `onPlots() {}`.
* __onResult__ | `function`: callback που καλείται με `error` (`null` αν η λειτουργία ήταν επιτυχής) και `result` που περιέχει την έξοδο R. Default: `onResult() {}`.


## Παραδείγματα

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Multiline', value: 'multiline' },
        { label: 'Loading Data', value: 'loadingData' },
        { label: 'Using Libraries', value: 'usingLibraries' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<ROutput code="runif(10)" />
```

</TabItem>

<TabItem value="multiline" >

```jsx live
<ROutput code={`
x <- runif( 100 );
y <- 3.0 * x + rnorm( 100 );
fit <- lm( y ~ x );
summary( fit );
`} />
```

</TabItem>

<TabItem value="loadingData" >

```jsx live
<ROutput 
    prependCode={'wages <- read.table( "https://raw.githubusercontent.com/stdlib-js/stdlib/develop/lib/node_modules/%40stdlib/datasets/berndt-cps-wages-1985/data/data.csv", header=TRUE, sep=",")'} 
    code="summary(wages)"
/>
```

</TabItem>

<TabItem value="usingLibraries" >

```jsx live
<ROutput 
    libraries={[ 'dplyr' ]}
    code={'starwars %>% filter(species == "Droid")'}
/>
```

</TabItem>

</Tabs>
