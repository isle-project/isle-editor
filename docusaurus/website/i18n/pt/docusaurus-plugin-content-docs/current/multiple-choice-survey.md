---
id: multiple-choice-survey 
title: Multiple Choice Survey
sidebar_label: Multiple Choice Survey
---

Um componente de pesquisa no qual o instrutor pode coletar dados de pesquisa de múltipla escolha dos alunos em tempo real.

## Options

* __question__ | `(string|node)`: fio condutor indicando a pergunta a ser feita aos estudantes. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: controla se se deseja permitir que os estudantes respondam à pesquisa várias vezes. Default: `false`.
* __anonymous__ | `boolean`: controla se as respostas dos estudantes são anônimas. Default: `false`.
* __answers__ | `array`: matriz indicando escolhas de resposta para os estudantes. Default: `[]`.
* __multipleAnswers__ | `boolean`: indica se os estudantes podem selecionar mais de uma resposta. Observe que isto difere das respostasMultiplas, pois permite que os estudantes possam enviar a pergunta várias vezes.. Default: `false`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.
* __onSubmit__ | `function`: função a ser chamada quando uma resposta é apresentada. Default: `onSubmit() {}`.


## Examples

```jsx live
<MultipleChoiceSurvey
    anonymous
    question="Are you left- or right-handed"
    answers={[ 'Left-handed', 'Right-handed' ]}
/>
```

