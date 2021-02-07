---
id: r-help
title: R Help
sidebar_label: R Help
---

Faça palavras puxar a documentação R em uma janela modal quando clicada.

## Options

* __func__ | `string`: nome da "funçãoR" para a qual abrir a documentação. Se não for fornecido, o conteúdo da etiqueta "Ajuda" é assumido como igual ao nome da função.. Default: `''`.
* __library__ | `string`: nome do pacote R no qual a função reside. Default: `'base'`.
* __visible__ | `boolean`: controla se a janela modal de ajuda deve ser aberta na partida. Default: `false`.


## Examples

```jsx live
<span><RHelp library="graphics">hist</RHelp> is used to create a histogram.</span>
```

