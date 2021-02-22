---
id: number-question 
title: Number Question
sidebar_label: Number Question
---

Um componente de várias perguntas.

## Opções

* __question__ | `(string|node)`: pergunta numérica. Default: `''`.
* __hintPlacement__ | `string`: colocação das dicas (ou "cima", "esquerda", "direita", ou "baixo"). Default: `'top'`.
* __hints__ | `array<(string|node)>`: dicas que orientam como responder à pergunta. Default: `[]`.
* __feedback__ | `boolean`: controla se devem ser exibidos botões de feedback. Default: `true`.
* __solution__ | `(number|array<number>)`: uma resposta numérica ao problema (ou múltiplas respostas corretas se uma matriz for fornecida). Default: `none`.
* __digits__ | `number`: número de dígitos para os quais a resposta fornecida pelo estudante deve corresponder à solução a ser considerada correta. Definir como 0 para corresponder como um número inteiro. Se definido como nulo, procurará por uma correspondência exata.. Default: `3`.
* __max__ | `number`: valor máximo de entrada permitido. Default: `null`.
* __min__ | `number`: valor mínimo de entrada permitido. Default: `null`.
* __defaultValue__ | `number`: valor pré-selecionado de entrada de número. Default: `0`.
* __provideFeedback__ | `boolean`: indica se o feedback, incluindo a resposta correta, deve ser exibido depois que os alunos enviarem suas respostas. Default: `true`.
* __nTries__ | `number`: após quantas tentativas de feedback devem ser fornecidas (se `provideFeedback` for `verdadeiro`). Default: `1`.
* __disableSubmitNotification__ | `boolean`: controla se as notificações de submissão devem ser desativadas. Default: `false`.
* __chat__ | `boolean`: controla se o elemento deve ter um bate-papo integrado. Default: `false`.
* __until__ | `Date`: tempo até que os estudantes tenham permissão para enviar respostas. Default: `none`.
* __points__ | `number`: número máximo de pontos concedidos na classificação. Default: `10`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.
* __onChange__ | `function`: chamada de retorno que é acionada depois que o valor do campo numérico muda; recebe o valor atual como seu único argumento. Default: `onChange() {}`.
* __onSubmit__ | `function`: chamada de retorno invocada quando a resposta é submetida; tem como primeiro parâmetro um `booleano` indicando se a resposta foi respondida corretamente (se aplicável, `nulo` de outra forma) e a resposta fornecida como segundo parâmetro. Default: `onSubmit() {}`.


## Exemplos

```jsx live
<NumberQuestion
    question="What is the number PI - three digits after the period"
    solution={3.142}
/>
```
