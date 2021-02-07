---
id: timer 
title: Timer
sidebar_label: Timer
---

显示一个定时器，当时间到时将触发一个预定义的回调。一个使用案例是测验的计时。

## Options

* __id__ | `string`: 计时器的唯一`string`ID。如果设置了一个ID，定时器组件在页面刷新时是持久的。. Default: `none`.
* __active__ | `boolean (required)`: 标志，可以切换到启动或暂停定时器。. Default: `none`.
* __belowZero__ | `boolean`: 控制定时器是否在持续时间用完后继续计数。. Default: `false`.
* __duration__ | `number (required)`: 计时器的持续时间（秒）. Default: `none`.
* __invisible__ | `boolean`: 控制定时器是否应该被隐藏. Default: `false`.
* __legend__ | `string`: 计时器前的文字. Default: `''`.
* __style__ | `object`: CSS内联样式. Default: `{}`.
* __onTimeUp__ | `function`: 当计时器耗尽时调用回调。. Default: `onTimeUp() {}`.


## Examples

```jsx live
<Timer 
    id='test-quiz'
    active={true} 
    duration={50} 
    onTimeUp={() => {
      alert( 'done' );
    }}
/>
```

