---
id: checkbox-input
title: Checkbox Input
sidebar_label: Checkbox Input
---

Um componente de entrada de caixa de seleção. Pode ser usado como parte de um painel de instrumentos ISLE ou autônomo. Neste último caso, você quer lidar com as mudanças através do atributo "Mudar" ou ligar o valor a uma variável global através do atributo "ligar".

## Options

* __bind__ | `string`: nome da variável global para o valor da caixa de seleção a ser atribuída. Default: `''`.
* __defaultValue__ | `boolean`: valor booleano indicando o valor padrão da caixa de seleção. Default: `false`.
* __value__ | `boolean`: valor da caixa de seleção (para componente controlado). Default: `none`.
* __disabled__ | `boolean`: indica se a entrada está ativa ou não. Default: `false`.
* __inline__ | `boolean`: indica se a caixa de seleção é exibida em linha. Default: `false`.
* __onChange__ | `function`: função de chamada de retorno a ser invocada quando a caixa de seleção é clicada. A função é chamada com o valor atual da caixa de seleção. Default: `onChange() {}`.
* __legend__ | `(string|node)`: texto exibido ao lado da caixa de seleção. Default: `''`.
* __tooltip__ | `string`: texto exibido ao pairar sobre a caixa de seleção. Default: `''`.
* __tooltipPlacement__ | `string`: posição da ponta do botão. Default: `'right'`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.


## Examples

```jsx live
<CheckboxInput
    legend="Take the logarithm"
    defaultValue={false}
/>
```

