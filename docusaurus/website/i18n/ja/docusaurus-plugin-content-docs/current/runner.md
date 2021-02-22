---
id: runner 
title: Runner
sidebar_label: Runner
---

ランナーコンポーネントは、指定された関数を1回または指定された間隔で実行します。

## オプション

* __active__ | `boolean`: はランナーをアクティブにするかどうかを制御します。アクティブになると、`onEvaluate` 関数が指定された間隔で呼び出される(または1回)。. Default: `true`.
* __interval__ | `number`: onEvaluate` の呼び出しの間隔をミリ秒単位で指定する。間隔が設定されていない場合、関数は一度だけ呼び出される。. Default: `none`.
* __onEvaluate__ | `function`: 呼び出し関数. Default: `onEvaluate() {}`.


## 例としては、以下のようなものがあります。

```jsx live
<Runner
    interval={2000}
    onEvaluate={() => { console.log( 'Two seconds have passed...' ); }}
/>
```



