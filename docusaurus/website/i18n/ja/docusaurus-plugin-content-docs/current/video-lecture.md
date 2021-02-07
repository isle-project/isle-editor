---
id: video-lecture 
title: Video Lecture
sidebar_label: Video Lecture
---

インタラクティブな要素が散りばめられたビデオを表示するビデオレクチャーコンポーネント。

## Options

* __controls__ | `boolean`: は、ビデオプレーヤの制御要素を表示するかどうかを示します。. Default: `true`.
* __instructorView__ | `boolean`: インストラクタービューを含めるかどうかを制御します。. Default: `true`.
* __linkToDashboard__ | `boolean`: ビデオ講義の終了後にダッシュボードへのリンクを表示するかどうかを制御します。. Default: `false`.
* __steps__ | `array (required)`: 動画の URL と中間に表示されるコンポーネントの配列. Default: `none`.
* __videoWidth__ | `(string|number)`: ビデオ幅. Default: `'100%'`.
* __videoHeight__ | `(string|number)`: ビデオハイト. Default: `'98vh'`.
* __style__ | `object`: シーエスエスインラインスタイル. Default: `{}`.


## Examples

```jsx live
<VideoLecture steps={[
    'https://www.youtube.com/watch?v=Lkj8b25ppZo',
    <FreeTextQuestion id="video-lecture-brainstorming" question="Write down a few ideas of how one could enrich video lectures using other ISLE components" />
]} />
```

