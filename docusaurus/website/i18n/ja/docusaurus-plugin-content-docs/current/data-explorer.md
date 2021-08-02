---
id: data-explorer 
title: Data Explorer
sidebar_label: Data Explorer
---

このコンポーネントは、学生が提示されたデータを簡単に要約し、様々な統計的検定を行うために使用されます。

## オプション

* __categorical__ | `array`: 各カテゴリ変数の名前を示す文字列の配列. Default: `[]`.
* __quantitative__ | `array`: 各量的変数の名前を示す文字列の配列. Default: `[]`.
* __data__ | `object`: は、表示するデータオブジェクトまたは配列を指定します。オブジェクトの場合はキーが列の値に対応し、配列の場合は各列に対応する名前付きフィールドを持つオブジェクトの配列を期待します。学生に `.csv` ファイルをインポートできるようにしたい場合は、`data` オプションを `false` に設定してください。. Default: `{}`.
* __dataInfo__ | `object`: キーを含むオブジェクト `name`, 値が文字列である `info`, 値が文字列の配列である `info`, 配列の各要素が改行されたものである `variables`, キーが変数名、値が変数の説明である `variables` を持つオブジェクト。. Default: `{
  'info': '',
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __editor__ | `boolean`: エディタをユーザに表示するかどうかを示すブール値. Default: `true`.
* __editorProps__ | `object`: に渡されるプロパティのオブジェクトです ( <TextEditor /> のドキュメントを参照してください)。. Default: `none`.
* __editorTitle__ | `string`: 表示されるエクスプローラのタイトルを示す文字列. Default: `none`.
* __dataTable__ | `boolean`: データテーブルをビューから隠すかどうかを示すブール値. Default: `true`.
* __dataTableProps__ | `object`: プロパティはデータテーブルコンポーネントに渡されます (<DataTable /> のドキュメントを参照してください)。. Default: `{}`.
* __history__ | `boolean`: 実行されたアクションの履歴ログを表示するかどうかを制御します。. Default: `true`.
* __reportMode__ | `string`: エディタの変更を全員に同期させるか (`collaborative`)、グループ内のユーザに同期させるか (`group`)、同期させないか (`individual`) を制御します。. Default: `'individual'`.
* __histogramDensities__ | `boolean`: ヒストグラムの密度を表示するかどうかを示すブール値. Default: `true`.
* __models__ | `array`: データに適合するモデルを示す文字列の配列. Default: `[
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
* __opened__ | `string`: 起動時に開いたページ. Default: `none`.
* __plots__ | `array`: ユーザに表示するプロットを示す文字列の配列. Default: `[
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
* __questions__ | `(array|object)`:  `questions` タブに表示されるテキストと質問コンポーネントのノードの配列、または基礎となるコンポーネントに渡されるプロパティのオブジェクト。 `<Pages />`コンポーネント. Default: `none`.
* __showTestDecisions__ | `boolean`: 計算されたp値に基づいて各テストの決定を表示するかどうかを示すブール値. Default: `true`.
* __statistics__ | `array`: サマリー統計量が計算される可能性があることを示す文字列の配列. Default: `[
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
* __style__ | `object`: メインコンテナのCSSインラインスタイル. Default: `{}`.
* __tables__ | `array`: データからどのテーブルが作成されるかを示す文字列の配列. Default: `[
  'Frequency Table',
  'Contingency Table'
]`.
* __tabs__ | `array`: 追加するカスタムタブを示すオブジェクトとキーの配列. Default: `[]`.
* __tests__ | `array`: どの仮説検定を含めるかを示す文字列の配列. Default: `[
  'One-Sample Mean Test',
  'Two-Sample Mean Test',
  'One-Way ANOVA',
  'One-Sample Proportion Test',
  'Two-Sample Proportion Test',
  'Correlation Test',
  'Chi-squared Independence Test',
  'Kruskal-Wallis Test'
]`.
* __transformer__ | `boolean`: 変数変換ツールを表示するかどうかを示すブール値. Default: `true`.
* __onTutorialCompletion__ | `function`: データエクスプローラのチュートリアルが完了したときに呼び出される関数. Default: `onTutorialCompletion() {}`.
* __onTutorialStart__ | `function`: データエクスプローラチュートリアルの起動時に呼び出される関数. Default: `onTutorialStart() {}`.


## 例としては、以下のようなものがあります。

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



