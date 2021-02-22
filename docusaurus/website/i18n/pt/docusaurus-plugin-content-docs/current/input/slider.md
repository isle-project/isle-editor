---
id: slider-input
title: Slider Input
sidebar_label: Slider Input
---

Um componente de entrada deslizante. Pode ser usado como parte de um painel de instrumentos ISLE ou autônomo. Neste último caso, você quer lidar com as mudanças através do atributo "Mudar" ou ligar o valor a uma variável global através do atributo "ligar".

## Opções

* __defaultValue__ | `number`: O valor inicial do controle deslizante. Default: `10`.
* __disabled__ | `boolean`: controla se a entrada do controle deslizante está ativa ou não. Se definido como verdadeiro, o controle deslizante estará presente na tela, embora acinzentado.. Default: `false`.
* __inline__ | `boolean`: controla se a barra deslizante deve ser colocada em linha com o texto ou fora. Default: `false`.
* __legend__ | `(string|node)`: legenda da entrada. Default: `none`.
* __max__ | `number`: O valor máximo do controle deslizante. Default: `100`.
* __maxLabel__ | `string`: rótulo a ser exibido à direita do deslizador em vez do valor máximo. Default: `none`.
* __min__ | `number`: O valor mínimo do controle deslizante. Default: `0`.
* __minLabel__ | `string`: etiqueta a ser exibida à esquerda do controle deslizante em vez do valor mínimo. Default: `none`.
* __onChange__ | `function`: chamada de retorno invocada com o novo valor quando o valor do controle deslizante muda. Default: `onChange() {}`.
* __precision__ | `number`: arredondamento da entrada. O valor será arredondado para não ter dígitos mais significativos do que a precisão. Por exemplo, se alguém desejar usar apenas números inteiros, uma precisão de 10 seria usada, enquanto que se alguém desejar arredondar para o lugar das centenas, seria usada uma precisão de 0,001. Default: `10`.
* __step__ | `(number|string)`: tamanho do degrau do controle deslizante. Default: `1`.
* __hideTooltip__ | `boolean`: controla se deve ocultar a ponta das ferramentas. Default: `false`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.
* __numberInputStyle__ | `object`: Estilos de CSS em linha para componente de entrada de números. Default: `{}`.
* __rangeInputStyle__ | `object`: Estilo CSS em linha para o componente de entrada de gama. Default: `{}`.


## Exemplos

```jsx live
<SliderInput
    legend="Success Probability"
    defaultValue={0.5}
    min={0}
    max={1}
    step={0.01}
/>
```



