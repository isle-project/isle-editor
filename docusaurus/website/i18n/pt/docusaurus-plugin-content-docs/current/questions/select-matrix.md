---
id: select-question-matrix
title: Select Question Matrix
sidebar_label: Select Question Matrix
---

Uma pergunta com uma resposta que consiste em múltiplas caixas de seleção.

## Opções

* __question__ | `(string|node)`: pergunta a ser exibida na parte superior da matriz de perguntas selecionadas. Default: `''`.
* __rows__ | `array`: etiquetas em linha. Default: `[]`.
* __cols__ | `array`: etiquetas de coluna. Default: `[]`.
* __options__ | `object`: objeto com pares de chaves de valor com chaves com a forma `row:col`, por exemplo `0:0`, `0:1`, `1:0` etc., e seus valores correspondentes sendo matrizes das possíveis escolhas de resposta para as perguntas individuais selecionadas. Default: `{}`.
* __solution__ | `object`: objeto de solução com pares de chaves de valor com chaves com a forma `row:col`, por exemplo `0:0`, `0:1`, `1:0` etc., e seus valores correspondentes sendo o índice do elemento de resposta correto da respectiva matriz de `opções`.. Default: `{}`.
* __hints__ | `array<(string|node)>`: dicas que orientam como responder à pergunta. Default: `[]`.
* __hintPlacement__ | `string`: colocação das dicas (ou "cima", "esquerda", "direita", ou "baixo"). Default: `'bottom'`.
* __feedback__ | `boolean`: controla se devem ser exibidos botões de feedback. Default: `true`.
* __provideFeedback__ | `string`: se fornecer "nenhum" feedback, "feedback individual" sobre a(s) resposta(s) apresentada(s), ou "feedback global" para todas as perguntas. Default: `'individual'`.
* __allowIncomplete__ | `boolean`: permitir ou não envios sem uma seleção feita em cada caixa de seleção. Default: `false`.
* __nTries__ | `number`: depois de quantas tentativas não são aceitas mais respostas (se `provideFeedback` não for `ninguém`). Default: `1`.
* __failureMsg__ | `string`: texto de notificação exibido ao enviar respostas incorretas. Default: `none`.
* __successMsg__ | `string`: texto de notificação exibido ao apresentar as respostas corretas. Default: `none`.
* __cellLabels__ | `object`: etiquetas para células definidas por objeto com chaves com o formato `row:col`.. Default: `{}`.
* __chat__ | `boolean`: controla se o elemento deve ter um bate-papo integrado. Default: `false`.
* __className__ | `string`: nome da classe. Default: `''`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.
* __onSubmit__ | `function`: função chamada de retorno invocada no momento da apresentação com as respostas como primeiro e um booleano indicando a correção como segundo parâmetro. Default: `onSubmit() {}`.


## Exemplos

```jsx live
<SelectQuestionMatrix
    rows={[ 'First Row' ]} 
    cols={[ 'First Column', 'Second Column' ]} 
    options={{ '0:0': [ 'Incorrect', 'Correct' ], '0:1':  [ 'Incorrect', 'Incorrect', 'Correct' ] }} 
    solution={{ '0:0': 1, '0:1': 2 }}
/>
```
