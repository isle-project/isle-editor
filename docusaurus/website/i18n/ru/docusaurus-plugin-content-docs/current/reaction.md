---
id: reaction 
title: Reaction
sidebar_label: Reaction
---

Показывает различные компоненты в зависимости от действий пользователя.

## Варианты

* __actionID__ | `string (required)`: ID компонента для просмотра. Default: `none`.
* __banner__ | `node`: пользовательское сообщение, отображаемое, если пользователь еще не выполнил действие. Default: `none`.
* __show__ | `(object|function)`: хэш-таблица компонентов для отображения при различных ответах (если ни одна из клавиш не совпадает с ответом, то при установке будет отображено значение, соответствующее клавише `по умолчанию`) или функция, возвращающая компонент для отображения (единственным аргументом функции является последний результат). Default: `{}`.


## Примеры

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

