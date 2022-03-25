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
* __solution__ | `object`: objeto de solução com pares de chaves de valor com chaves com a forma `row:col`, por exemplo `0:0`, `0:1`, `1:0` etc., e seus valores correspondentes sendo o índice do elemento de resposta correto da respectiva matriz de `opções`. Default: `{}`.
* __hints__ | `array<(string|node)>`: dicas que orientam como responder à pergunta. Default: `[]`.
* __hintPlacement__ | `string`: colocação das dicas (ou `top`, `left`, `right`, ou `bottom`). Default: `'bottom'`.
* __feedback__ | `boolean`: controla se devem ser exibidos botões de feedback. Default: `true`.
* __provideFeedback__ | `string`: se fornecer "nenhum" feedback, "feedback individual" sobre a(s) resposta(s) apresentada(s), ou "feedback global" para todas as perguntas. Default: `'individual'`.
* __allowIncomplete__ | `boolean`: permitir ou não envios sem uma seleção feita em cada caixa de seleção. Default: `false`.
* __nTries__ | `number`: depois de quantas tentativas não são aceitas mais respostas (se `provideFeedback` não for `ninguém`). Default: `3`.
* __failureMsg__ | `string`: texto de notificação exibido ao enviar respostas incorretas. Default: `none`.
* __successMsg__ | `string`: texto de notificação exibido ao apresentar as respostas corretas. Default: `none`.
* __cellLabels__ | `object`: etiquetas para células definidas por objeto com chaves com o formato `row:col`. Default: `{}`.
* __chat__ | `boolean`: controla se o elemento deve ter um bate-papo integrado. Default: `false`.
* __panelProps__ | `object`: propriedades adicionais a serem passadas para o componente externo <Panel /> . Default: `{}`.
* __className__ | `string`: nome da classe. Default: `''`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.
* __onChange__ | `function`: undefined. Default: `onChange() {}`.
* __onSubmit__ | `function`: função chamada de retorno invocada no momento da apresentação com as respostas como primeiro e um booleano indicando a correção como segundo parâmetro. Default: `onSubmit() {}`.


## Exemplos


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Hints', value: 'withHints' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'Feedback Messages', value: 'feedbackMessages' }
        
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<SelectQuestionMatrix
    question="Test your art history knowledge"
    rows={[ 'Composer', 'Author' ]} 
    cols={[ '18th Century', '19th Century' ]} 
    options={{ 
        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], 
        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,
        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],
        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] 
    }} 
    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}
/>
```
</TabItem>

<TabItem value="withHints">

```jsx live
<SelectQuestionMatrix
  question="Test your art history knowledge"
    rows={[ 'Composer', 'Author' ]} 
    cols={[ '18th Century', '19th Century' ]} 
    options={{ 
        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], 
        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,
        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],
        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] 
    }} 
    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}
    hints={[
        'His father Johann Sebastian was a famous composer too',
        'He was famous for his FAUST - so definitely an author',
        'Poussin was an 18th century painter',
        'Courbet was a realistic painter'
    ]}
/>
```
</TabItem>

<TabItem value="withStyle">

```jsx live
<SelectQuestionMatrix
    style={{ 
        fontFamily: 'Georgia',
        fontSize: 22, 
        textShadow: '0 0  10px white',
        background: 'rgb(251,213,112)',
        background: 'radial-gradient(circle, yellow 0%, orange 30%, green 100%)'
    }}
    question="Test your art history knowledge"
    rows={[ 'Composer', 'Author' ]} 
    cols={[ '18th Century', '19th Century' ]} 
    options={{ 
        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], 
        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,
        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],
        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] }} 
    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}
/>
```
</TabItem>


<TabItem value="feedbackMessages">

```jsx live
<SelectQuestionMatrix
    question="Test your art history knowledge"
    failureMsg="Sorry, that was wrong." 
    successMsg ="Wow! Congratulations, you are a specialist!"
    rows={[ 'Composer', 'Author' ]} 
    cols={[ '18th Century', '19th Century' ]} 
    options={{ 
        '0:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'], 
        '0:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] ,
        '1:0': [ 'Philipp Emmanuel Bach', 'Johann Wolfgang von Goethe', 'Nicolas Poussin'],
        '1:1': [ 'Gustave Flaubert', 'Gustave Courbet', 'Richard Wagner'] 
    }} 
    solution={{ '0:0': 0, '0:1': 2, '1:0': 1, '1:1': 0 }}
/>
```

</TabItem>

</Tabs>

