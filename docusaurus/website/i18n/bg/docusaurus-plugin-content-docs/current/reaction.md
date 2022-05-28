---
id: reaction 
title: Reaction
sidebar_label: Reaction
---

Показва различни компоненти в зависимост от действията на потребителя.

## Опции

* __actionID__ | `string (required)`: Идентификатор на компонента, който се наблюдава. Default: `none`.
* __banner__ | `node`: потребителско съобщение, което се показва, ако потребителят все още не е извършил действието. Default: `none`.
* __show__ | `(object|function)`: хеш-таблица на компонентите, които да се покажат при различните отговори (ако нито един `ключ` не отговаря на отговора, ще се покаже стойността, съответстваща на ключа `по подразбиране`, ако е зададен) или функция, която връща компонент за показване (единственият аргумент на функцията е последният резултат). Default: `{}`.


## Примери

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

