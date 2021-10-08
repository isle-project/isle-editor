---
id: js-shell
title: JavaScript Shell
sidebar_label: JavaScript Shell
---

Un shell Javascript interactif qui peut être utilisé pour exécuter des commandes JavaScript. Le shell contient une console qui affiche des messages d'erreur, des avertissements, etc.

## Options

* __code__ | `string`: Code JavaScript à évaluer. Default: `''`.
* __solution__ | `string`: pour les questions de programmation, le code "chaîne" représentant la solution officielle du problème. Default: `''`.
* __hints__ | `array<(string|node)>`: pour les questions de programmation, une série de conseils sur la manière d'aborder le problème. Default: `[]`.
* __precompute__ | `boolean`: contrôle si le code par défaut doit être exécuté une fois que le composant a été monté. Default: `false`.
* __chat__ | `boolean`: contrôle si la fonctionnalité de chat de groupe doit être activée. Default: `false`.
* __check__ | `string`: code JavaScript joint pour vérifier le "code" à évaluer. Default: `none`.
* __disabled__ | `boolean`: contrôle s'il faut désactiver toutes les entrées de l'utilisateur et rendre le bloc de code statique. Default: `false`.
* __lines__ | `number`: nombre de lignes à afficher. Default: `5`.
* __className__ | `string`: nom de la classe. Default: `''`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.
* __onChange__ | `function`: rappel invoqué à chaque modification de la saisie du champ de texte. Default: `onChange() {}`.
* __onEvaluate__ | `function`: rappel invoqué à chaque fois que le bouton "Évaluer" est cliqué. Default: `onEvaluate() {}`.
* __vars__ | `object`: objet scope avec des variables qui devraient être mises à la disposition du "code" évalué. Default: `none`.


## Exemples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'Ten Lines', value: 'mLines' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<JSShell code = {`var a = 2; 
var b = 2;
console.log(a + b);`} />
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<JSShell style={{ fontSize: 18, boxShadow: '0 0 4px black' }}  />
```

</TabItem>

<TabItem value="mLines">

```jsx live
<JSShell lines={10} />
```

</TabItem>

</Tabs>




