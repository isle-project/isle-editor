---
id: slider 
title: Slider
sidebar_label: Slider
---

スライドショーやカルーセルで子を表示するコンポーネント。

## Options

* __title__ | `string`: スライドショー/カルーセルの上部に表示されるタイトル. Default: `''`.
* __dots__ | `boolean`: 下部にドットを表示して、スライドにすばやく移動できるようにしました。. Default: `true`.
* __fade__ | `boolean`: スライド間の遷移にフェードを使用するかどうかを制御します。. Default: `false`.
* __draggable__ | `boolean`: ユーザーがスライドをドラッグしてスライド間を移動できるかどうかを制御します。. Default: `false`.
* __pagination__ | `string`: ページネーションを `top`, `bottom`, `両方に表示するかどうか。. Default: `'bottom'`.
* __goto__ | `number`: プロパティが変更された場合、コンポーネントは、選択されたインデックスを持つスライドにジャンプします。. Default: `0`.
* __infinite__ | `boolean`: スライドショーの内容をラップするかどうかを制御します。. Default: `false`.
* __interval__ | `number`: 自動スライドチェンジの時間間隔を設定します。. Default: `none`.
* __swipe__ | `boolean`: ドラッグ/スワイプ動作を可能にする. Default: `false`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.
* __onClick__ | `function`: 前後ボタンをクリックした時に呼び出されるコールバック. Default: `onClick() {}`.


## Examples

```jsx live
<Slider title="Questions to explore:" >
    <p>Try generating new samples of the Normal data. You'll notice that the points don't always lie exactly on the line. This is typical variation. As you generate more random realizations of this plot you'll get better calibrated to the kind of deviation you can expect to see from this large a sample of Normal data.</p>
    <p>How do the normal qq plots change as you vary the df parameter for the t-distributed data?</p>
    <p>Can you tell just by looking at the t.data histograms that the data aren't normally distributed? Is it easier to tell from the QQ plots?</p>
    <p>How do the normal qq plots change as you vary the shape parameter in the gamma-distributed data?</p>
</Slider>
```

