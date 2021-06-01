---
id: networks
title: Networks
sidebar_label: Networks
---

Hálózatok generálása Erdős-Rényi modellből.

## Opciók

* __maxNumNodes__ | `number`: a hálózathoz kiválasztható csomópontok maximális száma. Default: `30`.
* __showEdgeChart__ | `boolean`: vezérli, hogy megjelenjen-e egy diagram, amely az élek számát mutatja minden egyes generált hálózatban (visszaáll, ha a csomópontok száma megváltozik).. Default: `false`.
* __showTransitivities__ | `boolean`: a generált hálózatok tranzitivitásainak / globális klaszterezési együtthatóinak összeszámlálása. Default: `false`.


## Példák

```jsx live
<LearnNetworks />
```

