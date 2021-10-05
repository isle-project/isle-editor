---
id: histogram
title: Histogram
sidebar_label: Histogram
---

Ein Histogramm.

## Optionen

* __data__ | `object (required)`: Objekt von Werte-Arrays. Default: `none`.
* __variable__ | `string (required)`: Variable zur Anzeige. Default: `none`.
* __group__ | `(string|Factor)`: Gruppierungsvariable. Default: `none`.
* __title__ | `string`: Titel des Histogramms. Default: `none`.
* __groupMode__ | `string`: ob gruppierte Histogramme übereinander (`Overlay`) oder in separaten Plots nebeneinander (`Facets`) liegen sollen. Default: `'Overlay'`.
* __displayDensity__ | `boolean`: steuert, ob Dichtewerte anstelle von Zählwerten auf der y-Achse angezeigt werden sollen. Default: `false`.
* __densityType__ | `string`: bei der Darstellung von Dichten kann entweder eine parametrische Verteilung (`Normal`, `Uniform` oder `Exponential`) oder eine nicht-parametrische Kernel-Dichte-Schätzung (`Daten-gesteuert`) überlagert werden. Default: `none`.
* __densityParams__ | `array<number>`: Verteilungsparameter für die Dichte, wenn eine parametrische Verteilung verwendet wird ([mu, sigma] für eine Normalverteilung, [a, b] für eine Gleichverteilung, [lambda] für eine Exponentialverteilung). Default: `[]`.
* __bandwidthAdjust__ | `number`: manuelle Anpassung der Bandbreite der Kernel-Dichte (nur anwendbar, wenn `densityType` auf `Data-driven` gesetzt ist). Default: `1`.
* __binStrategy__ | `string`: Binning-Strategie (`Automatisch`, `Anzahl der Bins wählen` oder `Bin-Breite einstellen`). Default: `'Automatic'`.
* __nBins__ | `number`: Benutzerdefinierte Anzahl von Fächern. Default: `none`.
* __nCols__ | `number`: Anzahl der Spalten bei der Anzeige eines facettierten gruppierten Histogramms. Default: `none`.
* __xBins__ | `{start,size,end}`: Objekt mit den Eigenschaften `start`, `size` und `end`, die das Binning-Verhalten steuern. Default: `{}`.
* __sameXRange__ | `boolean`: wenn wahr, ist der Bereich der x-Achse für jede Facette derselbe wie der des Gesamthistogramms. Default: `false`.
* __sameYRange__ | `boolean`: wenn wahr, ist der y-Achsenbereich für jede Facette derselbe wie der des Gesamthistogramms. Default: `false`.


## Beispiele

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
