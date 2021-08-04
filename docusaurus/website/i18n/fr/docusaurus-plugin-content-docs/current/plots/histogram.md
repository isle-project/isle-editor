---
id: histogram
title: Histogram
sidebar_label: Histogram
---

Un histogramme.

## Options

* __data__ | `object (required)`: les tableaux d'objets de valeur. Default: `none`.
* __variable__ | `string (required)`: variable à afficher. Default: `none`.
* __group__ | `(string|Factor)`: variable de regroupement. Default: `none`.
* __title__ | `string`: titre de l'histogramme. Default: `none`.
* __groupMode__ | `string`: la superposition d'histogrammes groupés ("Overlay") ou la mise en place de graphiques séparés les uns à côté des autres ("Facets"). Default: `'Overlay'`.
* __displayDensity__ | `boolean`: contrôle si les valeurs de densité doivent être affichées sur l'axe des y au lieu des comptes. Default: `false`.
* __densityType__ | `string`: lors de l'affichage des densités, on peut soit superposer une distribution paramétrique (`Normal`, `Uniforme`, ou `Exponentiel`) ou une estimation non-paramétrique de la densité du noyau (`Data-driven`). Default: `none`.
* __bandwidthAdjust__ | `number`: ajustement manuel de la largeur de bande de la densité du noyau (applicable uniquement lorsque "densityType" est réglé sur "Data-driven"). Default: `1`.
* __binStrategy__ | `string`: stratégie de mise en bac ("Automatique", "Sélectionner le nombre de bacs", ou "Définir la largeur du bac"). Default: `'Automatic'`.
* __nBins__ | `number`: nombre de bacs personnalisé. Default: `none`.
* __nCols__ | `number`: nombre de colonnes lors de l'affichage d'un histogramme groupé à facettes. Default: `none`.
* __xBins__ | `{start,size,end}`: objet avec les propriétés "start", "size" et "end" qui régissent le comportement du binning. Default: `{}`.
* __sameXRange__ | `boolean`: si vrai, l'étendue de l'axe des x pour chaque facette sera la même que l'histogramme global. Default: `false`.
* __sameYRange__ | `boolean`: si vrai, l'étendue de l'axe des y pour chaque facette sera la même que l'histogramme global. Default: `false`.


## Exemples

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
