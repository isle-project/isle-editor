---
id: runner 
title: Runner
sidebar_label: Runner
---

La composante "runner" exécutera une fonction fournie soit une fois, soit à un intervalle donné.

## Options

* __active__ | `boolean`: contrôle si le coureur doit être actif. Lors de l'activation, la fonction "onEvaluate" est appelée dans l'intervalle donné (ou une fois). Default: `true`.
* __interval__ | `number`: nombre de millisecondes entre les invocations de "onEvaluate". Si aucun intervalle n'est défini, la fonction n'est invoquée qu'une seule fois. Default: `none`.
* __onEvaluate__ | `function`: fonction à invoquer. Default: `onEvaluate() {}`.


## Examples

```jsx live
<Runner
    interval={2000}
    onEvaluate={() => { console.log( 'Two seconds have passed...' ); }}
/>
```



