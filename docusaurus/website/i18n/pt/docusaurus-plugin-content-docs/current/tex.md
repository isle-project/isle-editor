---
id: tex
title: LaTeX Equations
sidebar_label: LaTeX Equations
---

O `TeX` é um elemento ISLE que pode ser utilizado para exibir as equações do LaTeX. Sob o capô, o componente utiliza [KaTeX](https://github.com/Khan/KaTeX) para uma renderização flamejante e rápida.

## Opções

* __raw__ | `(string|number) (required)`: O literal LaTeX `string` para renderizar. Também aceita `numbers'. Default: `none`.
* __displayMode__ | `boolean`: "booleano" indicando se a equação deve ser exibida em linha ou em modo de exibição. Default: `false`.
* __numbered__ | `boolean`: controla se deve ser exibido um número de equação para as equações do modo de exibição. Default: `false`.
* __style__ | `object`: `objeto` com pares de valores-chave CSS a serem aplicados ao recipiente da equação. Default: `{}`.
* __tag__ | `string`: Caracteres personalizados exibidos para equações de exibição no lado direito. Padrões para o número da equação dentro da lição. Default: `none`.
* __elems__ | `object`: "Objeto" com "chaves" indicando caracteres LaTeX e seus valores correspondentes sendo "objetos" de configuração para torná-los interativos. A configuração de uma opção `tooltip` mostrará uma dica de ferramenta quando pairando sobre os caracteres LaTeX. A configuração de uma propriedade "variável" exibirá uma barra deslizante de entrada para mudar a respectiva variável de estado; neste caso, propriedades adicionais "legenda", "min", "max" e "passo" são suportadas. Default: `{}`.
* __popoverPlacement__ | `string`: posição popover para os `elems` especificados (ou `top`, `right`, `bottom`, ou `left`). Default: `'top'`.
* __onPopover__ | `function`: quando um popover de controle é ligado ou desligado; recebe o status de exibição como um booleano como seu único argumento. Default: `onPopover() {}`.
* __onClick__ | `function`: chamada de retorno `função` invocada sempre que um usuário clica na equação. Default: `none`.


## Exemplos

```jsx live
<TeX
    raw="2 + 3 = 5"
    displayMode={true}
/>
```



