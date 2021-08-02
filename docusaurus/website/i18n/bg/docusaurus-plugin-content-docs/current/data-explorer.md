---
id: data-explorer 
title: Data Explorer
sidebar_label: Data Explorer
---

Този компонент се използва от учениците за кратко обобщаване на представените данни и за извършване на различни статистически тестове.

## Опции

* __categorical__ | `array`: масив от низове, указващи името на всяка категорична променлива. Default: `[]`.
* __quantitative__ | `array`: масив от низове, указващи името на всяка количествена променлива. Default: `[]`.
* __data__ | `object`: обект или масив от данни, който трябва да се прегледа. Ако става въпрос за обект, ключовете съответстват на стойностите на колоните, докато при масив се очаква масив от обекти с именувано поле, съответстващо на всяка колона. Ако желаете да позволите на учениците да импортират файл `.csv`, задайте опцията `data` да бъде `false`.. Default: `{}`.
* __dataInfo__ | `object`: обект, съдържащ ключове \'name\', чиято стойност е низ, \'info\', чиято стойност е масив от низове, в който всеки елемент от масива е нов ред, и \'variables\', обект с ключове като имена на променливи и стойности като описания на променливи. Default: `{
  'info': '',
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __editor__ | `boolean`: boolean, показващ дали редакторът да се показва на потребителя. Default: `true`.
* __editorProps__ | `object`: обект от свойства, които да бъдат предадени на `TextEditor` (вижте документацията за <TextEditor />). Default: `none`.
* __editorTitle__ | `string`: низ, указващ заглавието на изследователя, което ще се показва. Default: `none`.
* __dataTable__ | `boolean`: булева стойност, указваща дали да се скрие таблицата с данни от изглед. Default: `true`.
* __dataTableProps__ | `object`: свойства, предавани на компонента таблица с данни (вж. документацията за <DataTable />). Default: `{}`.
* __history__ | `boolean`: контролира дали да се показва дневник с историята на извършените действия. Default: `true`.
* __reportMode__ | `string`: контролира дали да синхронизира промените в редактора за всички (`collaborative`), за всички потребители в групи (`group`) или не (`individual`).. Default: `'individual'`.
* __histogramDensities__ | `boolean`: булева стойност, показваща дали да се показва плътността на хистограмата. Default: `true`.
* __models__ | `array`: масив от низове, указващи моделите, които могат да бъдат приложени към данните. Default: `[
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
* __opened__ | `string`: страница, отворена при стартиране. Default: `none`.
* __plots__ | `array`: масив от низове, указващи кои участъци да се показват на потребителя. Default: `[
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
* __questions__ | `(array|object)`: масив от възли с текст и компоненти на въпроси, които да бъдат показани в раздела `questions`, или обект със свойства, предаден на основния `<Pages />` компонент. Default: `none`.
* __showTestDecisions__ | `boolean`: boolean, указващ дали да се показват решенията, взети за всеки тест, въз основа на изчислените p-стойности. Default: `true`.
* __statistics__ | `array`: масив от низове, указващи кои обобщени статистики могат да бъдат изчислени. Default: `[
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
* __style__ | `object`: CSS вградени стилове за основния контейнер. Default: `{}`.
* __tables__ | `array`: масив от низове, указващи кои таблици могат да бъдат създадени от данните. Default: `[
  'Frequency Table',
  'Contingency Table'
]`.
* __tabs__ | `array`: масив от обекти и ключове, указващи всички персонализирани раздели за добавяне. Default: `[]`.
* __tests__ | `array`: масив от низове, указващи кои тестове на хипотези да се включат. Default: `[
  'One-Sample Mean Test',
  'Two-Sample Mean Test',
  'One-Way ANOVA',
  'One-Sample Proportion Test',
  'Two-Sample Proportion Test',
  'Correlation Test',
  'Chi-squared Independence Test',
  'Kruskal-Wallis Test'
]`.
* __transformer__ | `boolean`: булева, указваща дали да се показват инструменти за трансформация на променливи. Default: `true`.
* __onTutorialCompletion__ | `function`: функция, задействана, когато потребителят е завършил урока за проучване на данни. Default: `onTutorialCompletion() {}`.
* __onTutorialStart__ | `function`: функция, която се извиква, когато потребителят стартира урока за проучване на данни. Default: `onTutorialStart() {}`.


## Примери

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



