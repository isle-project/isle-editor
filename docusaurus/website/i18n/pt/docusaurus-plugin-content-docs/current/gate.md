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
* __showOwnerInPresentationMode__ | `boolean`: controla se o conteúdo do portão deve ser mostrado no modo de apresentação quando o portão é visível para o "proprietário". Default: `true`.
* __check__ | `function`: função chamada de retorno retornando um `booleano` indicando se o portão deve exibir componentes infantis; a função é invocada sempre que as ações da sessão chegam. Default: `none`.


## Exemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Timed', value: 'timed' },
        { label: 'Hidden', value: 'hidden' },
        { label: 'Custom Banner', value: 'customBanner' },
        { label: 'Custom Check', value: 'customCheck' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Gate enrolled >
    <h1>Content for users enrolled in a cohort of the course</h1>
</Gate>
```

</TabItem>

<TabItem value="timed">

```jsx live
<Gate
    after={date({ year: 2020, month: 9, day: 1, hour: 9, minute: 30, second: 0, utcOffset: 4 })}
    until={date({ year: 2020, month: 12, day: 20, hour: 9, minute: 30, second: 0, utcOffset: 5 })}
>
    # Only visible in Fall 2020 semester
</Gate>
```

</TabItem>

<TabItem value="hidden">

```jsx live
<Gate banner={null} owner >
    <h1>Content for owners without a message for others</h1>
</Gate>
```

</TabItem>

<TabItem value="customBanner">

```jsx live
<Gate owner banner={<h3>Only visible by course owners...</h3>} >
    <h1> User Analytics </h1>
</Gate>
```

</TabItem>

<TabItem value="customCheck">

```jsx live
<Gate check={( ) => {
    return session.user.email === 'admin@cmu.edu';
}} >
    <h1> User Analytics only visible to specified user</h1>
</Gate>
```

</TabItem>

</Tabs>

