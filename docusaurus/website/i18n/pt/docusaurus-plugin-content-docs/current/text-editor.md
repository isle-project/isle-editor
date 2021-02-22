---
id: text-editor
title: Text Editor
sidebar_label: Text Editor
---

Um editor de texto para escrever notas ou relatórios. Suporta a exportação de notas como arquivos HTML ou PDF, assim como o envio automático para o servidor ISLE.

## Opções

* __allowSubmissions__ | `boolean`: controla se os estudantes podem apresentar seus relatórios ao servidor. Default: `true`.
* __canLoadHTML__ | `boolean`: controla se deve exibir o botão para carregar um arquivo HTML salvo no editor. Default: `true`.
* __defaultValue__ | `string`: texto padrão do editor. Default: `'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'`.
* __mode__ | `string`: controla o modo de edição de texto (seja `individual` para um documento pessoal, `group` para um documento por grupo, `collaborative para um único documento para todos, ou `cohort` para um documento por coorte). Default: `'individual'`.
* __resetModal__ | `{title,body,buttonLabel,notificationTitle,notification,tooltip}`: objeto para personalizar o modal para reiniciar o documento (geralmente não deve ser alterado). Default: `none`.
* __sendSubmissionEmails__ | `boolean`: controla o envio de e-mails de confirmação com saída em PDF/HTML no momento do envio. Default: `false`.
* __voiceTimeout__ | `number`: tempo em milissegundos depois que um pedaço de voz gravada é inserido. Default: `5000`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.


## Exemplos

```jsx live
<TextEditor />
```

