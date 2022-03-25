---
id: select-question-matrix
title: Select Question Matrix
sidebar_label: Select Question Matrix
---

Une question dont la réponse consiste en plusieurs cases de sélection.

## Options

* __question__ | `(string|node)`: question à afficher en haut de la matrice de sélection des questions. Default: `''`.
* __rows__ | `array`: étiquettes de lignes. Default: `[]`.
* __cols__ | `array`: étiquettes de colonnes. Default: `[]`.
* __options__ | `object`: objet avec des paires clé-valeur avec des clés ayant la forme "row:col", par exemple "0:0", "0:1", "1:0", etc., et leurs valeurs correspondantes étant des tableaux de choix de réponse possibles pour les différentes questions de sélection. Default: `{}`.
* __solution__ | `object`: objet solution avec des paires clé-valeur avec des clés ayant la forme `row:col`, par exemple `0:0`, `0:1`, `1:0` etc., et leurs valeurs correspondantes étant l'index de l'élément de réponse correcte du tableau `options` respectif. Default: `{}`.
* __hints__ | `array<(string|node)>`: des conseils sur la façon de répondre à la question. Default: `[]`.
* __hintPlacement__ | `string`: l'emplacement des indices (soit `top`, `left`, `right` ou `bottom`). Default: `'bottom'`.
* __feedback__ | `boolean`: contrôle l'affichage des boutons de rétroaction. Default: `true`.
* __provideFeedback__ | `string`: s'il convient de fournir un retour d'information "aucun", un retour d'information "individuel" sur la ou les réponses soumises, ou un retour d'information "global" pour toutes les questions. Default: `'individual'`.
* __allowIncomplete__ | `boolean`: s'il faut autoriser les soumissions sans sélection dans chaque case de sélection. Default: `false`.
* __nTries__ | `number`: après combien d'essais aucune autre réponse n'est acceptée (si "provideFeedback" n'est pas "none"). Default: `3`.
* __failureMsg__ | `string`: texte de notification affiché lors de la soumission de réponses incorrectes. Default: `none`.
* __successMsg__ | `string`: texte de notification affiché lors de la soumission des réponses correctes. Default: `none`.
* __cellLabels__ | `object`: des étiquettes pour les cellules définies par objet avec des clés ayant le format "row:col. Default: `{}`.
* __chat__ | `boolean`: contrôle si l'élément doit avoir un chat intégré. Default: `false`.
* __panelProps__ | `object`: propriétés supplémentaires à transmettre au composant externe <Panel /> . Default: `{}`.
* __className__ | `string`: nom de la classe. Default: `''`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.
* __onSubmit__ | `function`: fonction de rappel invoquée lors de la soumission avec les réponses comme premier paramètre et un booléen indiquant l'exactitude comme second paramètre. Default: `onSubmit() {}`.


## Exemples


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Hints', value: 'withHints' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'Feedback Messages', value: 'feedbackMessages' }
        
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<SelectQuestionMatrix
    question="Test your art history knowledge"
    rows={[ 'Composer', 'Author' ]} 
    cols={[ '18th Century', '19th Century' ]} 
    options={{ 
        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], 
        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,
        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],
        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] 
    }} 
    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}
/>
```
</TabItem>

<TabItem value="withHints">

```jsx live
<SelectQuestionMatrix
  question="Test your art history knowledge"
    rows={[ 'Composer', 'Author' ]} 
    cols={[ '18th Century', '19th Century' ]} 
    options={{ 
        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], 
        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,
        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],
        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] 
    }} 
    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}
    hints={[
        'His father Johann Sebastian was a famous composer too',
        'He was famous for his FAUST - so definitely an author',
        'Poussin was an 18th century painter',
        'Courbet was a realistic painter'
    ]}
/>
```
</TabItem>

<TabItem value="withStyle">

```jsx live
<SelectQuestionMatrix
    style={{ 
        fontFamily: 'Georgia',
        fontSize: 22, 
        textShadow: '0 0  10px white',
        background: 'rgb(251,213,112)',
        background: 'radial-gradient(circle, yellow 0%, orange 30%, green 100%)'
    }}
    question="Test your art history knowledge"
    rows={[ 'Composer', 'Author' ]} 
    cols={[ '18th Century', '19th Century' ]} 
    options={{ 
        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], 
        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,
        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],
        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] }} 
    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}
/>
```
</TabItem>


<TabItem value="feedbackMessages">

```jsx live
<SelectQuestionMatrix
    question="Test your art history knowledge"
    failureMsg="Sorry, that was wrong." 
    successMsg ="Wow! Congratulations, you are a specialist!"
    rows={[ 'Composer', 'Author' ]} 
    cols={[ '18th Century', '19th Century' ]} 
    options={{ 
        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], 
        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,
        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],
        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] 
    }} 
    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}
/>
```

</TabItem>

</Tabs>

