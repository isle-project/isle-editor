---
id: revealer 
title: Revealer
sidebar_label: Revealer
---

Um componente ISLE que os instrutores podem usar para revelar ou esconder seletivamente o conteúdo infantil para todos os alunos durante as aulas.

## Options

* __message__ | `(string|node)`: mensagem a ser exibida quando o conteúdo estiver oculto. Default: `none`.
* __show__ | `boolean`: controla se inicialmente devem ser exibidos elementos infantis. Default: `false`.


## Examples

```jsx live
<Revealer
        id="mudgelove"
    >
        <div>
            <h3>Content that will be revealed.</h3>
        </div>
</Revealer>
``` 

