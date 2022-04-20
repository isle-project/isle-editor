---
id: quiz 
title: Quiz
sidebar_label: Quiz
---

Um componente de quiz exibindo uma seqüência de componentes de perguntas.

## Opções

* __confidence__ | `boolean`: se deve exibir uma escala Likert pedindo a confiança da resposta do usuário. Default: `false`.
* __forceConfidence__ | `boolean`: controla se um usuário tem que fornecer um nível de confiança antes de passar para a próxima pergunta. Default: `false`.
* __count__ | `number`: número de perguntas a incluir no questionário. Default: `none`.
* __questions__ | `array (required)`: matriz de perguntas a partir das quais as perguntas serão selecionadas aleatoriamente. Default: `none`.
* __active__ | `boolean`: controla se o temporizador para o questionário está ativo. Default: `true`.
* __duration__ | `number`: duração do questionário (em minutos); uma vez terminado o tempo, a página de resumo será exibida. Default: `none`.
* __skippable__ | `boolean`: controla se as perguntas do questionário podem ser ignoradas. Default: `true`.
* __footerNodes__ | `array`: matriz de nós a serem exibidos no rodapé de cada pergunta. Default: `[]`.
* __nextLabel__ | `string`: etiqueta de botão para avançar para a próxima pergunta. Default: `none`.
* __provideFeedback__ | `boolean`: controla se os alunos devem mostrar aos alunos o feedback sobre a exatidão de suas respostas após a conclusão do quiz. Default: `true`.
* __showFinishButton__ | `boolean`: controla se deve exibir o botão para terminar o questionário e saltar diretamente para a página de resultados. Default: `false`.
* __finishLabel__ | `string`: etiqueta de botão para terminar o quiz. Default: `none`.
* __downloadButton__ | `boolean`: controla se deve ser exibido um botão para baixar as respostas. Default: `true`.
* __repeatable__ | `boolean`: undefined. Default: `false`.
* __onFinished__ | `function`: chamada de retorno invocada quando o questionário é concluído e a página de resultados é exibida. Default: `onFinished() {}`.
* __onSubmit__ | `function`: chamada de retorno invocada quando o usuário submete uma resposta. Default: `onSubmit() {}`.


## Exemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Subset of Questions', value: 'subset' },
        { label: 'Not Skippable', value: 'notSkippable' },
        { label: 'Confidence Check', value: 'confidenceCheck' },,
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Quiz
    questions={[
        <FreeTextQuestion 
            question="What is the capital of France?" 
            rows={1} 
            solution="Paris" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Poland?" 
            rows={1} 
            solution="Warsaw" 
        />
    ]}
/>
```
</TabItem>

<TabItem value="subset">

```jsx live
<Quiz
    count={3}
    questions={[
        <FreeTextQuestion 
            question="What is the capital of France?" 
            rows={1} 
            solution="Paris" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Poland?" 
            rows={1} 
            solution="Warsaw" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Portugal?" 
            rows={1} 
            solution="Lisbon" 
        />,     
        <FreeTextQuestion 
            question="What is the capital of Egypt?" 
            rows={1} 
            solution="Cairo" 
        />
    ]}
/>
```
</TabItem>

<TabItem value="notSkippable" >

```jsx live
<Quiz
    skippable={false}
    questions={[
        <FreeTextQuestion 
            question="What is the capital of France?" 
            rows={1} 
            solution="Paris" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Poland?" 
            rows={1} 
            solution="Warsaw" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Portugal?" 
            rows={1} 
            solution="Lisbon" 
        />,     
        <FreeTextQuestion 
            question="What is the capital of Egypt?" 
            rows={1} 
            solution="Cairo" 
        />
    ]}
/>
```
</TabItem>

<TabItem value="confidenceCheck">

```jsx live
<Quiz
    confidence
    forceConfidence
    count={4}
    questions={[
        <FreeTextQuestion 
            question="What is the capital of France?" 
            rows={1} 
            solution="Paris" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Poland?" 
            rows={1} 
            solution="Warsaw" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Portugal?" 
            rows={1} 
            solution="Lisbon" 
        />,     
        <FreeTextQuestion 
            question="What is the capital of Egypt?" 
            rows={1} 
            solution="Cairo" 
        />
    ]}
/>
```
</TabItem>

</Tabs>
