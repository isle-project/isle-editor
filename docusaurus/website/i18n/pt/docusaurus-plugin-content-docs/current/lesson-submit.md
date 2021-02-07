---
id: lesson-submit 
title: Lesson Submit
sidebar_label: Lesson Submit
---

Um botão a ser exibido no final de uma aula para que os alunos possam clicar. Por padrão, uma mensagem confirmando a conclusão da lição é enviada para seu endereço de e-mail.

## Options

* __label__ | `string`: etiqueta do botão submeter. Default: `none`.
* __message__ | `string`: mensagem para confirmação e-mail. Default: `''`.
* __requireLogin__ | `boolean`: controla se o usuário precisa estar conectado para que o botão esteja ativo (para usuários anônimos, nenhuma confirmação por e-mail é enviada). Default: `true`.
* __sendConfirmationEmail__ | `boolean`: controla se deve enviar um e-mail de confirmação no momento da submissão da lição. Default: `true`.
* __className__ | `string`: nome da classe. Default: `''`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.
* __onClick__ | `function`: chamada de retorno invocada ao clicar no botão de submissão. Default: `onClick() {}`.


## Examples

```jsx live
<LessonSubmit />
```

