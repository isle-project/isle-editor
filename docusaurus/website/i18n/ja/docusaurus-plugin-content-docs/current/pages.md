---
id: pages 
title: Pages
sidebar_label: Pages
---

ユーザーが一連のページをステップスルーできるようにするISLEページネーションコンポーネント。

## Options

* __activePage__ | `number`: アクティブページ. Default: `1`.
* __disabled__ | `boolean`: はナビゲーションバーがアクティブかどうかを制御します。. Default: `false`.
* __title__ | `string`: ページコンテナの表示タイトル. Default: `''`.
* __pagination__ | `string`: ページネーションを `top`, `bottom`, `両方に表示するかどうか。. Default: `'top'`.
* __size__ | `string`: ページ分割ボタンのサイズ (`default`, `lg`, `large`, `sm`, `small`, `xs`, `xsmall` のいずれか). Default: `'default'`.
* __height__ | `(number|string)`: コンテナの最大高さを指定します。埋め込みページの高さが高い場合、垂直スクロールバーが追加されます。. Default: `none`.
* __voiceID__ | `string`: 音声制御識別子. Default: `none`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.
* __onSelect__ | `function`: アクティブな変更が変更されたときに呼び出される関数です。新しいアクティブなページインデックスを単独パラメータとして受け取ります。. Default: `onSelect() {}`.


## Examples

```jsx live
<Pages title="Pages">
    <div>
        <h1>First Page</h1>
    </div>
    <div>
        <h1>Second Page</h1>
        <RShell />
    </div>
</Pages>
``` 



