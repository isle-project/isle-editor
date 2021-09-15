---
id: gate 
title: Gate
sidebar_label: Gate
---

予約された視聴者のみにその子供を表示することができるISLEコンポーネント。

## オプション

* __user__ | `boolean`: 設定されている場合、ゲーテッドコンテンツがユーザーに表示されます。. Default: `false`.
* __notUser__ | `boolean`: 設定されている場合、ゲーテッドコンテンツはユーザーに表示されません。. Default: `false`.
* __enrolled__ | `boolean`: 設定されている場合、コースに登録されている学生にゲーテッドコンテンツが表示されます。. Default: `false`.
* __notEnrolled__ | `boolean`: が設定されている場合、そのコースに登録されている学生にはゲーテッドコンテンツは***表示されません。. Default: `false`.
* __owner__ | `boolean`: 設定されている場合、ゲーテッドコンテンツはコースの所有者 (通常はインストラクター) に表示されます。. Default: `false`.
* __notOwner__ | `boolean`: 設定されている場合、ゲーテッドコンテンツはコースの所有者 (通常はインストラクター) には****表示されません。. Default: `false`.
* __after__ | `Date`: 門前. Default: `none`.
* __until__ | `Date`: かどの中身が見えるまでの時間. Default: `none`.
* __banner__ | `node`: ゲートの子供が表示されていない訪問者に表示されるデフォルトのメッセージではなく、カスタムメッセージを表示します。. Default: `none`.
* __disabled__ | `boolean`: ゲートが無効化されている場合は、何をしてもバナーが表示されます。. Default: `false`.
* __showOwnerInPresentationMode__ | `boolean`: 所有者のためにゲートが表示されている場合に、プレゼンテーションモードでゲートの内容を表示するかどうかを制御する。. Default: `false`.
* __check__ | `function`: コールバック関数は、ゲートが子コンポーネントを表示するかどうかを示す `boolean` を返します。. Default: `none`.


## 例としては、以下のようなものがあります。

```jsx live
<Gate 
    banner={<h2>You have to be logged in to see the content</h2>}
    user 
>
    <h1>For users only</h1>
</Gate>
``` 



