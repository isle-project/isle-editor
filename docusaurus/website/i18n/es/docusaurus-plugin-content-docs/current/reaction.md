---
id: reaction 
title: Reaction
sidebar_label: Reaction
---

Muestra diferentes componentes dependiendo de las acciones del usuario.

## Opciones

* __actionID__ | `string (required)`: ID del componente a vigilar. Default: `none`.
* __banner__ | `node`: mensaje personalizado que se muestra si el usuario aún no ha realizado la acción. Default: `none`.
* __show__ | `(object|function)`: tabla hash de componentes a mostrar dadas las diferentes respuestas (si no hay ninguna `tecla` que coincida con la respuesta, se mostrará el valor correspondiente a la tecla `por defecto` si está puesta) o una función que devuelva un componente a mostrar (el único argumento de la función es el último resultado). Default: `{}`.


## Ejemplos

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

