---
id: data-explorer 
title: Data Explorer
sidebar_label: Data Explorer
---

Cette composante est utilisée par les étudiants pour résumer brièvement les données telles qu'elles sont présentées et effectuer divers tests statistiques.

## Options

* __categorical__ | `array`: un tableau de chaînes de caractères indiquant le nom de chaque variable catégorielle. Default: `[]`.
* __quantitative__ | `array`: un tableau de chaînes de caractères indiquant le nom de chaque variable quantitative. Default: `[]`.
* __data__ | `object`: objet ou tableau de données à visualiser. S'il s'agit d'un objet, les clés correspondent aux valeurs des colonnes tandis qu'un tableau s'attend à un tableau d'objets avec un champ nommé correspondant à chaque colonne. Si vous souhaitez permettre aux étudiants d'importer un fichier "csv", définissez l'option "data" comme étant "fausse". Default: `{}`.
* __dataInfo__ | `object`: objet contenant les clés \"name", dont la valeur est une chaîne de caractères, \"info", dont la valeur est un tableau de chaînes de caractères dans lequel chaque élément du tableau est une nouvelle ligne et \"variables", un objet avec des clés comme noms de variables et des valeurs comme descriptions de variables. Default: `{
  'info': '',
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __editor__ | `boolean`: booléen indiquant s'il faut montrer l'éditeur à l'utilisateur. Default: `true`.
* __editorProps__ | `object`: objet des propriétés à passer au `TextEditor` (voir la documentation pour <TextEditor />). Default: `none`.
* __editorTitle__ | `string`: chaîne indiquant le titre de l'explorateur à afficher. Default: `none`.
* __dataTable__ | `boolean`: valeur booléenne indiquant s'il faut cacher la table de données. Default: `true`.
* __dataTableProps__ | `object`: les propriétés transmises au composant de table de données (voir la documentation pour <DataTable />). Default: `{}`.
* __history__ | `boolean`: contrôle l'affichage ou non d'un historique des actions réalisées. Default: `true`.
* __reportMode__ | `string`: contrôle si les modifications de l'éditeur doivent être synchronisées pour tous (`collaboratif`), entre les utilisateurs d'un groupe (`groupe`), ou non (`individuel`). Default: `'individual'`.
* __histogramDensities__ | `boolean`: valeur booléenne indiquant s'il faut afficher les densités de l'histogramme. Default: `true`.
* __models__ | `array`: un ensemble de chaînes de caractères indiquant les modèles qui peuvent être adaptés aux données. Default: `[
  'Simple Linear Regression',
  'Multiple Linear Regression',
  'LASSO',
  'Decision Tree',
  'Random Forest',
  'Logistic Regression',
  'Naive Bayes',
  'PCA',
  'Hierarchical Clustering',
  'kmeans'
]`.
* __opened__ | `string`: page ouverte au démarrage. Default: `none`.
* __plots__ | `array`: un ensemble de chaînes de caractères indiquant les tracés à montrer à l'utilisateur. Default: `[
  'Bar Chart',
  'Pie Chart',
  'Mosaic Plot',
  'Histogram',
  'Interval Plot',
  'Box Plot',
  'Line Plot',
  'Scatterplot',
  'Scatterplot Matrix',
  'Heat Map',
  'Contour Chart',
  'Violin Plot',
  'QQ Plot'
]`.
* __questions__ | `(array|object)`: un tableau de nœuds de composants de texte et de questions à afficher dans un onglet `questions` ou un objet de propriétés transmises à un composant sous-jacent. `<Pages />` sous-jacent. Default: `none`.
* __showTestDecisions__ | `boolean`: booléen indiquant s'il faut montrer les décisions prises pour chaque test sur la base des valeurs p calculées. Default: `true`.
* __statistics__ | `array`: un tableau de chaînes de caractères indiquant les statistiques sommaires qui peuvent être calculées. Default: `[
  'Mean',
  'Median',
  'Min',
  'Max',
  'Range',
  'Interquartile Range',
  'Standard Deviation',
  'Variance',
  'Correlation',
  'Correlation Matrix',
  'Skewness',
  'Excess Kurtosis',
  'First Quartile',
  'Third Quartile',
  'Quantile',
  'Five-Number Summary'
]`.
* __style__ | `object`: Styles CSS en ligne pour le conteneur principal. Default: `{}`.
* __tables__ | `array`: un tableau de chaînes de caractères indiquant quels tableaux peuvent être créés à partir des données. Default: `[
  'Frequency Table',
  'Contingency Table'
]`.
* __tabs__ | `array`: un tableau d'objets et de clés indiquant les onglets personnalisés à ajouter. Default: `[]`.
* __tests__ | `array`: un ensemble de chaînes de caractères indiquant les tests d'hypothèse à inclure. Default: `[
  'One-Sample Mean Test',
  'Two-Sample Mean Test',
  'One-Way ANOVA',
  'One-Sample Proportion Test',
  'Two-Sample Proportion Test',
  'Correlation Test',
  'Chi-square Independence Test',
  'Kruskal-Wallis Test'
]`.
* __transformer__ | `boolean`: booléen indiquant s'il faut afficher les outils de transformation variables. Default: `true`.
* __onTutorialCompletion__ | `function`: fonction invoquée lorsque l'utilisateur a terminé le tutoriel de l'explorateur de données. Default: `onTutorialCompletion() {}`.
* __onTutorialStart__ | `function`: fonction invoquée lorsque l'utilisateur lance le tutoriel de l'explorateur de données. Default: `onTutorialStart() {}`.


## Exemples

In creating a data explorer, one needs a *.json dataset. This step may be accomplished by including the following in the header of a *.isle file:

```js
require:
    dataName: "./dataName.json"
```

Consider a dataset called "heartdisease" with the following variables:
* __Gender__: _Categorical_
* __Drugs__: _Categorical_
* __Complications__: _Categorical_
* __Cost__: _Quantitative_
* __Age__: _Quantitative_
* __Interventions__: _Quantitative_
* __ERVisit__: _Quantitative_
* __Comorbidities__: _Quantitative_
* __Duration__: _Quantitative_

We will include the explorer with the following code:

```jsx live
<DataExplorer 
    id="heartdisease"
    data={heartdisease} 
    categorical={[ 'Gender', 'Drugs', 'Complications' ]}
    quantitative={[ 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}
    tests={[]}
/>
```



