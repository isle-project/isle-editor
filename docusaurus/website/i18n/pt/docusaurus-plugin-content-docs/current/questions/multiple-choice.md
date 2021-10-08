---
id: multiple-choice-question 
title: Multiple Choice Question
sidebar_label: Multiple Choice Question
---

Um componente ISLE que torna uma questão de múltipla escolha. Ele apóia o caso em que o aluno tem que selecionar uma única resposta e quando pode haver múltiplas respostas corretas e todas as corretas devem ser escolhidas.

## Opções

* __question__ | `(string|node)`: a questão exibida na parte superior do componente de múltipla escolha. Default: `''`.
* __solution__ | `(number|array)`: número denotando qual resposta está correta ou uma "arraia" dos números de resposta corretos no caso de o aluno ser capaz de selecionar múltiplas respostas. Default: `none`.
* __answers__ | `array (required)`: uma "briga" de objetos de resposta. Cada resposta deve ser um objeto com campos "conteúdo" e "explicação", que denotam a opção de resposta exibida e uma explicação visível após a pergunta ter sido submetida para explicar porque a resposta está correta ou incorreta. Default: `none`.
* __hintPlacement__ | `string`: colocação das dicas (ou `top`, `left`, `right`, ou `bottom`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: dicas que orientam como responder à pergunta. Default: `[]`.
* __feedback__ | `boolean`: controla se devem ser exibidos botões de feedback. Default: `true`.
* __disabled__ | `boolean`: controla se a questão está desativada. Default: `false`.
* __chat__ | `boolean`: controla se o elemento deve ter um bate-papo integrado. Default: `false`.
* __provideFeedback__ | `string`: seja "cheio", "incremental", ou "ninguém". Se `full`, o feedback incluindo a resposta correta é exibido após os alunos submeterem suas respostas; se `incremental`, o feedback é exibido apenas para a resposta selecionada; se `none`, nenhum feedback é retornado. Default: `'incremental'`.
* __disableSubmitNotification__ | `boolean`: controla se as notificações de submissão devem ser desativadas. Default: `false`.
* __displaySolution__ | `boolean`: controla se a solução é apresentada à partida. Default: `false`.
* __until__ | `Date`: tempo até que os estudantes tenham permissão para enviar respostas. Default: `none`.
* __points__ | `number`: número máximo de pontos concedidos na classificação. Default: `10`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.
* __onChange__ | `function`: chamada de retorno invocada toda vez que a resposta selecionada muda; recebe o índice da pergunta selecionada como seu único argumento (ou uma matriz no caso da pergunta ser do tipo "Escolha todos os que se aplicam"). Default: `onChange(){}`.
* __onSubmit__ | `function`: chamada de retorno invocada após a apresentação de uma resposta. Default: `onSubmit(){}`.


## Exemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="singleAnswer"
    values={[
        { label: 'Single Answer', value: 'singleAnswer' },
        { label: 'Formatted Answers', value: 'formattedAnswers' },
        { label: 'Instant Feedback', value: 'instantFeedback' },
        { label: 'Multiple Answers', value: 'multipleAnswers' },
        { label: 'Series of Questions', value: 'aSeries' },
        { label: 'With Hints', value: 'withHints' }
    ]}
    lazy
>

<TabItem value="singleAnswer">

```jsx live
<MultipleChoiceQuestion
    solution={0}
    answers={[
        {content:"Hierarchical Clustering"},
        {content:"LASSO"},
        {content:"Multiple regression"}
    ]}
    question="Which of the following methods are used for clustering?"
/>
```

</TabItem>

<TabItem value="formattedAnswers" >

```jsx live
<MultipleChoiceQuestion
    answers={[
        {content: <span>**bold**</span>},
        {content: <span>*italic*</span>},
        {content: <span style={{ fontFamily: 'Georgia', color: 'red' }}>styled</span>}
    ]}
    question={<span style={{ fontSize: 33}}>What kind of font do you like the most?</span>}
/>
```

</TabItem>

<TabItem value="instantFeedback">

```jsx live
<MultipleChoiceQuestion
    solution={0}
    answers={[
        {content:"Hierarchical Clustering"},
        {content:"LASSO"},
        {content:"Multiple regression"}
    ]}
    question="Which of the following methods are used for clustering?"
    provideFeedback="full"
/>
```

</TabItem>

<TabItem value="multipleAnswers">

```jsx live
<MultipleChoiceQuestion
    solution={[ 0, 3 ]}
    answers={[
        {content:"Hierarchical Clustering"},
        {content:"LASSO"},
        {content:"Multiple regression"},
        {content:"kmeans"}
    ]}
    question="Which of the following methods are used for clustering?"
    style={{ background: '#FFF6F3'}}
/>
```

</TabItem>

<TabItem value="aSeries">

```jsx live
<Slider>
    <MultipleChoiceQuestion
        solution={[ 1, 3 ]}
        answers={[
            { content:"George Washington", explanation: "Yes, he was the first president." },
            { content:"Benjamin Franklin", explanation: "He was a founding father."},
            { content:"Ulysses S. Grant", explanation: "General and 18th president." },
            { content:"Alexander Hamilton", explanation: "Had aspirations, but died in a duel." }
        ]}
        question="Who was not a president of the United States?"
        style={{ background: 'lightblue'}}
        feedback={false}
    />
    <MultipleChoiceQuestion
        solution={[ 0, 3 ]}
        answers={[
            {content:"Hierarchical Clustering", explanation:""},
            {content:"LASSO", explanation:""},
            {content:"Multiple regression", explanation:""},
            {content:"kmeans", explanation:""}
        ]}
        question="Which of the following methods are used for clustering?"
        style={{ background: '#FFF6F3'}}
        feedback={false}
    />
</Slider>
```

</TabItem>

<TabItem value="withHints">

```jsx live
<MultipleChoiceQuestion
    solution={[ 1, 3 ]}
    answers={[
        { content:"George Washington", explanation: "Yes, he was the first president." },
        { content:"Benjamin Franklin", explanation: "He was a founding father."},
        { content:"Ulysses S. Grant", explanation: "General and 18th president." },
        { content:"Alexander Hamilton", explanation: "Had aspirations, but died in a duel." }
    ]}
    question="Who was not a president of the United States?"
    style={{ background: 'lightblue'}}
    feedback={false}
    hints={[
        'Washington - that is a no-brainer, isn\'t it?',
        'Franklin was famous for his invention of the lightning rod - so why become more?',
        'Hamilton was a founding father, but got in this deadly quarrel with Aaron Burr.',
    ]}
    hintPlacement="top"
/>
```

</TabItem>

</Tabs>
