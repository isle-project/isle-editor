---
id: unveil 
title: Unveil
sidebar_label: Unveil
---

La composante "apparaître" fera en sorte que tous ses enfants deviennent visibles après un certain temps.

## Options

* __active__ | `boolean`: contrôle si le compteur doit être actif. Default: `false`.
* __delay__ | `number`: nombre de millisecondes avant l'apparition du composant. Default: `1000`.


## Exemples

```jsx live
<Unveil delay={5000} >
    <span>When active, I will appear after five seconds...</span>
</Unveil>
```



