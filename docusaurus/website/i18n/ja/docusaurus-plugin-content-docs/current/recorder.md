---
id: recorder 
title: Recorder
sidebar_label: Recorder
---

オーディオ、スクリーン、ビデオを記録するためのISLEコンポーネント。

## オプション

* __audio__ | `boolean`: は音声を録音するかどうかを示します。. Default: `false`.
* __camera__ | `boolean`: はウェブカメラを録画するかどうかを示します。. Default: `false`.
* __screen__ | `boolean`: は画面をキャプチャするかどうかを示します。. Default: `false`.
* __autostart__ | `boolean`: はすぐに録音を開始するかどうかを示します。. Default: `false`.
* __downloadable__ | `boolean`: は、ユーザーが録画をダウンロードできるかどうかを示します。. Default: `false`.
* __uploadable__ | `boolean`: は、ユーザーが録画をサーバーにアップロードできるかどうかを示します。. Default: `false`.
* __bitsPerSecond__ | `number`: ビット毎秒. Default: `1280000`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.


## 例としては、以下のようなものがあります。

```jsx live
<Recorder 
    audio
    screen
    downloadable
/>
``` 



