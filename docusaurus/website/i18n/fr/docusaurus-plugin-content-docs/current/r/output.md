---
id: r-output
title: R Output
sidebar_label: R Output
---

Composant pour le rendu de la sortie R dans une leçon ISLE.

## Options

* __code__ | `string`: Code R utilisé pour évaluer. Default: `''`.
* __libraries__ | `array`: R les bibliothèques qui doivent être chargées automatiquement lorsque le "code" d'entrée est exécuté. Default: `[]`.
* __prependCode__ | `(string|array)`: Le code R (ou "tableau" de blocs de code) doit être ajouté au code stocké dans le "code" lors de l'évaluation. Default: `''`.
* __onPlots__ | `function`: rappel invoqué avec tout tracé généré. Default: `onPlots() {}`.
* __onResult__ | `function`: rappel invoqué avec "erreur" ("nul" si l'opération a réussi) et "résultat" avec la sortie R. Default: `onResult() {}`.


## Exemples

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
