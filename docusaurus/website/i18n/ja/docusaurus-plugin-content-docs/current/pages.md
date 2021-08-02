---
id: pages 
title: Pages
sidebar_label: Pages
---

ユーザーが一連のページをステップスルーできるようにするISLEページネーションコンポーネント。

## オプション

* __activePage__ | `number`: アクティブページ. Default: `1`.
* __disabled__ | `boolean`: はナビゲーションバーがアクティブかどうかを制御します。. Default: `false`.
* __title__ | `(string|node)`: ページコンテナの表示タイトル. Default: `''`.
* __pagination__ | `string`: ページネーションを `top`, `bottom`, `両方に表示するかどうか。. Default: `'top'`.
* __size__ | `string`: ページ分割ボタンのサイズ (`default`, `lg`, `sm` のいずれか). Default: `'default'`.
* __height__ | `(number|string)`: コンテナの最大高さを指定します。埋め込みページの高さが高い場合、垂直スクロールバーが追加されます。. Default: `none`.
* __voiceID__ | `string`: 音声制御識別子. Default: `none`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.
* __onSelect__ | `function`: アクティブな変更が変更されたときに呼び出される関数です。新しいアクティブなページインデックスを単独パラメータとして受け取ります。. Default: `onSelect() {}`.


## 例としては、以下のようなものがあります。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Custom Pagination', value: 'customPagination' },
        { label: 'With CSS', value: 'withCSS' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Pages title="Pages" >
    <div>
        <h1>First Page</h1>
    </div>
    <div>
        <h1>Second Page</h1>
    </div>
    <div>
        <h1>Third Page</h1>
    </div>
</Pages>
```

</TabItem>

<TabItem value="customPagination" >

```jsx live
<Pages title="Questions" pagination="both" size="sm" >
    <div>
        <NumberQuestion
            question="What is the number PI (at least up to three digits after the decimal point)?"
            solution={Math.PI}
            digits={3}
        />
    </div>
    <div>
        <FreeTextQuestion 
            question="Is this question displayed on the second page?"
            solution="Yes" 
        />
    </div>
</Pages>
```
</TabItem>

<TabItem value="withCSS">

```jsx live
<Pages 
    activePage={2}
    style={{ background: 'lightblue', height: 420, outline: '4px solid black' }} 
    title="Styled Pages"
>
    <div>
        <h1>First Page</h1>
    </div>
    <div>
        <h1>Second Page</h1>
    </div>
    <div>
        <h1>Third Page</h1>
    </div>
</Pages>
```

</TabItem>

</Tabs>

