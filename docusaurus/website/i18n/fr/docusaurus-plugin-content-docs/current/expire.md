---
id: expire 
title: Expire
sidebar_label: Expire
---

La composante "expiration" fera en sorte que tous ses enfants deviennent invisibles après un certain temps.

## Options

* __active__ | `boolean`: contrôle si le compteur doit être actif. Default: `false`.
* __delay__ | `number`: nombre de millisecondes avant la disparition du composant. Default: `1000`.


## Exemples

```jsx live
<Expire>
    <span>When active, I will disappear after one second</span>
</Expire>
```



