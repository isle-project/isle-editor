---
id: r-table
title: R Table
sidebar_label: R Table
---

Composant permettant de rendre un cadre ou une matrice de données R dans un affichage tabulaire.

## Options

* __code__ | `string`: Code R renvoyant un data.frame contenant les données à afficher dans le tableau. Default: `''`.
* __libraries__ | `array`: R les bibliothèques qui doivent être chargées automatiquement lorsque le "code" d'entrée est exécuté. Default: `[]`.
* __prependCode__ | `(string|array)`: Une "chaîne" de code R (ou un "tableau" de blocs de code R) à ajouter au code stocké dans le "code" lors de l'évaluation. Default: `''`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.


## Exemples


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Using Libraries', value: 'usingLibraries' },
        { label: 'Custom Style', value: 'customStyle' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<RTable
    code={`data <- matrix( runif(64), nrow=8, ncol=8); 
    data`}
/>
```

</TabItem>

<TabItem value="usingLibraries" >

```jsx live
<RTable 
    libraries={[ 'dplyr' ]}
    code="starwars"
/>
```

</TabItem>

<TabItem value="customStyle" >

```jsx live
<RTable 
    libraries={[ 'dplyr' ]}
    code="starwars"
    style={{ width: '400px' }}
/>
```

</TabItem>

</Tabs>
