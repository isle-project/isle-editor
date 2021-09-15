---
id: gate 
title: Gate
sidebar_label: Gate
---

Um componente ISLE que permite exibir seus filhos apenas para públicos reservados.

## Opções

* __user__ | `boolean`: quando o conteúdo do portão é exibido aos usuários. Default: `false`.
* __notUser__ | `boolean`: quando definido o conteúdo do portões é **não*** exibido aos usuários. Default: `false`.
* __enrolled__ | `boolean`: quando o conteúdo do portão é exibido para os alunos inscritos no curso. Default: `false`.
* __notEnrolled__ | `boolean`: quando definido, o conteúdo do portão é **não** exibido para os alunos inscritos no curso. Default: `false`.
* __owner__ | `boolean`: quando o conteúdo do portões é exibido para o proprietário do curso (geralmente o instrutor). Default: `false`.
* __notOwner__ | `boolean`: quando ajustado o conteúdo do portões é **não*** exibido ao proprietário do curso (geralmente o instrutor). Default: `false`.
* __after__ | `Date`: tempo após o qual o conteúdo do portão deve se tornar visível. Default: `none`.
* __until__ | `Date`: tempo até que o conteúdo do portão permaneça visível. Default: `none`.
* __banner__ | `node`: uma mensagem personalizada que é exibida aos visitantes para os quais as crianças do portão não são visíveis em vez da mensagem padrão. Default: `none`.
* __disabled__ | `boolean`: se um portão for desativado, o banner será exibido não importa o que. Default: `false`.
* __showOwnerInPresentationMode__ | `boolean`: controla se o conteúdo do portão deve ser mostrado no modo de apresentação quando o portão é visível para o "proprietário". Default: `false`.
* __check__ | `function`: função chamada de retorno retornando um `booleano` indicando se o portão deve exibir componentes infantis; a função é invocada sempre que as ações da sessão chegam. Default: `none`.


## Exemplos

```jsx live
<Gate 
    banner={<h2>You have to be logged in to see the content</h2>}
    user 
>
    <h1>For users only</h1>
</Gate>
``` 



