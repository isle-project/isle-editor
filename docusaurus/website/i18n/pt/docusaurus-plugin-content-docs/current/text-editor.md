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
* __history__ | `boolean`: controla se o editor deve incluir uma visualização do histórico. Default: `true`.
* __mode__ | `string`: controla o modo de edição de texto (seja `individual` para um documento pessoal, `group` para um documento por grupo, `collaborative para um único documento para todos, ou `cohort` para um documento por coorte). Default: `'individual'`.
* __resetModal__ | `{title,body,buttonLabel,notificationTitle,notification,tooltip}`: objeto para personalizar o modal para reiniciar o documento (geralmente não deve ser alterado). Default: `none`.
* __sendSubmissionEmails__ | `boolean`: controla o envio de e-mails de confirmação com saída em PDF/HTML no momento do envio. Default: `false`.
* __voiceTimeout__ | `number`: tempo em milissegundos depois que um pedaço de voz gravada é inserido. Default: `5000`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.


## Exemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Default Value', value: 'defaultValue' },
        { label: 'Mode', value: 'mode' },
        { label: 'With Style', value: 'withStyle' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<TextEditor  />
```

</TabItem>

<TabItem value="defaultValue">

```jsx live
<TextEditor defaultValue={`# Welcome!

This is a text that uses **markdown**

## Second Heading Level

[Wikipedia Link](https://https://www.wikipedia.org/).
`} />
```

</TabItem>

<TabItem value="mode">

```jsx live
<TextEditor defaultValue="This is reserved for an individual. But you can also allow groups, students cohorts, or everybody to join in and work collaboratively (setting the mode option will only have an effect in a live lesson, not this preview)." 
mode="individual" />
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<TextEditor  
  defaultValue="[Generate CSS-Gradients Online!](https://cssgradient.io/)"
  style={{ 
    background: 'green',
    background: 'radial-gradient(circle, rgba(251,213,112,0.7315301120448179) 0%,rgba(83,199,14,0.4514180672268907) 100%)' 
  }}
/>
```

</TabItem>

</Tabs>
