---
id: js-shell
title: JavaScript Shell
sidebar_label: JavaScript Shell
---

JavaScript コマンドを実行するために使用できるインタラクティブな Javascript シェルです。シェルにはエラーメッセージや警告などを表示するコンソールが含まれています。

## オプション

* __code__ | `string`: 評価されるJavaScriptコード. Default: `''`.
* __solution__ | `string`: プログラミングの問題では、問題の公式な解答を表すコード `string` を指定します。. Default: `''`.
* __hints__ | `array<(string|node)>`: プログラミングの質問には、問題へのアプローチ方法のガイダンスを提供するヒントを提供しています。. Default: `[]`.
* __precompute__ | `boolean`: は、コンポーネントがマウントされた後にデフォルトのコードを実行するかどうかを制御します。. Default: `false`.
* __chat__ | `boolean`: グループチャット機能を有効にするかどうかを制御します。. Default: `false`.
* __check__ | `string`: 評価される `code` をチェックするための JavaScript コードを追加しました。. Default: `none`.
* __disabled__ | `boolean`: すべてのユーザ入力を無効にし、コードブロックを静的にするかどうかを制御します。. Default: `false`.
* __lines__ | `number`: 表示行数. Default: `5`.
* __className__ | `string`: クラス名. Default: `''`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.
* __onChange__ | `function`: テキストフィールドの入力が変更されるたびに呼び出されるコールバック. Default: `onChange() {}`.
* __onEvaluate__ | `function`: コールバックは `Evaluate` ボタンがクリックされるたびに呼び出されます。. Default: `onEvaluate() {}`.
* __vars__ | `object`: 評価された `code` が利用できるようにすべき変数を持つスコープオブジェクト. Default: `none`.


## 例としては、以下のようなものがあります。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'Ten Lines', value: 'mLines' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<JSShell code = {`var a = 2; 
var b = 2;
console.log(a + b);`} />
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<JSShell style={{ fontSize: 18, boxShadow: '0 0 4px black' }}  />
```

</TabItem>

<TabItem value="mLines">

```jsx live
<JSShell lines={10} />
```

</TabItem>

</Tabs>




