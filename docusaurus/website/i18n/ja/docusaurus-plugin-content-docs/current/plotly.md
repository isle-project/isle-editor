---
id: plotly 
title: Plotly
sidebar_label: Plotly
---

プロット的に可視化。

## オプション

* __data__ | `array (required)`: データ配列. Default: `none`.
* __draggable__ | `boolean`: プロットをドラッグ可能にするかどうかを制御します。. Default: `false`.
* __editable__ | `boolean`: 作成されたプロットのラベルを編集可能にするかどうかを制御します。. Default: `false`.
* __id__ | `string`: 構成要素識別子. Default: `none`.
* __layout__ | `object`: プロットリーレイアウトオブジェクト. Default: `{}`.
* __config__ | `object`: Plotly 設定オプション (参照: https://plotly.com/javascript/configuration-options/). Default: `{}`.
* __legendButtons__ | `boolean`: 凡例を変更するためのボタンを表示するかどうかを制御します。. Default: `true`.
* __meta__ | `object`: プロットメタ情報. Default: `none`.
* __revision__ | `number`: を指定すると、リビジョン値がインクリメントされたときにプロットが更新されます。. Default: `none`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.
* __onAfterPlot__ | `function`: コールバック関数. Default: `onAfterPlot() {}`.
* __onClick__ | `function`: クリックされたときに呼び出されるコールバック関数. Default: `onClick() {}`.
* __onInitialized__ | `function`: プロットが初期化されるとコールバックが呼び出されます。 figure (入力プロップに対応する 3 つのキーを持つオブジェクト: `data`, `layout`, `frames`) と DOM ノード `graphDiv` を指定して呼び出されます。. Default: `onInitialized() {}`.
* __onLegendClick__ | `function`: 凡例項目がクリックされたときに呼び出されるコールバック関数. Default: `onLegendClick() {}`.
* __onLegendDoubleClick__ | `function`: 凡例項目がダブルクリックされたときに呼び出されるコールバック関数. Default: `onLegendDoubleClick() {}`.
* __onRelayout__ | `function`: リレイアウトコールバック関数. Default: `onRelayout() {}`.
* __onSelected__ | `function`: 要素が選択されたときに呼び出されるコールバック関数. Default: `onSelected() {}`.
* __onShare__ | `function`: シェアボタンをクリックしたときに呼び出されるコールバック関数. Default: `none`.
* __removeButtons__ | `boolean`: すべてのボタンを削除するかどうかを制御します (フルスクリーンボタンが有効な場合は別として)。. Default: `false`.
* __toggleFullscreen__ | `boolean`: フルスクリーンモードでのプロット表示を許可するかどうかを制御します。. Default: `true`.


## 例としては、以下のようなものがあります。

```jsx live
<Plotly
    data={[{
        values: [ 24, 7, 0.5 ],
        labels: [ 'English', 'Spanish', 'Other' ],
        type: 'pie'
            }]}
    layout={{ width: 300 }}
/>
```

