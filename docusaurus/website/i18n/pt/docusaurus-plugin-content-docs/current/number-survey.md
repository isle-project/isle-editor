---
id: number-survey
title: Number Survey
sidebar_label: Number Survey
---

Um componente de pesquisa no qual o instrutor pode coletar dados numéricos de pesquisa dos alunos em tempo real.

## Opções

* __question__ | `(string|node)`: a pergunta a ser exibida. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: controla se o mesmo usuário (ou sessão se anônima) pode enviar várias respostas). Default: `false`.
* __anonymous__ | `boolean`: Permite que os estudantes enviem dados de forma anônima. Observe que se esta opção for definida como "verdadeira", então os instrutores não poderão ver a identificação do aluno que apresenta os dados.. Default: `false`.
* __step__ | `(number|string)`: Um valor "string" ou "numérico" indicando o passo das setas vistas ao passar o cursor por cima da caixa de entrada. Se "qualquer", o passo será ajustado para "1".. Default: `'any'`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.
* __onSubmit__ | `function`: função de chamada de retorno invocada quando os alunos submetem uma resposta. Default: `onSubmit() {}`.


## Exemplos

```jsx live
<NumberSurvey
    allowMultipleAnswers={true}
    anonymous="false"
    id="generic_mean_question"
    question="Submit a number"
    defaultValue={0}
    step="any"
/>
```

