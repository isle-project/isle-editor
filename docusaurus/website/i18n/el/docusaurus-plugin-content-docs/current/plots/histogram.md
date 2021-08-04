---
id: histogram
title: Histogram
sidebar_label: Histogram
---

Ένα ιστόγραμμα.

## Επιλογές

* __data__ | `object (required)`: αντικείμενο των πινάκων τιμών. Default: `none`.
* __variable__ | `string (required)`: μεταβλητή για την εμφάνιση. Default: `none`.
* __group__ | `(string|Factor)`: μεταβλητή ομαδοποίησης. Default: `none`.
* __title__ | `string`: τίτλος ιστογράμματος. Default: `none`.
* __groupMode__ | `string`: αν θα επικαλύπτονται ομαδοποιημένα ιστογράμματα το ένα πάνω στο άλλο (`Overlay`) ή σε ξεχωριστά διαγράμματα το ένα δίπλα στο άλλο (`Facets`). Default: `'Overlay'`.
* __displayDensity__ | `boolean`: ελέγχει αν θα εμφανίζονται τιμές πυκνότητας αντί για μετρήσεις στον άξονα y. Default: `false`.
* __densityType__ | `string`: κατά την εμφάνιση πυκνοτήτων, μπορεί κανείς είτε να επικαλύψει μια παραμετρική κατανομή (`Normal`, `Uniform`, ή `Exponential`) είτε μια μη παραμετρική εκτίμηση πυκνότητας πυρήνα (`Data-driven`). Default: `none`.
* __bandwidthAdjust__ | `number`: χειροκίνητη ρύθμιση του εύρους ζώνης της πυκνότητας πυρήνα (εφαρμόζεται μόνο όταν το `densityType` έχει οριστεί σε `Data-driven`). Default: `1`.
* __binStrategy__ | `string`: στρατηγική διαχωρισμού (`Αυτόματη`, `Επιλογή αριθμού διαχωριστικών πεδίων`, ή `Ορισμός πλάτους διαχωριστικών πεδίων`). Default: `'Automatic'`.
* __nBins__ | `number`: προσαρμοσμένος αριθμός κάδων. Default: `none`.
* __nCols__ | `number`: αριθμός στηλών κατά την εμφάνιση ενός ομαδοποιημένου ιστογράμματος με όψεις. Default: `none`.
* __xBins__ | `{start,size,end}`: αντικείμενο με τις ιδιότητες `start`, `size`, και `end` που διέπουν τη συμπεριφορά binning. Default: `{}`.
* __sameXRange__ | `boolean`: αν είναι true, το εύρος του άξονα x για κάθε πτυχή θα είναι το ίδιο με το συνολικό ιστόγραμμα. Default: `false`.
* __sameYRange__ | `boolean`: εάν είναι αληθές, το εύρος του άξονα y για κάθε πτυχή θα είναι το ίδιο με το συνολικό ιστόγραμμα. Default: `false`.


## Παραδείγματα

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Grouped', value: 'grouped' },
        { label: 'Facetted Plot', value: 'groupModeFactes' },
        { label: 'Display Density', value: 'displayDensity' },
        { label: 'No of Bins', value: 'noBins' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Age"
/>
```

</TabItem>

<TabItem value="grouped">

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Age"
    group="Gender"
/>
```

</TabItem>

<TabItem value="groupModeFactes">

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Age"
    group="Gender"
    nCols={2}
    groupMode="Facets"
/>
```

</TabItem>

<TabItem value="displayDensity">

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Age"
    group="Gender"
    displayDensity 
    densityType="Uniform"
/>
```

</TabItem>

<TabItem value="noBins">

```jsx live
<Histogram 
    data={heartdisease} 
    variable="Age"
    group="Gender"
    binStrategy="Select # of bins"
    nBins={90}
/>
```

</TabItem>

</Tabs>
