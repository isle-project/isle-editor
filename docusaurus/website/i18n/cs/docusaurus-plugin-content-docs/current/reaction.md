---
id: reaction 
title: Reaction
sidebar_label: Reaction
---

Zobrazuje různé komponenty v závislosti na akcích uživatele.

## Možnosti

* __actionID__ | `string (required)`: ID sledované součásti. Default: `none`.
* __banner__ | `node`: vlastní zpráva, která se zobrazí, pokud uživatel ještě neprovedl akci.. Default: `none`.
* __show__ | `(object|function)`: hashovací tabulka komponent, které se mají zobrazit vzhledem k různým odpovědím (pokud odpovědi neodpovídá žádný `key`, zobrazí se hodnota odpovídající `default` klíči, pokud je nastaven) nebo funkce, která vrátí komponentu, která se má zobrazit (jediným argumentem funkce je poslední výsledek).. Default: `{}`.


## Příklady

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

