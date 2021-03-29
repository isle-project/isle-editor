---
id: r-shell
title: R Shell
sidebar_label: R Shell
---

[OpenCPU](https://www.opencpu.org/)を使ってクラウド上でRコマンドを実行できる対話型Rシェル。

## オプション

* __code__ | `string`: 評価対象のRコード. Default: `''`.
* __solution__ | `string`: プログラミングの問題では、Rコード `string` が問題の公式な解答を表します。. Default: `''`.
* __hints__ | `array<(string|node)>`: プログラミングの質問には、問題へのアプローチ方法のガイダンスを提供するヒントを提供しています。. Default: `[]`.
* __addPreceding__ | `boolean`: true に設定されている場合、シェルは現在のコンポーネントのすべてのコードと、レッスン内で発生したすべての以前のコードを評価します。. Default: `false`.
* __libraries__ | `array`: 入力 `code` が実行されたときに自動的にロードされるべき R ライブラリ. Default: `[]`.
* __precompute__ | `boolean`: は、コンポーネントがマウントされた後にデフォルトのコードを実行するかどうかを制御します。. Default: `false`.
* __prependCode__ | `(string|array)`: R コード `string` (または R コードブロックの `array`) を評価する際に `code` に格納されているコードの前に追加されます。. Default: `''`.
* __chat__ | `boolean`: グループチャット機能を有効にするかどうかを制御します。. Default: `false`.
* __disabled__ | `boolean`: すべてのユーザ入力を無効にし、コードブロックを静的にするかどうかを制御します。. Default: `false`.
* __lines__ | `number`: 表示行数. Default: `5`.
* __resettable__ | `boolean`: デフォルトのコード入力を復元するためのリセットボタンを表示するかどうかを制御します。. Default: `false`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.
* __onChange__ | `function`: テキストフィールドの入力が変更されるたびに呼び出されるコールバック. Default: `onChange() {}`.
* __onEvaluate__ | `function`: コールバックは `Evaluate` ボタンがクリックされるたびに呼び出されます。. Default: `onEvaluate(){}`.
* __onResult__ | `function`: コールバックはコードの実行結果がクラウドから得られるたびに呼び出されます。結果 `string` はコールバック関数の唯一の引数として渡されます。. Default: `onResult() {}`.


## 例としては、以下のようなものがあります。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Precompute & Disabled', value: 'precompute' },
        { label: 'Using Libraries', value: 'usingLibraries' },
        { label: 'Add Preceding Code', value: 'addPreceding' },
        { label: 'Hints & Solution', value: 'hintsAndSolution' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<RShell
    code="abs(c(-2,3,-1))"
/>
```

</TabItem>

<TabItem value="precompute" >

```jsx live
<RShell
    code="abs(c(-2,3,-1))"
    precompute
    disabled
    lines={2}
/>
```

</TabItem>

<TabItem value="usingLibraries" >

```jsx live
<RShell libraries={['dplyr']} code={'starwars %>% filter(species == "Droid")'} lines={2} />
```

</TabItem>

<TabItem value="addPreceding" >

```jsx live
<RShell code="library(dplyr)" lines={2} disabled />

<RShell code={'starwars %>% filter(species == "Droid")'} addPreceding lines={2} />
```

</TabItem>

<TabItem value="hintsAndSolution" >

```jsx live
**(a)** Use the lm() function to regress `Price` on: `EngineSize`, `Origin`, `MPG.highway`, `MPG.city` and `Horsepower`.

<RShell 
    id="prob1a"
    code="" 
    solution={`cars.lm <- lm(Price ~ EngineSize + Origin + MPG.highway + MPG.city + Horsepower,
data = Cars93)
summary(cars.lm)`} 
    lines={5} 
    hints={["Use the model formula syntax to specify your regression equation. Type ?formula if you don't remember how formulas work.","You can use the summary() function to retrieve a detailed regression output for a lm object"]}
/>
```

</TabItem>

</Tabs>
