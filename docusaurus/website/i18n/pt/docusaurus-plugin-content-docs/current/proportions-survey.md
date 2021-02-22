---
id: proportions-survey
title: Proportions Survey
sidebar_label: Proportions Survey
---

Componente que permite a um grupo de pessoas votar sobre os pesos e a importância de determinadas opções.

## Opções

* __allowMultipleAnswers__ | `boolean`: controla se se deseja permitir que os estudantes respondam à pesquisa várias vezes. Default: `false`.
* __anonymous__ | `boolean`: controla se as respostas dos estudantes são anônimas. Default: `false`.
* __colors__ | `array`: variedade de cores para os componentes da carta de tortas. Se não for definida, será utilizada uma escala de cores personalizada. Default: `none`.
* __disabled__ | `boolean`: controla se a pesquisa está desativada. Default: `false`.
* __group__ | `string`: título de exibição de grupo. Default: `'group results'`.
* __groupHeight__ | `number`: proporções altura de entrada para exibição do grupo (em px). Default: `100`.
* __legends__ | `array`: etiquetas com legendas que descrevem as opções a serem pesadas. Default: `[]`.
* __margin__ | `string`: margem de entrada proporcional (em px). Default: `'40px'`.
* __onSubmit__ | `function`: função de chamada de retorno invocada quando os alunos submetem uma resposta. Default: `onSubmit() {}`.
* __personalHeight__ | `number`: proporções altura de entrada para cada estudante (em px). Default: `200`.
* __precision__ | `number`: precisão exibida dos valores de proporção. Default: `2`.
* __question__ | `(string|node)`: a pergunta a ser exibida. Default: `''`.
* __step__ | `number`: o passo das setas vistas ao passar o cursor por cima da caixa de entrada. Default: `0.25`.


## Exemplos

```jsx live
<ProportionsSurvey 
    id="Survey"
    question="Decide what is important"
    group="Group decision"
    nElements={3}
    colors = {[ "red", "blue", "gold" ]}
    personalHeight={300}
    groupHeight={200}
    margin="80px"
    legends={[ "bitcoin", "old", "diamonds" ]}
/>
```



