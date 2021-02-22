---
id: image-question 
title: Image Question
sidebar_label: Image Question
---

Uma pergunta que pede ao usuário para carregar uma imagem.

## Opções

* __question__ | `(string|node)`: pergunta para a qual o estudante tem que trazer as "opções" disponíveis para a ordem correta. Default: `''`.
* __hintPlacement__ | `string`: colocação das dicas (ou "cima", "esquerda", "direita", ou "baixo"). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: dicas que orientam como responder à pergunta. Default: `[]`.
* __feedback__ | `boolean`: controla se devem ser exibidos botões de feedback. Default: `true`.
* __chat__ | `boolean`: controla se o elemento deve ter um bate-papo integrado. Default: `false`.
* __disableSubmitNotification__ | `boolean`: controla se uma notificação deve ser exibida após o envio de uma imagem. Default: `false`.
* __className__ | `string`: nome da classe. Default: `''`.
* __sketchpad__ | `object`: propriedades a serem passadas para <Pade-esboço /> componente; para renderizar o pade-esboço, passe pelo menos um objeto vazio `{}``.. Default: `none`.
* __solution__ | `string`: URL da imagem da solução do modelo. Default: `none`.
* __until__ | `Date`: tempo até que os estudantes tenham permissão para enviar respostas. Default: `none`.
* __points__ | `number`: número máximo de pontos concedidos na classificação. Default: `10`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.
* __onSubmit__ | `function`: chamada de retorno invocada quando a resposta é apresentada; tem como único parâmetro um "booleano" indicando se os elementos foram colocados na ordem correta. Default: `onSubmit() {}`.


## Exemplos
