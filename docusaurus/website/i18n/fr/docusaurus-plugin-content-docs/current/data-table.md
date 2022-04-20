---
id: data-table 
title: Data Table
sidebar_label: Data Table
---

Un composant rendant les données dans un affichage tabulaire. Construit au-dessus de [react-table] (https://react-table.js.org/).

## Options

* __data__ | `(array|object) (required)`: Un objet ou un tableau de données à visualiser. S'il s'agit d'un objet, les clés correspondent aux valeurs des colonnes tandis qu'un tableau s'attend à un tableau d'objets avec un champ nommé correspondant à chaque colonne. Default: `none`.
* __dataInfo__ | `object`: avec un tableau de chaînes de caractères "info" décrivant l'ensemble de données, le "nom" de l'ensemble de données, un "objet" de "variables" avec des clés correspondant aux noms de variables et aux valeurs des descriptions de variables, un booléen "showOnStartup" contrôlant l'affichage de la modale info au démarrage. Default: `{
  'info': [],
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __deletable__ | `boolean`: contrôle si les colonnes pour lesquelles il n'y a pas d'"informations" ont un bouton qui, lorsqu'on clique dessus, appelle la fonction de rappel "onColumnDelete. Default: `false`.
* __undeletableVars__ | `array<string>`: tableau de noms de variables des colonnes qui ne peuvent pas être supprimées. Default: `[]`.
* __filterable__ | `boolean`: contrôle si les colonnes sont filtrables. Default: `true`.
* __editable__ | `array`: tableau de noms des colonnes qui doivent être modifiables. Default: `[]`.
* __getTrProps__ | `function`: fonction de rappel exécutée pour chaque ligne afin de personnaliser son style (état de la table, informations sur la ligne, colonne et instance de la table passés),
colonne, et l'instance de la table). Default: `none`.
* __onColumnDrag__ | `function`: fonction invoquée lorsqu'une colonne a été déplacée vers une autre position. Default: `onColumnDrag() {}`.
* __onColumnDelete__ | `function`: fonction invoquée avec le nom d'une colonne lorsque l'on clique sur le bouton de suppression correspondant à une colonne. Default: `onColumnDelete() {}`.
* __onColumnNameChange__ | `function`: fonction invoquée lorsqu'une colonne a été renommée (appelée avec l'ancien nom comme premier et le nouveau nom comme second argument). Default: `onColumnNameChange() {}`.
* __onClickRemove__ | `function`: fonction spécifiant une action à entreprendre pour les lignes supprimées des données (par défaut, une fonction vide). Default: `onClickRemove() {}`.
* __onEdit__ | `function`: fonction invoquée avec l'ensemble des données mises à jour après que la valeur d'une cellule ait été modifiée par l'utilisateur (ne s'applique que lorsque la table est "modifiable"). Default: `onEdit() {}`.
* __onTutorialCompletion__ | `function`: fonction invoquée lorsque l'utilisateur a terminé le tutoriel sur les tableaux de données. Default: `onTutorialCompletion() {}`.
* __filters__ | `array`: réseau de filtres. Default: `[]`.
* __onFilteredChange__ | `function`: fonction invoquée avec les filtres actuels après que les données aient été filtrées par l'utilisateur. Default: `onFilteredChange() {}`.
* __showRemove__ | `boolean`: indique s'il faut afficher des cases à cocher pour les lignes à supprimer. Default: `false`.
* __showIdColumn__ | `boolean`: contrôle de l'affichage d'une colonne d'identification. Default: `true`.
* __disableDownload__ | `boolean`: s'il faut cacher le bouton pour télécharger les données en format CSV ou JSON. Default: `false`.
* __className__ | `string`: nom de la classe. Default: `''`.
* __style__ | `object`: Un objet permettant un style css personnalisé. Par défaut, un objet vide. Default: `{}`.


## Exemples

```jsx live
<DataTable
    showRemove
    onClickRemove={( data ) => { console.log(data); }}
    data={{ 
        firstName: [ 'Hans', 'Lotti', 'Fritz' ], 
        lastName: [ 'Bauer', 'Müller', 'Schultz' ],
        age: [ 37, 55, 62 ]
    }}
    style={{ width: 600 }}
/>
```

