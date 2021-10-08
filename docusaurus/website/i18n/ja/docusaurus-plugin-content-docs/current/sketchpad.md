---
id: sketchpad 
title: Sketchpad
sidebar_label: Sketchpad
---

講義のスライドや空のページにメモを取るためのドローイングスケッチパッド。

## オプション

* __autoSave__ | `boolean`: は、エディタが現在のテキストをブラウザのローカルストレージに保存するかどうかを制御します。. Default: `true`.
* __feedbackButtons__ | `boolean`: 各スライドにフィードバックボタンを表示するかどうかを制御します。. Default: `false`.
* __intervalTime__ | `number`: オートセーブ間の時間. Default: `10000`.
* __hideInputButtons__ | `boolean`: 描画ボタンとテキスト入力ボタンを非表示にするかどうかを制御します。. Default: `false`.
* __hideNavigationButtons__ | `boolean`: ページ間を移動するためのボタンを非表示にするかどうかを制御します。. Default: `false`.
* __hideSaveButtons__ | `boolean`: 保存ボタンを隠すかどうかを制御します。. Default: `false`.
* __hideTransmitButtons__ | `boolean`: ユーザーアクションを送信するためのボタンを非表示にするかどうかを制御します。. Default: `false`.
* __brushSize__ | `number`: 筆の大きさ. Default: `4`.
* __color__ | `string`: 筆とテキストの色. Default: `'#444444'`.
* __canvasWidth__ | `number`: キャンバス要素の幅 (px). Default: `1200`.
* __canvasHeight__ | `number`: キャンバス要素の高さ (px). Default: `700`.
* __fullscreen__ | `boolean`: ブラウザウィンドウの幅と高さに合わせてキャンバスのサイズを自動的に変更するかどうかを制御します。. Default: `false`.
* __fill__ | `string`: horizontal` の場合は、PDF を描画する際に利用可能な水平方向のスペースをすべて埋め、vertical` の場合は、y 軸のオーバーフローを防ぐためにすべての垂直方向のスペースを使用します。. Default: `'vertical'`.
* __disabled__ | `boolean`: コンポーネントを読み取り専用にして、スケッチパッドでの描画を禁止するかどうか。. Default: `false`.
* __fontFamily__ | `string`: フォントファミリ. Default: `'Arial'`.
* __fontSize__ | `number`: フォントサイズ. Default: `24`.
* __nodes__ | `object`: 指定したスライドの上に表示されるコンポーネント; `keys` はページ番号に、 `values` はコンポーネントに対応していなければなりません。. Default: `{}`.
* __noPages__ | `number`: 初期ページ数. Default: `1`.
* __pdf__ | `string`: ベイクドインページ背景のPDFファイルへのリンク. Default: `none`.
* __showTutorial__ | `boolean`: 起動時にスケッチパッドのチュートリアルを表示. Default: `false`.
* __dynamicallyHideButtons__ | `boolean`: ツールバーの幅が十分でない場合にボタンの非表示を開始するかどうかを制御します (そうでない場合は改行を開始します)。. Default: `false`.
* __transmitOwner__ | `boolean`: オーナーのアクションを他のユーザーにリアルタイムで送信するかどうか. Default: `true`.
* __groupMode__ | `boolean`: は、すべてのユーザのアクションが他のすべてのユーザに送信されるかどうかを制御します。. Default: `false`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.
* __onChange__ | `function`: 新しい線要素が描画されるたびに呼び出されるコールバック. Default: `onChange() {}`.


## 例としては、以下のようなものがあります。

```jsx live
<Sketchpad canvasWidth={750} />
```

