---
id: range-question
title: Range Question
sidebar_label: Range Question
---

Um componente de perguntas de gama que pede aos estudantes que forneçam um ponto final inferior e superior.

## Opções

* __question__ | `(string|node)`: pergunta exibida. Default: `''`.
* __solution__ | `array<number>`: matriz de dois elementos contendo os pontos finais da faixa correta. Default: `none`.
* __hintPlacement__ | `string`: colocação das dicas (ou `top`, `left`, `right`, ou `bottom`). Default: `'top'`.
* __hints__ | `array<(string|node)>`: dicas que orientam como responder à pergunta. Default: `[]`.
* __labels__ | `array`: dois elementos de rótulos personalizados que não "Baixar" e "Alto". Default: `none`.
* __feedback__ | `boolean`: controla se devem ser exibidos botões de feedback. Default: `true`.
* __chat__ | `boolean`: controla se o elemento deve ter um bate-papo integrado. Default: `false`.
* __digits__ | `number`: número de dígitos que têm de corresponder entre a solução e a resposta fornecida pelo usuário. Se não for dado ou definido como nulo, o componente verifica a estrita igualdade. Se definido como 0, verifica se há igualdade total. Default: `3`.
* __max__ | `number`: valor máximo de entrada. Default: `null`.
* __min__ | `number`: valor mínimo de entrada. Default: `null`.
* __provideFeedback__ | `boolean`: indica se o feedback, incluindo a resposta correta, deve ser exibido depois que os alunos enviarem suas respostas. Default: `true`.
* __allowMultipleAnswers__ | `boolean`: controla se é possível apresentar respostas múltiplas. Default: `false`.
* __until__ | `Date`: tempo até que os estudantes tenham permissão para enviar respostas. Default: `none`.
* __points__ | `number`: número máximo de pontos concedidos na classificação. Default: `10`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.
* __onChangeLower__ | `function`: chamada de retorno acionada após o limite inferior ser alterado pelo usuário. Default: `onChangeLower() {}`.
* __onChangeUpper__ | `function`: chamada de retorno acionada depois que o limite superior é alterado pelo usuário. Default: `onChangeUpper() {}`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.
* __onSubmit__ | `function`: chamada de retorno invocada quando a resposta é submetida; tem como primeiro parâmetro um `booleano` indicando se a resposta foi respondida corretamente (se aplicável, `nulo` de outra forma) e a resposta fornecida como segundo parâmetro. Default: `onSubmit() {}`.


## Exemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Hints', value: 'withHints' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'With Points and Feedback', value: 'withPoints' }
        
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<RangeQuestion
    style={{ fontSize: 17, }}
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
/>
```

</TabItem>

<TabItem value="withHints">

```jsx live
<RangeQuestion
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
    hints={['all this happened in the 17th century', 'it ended with the Peace of Westphalia in 1648']}
/>
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<RangeQuestion
    style={{ fontFamily: 'Georgia', boxShadow: '0 0  10px darkblue'}}
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
/>
```

</TabItem>

<TabItem value="withPoints">

```jsx live
<RangeQuestion
    question="What year did the Thirty Years War broke out and when did it?"
    solution={[1618,1648]}
    labels={['Start', 'End']}
    min={1500}
    max={2000}
    hints={['all this happened in the 17th century', 'it ended with the Peace of Westphalia in 1648']}
    points={20}
    onSubmit={(res) => {
     if (res === true) {
      alert('Great, you have received 20 points');
     }
     else alert('sorry, this answer was wrong');
    }}
/>
```

</TabItem>

</Tabs>
