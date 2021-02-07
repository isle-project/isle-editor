---
id: feedback 
title: Feedback Buttons
sidebar_label: Feedback Buttons
---

Botões para coletar o feedback do usuário.

## Options

* __confusedMsg__ | `string`: mensagem a ser exibida na ponta da ferramenta para botão confuso. Default: `none`.
* __feedbackMsg__ | `string`: mensagem a ser exibida na ponta da ferramenta para um botão de feedback detalhado. Default: `none`.
* __understoodMsg__ | `string`: mensagem a ser exibida na ponta da ferramenta para botão compreendido. Default: `none`.
* __customFeedback__ | `boolean`: controla se o componente aceita feedback personalizado. Default: `true`.
* __vertical__ | `boolean`: são exibidos verticalmente se definidos para "verdadeiro".. Default: `false`.
* __className__ | `string`: nome da classe. Default: `''`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.


## Examples

```jsx live
<Panel>
  Lorem ipsum....
  <FeedbackButtons
    id="my_feedback" 
  />
</Panel>
```

