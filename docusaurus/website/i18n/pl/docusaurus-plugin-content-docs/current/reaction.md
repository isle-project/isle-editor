---
id: reaction 
title: Reaction
sidebar_label: Reaction
---

Pokazuje różne komponenty w zależności od działań użytkownika.

## Opcje

* __actionID__ | `string (required)`: Identyfikator elementu do oglądania. Default: `none`.
* __banner__ | `node`: komunikat niestandardowy wyświetlany, jeśli użytkownik nie wykonał jeszcze akcji. Default: `none`.
* __show__ | `(object|function)`: tabela hash komponentów do wyświetlenia z różnymi odpowiedziami (jeśli nie ma `key` odpowiadającej odpowiedzi, wartość odpowiadająca klawiszowi `default` zostanie wyświetlona, jeśli zostanie ustawiona) lub funkcja, która zwraca komponent do wyświetlenia (jedynym argumentem funkcji jest ostatni wynik). Default: `{}`.


## Przykłady

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

