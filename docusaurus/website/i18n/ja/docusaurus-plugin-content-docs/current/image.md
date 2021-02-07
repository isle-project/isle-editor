---
id: image
title: Image
sidebar_label: Image
---

画像を表示するためのコンポーネント。

## Options

* __src__ | `string (required)`: イメージソース位置. Default: `none`.
* __alt__ | `string`: 画像記述. Default: `''`.
* __body__ | `string`: ベース６４符号化された画像データ. Default: `none`.
* __height__ | `(number|string)`: 画像の高さ. Default: `none`.
* __width__ | `(number|string)`: 画像幅. Default: `none`.
* __inline__ | `boolean`: は画像をテキストで囲むことを可能にします。. Default: `false`.
* __id__ | `string`: 構成要素識別子. Default: `none`.
* __showModal__ | `boolean`: フルスクリーンモーダルビューを表示するかどうかを制御します。. Default: `true`.
* __className__ | `string`: クラス名. Default: `''`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.
* __onShare__ | `function`: 共有」ボタンがクリックされた場合に、画像とともにコールバックが呼び出されます。. Default: `none`.


## Examples

```jsx live
<Image 
    alt="The Starry Night by Vincent van Gogh" 
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
    className="center"
    width="50%"
    height="auto"
/>
```

