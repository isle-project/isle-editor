---
id: order-question
title: Order Question
sidebar_label: Order Question
---

Um componente de pergunta de ordem que pede ao estudante para trazer uma coleção de elementos para a ordem correta.

## Options

* __question__ | `(string|node)`: pergunta para a qual o estudante tem que trazer as "opções" disponíveis para a ordem correta. Default: `''`.
* __options__ | `array (required)`: um conjunto de textos que o estudante tem que trazer para o pedido correto (supõe-se que seja o pedido fornecido). Default: `none`.
* __provideFeedback__ | `boolean`: controla se deve mostrar uma notificação mostrando se a resposta apresentada está correta ou não. Default: `true`.
* __hintPlacement__ | `string`: colocação das dicas (ou "cima", "esquerda", "direita", ou "baixo"). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: dicas que orientam como responder à pergunta. Default: `[]`.
* __feedback__ | `boolean`: controla se devem ser exibidos botões de feedback. Default: `true`.
* __chat__ | `boolean`: controla se o elemento deve ter um bate-papo integrado. Default: `false`.
* __failureMsg__ | `string`: mensagem a ser exibida quando o aluno apresenta uma resposta errada. Default: `none`.
* __successMsg__ | `string`: mensagem a ser exibida quando o aluno apresentar a resposta correta. Default: `none`.
* __disableSubmitNotification__ | `boolean`: controla se as notificações de submissão devem ser desativadas. Default: `false`.
* __until__ | `Date`: tempo até que os estudantes tenham permissão para enviar respostas. Default: `none`.
* __points__ | `number`: número máximo de pontos concedidos na classificação. Default: `10`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.
* __onChange__ | `function`: callback que é acionado depois de arrastar um elemento; tem dois parâmetros: um "booleano" indicando se os elementos foram colocados na ordem correta e um "barulho" com o pedido atual. Default: `onChange() {}`.
* __onSubmit__ | `function`: chamada de retorno invocada quando a resposta é apresentada; tem como único parâmetro um "booleano" indicando se os elementos foram colocados na ordem correta. Default: `onSubmit() {}`.


## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Hints', value: 'hints' },
        { label: 'Submit Function', value: 'submitFunction' },
        { label: 'With Points and Feedback Message', value: 'withGradingAndFeedback' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<OrderQuestion
    question="Order the letters alphabetically!"
    options={[
        "Alpha",
        "Beta",
        "Gamma",
        "Delta"
    ]}
/>
```
</TabItem>

<TabItem value="hints">

```jsx live
<OrderQuestion
    question="Order the letters alphabetically!"
    options={[
        "Alpha",
        "Beta",
        "Gamma",
        "Delta"
    ]}
    hints={[ 'Delta succeeds Gamma in the Greek alphabet' ]}
    hintPlacement="bottom"
/>
```
</TabItem>

<TabItem value="submitFunction">

```jsx live
<OrderQuestion
    question="Order the letters alphabetically!"
    options={[
        "A",
        "G",
        "V"
    ]}
    onSubmit={() => {
        alert( 'Any JavaScript function could be executed here...' );
    }}
/>
```
</TabItem>

<TabItem value="withGradingAndFeedback">

```jsx live
<OrderQuestion
    question="Arrange the events in historical order"
    options={[
        "Napoleon's coronation as emperor",
        "The Crimean War",
        "Bombing of Hiroshima",
        "Fall of the Berlin Wall",
        "Donald Trump's inauguration",
    ]}
    points={10}
    successMsg = "Great! Looks like you are a history expert"
/>
```
</TabItem>

</Tabs>
