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
* __width__ | `number`: largeur (entre 0 et 1). Default: `0.5`.


## Examples

```jsx live
<RTable
    code={`data <- matrix( runif(64), nrow=8, ncol=8); 
    data`}
/>
```

