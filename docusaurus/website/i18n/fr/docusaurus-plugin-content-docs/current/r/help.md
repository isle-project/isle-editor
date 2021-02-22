---
id: r-help
title: R Help
sidebar_label: R Help
---

Faites en sorte que les mots fassent apparaître la documentation R dans une fenêtre modale lorsqu'on clique dessus.

## Options

* __func__ | `string`: nom de la "fonction R" pour laquelle ouvrir la documentation. S'il n'est pas fourni, le contenu de la balise "RHelp" est supposé être égal au nom de la fonction. Default: `''`.
* __library__ | `string`: le nom du paquet R dans lequel réside la fonction. Default: `'base'`.
* __visible__ | `boolean`: contrôle si la fenêtre modale d'aide doit être ouverte au démarrage. Default: `false`.


## Exemples

```jsx live
<span><RHelp library="graphics">hist</RHelp> is used to create a histogram.</span>
```

