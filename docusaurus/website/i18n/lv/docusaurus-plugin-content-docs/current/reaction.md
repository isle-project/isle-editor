---
id: reaction 
title: Reaction
sidebar_label: Reaction
---

Atkarībā no lietotāja darbībām tiek rādīti dažādi komponenti.

## Iespējas

* __actionID__ | `string (required)`: Skatāmās sastāvdaļas ID. Default: `none`.
* __banner__ | `node`: pielāgotais ziņojums, kas tiek parādīts, ja lietotājs vēl nav veicis darbību.. Default: `none`.
* __show__ | `(object|function)`: heš tabula ar komponentiem, kas jāattēlo, ņemot vērā dažādas atbildes (ja atbildei neatbilst neviens `key`, tiks attēlota vērtība, kas atbilst `default` atslēgai, ja tā ir iestatīta), vai funkcija, kas atgriež attēlojamo komponentu (vienīgais funkcijas arguments ir pēdējais rezultāts).. Default: `{}`.


## Piemēri

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

