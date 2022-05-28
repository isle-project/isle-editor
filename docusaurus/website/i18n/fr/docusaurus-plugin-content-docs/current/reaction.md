---
id: reaction 
title: Reaction
sidebar_label: Reaction
---

Affiche différentes composantes en fonction des actions de l'utilisateur.

## Options

* __actionID__ | `string (required)`: Identification du composant à surveiller. Default: `none`.
* __banner__ | `node`: message personnalisé affiché si l'utilisateur n'a pas encore effectué l'action. Default: `none`.
* __show__ | `(object|function)`: table de hachage des composants à afficher en fonction des différentes réponses (si aucune "clé" ne correspond à la réponse, la valeur correspondant à la clé "par défaut" sera affichée si elle est définie) ou une fonction qui renvoie un composant à afficher (le seul argument de la fonction est le dernier résultat). Default: `{}`.


## Exemples

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

