---
id: reaction 
title: Reaction
sidebar_label: Reaction
---

根据用户的操作显示不同的组件。

## 选项

* __actionID__ | `string (required)`: 要观察的组件的ID. Default: `none`.
* __banner__ | `node`: 如果用户尚未执行该动作，则显示自定义信息. Default: `none`.
* __show__ | `(object|function)`: 根据不同的响应，要显示的组件散列表（如果没有与响应相匹配的 "key"，将显示与 "默认 "键对应的值（如果设置））或返回要显示的组件的函数（函数的唯一参数是最新结果）。. Default: `{}`.


## 例子

```jsx live
<div>
	<NumberQuestion
		question="What is the first prime number?"
		id="question-with-reaction"
	/>
	<Reaction actionID="question-with-reaction" show={( answer ) => {
		if ( answer === 2 ) {
			return <p>Awesome, that was correct.</p>
		}
		return <p>You might want to review the following video on prime numbers:
			<VideoPlayer url="https://www.youtube.com/watch?v=mIStB5X4U8M" />
		</p>;
	}} />
</div>
``` 

