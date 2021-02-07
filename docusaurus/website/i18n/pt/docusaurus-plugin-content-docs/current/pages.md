---
id: pages 
title: Pages
sidebar_label: Pages
---

Um componente de paginação ISLE que permite que o usuário passe por uma seqüência de páginas.

## Options

* __activePage__ | `number`: página ativa. Default: `1`.
* __disabled__ | `boolean`: controla se a barra de navegação está ativa ou não. Default: `false`.
* __title__ | `string`: título exibido do conteúdo das páginas. Default: `''`.
* __pagination__ | `string`: se mostrar a paginação ou na "parte superior", "parte inferior", ou "ambos".. Default: `'top'`.
* __size__ | `string`: tamanho dos botões de paginação (ou `default`, `lg`, `large`, `sm`, `small`, `xs`, ou `xsmall`). Default: `'default'`.
* __height__ | `(number|string)`: a altura máxima do recipiente. Se uma página embutida for mais alta, uma barra de rolagem vertical é adicionada. Default: `none`.
* __voiceID__ | `string`: identificador de controle de voz. Default: `none`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.
* __onSelect__ | `function`: Função invocada quando a mudança ativa é alterada. Recebe o novo índice de página ativa como parâmetro único. Default: `onSelect() {}`.


## Examples

```jsx live
<Pages title="Pages">
    <div>
        <h1>First Page</h1>
    </div>
    <div>
        <h1>Second Page</h1>
        <RShell />
    </div>
</Pages>
``` 



