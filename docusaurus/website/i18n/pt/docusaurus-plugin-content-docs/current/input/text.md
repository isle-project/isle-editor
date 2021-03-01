---
id: text-input
title: Text Input
sidebar_label: Text Input
---

Um componente de entrada de texto. Pode ser usado como parte de um painel de instrumentos ISLE ou autônomo. Neste último caso, você quer lidar com as mudanças através do atributo "Mudar" ou vincular o valor a uma variável global através do atributo "vincular".

## Opções

* __bind__ | `string`: nome da variável global para o número a ser atribuído a. Default: `none`.
* __defaultValue__ | `string`: valor que indica o valor padrão da entrada no início. Default: `''`.
* __value__ | `string`: valor do texto (para componente controlado). Default: `none`.
* __legend__ | `(string|node)`: string indicando o texto exibido ao lado da entrada do número. Default: `''`.
* __inline__ | `boolean`: Indica se a entrada é exibida em linha. Default: `false`.
* __onBlur__ | `function`: função chamada de retorno invocada quando a área de texto perde o foco. Default: `onBlur() {}`.
* __onChange__ | `function`: função a ser chamada quando um valor de texto é alterado. Default: `onChange() {}`.
* __onKeyDown__ | `function`: função chamada de retorno a ser invocada quando qualquer tecla é pressionada. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: função de chamada de retorno a ser invocada quando qualquer chave é inserida. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: função de retorno de chamada a ser invocada quando a chave é liberada. Default: `onKeyUp() {}`.
* __placeholder__ | `string`: string indicando o valor a ser exibido antes que uma escolha inicial seja feita. Default: `none`.
* __width__ | `number`: número indicando a largura da entrada em pixels. Default: `80`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.


## Exemplos

```jsx live
<TextInput
    legend="Your name"
    defaultValue="Enter text"
/>
```

