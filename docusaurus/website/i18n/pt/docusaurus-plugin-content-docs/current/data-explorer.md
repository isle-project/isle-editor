---
id: data-explorer 
title: Data Explorer
sidebar_label: Data Explorer
---

Este componente é utilizado pelos estudantes para resumir brevemente os dados à medida que são apresentados e realizar vários testes estatísticos.

## Opções

* __categorical__ | `array`: matriz de cordas indicando o nome de cada variável categórica. Default: `[]`.
* __quantitative__ | `array`: matriz de cordas indicando o nome de cada variável quantitativa. Default: `[]`.
* __data__ | `object`: objeto de dados ou array a ser visualizado. Se for um objeto, as chaves correspondem aos valores das colunas, enquanto uma matriz espera uma matriz de objetos com um campo nomeado correspondente a cada coluna. Se você deseja permitir aos estudantes a capacidade de importar um arquivo `.csv', configure a opção `dados' para ser `falso'. Default: `{}`.
* __dataInfo__ | `object`: objeto contendo as chaves, cujo valor é uma string, cujo valor é uma array de strings em que cada elemento da array é uma nova linha e variáveis, um objeto com chaves como nomes de variáveis e valores como descrições de variáveis. Default: `{
  'info': '',
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __editor__ | `boolean`: booleano indicando se deve mostrar o editor ao usuário. Default: `true`.
* __editorProps__ | `object`: objeto de propriedades a ser passado ao `TextEditor` (ver documentação para <TextEditor />). Default: `none`.
* __editorTitle__ | `string`: cadeia indicando o título do explorador a ser exibido. Default: `none`.
* __dataTable__ | `boolean`: valor booleano indicando se a tabela de dados deve ser ocultada da vista. Default: `true`.
* __dataTableProps__ | `object`: propriedades passadas para o componente da tabela de dados (ver documentação para <DataTable />). Default: `{}`.
* __history__ | `boolean`: controla se deve exibir um histórico das ações realizadas. Default: `true`.
* __reportMode__ | `string`: controla a sincronização das mudanças de editor para todos (`colaborativo'), entre usuários em grupos (`grupo'), ou não (`individual'). Default: `'individual'`.
* __histogramDensities__ | `boolean`: valor booleano indicando se devem ser exibidas densidades de histograma. Default: `true`.
* __models__ | `array`: matriz de cordas indicando modelos que podem caber nos dados. Default: `[
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
* __opened__ | `string`: página aberta no início da operação. Default: `none`.
* __plots__ | `array`: matriz de cordas indicando quais parcelas mostrar para o usuário. Default: `[
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
* __questions__ | `(array|object)`: matriz de nós de texto e componentes de perguntas a serem exibidos em uma guia `questions` ou um objeto de propriedades passado para um objeto subjacente `<Pages />` componente. Default: `none`.
* __showTestDecisions__ | `boolean`: booleano indicando se mostrar as decisões tomadas para cada teste com base nos p-valores calculados. Default: `true`.
* __statistics__ | `array`: conjunto de cordas indicando quais estatísticas resumidas podem ser calculadas. Default: `[
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
* __style__ | `object`: Estilos em linha CSS para o recipiente principal. Default: `{}`.
* __tables__ | `array`: matriz de cordas indicando quais tabelas podem ser criadas a partir dos dados. Default: `[
  'Frequency Table',
  'Contingency Table'
]`.
* __tabs__ | `array`: matriz de objetos e chaves indicando quaisquer abas personalizadas para adicionar. Default: `[]`.
* __tests__ | `array`: conjunto de cordas indicando quais testes de hipótese a incluir. Default: `[
  'One-Sample Mean Test',
  'Two-Sample Mean Test',
  'One-Way ANOVA',
  'One-Sample Proportion Test',
  'Two-Sample Proportion Test',
  'Correlation Test',
  'Chi-squared Independence Test',
  'Kruskal-Wallis Test'
]`.
* __transformer__ | `boolean`: booleano indicando se devem ser exibidas ferramentas de transformação variáveis. Default: `true`.
* __onTutorialCompletion__ | `function`: função invocada quando o usuário tiver completado o tutorial do explorador de dados. Default: `onTutorialCompletion() {}`.
* __onTutorialStart__ | `function`: função invocada quando o usuário inicia o tutorial do explorador de dados. Default: `onTutorialStart() {}`.


## Exemplos

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



