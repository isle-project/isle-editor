---
id: r-output
title: R Output
sidebar_label: R Output
---

ISLEレッスン内でR出力をレンダリングするためのコンポーネント。

## Options

* __code__ | `string`: 評価に使用されるRコード. Default: `''`.
* __libraries__ | `array`: 入力 `code` が実行されたときに自動的にロードされるべき R ライブラリ. Default: `[]`.
* __prependCode__ | `(string|array)`: 評価時に `code` に格納されているコードの前に追加される R コード (またはコードブロックの `array`)。. Default: `''`.
* __onPlots__ | `function`: 生成されたプロットで呼び出されるコールバック. Default: `onPlots() {}`.
* __onResult__ | `function`: コールバックは `error` (操作が成功した場合は `null`) と `result` で呼び出され、R の出力を保持します。. Default: `onResult() {}`.


## Examples

```jsx live
<ROutput code="runif(10)" />
```

