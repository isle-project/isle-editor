---
id: free-text-survey 
title: Free Text Survey
sidebar_label: Free Text Survey
---

Um componente ISLE para perguntas onde as respostas dos estudantes devem ser fornecidas na forma de texto livre. O que diferencia este componente da **FreeTextQuestion*** é o fato de que os dados agregados do grupo são exibidos a todos em tempo real.

## Options

* __question__ | `(string|node)`: a pergunta a fazer aos estudantes. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: controla se se deseja permitir que os estudantes respondam à pesquisa várias vezes. Default: `false`.
* __anonymous__ | `boolean`: controla se as respostas dos estudantes são coletadas anonimamente. Default: `false`.
* __rows__ | `number`: número de linhas de texto no campo de entrada. Default: `4`.
* __className__ | `string`: nome da classe. Default: `''`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.
* __onSubmit__ | `function`: função de chamada de retorno chamada quando uma resposta é submetida. Default: `onSubmit() {}`.


## Examples

```jsx live
<FreeTextSurvey 
    question="Where are you from?"
    anonymous
/>
``` 

