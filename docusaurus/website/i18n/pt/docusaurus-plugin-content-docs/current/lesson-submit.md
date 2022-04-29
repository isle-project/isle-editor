---
id: lesson-submit 
title: Lesson Submit
sidebar_label: Lesson Submit
---

Um botão a ser exibido no final de uma aula para que os alunos possam clicar. Por padrão, uma mensagem confirmando a conclusão da lição é enviada para seu endereço de e-mail.

## Opções

* __coverage__ | `array<string>`: lista de identificadores a serem apresentados e incluídos no documento de resposta. Default: `none`.
* __label__ | `string`: etiqueta do botão submeter. Default: `none`.
* __message__ | `string`: mensagem para confirmação e-mail. Default: `''`.
* __requireLogin__ | `boolean`: controla se o usuário precisa estar conectado para que o botão esteja ativo (para usuários anônimos, nenhuma confirmação por e-mail é enviada). Default: `true`.
* __sendConfirmationEmail__ | `boolean`: controla se deve enviar um e-mail de confirmação no momento da submissão da lição. Default: `true`.
* __className__ | `string`: nome da classe. Default: `''`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.
* __onClick__ | `function`: chamada de retorno invocada ao clicar no botão de submissão. Default: `onClick() {}`.


## Exemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Custom Label', value: 'customLabel' },
        { label: 'Email Feedback', value: 'emailFeedback' },
        { label: 'With Callback', value: 'withCallback' }
    ]}
    lazy
>
<TabItem value="minimal">

```jsx live
<LessonSubmit />
```

</TabItem>

<TabItem value="customLabel">

```jsx live
<LessonSubmit label="Click to submit" />
```

</TabItem>

<TabItem value="withEmail">

```jsx live
<LessonSubmit 
    style={{ outline: '4px solid black'}}
    message={`
    Hi,
    I am very glad that you solved this lesson. Congratulations! 
    It was a sophisticated one.
    If you want some help how to use ISLE, have a look a 
    [this site](https://isledocs.com/docs/)
    
    Best
    The ISLE team
    `}
    label="Click to submit" />
```
</TabItem>

<TabItem value="withCallback">

```jsx live
<LessonSubmit 
    requireLogin={false}
    onClick={() => {
        alert( 'The Button has been clicked...' );
    }}
    label="Click to submit" />
```
</TabItem>

</Tabs>
