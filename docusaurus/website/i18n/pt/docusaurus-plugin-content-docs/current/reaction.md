---
id: reaction 
title: Reaction
sidebar_label: Reaction
---

Mostra diferentes componentes, dependendo das ações do usuário.

## Opções

* __actionID__ | `string (required)`: Identificação do componente a ser observado. Default: `none`.
* __banner__ | `node`: mensagem personalizada exibida se o usuário ainda não tiver realizado a ação. Default: `none`.
* __show__ | `(object|function)`: tabela hash de componentes a exibir dadas as diferentes respostas (se nenhuma `chave` corresponder à resposta, o valor correspondente à tecla `default` será exibido se definida) ou uma função que retorna um componente a exibir (o único argumento da função é o resultado mais recente). Default: `{}`.


## Exemplos

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

