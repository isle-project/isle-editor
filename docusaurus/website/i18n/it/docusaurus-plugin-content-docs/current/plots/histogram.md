---
id: histogram
title: Histogram
sidebar_label: Histogram
---

Un istogramma.

## Opzioni

* __data__ | `object (required)`: oggetto delle matrici di valori. Default: `none`.
* __variable__ | `string (required)`: variabile da visualizzare. Default: `none`.
* __group__ | `(string|Factor)`: variabile di raggruppamento. Default: `none`.
* __title__ | `string`: titolo dell'istogramma. Default: `none`.
* __groupMode__ | `string`: se sovrapporre istogrammi raggruppati l'uno sull'altro (`Overlay`) o in trame separate l'una accanto all'altra (`Facets`). Default: `'Overlay'`.
* __displayDensity__ | `boolean`: controlla se visualizzare i valori di densità invece dei conteggi sull'asse y. Default: `false`.
* __densityType__ | `string`: quando si visualizzano le densità, si può sia sovrapporre una distribuzione parametrica (`Normale`, `Uniforme`, o `Exponenziale`) sia una stima non parametrica della densità del kernel (`Data-driven`). Default: `none`.
* __densityParams__ | `array<number>`: parametri di distribuzione per la densità quando viene usata una distribuzione parametrica ([mu, sigma] per una distribuzione normale, [a, b] per una distribuzione uniforme, [lambda] per una distribuzione esponenziale). Default: `[]`.
* __bandwidthAdjust__ | `number`: regolazione manuale della larghezza di banda della densità del kernel (applicabile solo quando `densityType` è impostato su `Data-driven`). Default: `1`.
* __binStrategy__ | `string`: strategia di binning (`Automatico`, `Seleziona # di bidoni`, o `Imposta larghezza bidone`). Default: `'Automatic'`.
* __nBins__ | `number`: numero personalizzato di bidoni. Default: `none`.
* __nCols__ | `number`: numero di colonne quando si visualizza un istogramma raggruppato sfaccettato. Default: `none`.
* __xBins__ | `{start,size,end}`: oggetto con proprietà `start`, `size` e `end` che regolano il comportamento di binning. Default: `{}`.
* __sameXRange__ | `boolean`: se vero, l'intervallo dell'asse x per ogni sfaccettatura sarà lo stesso dell'istogramma generale. Default: `false`.
* __sameYRange__ | `boolean`: se vero, l'intervallo dell'asse y per ogni sfaccettatura sarà lo stesso dell'istogramma generale. Default: `false`.


## Esempi

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
