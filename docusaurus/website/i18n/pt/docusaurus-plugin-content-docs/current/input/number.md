---
id: number-input
title: Number Input
sidebar_label: Number Input
---

Um número de componentes de entrada. Pode ser usado como parte de um painel de instrumentos ISLE ou autônomo. Neste último caso, você quer lidar com as mudanças através do atributo "Mudar" ou ligar o valor a uma variável global através do atributo "ligar".

## Opções

* __bind__ | `string`: nome da variável global para o número a ser atribuído a. Default: `''`.
* __defaultValue__ | `number`: valor que indica o valor padrão da entrada na partida. Default: `0`.
* __disabled__ | `boolean`: booleano indicando se a entrada está ativa ou não. Default: `false`.
* __inline__ | `boolean`: indica se a entrada é exibida em linha. Default: `false`.
* __legend__ | `(string|node)`: string indicando o texto exibido ao lado da entrada do número. Default: `none`.
* __max__ | `number`: número indicando o valor máximo que pode ser inserido. Default: `null`.
* __min__ | `number`: número indicando o menor valor possível que pode ser inserido. Default: `null`.
* __numbersOnly__ | `boolean`: controla se apenas números são aceitos. Default: `true`.
* __placeholder__ | `string`: undefined. Default: `'0'`.
* __onBlur__ | `function`: função de chamada de retorno a ser invocada quando se utiliza um método de desfocagem. Default: `onBlur() {}`.
* __onChange__ | `function`: função de chamada de retorno a ser invocada quando a entrada do número é alterada. Default: `onChange() {}`.
* __onKeyDown__ | `function`: função chamada de retorno a ser invocada quando qualquer tecla é pressionada. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: função de chamada de retorno a ser invocada quando qualquer chave é inserida. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: função de retorno de chamada a ser invocada quando a chave é liberada. Default: `onKeyUp() {}`.
* __step__ | `(number|string)`: número que indica as mudanças incrementais ao usar as setas de incremento. Default: `1`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.
* __inputStyle__ | `object`: Estilos de CSS em linha para elemento de entrada. Default: `{}`.
* __value__ | `number`: valor numérico (para componente controlado). Default: `none`.
* __tooltip__ | `string`: dica de ferramentas (se não estiver definida, a dica de ferramentas é gerada automaticamente). Default: `none`.
* __tooltipPlacement__ | `string`: direção da ponta da ferramenta. Default: `'left'`.


## Exemplos

```jsx live
<NumberInput
    legend="Number of observations"
    defaultValue={20}
    step={5}
/>
```

