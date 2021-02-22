---
id: proportions-input 
title: Proportions Input
sidebar_label: Proportions Input
---

Um componente de entrada de proporções. Pode ser usado como parte de um painel de instrumentos ISLE ou autônomo. Neste último caso, você quer lidar com as mudanças através do atributo "Mudar" ou ligar o valor a uma variável global através do atributo "ligar".

## Opções

* __colors__ | `array<string>`: variedade de cores para os componentes da carta de tortas. Se não for definida, será utilizada uma escala de cores personalizada. Default: `none`.
* __disabled__ | `boolean`: controla se o campo de entrada está desativado. Default: `false`.
* __height__ | `number`: proporções altura de entrada (em px). Default: `200`.
* __legends__ | `array`: etiquetas de grupo. Default: `[]`.
* __onChange__ | `function`: função de chamada de retorno a ser invocada quando uma escolha é feita. Default: `onChange(){}`.
* __precision__ | `number`: precisão exibida dos valores de proporção. Default: `1`.
* __step__ | `number`: o passo das setas vistas ao passar o cursor por cima da caixa de entrada. Default: `0.1`.


## Exemplos

```jsx live
<ProportionsInput
    user
    id="Survey"
    question="Decide what is important"
    group="Group decision"
    nElements={3}
    colors = {[ "red", "blue", "gold" ]}
    personalHeight={300}
    groupHeight={200}
    margin="80px"
    legends={[ "bitcoin", "old", "diamonds" ]}
/>
```

