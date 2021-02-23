---
id: multi-cards
title: Multi Cards
sidebar_label: Multi Cards
---

一个ISLE组件，允许您创建和控制多个可翻转的卡片（例如在记忆游戏中）。

## 选项

* __animation__ | `object`: 如果设置组件使用一个入口动画；该对象包含一个名称（如`anim-scal-up`）和一个持续时间（如`1.7s`=1.7秒）。. Default: `{}`.
* __memory__ | `boolean`: 是否开启记忆游戏模式，在该模式下，必须将所提供的值进行配对。. Default: `none`.
* __onChange__ | `function`: 一个接收可翻转卡片矩阵的函数。. Default: `onChange() {}`.
* __onMemoryComplete__ | `function`: 如果内存游戏完成，则调用回调。. Default: `onMemoryComplete() {}`.
* __oneTime__ | `boolean`: 表示翻转过程是否可以只执行一次。. Default: `false`.
* __values__ | `array<object>`: 各个卡片的值，输入到一个数组中，该数组有 "正面 "和 "背面 "值的输入字段。这样的值可以是一个字符串，也可以是一个完整的ISLE组件。. Default: `[]`.
* __style__ | `object`: CSS内联样式. Default: `{}`.
* __containerStyle__ | `object`: 卡片容器的CSS样式. Default: `{}`.
* __frontStyle__ | `object`: 卡片正面的CSS样式. Default: `{}`.
* __backStyle__ | `object`: 卡片背面的CSS样式. Default: `{}`.


## 例子

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Front Image', value: 'frontImage' },
        { label: 'Memory', value: 'memory' },
        { label: 'Memory with Solved Callback', value: 'memorySolvedCallback' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<MultiCards
    containerStyle={{
        width: 250,
        height: 250,
        marginBottom: 10
    }}
    frontStyle={{
        color:'white',
        textShadow: '0px 0px 3px black',
        fontWeight: 800,
        fontSize: 30,
        cursor: 'pointer',
        textAlign: 'center',
        boxShadow: '1px 1px 10px black',
        background: 'silver'
    }}
    backStyle={{
        color: 'black',
        fontSize: 20,
        fontWeight: 800,
        fontFamily: 'Oswald',
        textAlign: 'left',
        paddingLeft: '10px',
        background: 'ghostwhite',
        boxShadow: '1px 1px 10px black',
    }}
    values={[
        { front: "number 1", back: 'back side of #1'},
        { front: "number 2", back: 'back side of #2'},
        { front: "number 3", back: 'back side of #3'},
        { front: "number 4", back: 'back side of #4'}
    ]}
/>
```
</TabItem>

<TabItem value="frontImage">

```jsx live
<MultiCards
    containerStyle={{
        width: 250,
        height: 250,
        marginBottom: 10
    }}
    frontStyle={{
        color:'white',
        textShadow: '0px 0px 13px black',
        fontWeight: 800,
        fontSize: 30,
        cursor: 'pointer',
        textAlign: 'center',
        boxShadow: '1px 1px 10px black',
        backgroundImage: 'url(https://isle.heinz.cmu.edu/seamless_1543575455035.png)',
        backgroundSize: '100% auto'
    }}
    backStyle={{
        color: 'black',
        fontSize: 20,
        fontWeight: 800,
        fontFamily: 'Oswald',
        textAlign: 'left',
        paddingLeft: '10px',
        background: 'ghostwhite',
        boxShadow: '1px 1px 10px black',
    }}
    values={[
        { front: "number 1", back: 'back side of #1'},
        { front: "number 2", back: 'back side of #2'},
        { front: "number 3", back: 'back side of #3'},
        { front: "number 4", back: 'back side of #4'}
    ]}
/>
```
</TabItem>

<TabItem value="memory">

```jsx live
<MultiCards
    memory
    containerStyle={{
        width: 200,
        height: 200,
        marginBottom: 10
    }}
    frontStyle={{
        color:'white',
        textShadow: '0px 0px 3px black',
        fontWeight: 800,
        fontSize: 30,
        cursor: 'pointer',
        textAlign: 'center',
        boxShadow: '1px 1px 10px black',
        background: 'silver',
        backgroundImage: 'url(https://isle.heinz.cmu.edu/seamless_1543575455035.png)',
    }}
    backStyle={{
        padding: 12,
        boxShadow: '1px 1px 10px black'
    }}
    values={[
        { front: "", back: <img src="https://bit.ly/3qS4daf"/> },
        { front: "",  back: <img src="https://bit.ly/3sn5Ih6"/> },
        { front: "",  back: <img src="https://bit.ly/3qNVpSP" /> }
    ]}
/>
```
</TabItem>

<TabItem value="memorySolvedCallback">

```jsx live
<MultiCards
    memory
    containerStyle={{
        width: 200,
        height: 200,
        marginBottom: 10
    }}
    frontStyle={{
        color:'white',
        textShadow: '0px 0px 3px black',
        fontWeight: 800,
        fontSize: 30,
        cursor: 'pointer',
        textAlign: 'center',
        boxShadow: '1px 1px 10px black',
        background: 'silver',
        backgroundImage: 'url(https://isle.heinz.cmu.edu/seamless_1543575455035.png)',
    }}
    backStyle={{
        padding: 12,
        boxShadow: '1px 1px 10px black'
    }}
    values={[
        { front: "", back: <img src="https://bit.ly/3qS4daf"/> },
        { front: "",  back: <img src="https://bit.ly/3sn5Ih6"/> },
        { front: "",  back: <img src="https://bit.ly/3qNVpSP" /> }
    ]}
    onMemoryComplete={() => { alert( 'The memory has been solved...' ); }}
/>
```
</TabItem>

</Tabs>


