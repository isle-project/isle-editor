---
id: beacon-tooltip
title: Beacon Tooltip
sidebar_label: Beacon Tooltip
---

Componente que coloca um farol na lição, seja independentemente ou ligado a um `alvo`. Ao pairar ou clicar na baliza, uma dica de ferramenta é exibida.

## Opções

* __title__ | `(string|node)`: título a ser exibido na parte superior da ponta da ferramenta. Default: `none`.
* __content__ | `(string|node)`: conteúdo da ponta da ferramenta. Default: `'`content` comes here...'`.
* __event__ | `string`: se ajustado para "clicar", a ponta da ferramenta é alternada ao clicar no sinalizador; se ajustado para "pairar", a ponta da ferramenta é ativada por meio de pairar. Default: `'click'`.
* __placement__ | `string`: colocação da ponta da ferramenta em relação ao "alvo" (ou "topo", "topo - início", "topo - fim", "fundo", "fundo - fim", "esquerda", "esquerda - início", "esquerda - fim", "direita", "direita - início", "direita - fim", "centro", "auto", ou "centro"). Default: `'left'`.
* __target__ | `string`: classe ou seletor de identificação de elemento para anexar a ponta de ferramenta. Default: `''`.
* __offset__ | `number`: distância entre a ponta da ferramenta e o `alvo` em pixels. Default: `15`.
* __onChange__ | `function`: chamada de retorno invocada quando da mudança de estado da ponta da ferramenta. Recebe dois argumentos: a "ação" (abrir ou fechar) e a passada "brocas". Default: `onChange() {}`.


## Exemplos

```jsx live
<BeaconTooltip
    content="Body of the tooltip..."
    title="Title comes here..."
    event="hover"
    placement="right"
/>
```



