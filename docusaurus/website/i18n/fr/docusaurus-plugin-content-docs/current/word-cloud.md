---
id: word-cloud 
title: Word Cloud
sidebar_label: Word Cloud
---

Une composante du nuage de mots construite sur le [d3-cloud] (https://github.com/jasondavies/d3-cloud).

## Options

* __data__ | `array`: soit un tableau de textes à partir duquel on peut générer le nuage de mots ou, si "calculé" est défini à "vrai", et un tableau d'objets de comptage de mots (avec les clés "text" et "value"). Default: `[]`.
* __font__ | `(string|function)`: fonction d'accès spécifiant la police de caractères pour chaque mot. Accepte également une constante au lieu d'une fonction. Default: `'serif'`.
* __fontSizeMapper__ | `function`: fonction accesseur indiquant la taille de la police pour chaque mot. La valeur par défaut est `( count - min + 1 ) / ( max - min + 6 ) * 30.0 + 14.0`, où `min` et `max` désignent les `counts` de mots minimum et maximum, respectivement.. Default: `none`.
* __height__ | `number`: hauteur du nuage de mots (en px). Default: `600`.
* __language__ | `string`: identifiant de la langue (détermine les mots vides à supprimer). Default: `'en'`.
* __minCount__ | `number`: s'il est défini, n'inclure que les mots qui apparaissent plus de "minCount" fois dans les données données. Default: `none`.
* __saveButton__ | `boolean`: contrôle l'affichage ou non d'un bouton permettant de sauvegarder le nuage de mots sous forme d'image. Default: `true`.
* __onClick__ | `function`: fonction de rappel invoquée lorsqu'un mot du nuage de mots est cliqué. Default: `onClick() {}`.
* __padding__ | `(function|number)`: fonction d'accès ou constante indiquant le remplissage numérique pour chaque mot. Default: `5`.
* __precalculated__ | `boolean`: contrôle si le nuage de mots attend un ensemble de mots précalculés ou s'il les générera pour des textes donnés. Default: `false`.
* __rotate__ | `(function|number)`: fonction d'accès indiquant l'angle de rotation (en degrés) pour chaque mot. Accepte également une constante au lieu d'une fonction. Default: `word => word.value % 360`.
* __updateThreshold__ | `number`: taille des lots de nouveaux documents dans "data" avant que le nuage de mots ne soit rendu. Default: `5`.
* __stopwords__ | `array`: mots-clés supplémentaires à supprimer avant de rendre le nuage de mots. Default: `[]`.
* __triggerRender__ | `boolean`: la restitution lors de l'échange de l'ensemble de données. Default: `true`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.
* __width__ | `number`: largeur du nuage de mots (en px). Default: `700`.


## Exemples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'With Stopwords', value: 'withStopwords' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<WordCloud data={[
  'This is my holiday', 
  'Breakfast is great', 
  'My house is my castle', 
  'A castle for a kingdom', 
  'I am longing for breakfast',
  'Having rolls for breakfast is a must',
  'A horse for a kingdom',
  'Mom like rolls',
  'Orange juice is fine',
  'Where is the butter',
  'I am looking for a spoon',
  'Coffee for coffee drinkers',
  'Tea for the sleepy ones',
  'The sleepy, sloppy, crazy King lives in a castle',
  'A house for everybody'
]} />
```
</TabItem>

<TabItem value="withStyle">

```jsx live
<WordCloud 
  style={{ boxShadow: '10px 0 25px black' }}
  rotate={-7}
  data={[
    'This is my castle', 
    'Breakfast is great', 
    'My house is my castle', 
    'A castle for a kingdom', 
    'I am longing for breakfast',
    'Having rolls for breakfast is a must',
    'A horse for a kingdom',
    'Mom like rolls',
    'Orange juice is a castle drink',
    'Where is the butter',
    'I am looking for a castle',
    'Coffee for coffee drinkers',
    'Tea for the sleepy ones',
    'The sleepy, sloppy, crazy King lives in a castle',
    'A holiday for everybody'
]} />
```
</TabItem>

<TabItem value="withStopwords">

```jsx live
<WordCloud 
  stopwords={[ 'castle', 'crap', 'damn' ]}
  data={[
    'This is my holiday', 
    'Breakfast is great', 
    'My house is my castle', 
    'A castle for a kingdom', 
    'I am longing for breakfast',
    'Having rolls for breakfast is a must',
    'A horse for a kingdom',
    'Mom like rolls',
    'Orange juice is fine',
    'Where is the butter',
    'I am looking for a spoon',
    'Coffee for coffee drinkers',
    'Tea for the sleepy ones',
    'The sleepy, sloppy, crazy King lives in a castle',
    'A house for everybody',
    'castle castle castle castle castle castle castle castle castle castle',
    'crap crap crap crap crap crap crap damn damn damn dam'
]} />
```

</TabItem>

</Tabs>
