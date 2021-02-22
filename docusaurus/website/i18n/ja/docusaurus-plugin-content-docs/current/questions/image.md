---
id: image-question 
title: Image Question
sidebar_label: Image Question
---

ユーザーに画像をアップロードするように求める質問です。

## Options

* __question__ | `(string|node)`: 択一問題. Default: `''`.
* __hintPlacement__ | `string`: ヒントの配置 (`top`, `left`, `right`, `bottom` のいずれか). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: 解答のヒント. Default: `[]`.
* __feedback__ | `boolean`: フィードバックボタンを表示するかどうかを制御します。. Default: `true`.
* __chat__ | `boolean`: 要素が統合されたチャットを持つべきかどうかを制御します。. Default: `false`.
* __disableSubmitNotification__ | `boolean`: は画像の投稿後に通知を表示するかどうかを制御します。. Default: `false`.
* __className__ | `string`: クラス名. Default: `''`.
* __sketchpad__ | `object`: プロパティを <Sketchpad /> コンポーネントに渡します; スケッチパッドをレンダリングするには、少なくとも空のオブジェクト `{}` を渡します。. Default: `none`.
* __solution__ | `string`: モデルソリューションの画像URL. Default: `none`.
* __until__ | `Date`: 学生が回答を提出するまでの時間. Default: `none`.
* __points__ | `number`: 採点点数. Default: `10`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.
* __onSubmit__ | `function`: 回答が提出されたときに呼び出されるコールバック; 唯一のパラメータとして、要素が正しい順序で配置されているかどうかを示す `boolean` を持ちます。. Default: `onSubmit() {}`.


## Examples
