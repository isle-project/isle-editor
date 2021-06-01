---
id: networks
title: Networks
sidebar_label: Networks
---

Generering af netværk ud fra en Erdős-Rényi-model.

## Indstillinger

* __maxNumNodes__ | `number`: det maksimale antal knuder, der kan vælges til netværket. Default: `30`.
* __showEdgeChart__ | `boolean`: styrer, om der skal vises et diagram, der viser antallet af kanter i hvert genereret netværk (nulstilles, når antallet af knuder ændres). Default: `false`.
* __showTransitivities__ | `boolean`: om der skal tælles transitiviteter / globale klyngekoefficienter for genererede netværk. Default: `false`.


## Eksempler

```jsx live
<LearnNetworks />
```

