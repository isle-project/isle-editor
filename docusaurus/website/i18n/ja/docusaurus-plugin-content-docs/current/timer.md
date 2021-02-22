---
id: timer 
title: Timer
sidebar_label: Timer
---

時間が経過したときに、事前に定義されたコールバックをトリガーするタイマーを表示します。使用例としては、クイズのタイミングを表示します。

## オプション

* __id__ | `string`: タイマーの一意の `string` IDを指定します。IDが設定されている場合、タイマーコンポーネントはページの更新にわたって持続します。. Default: `none`.
* __active__ | `boolean (required)`: タイマーの開始・停止を切り替えることができるフラグ. Default: `none`.
* __belowZero__ | `boolean`: タイマーの持続時間を使い切った後もカウントを続けるかどうかを制御します。. Default: `false`.
* __duration__ | `number (required)`: 秒単位. Default: `none`.
* __invisible__ | `boolean`: タイマーを隠すかどうかを制御します。. Default: `false`.
* __legend__ | `string`: タイマー文字. Default: `''`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.
* __onTimeUp__ | `function`: タイマー切れコールバック. Default: `onTimeUp() {}`.


## 例としては、以下のようなものがあります。

```jsx live
<Timer 
    id='test-quiz'
    active={true} 
    duration={50} 
    onTimeUp={() => {
      alert( 'done' );
    }}
/>
```

