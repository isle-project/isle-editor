---
id: revealer 
title: Revealer
sidebar_label: Revealer
---

講師が授業中に全生徒に児童の内容を選択的に明らかにしたり、隠したりするために使用することができるISLEのコンポーネント。

## Options

* __message__ | `(string|node)`: 非表示時に表示するメッセージ. Default: `none`.
* __show__ | `boolean`: 子要素を最初に表示するかどうかを制御します。. Default: `false`.


## Examples

```jsx live
<Revealer
        id="mudgelove"
    >
        <div>
            <h3>Content that will be revealed.</h3>
        </div>
</Revealer>
``` 

