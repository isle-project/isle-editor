---
id: data-explorer 
title: Data Explorer
sidebar_label: Data Explorer
---

Los estudiantes utilizan este componente para resumir brevemente los datos a medida que se presentan y realizar diversas pruebas estadísticas.

## Opciones

* __categorical__ | `array`: una serie de cadenas que indican el nombre de cada variable categórica. Default: `[]`.
* __quantitative__ | `array`: una serie de cadenas que indican el nombre de cada variable cuantitativa. Default: `[]`.
* __data__ | `object`: objeto de datos o matriz para ser vistos. Si se trata de un objeto, las claves corresponden a los valores de las columnas, mientras que una matriz esperará una matriz de objetos con un campo nombrado correspondiente a cada columna. Si desea permitir a los estudiantes la posibilidad de importar un archivo `.csv`, establezca la opción `datos` como `falso`. Default: `{}`.
* __dataInfo__ | `object`: objeto que contiene las claves "name", cuyo valor es una cadena, "info", cuyo valor es un conjunto de cadenas en las que cada elemento del conjunto es una nueva línea y "variables", un objeto con claves como nombres de variables y valores como descripciones de variables. Default: `{
  'info': '',
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __editor__ | `boolean`: booleana que indica si mostrar el editor al usuario. Default: `true`.
* __editorProps__ | `object`: objeto de propiedades que se pasarán al "Editor de textos" (ver documentación de <TextEditor />). Default: `none`.
* __editorTitle__ | `string`: cadena que indica el título del explorador que se va a mostrar. Default: `none`.
* __dataTable__ | `boolean`: valor booleano que indica si se debe ocultar la tabla de datos de la vista. Default: `true`.
* __dataTableProps__ | `object`: propiedades pasadas al componente de la tabla de datos (ver documentación de <Tabla de datos />). Default: `{}`.
* __history__ | `boolean`: controla si se muestra un registro histórico de las acciones realizadas. Default: `true`.
* __reportMode__ | `string`: controla si se sincronizan los cambios del editor para todos (`colaborativo`), entre usuarios en grupos (`grupo`), o no (`individual`). Default: `'individual'`.
* __histogramDensities__ | `boolean`: valor booleano que indica si mostrar las densidades del histograma. Default: `true`.
* __models__ | `array`: una serie de cadenas que indican los modelos que pueden encajar en los datos. Default: `[
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
* __opened__ | `string`: página abierta al inicio. Default: `none`.
* __plots__ | `array`: una serie de cadenas que indican qué parcelas mostrar al usuario. Default: `[
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
* __questions__ | `(array|object)`: matriz de nodos de componentes de texto y preguntas que se mostrarán en una pestaña de `questions` o un objeto de propiedades que se pasa a un componente subyacente `<Pages />` componente subyacente. Default: `none`.
* __showTestDecisions__ | `boolean`: booleana que indica si mostrar las decisiones tomadas para cada prueba basada en los valores p calculados. Default: `true`.
* __statistics__ | `array`: una serie de cadenas que indican qué estadísticas resumidas pueden calcularse. Default: `[
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
* __style__ | `object`: Estilos en línea de CSS para el contenedor principal. Default: `{}`.
* __tables__ | `array`: una serie de cadenas que indican qué tablas pueden crearse a partir de los datos. Default: `[
  'Frequency Table',
  'Contingency Table'
]`.
* __tabs__ | `array`: una serie de objetos y teclas que indican las pestañas personalizadas que hay que añadir. Default: `[]`.
* __tests__ | `array`: un conjunto de cuerdas que indican qué hipótesis probar para incluir. Default: `[
  'One-Sample Mean Test',
  'Two-Sample Mean Test',
  'One-Way ANOVA',
  'One-Sample Proportion Test',
  'Two-Sample Proportion Test',
  'Correlation Test',
  'Chi-squared Independence Test',
  'Kruskal-Wallis Test'
]`.
* __transformer__ | `boolean`: booleana que indica si mostrar las herramientas de transformación variable. Default: `true`.
* __onTutorialCompletion__ | `function`: función invocada cuando el usuario ha completado el tutorial del explorador de datos. Default: `onTutorialCompletion() {}`.
* __onTutorialStart__ | `function`: función que se invoca cuando el usuario inicia el tutorial del explorador de datos. Default: `onTutorialStart() {}`.


## Ejemplos

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



