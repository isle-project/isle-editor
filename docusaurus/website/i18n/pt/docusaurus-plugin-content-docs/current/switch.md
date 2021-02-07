---
id: switch
title: Switch Components
sidebar_label: Switch Components
---

O componente Switch permite a exibição de um elemento de uma lista de vários elementos. Os usuários podem percorrer os diferentes filhos da tag Switch clicando na tag atualmente exibida.

## Options

* __active__ | `boolean`: controla se o interruptor está ativo ou não. Default: `true`.
* __tooltip__ | `string`: ponteira de ferramentas exibida ao pairar sobre o elemento de comutação. Default: `none`.
* __tooltipPos__ | `string`: colocação da ponta da ferramenta (ou "topo", "esquerda", "direita", ou "fundo"). Default: `'top'`.
* __className__ | `string`: nome da classe para o elemento de vão do invólucro. Default: `''`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.
* __onChange__ | `function`: chamada de retorno invocada quando os elementos são trocados. Recebe como seu primeiro argumento o índice da criança atualmente exibida. Default: `onChange() {}`.


## Examples

```jsx live
<Switch>
    <span>Option 1</span>
    <span>Option 2</span>
</Switch>
```



