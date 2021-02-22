---
id: voice-input
title: Voice Input
sidebar_label: Voice Input
---

音声入力コンポーネント。

## オプション

* __autorecord__ | `boolean`: 自動的に録音を開始するかどうかを制御します。. Default: `false`.
* __defaultValue__ | `string`: デフォルトテキスト値. Default: `''`.
* __grammars__ | `array`: げんごぶんぽうリスト. Default: `[]`.
* __legend__ | `(string|node)`: 入力フィールドの前に表示される凡例. Default: `''`.
* __mode__ | `string`: full` に設定するとマイクと一緒にテキスト入力フィールドを表示し、`status` に設定すると転写されたテキストのステータスバーのみを表示し、`microphone` に設定すると録音を切り替えるボタンのみを表示し、`none` に設定すると音声入力が見えなくなり、ホットキーや音声コマンドで純粋に制御されるようになります。. Default: `'full'`.
* __maxAlternatives__ | `number`: 音声認識結果ごとに提供される選択肢の最大数. Default: `1`.
* __onChange__ | `function`: テキスト入力値の更新時に呼び出されるコールバック関数. Default: `onChange() {}`.
* __onClick__ | `function`: マイクボタンをクリックした時に呼び出されるコールバック関数. Default: `onClick() {}`.
* __onFinalText__ | `function`: 最終テキストを受信したときに呼び出されるコールバック関数. Default: `onFinalText() {}`.
* __onRecordingStart__ | `function`: 録音開始時コールバック関数. Default: `onRecordingStart() {}`.
* __onRecordingStop__ | `function`: 録画停止コールバック関数. Default: `onRecordingStop() {}`.
* __onSegment__ | `function`: テキストセグメントで呼び出されるコールバック関数. Default: `onSegment() {}`.
* __onSubmit__ | `function`: Enterキーでテキスト入力値を送信する際のコールバック関数. Default: `onSubmit() {}`.
* __placeholder__ | `string`: テキスト入力プレースホルダ. Default: `none`.
* __remote__ | `object`: オブジェクトに `start`, `stop`, `toggle` と関連するホットキーを追加します。. Default: `none`.
* __className__ | `string`: クラス名. Default: `''`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.
* __timeout__ | `number`: タイムアウトするまでのミリ秒数. Default: `none`.
* __stopTooltip__ | `string`: 録画中に表示されるツールチップメッセージ. Default: `none`.
* __startTooltip__ | `string`: 録画していないときに表示されるツールチップメッセージ. Default: `none`.
* __tooltipPlacement__ | `string`: ツールチップの方向. Default: `'left'`.
* __width__ | `number`: 音声入力幅. Default: `500`.
* __height__ | `number`: 音声入力高さ. Default: `36`.


## 例としては、以下のようなものがあります。

```jsx live
<VoiceInput
    langage="en-US"
    defaultValue="Enter text"
/>
```



