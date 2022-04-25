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
* __showOwnerInPresentationMode__ | `boolean`: 所有者のためにゲートが表示されている場合に、プレゼンテーションモードでゲートの内容を表示するかどうかを制御する。. Default: `true`.
* __check__ | `function`: コールバック関数は、ゲートが子コンポーネントを表示するかどうかを示す `boolean` を返します。. Default: `none`.


## 例としては、以下のようなものがあります。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Timed', value: 'timed' },
        { label: 'Hidden', value: 'hidden' },
        { label: 'Custom Banner', value: 'customBanner' },
        { label: 'Custom Check', value: 'customCheck' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Gate enrolled >
    <h1>Content for users enrolled in a cohort of the course</h1>
</Gate>
```

</TabItem>

<TabItem value="timed">

```jsx live
<Gate
    after={date({ year: 2020, month: 9, day: 1, hour: 9, minute: 30, second: 0, utcOffset: 4 })}
    until={date({ year: 2020, month: 12, day: 20, hour: 9, minute: 30, second: 0, utcOffset: 5 })}
>
    # Only visible in Fall 2020 semester
</Gate>
```

</TabItem>

<TabItem value="hidden">

```jsx live
<Gate banner={null} owner >
    <h1>Content for owners without a message for others</h1>
</Gate>
```

</TabItem>

<TabItem value="customBanner">

```jsx live
<Gate owner banner={<h3>Only visible by course owners...</h3>} >
    <h1> User Analytics </h1>
</Gate>
```

</TabItem>

<TabItem value="customCheck">

```jsx live
<Gate check={( ) => {
    return session.user.email === 'admin@cmu.edu';
}} >
    <h1> User Analytics only visible to specified user</h1>
</Gate>
```

</TabItem>

</Tabs>

