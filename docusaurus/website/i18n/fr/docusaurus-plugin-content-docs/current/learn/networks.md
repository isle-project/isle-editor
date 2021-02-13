---
id: networks
title: Networks
sidebar_label: Networks
---

Générer des réseaux à partir d'un modèle Erdős-Rényi.

## Options

* __maxNumNodes__ | `number`: le nombre maximum de nœuds pouvant être sélectionnés pour le réseau. Default: `30`.
* __showEdgeChart__ | `boolean`: contrôle l'affichage d'un graphique indiquant le nombre de nœuds dans chaque réseau généré (réinitialisé lorsque le nombre de nœuds est modifié). Default: `false`.
* __showTransitivities__ | `boolean`: s'il faut comptabiliser les transitivités / les coefficients de regroupement global pour les réseaux générés. Default: `false`.


## Examples

```jsx live
<LearnNetworks />
```

