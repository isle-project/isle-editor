---
id: r-shell
title: R Shell
sidebar_label: R Shell
---

Un Shell R interactif qui peut être utilisé pour exécuter des commandes R dans le nuage en utilisant [OpenCPU] (https://www.opencpu.org/).

## Options

* __code__ | `string`: Code R à évaluer. Default: `''`.
* __solution__ | `string`: pour les questions de programmation, une "chaîne" de code R représentant la solution officielle du problème. Default: `''`.
* __hints__ | `array<(string|node)>`: pour les questions de programmation, une série de conseils sur la manière d'aborder le problème. Default: `[]`.
* __addPreceding__ | `boolean`: s'il est configuré sur true, le shell évaluera tout le code du composant actuel et tous les codes précédents de la leçon. Default: `false`.
* __libraries__ | `array`: R les bibliothèques qui doivent être chargées automatiquement lorsque le "code" d'entrée est exécuté. Default: `[]`.
* __precompute__ | `boolean`: contrôle si le code par défaut doit être exécuté une fois que le composant a été monté. Default: `false`.
* __prependCode__ | `(string|array)`: Une "chaîne" de code R (ou un "tableau" de blocs de code R) à ajouter au code stocké dans le "code" lors de l'évaluation. Default: `''`.
* __chat__ | `boolean`: contrôle si la fonctionnalité de chat de groupe doit être activée. Default: `false`.
* __disabled__ | `boolean`: contrôle s'il faut désactiver toutes les entrées de l'utilisateur et rendre le bloc de code statique. Default: `false`.
* __lines__ | `number`: nombre de lignes à afficher. Default: `5`.
* __resettable__ | `boolean`: contrôle l'affichage d'un bouton de réinitialisation pour restaurer la saisie du code par défaut. Default: `false`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.
* __onChange__ | `function`: rappel invoqué à chaque modification de la saisie du champ de texte. Default: `onChange() {}`.
* __onEvaluate__ | `function`: rappel invoqué à chaque fois que le bouton "Évaluer" est cliqué. Default: `onEvaluate(){}`.
* __onResult__ | `function`: rappel invoqué chaque fois que le résultat de l'exécution d'un code est obtenu à partir du nuage. Le résultat "chaîne" est passé comme seul argument à la fonction de rappel. Default: `onResult() {}`.


## Exemples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Precompute & Disabled', value: 'precompute' },
        { label: 'Hints & Solution', value: 'hintsAndSolution' },
        { label: 'Using Libraries', value: 'usingLibraries' },
        { label: 'Add Preceding Code', value: 'addPreceding' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<RShell
    code="abs(c(-2,3,-1))"
/>
```

</TabItem>

<TabItem value="precompute" >

```jsx live
<RShell
    code="abs(c(-2,3,-1))"
    precompute
    disabled
    lines={2}
/>
```

</TabItem>

<TabItem value="hintsAndSolution" >

```jsx live
**(a)** Use the lm() function to regress `Price` on: `EngineSize`, `Origin`, `MPG.highway`, `MPG.city` and `Horsepower`.

<RShell 
    id="prob1a"
    code="" 
    solution={`cars.lm <- lm(Price ~ EngineSize + Origin + MPG.highway + MPG.city + Horsepower,
data = Cars93)
summary(cars.lm)`} 
    lines={5} 
    hints={["Use the model formula syntax to specify your regression equation. Type ?formula if you don't remember how formulas work.","You can use the summary() function to retrieve a detailed regression output for a lm object"]}
/>
```

</TabItem>

<TabItem value="usingLibraries" >

<RShell libraries={['dplyr']} code={'starwars %>% filter(species == "Droid")'} lines={2} />

</TabItem>

<TabItem value="addPreceding" >

<RShell code="library(dplyr)" lines={2} disabled />

<RShell code={'starwars %>% filter(species == "Droid")'} addPreceding lines={2} />

</TabItem>

</Tabs>
