---
id: gate 
title: Gate
sidebar_label: Gate
---

一个ISLE组件，允许只向保留的受众显示其子女。

## 选项

* __user__ | `boolean`: 当设置为门控内容时，会显示给用户。. Default: `false`.
* __notUser__ | `boolean`: 当设置为 "门控内容 "时，**不向用户显示。. Default: `false`.
* __enrolled__ | `boolean`: 当设置时，门控内容将显示给注册该课程的学生。. Default: `false`.
* __notEnrolled__ | `boolean`: 当设置为 "门控内容 "时，**不向注册该课程的学生显示。. Default: `false`.
* __owner__ | `boolean`: 当设置时，门控内容将显示给课程的所有者（通常是教师）。. Default: `false`.
* __notOwner__ | `boolean`: 当设置为 "门控内容 "时，**不**显示给课程的所有者（通常是教师）。. Default: `false`.
* __after__ | `Date`: 闸门时间. Default: `none`.
* __until__ | `Date`: 闸门时间. Default: `none`.
* __banner__ | `node`: 一个自定义的信息，显示给门的孩子不可见的游客，而不是默认的信息。. Default: `none`.
* __disabled__ | `boolean`: 如果闸门被禁用，则无论如何都会显示横幅。. Default: `false`.
* __showOwnerInPresentationMode__ | `boolean`: 控制当闸门对 "所有者 "可见时，是否在显示模式下显示闸门内容。. Default: `false`.
* __check__ | `function`: 回调函数，返回一个 "boolean"，表示gate是否应该显示子组件；每当session动作到达时，该函数被调用。. Default: `none`.


## 例子

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

