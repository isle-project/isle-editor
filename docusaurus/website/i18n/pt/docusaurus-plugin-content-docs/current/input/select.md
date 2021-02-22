---
id: select-input
title: Select Input
sidebar_label: Select Input
---

Um componente de entrada selecionado. Pode ser usado como parte de um painel de instrumentos ISLE ou autônomo. Neste último caso, você quer lidar com as mudanças através do atributo "Mudar" ou ligar o valor a uma variável global através do atributo "ligar".

## Opções

* __bind__ | `string`: nome da variável global para o número a ser atribuído a. Default: `''`.
* __clearable__ | `boolean`: valor booleano indicando se a(s) escolha(ões) feita(s) pode(m) ser clara(s). Default: `none`.
* __defaultValue__ | `(number|string|array|object)`: valor padrão da entrada na inicialização. Default: `none`.
* __disabled__ | `boolean`: controla se a entrada está ativa ou não. Default: `false`.
* __inline__ | `boolean`: indica se a entrada é exibida em linha. Default: `false`.
* __legend__ | `(string|node)`: texto exibido ao lado da entrada. Default: `''`.
* __menuPlacement__ | `string`: colocação do menu em relação ao controle (ou `auto`, `top`, ou `bottom`). Default: `'auto'`.
* __multi__ | `boolean`: controla se é possível selecionar múltiplas respostas. Default: `false`.
* __onChange__ | `function`: função de chamada de retorno a ser invocada quando uma escolha é feita. Default: `onChange() {}`.
* __options__ | `array`: matriz de indicação das escolhas disponíveis para o usuário. Default: `[]`.
* __placeholder__ | `string`: valor a ser exibido antes que uma escolha inicial seja feita. Default: `none`.
* __tooltip__ | `string`: texto exibido ao pairar sobre a legenda. Default: `none`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.


## Exemplos

```jsx live
<SelectInput
    legend="Choose the test direction"
    defaultValue="two-sided"
    options={[
        'left-sided',
        'right-sided',
        'two-sided'
    ]}
/>
```

