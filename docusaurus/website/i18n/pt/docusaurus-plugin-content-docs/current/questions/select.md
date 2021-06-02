---
id: select-question 
title: Select Question
sidebar_label: Select Question
---

Um componente de pergunta seleta.

## Opções

* __question__ | `(string|node)`: pergunta para a qual o estudante tem que selecionar uma das opções de resposta disponíveis. Default: `''`.
* __options__ | `array (required)`: opções de resposta disponíveis a partir das quais o estudante pode selecionar. Default: `none`.
* __solution__ | `number`: índice de elemento de solução em `opções'. Default: `none`.
* __preselected__ | `number`: índice de opção de resposta pré-selecionada. Default: `0`.
* __inline__ | `boolean`: controla se o componente é ou não tornado em linha. Default: `false`.
* __hintPlacement__ | `string`: colocação das dicas (ou "cima", "esquerda", "direita", ou "baixo"). Default: `'top'`.
* __hints__ | `array<(string|node)>`: dicas que orientam como responder à pergunta. Default: `[]`.
* __feedback__ | `boolean`: controla se devem ser exibidos botões de feedback. Default: `true`.
* __chat__ | `boolean`: controla se o elemento deve ter um bate-papo integrado. Default: `false`.
* __provideFeedback__ | `boolean`: indica se o feedback, incluindo a resposta correta, deve ser exibido depois que os alunos enviarem suas respostas. Default: `true`.
* __failureMsg__ | `string`: mensagem a ser exibida quando o estudante seleciona uma resposta errada. Default: `'Not quite, try again!'`.
* __successMsg__ | `string`: mensagem a ser exibida quando o estudante seleciona a resposta correta. Default: `'That's the correct answer!'`.
* __points__ | `number`: número máximo de pontos concedidos na classificação. Default: `10`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.
* __onChange__ | `function`: chamada de retorno que é acionada após a ação de apresentação. Default: `onChange() {}`.
* __onSubmit__ | `function`: chamada de retorno invocada quando a resposta é submetida; tem como primeiro parâmetro um `booleano` indicando se a resposta foi respondida corretamente (se aplicável, `nulo` de outra forma) e a resposta fornecida como segundo parâmetro. Default: `onSubmit() {}`.


## Exemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'Inline', value: 'inline' },
        { label: 'With Hints', value: 'withHints' },
        { label: 'Submit Function Hints', value: 'submitFunction' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<SelectQuestion
    question="The usual t-test is"
    solution={2}
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
/>
```
</TabItem>

<TabItem value="withStyle">

```jsx live
<SelectQuestion
    question="The usual t-test is"
    solution={2}
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
    style={{ background: 'gainsboro', boxShadow: '0 0 10px black'}}
/>
```
</TabItem>

<TabItem value="inline">

```jsx live
The usual t-test is:
<SelectQuestion
    question="The usual t-test is"
    solution={2}
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
    inline
/> ... so you can us it in the midst of a longer paragraph
```
</TabItem>

<TabItem value="withHints">

```jsx live
<SelectQuestion
    question="White is "
    solution={1}
    options={[
        'a primary color',
        'not a primary color'
    ]}
    hints={[ "There are 3 primary colors", "Red is a primary color", "and so is yellow" ]}
/>
```
</TabItem>

<TabItem value="submitFunction">

```jsx live
<SelectQuestion
    question="Select the primary color"
    solution={2}
    options={[
        'orange',
        'white',
        'red'
    ]}
    onSubmit={(result) => {
        switch ( result ) {
            case 'orange':
                alert( 'No, orange is a mix of yellow and red.' );
            break;
            case 'white':
                alert( 'White does not count as a color.' );
            break;
            case 'red':
                alert( 'That is correct.' );
            break;
        }
    }}
    provideFeedback={false}
/> 
```
</TabItem>

</Tabs>
