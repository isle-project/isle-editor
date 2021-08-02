---
id: data-explorer 
title: Data Explorer
sidebar_label: Data Explorer
---

Этот компонент используется студентами для краткого обобщения данных по мере их представления и проведения различных статистических тестов.

## Варианты

* __categorical__ | `array`: массив строк с указанием имени каждой категориальной переменной. Default: `[]`.
* __quantitative__ | `array`: массив строк с указанием имени каждой количественной переменной. Default: `[]`.
* __data__ | `object`: объект данных или массив для просмотра. Если это объект, то ключи соответствуют значениям столбцов, а массив будет ожидать массив объектов с именованным полем, соответствующим каждому столбцу. Если вы хотите разрешить ученикам возможность импортировать файл `.csv`, установите опцию `data` как `false`. Default: `{}`.
* __dataInfo__ | `object`: объект, содержащий ключи \'name\', значение которого - строка, \'info\', значение - массив строк, в котором каждый элемент массива - новая строка, и \'variables\', объект с ключами в виде имен переменных, а значения - в виде описаний переменных. Default: `{
  'info': '',
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __editor__ | `boolean`: логический указатель на то, нужно ли показывать редактор пользователю. Default: `true`.
* __editorProps__ | `object`: объект свойств, который будет передан в `TextEditor` (см. документацию к <TextEditor />). Default: `none`.
* __editorTitle__ | `string`: строка, указывающая на заголовок проводника для отображения. Default: `none`.
* __dataTable__ | `boolean`: булевое значение, указывающее, скрывать ли таблицу данных из представления. Default: `true`.
* __dataTableProps__ | `object`: свойства, переданные компоненту таблицы данных (см. документацию к <DataTable />). Default: `{}`.
* __history__ | `boolean`: управляет отображением истории выполненных действий. Default: `true`.
* __reportMode__ | `string`: управляет синхронизацией изменений редактора для всех (`коллаборативный`), для всех пользователей в группах (`группа`), или нет (`индивидуальный`). Default: `'individual'`.
* __histogramDensities__ | `boolean`: булевое значение, указывающее, следует ли отображать плотности гистограммы. Default: `true`.
* __models__ | `array`: массив строк с указанием моделей, которые могут поместиться на данные. Default: `[
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
* __opened__ | `string`: страница, открываемая при запуске. Default: `none`.
* __plots__ | `array`: массив строк, указывающих, какие графики показывать пользователю. Default: `[
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
* __questions__ | `(array|object)`: массив узлов компонентов текста и вопросов для отображения на вкладке `questions` или объект свойств, передаваемых базовому компоненту `<Pages />` компонент. Default: `none`.
* __showTestDecisions__ | `boolean`: логическое указание на то, следует ли показывать решения, принятые для каждого теста на основе вычисленных р-значений. Default: `true`.
* __statistics__ | `array`: массив строк, указывающих на то, какая суммарная статистика может быть рассчитана. Default: `[
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
* __style__ | `object`: CSS встраиваемые стили для главного контейнера. Default: `{}`.
* __tables__ | `array`: массив строк, указывающих, какие таблицы можно создавать из данных. Default: `[
  'Frequency Table',
  'Contingency Table'
]`.
* __tabs__ | `array`: массив объектов и ключей, указывающих на любые пользовательские вкладки для добавления. Default: `[]`.
* __tests__ | `array`: массив строк, указывающих, какие гипотезы тестируют на включение. Default: `[
  'One-Sample Mean Test',
  'Two-Sample Mean Test',
  'One-Way ANOVA',
  'One-Sample Proportion Test',
  'Two-Sample Proportion Test',
  'Correlation Test',
  'Chi-squared Independence Test',
  'Kruskal-Wallis Test'
]`.
* __transformer__ | `boolean`: логическое указание на то, следует ли отображать инструменты преобразования переменных. Default: `true`.
* __onTutorialCompletion__ | `function`: функция, вызываемая после завершения обучения исследователя данных. Default: `onTutorialCompletion() {}`.
* __onTutorialStart__ | `function`: функция, вызываемая при запуске пользовательского учебного курса по исследованию данных. Default: `onTutorialStart() {}`.


## Примеры

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



