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

```jsx live
<Gate 
    banner={<h2>You have to be logged in to see the content</h2>}
    user 
>
    <h1>For users only</h1>
</Gate>
``` 



