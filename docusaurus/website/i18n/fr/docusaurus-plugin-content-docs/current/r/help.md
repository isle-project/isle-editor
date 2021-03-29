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

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'From Library', value: 'otherLibrary' },
        { label: 'Visible on Startup', value: 'visible' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<span><RHelp>sum</RHelp> is used to sum the elements of a vector.</span>
```

</TabItem>

<TabItem value="otherLibrary" >

```jsx live
<span><RHelp library="graphics">hist</RHelp> is used to create a histogram.</span>
```

</TabItem>

<TabItem value="visible" >

```jsx live
<span><RHelp visible={true} >sum</RHelp> is used to sum the elements of a vector.</span>
```

</TabItem>

</Tabs>
