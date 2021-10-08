---
id: pages 
title: Pages
sidebar_label: Pages
---

Um componente de paginação ISLE que permite que o usuário passe por uma seqüência de páginas.

## Opções

* __activePage__ | `number`: página ativa. Default: `1`.
* __disabled__ | `boolean`: controla se a barra de navegação está ativa ou não. Default: `false`.
* __title__ | `(string|node)`: título exibido do conteúdo das páginas. Default: `''`.
* __pagination__ | `string`: se mostrar a paginação ou na `top`, `bottom`, ou `both`. Default: `'top'`.
* __size__ | `string`: tamanho dos botões de paginação (ou `default`, `lg`, ou `sm`). Default: `'default'`.
* __height__ | `(number|string)`: a altura máxima do recipiente. Se uma página embutida for mais alta, uma barra de rolagem vertical é adicionada. Default: `none`.
* __style__ | `object`: Estilos em linha CSS. Default: `{}`.
* __onSelect__ | `function`: Função invocada quando a mudança ativa é alterada. Recebe o novo índice de página ativa como parâmetro único. Default: `onSelect() {}`.


## Exemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Custom Pagination', value: 'customPagination' },
        { label: 'With CSS', value: 'withCSS' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Pages title="Pages" >
    <div>
        <h1>First Page</h1>
    </div>
    <div>
        <h1>Second Page</h1>
    </div>
    <div>
        <h1>Third Page</h1>
    </div>
</Pages>
```

</TabItem>

<TabItem value="customPagination" >

```jsx live
<Pages title="Questions" pagination="both" size="sm" >
    <div>
        <NumberQuestion
            question="What is the number PI (at least up to three digits after the decimal point)?"
            solution={Math.PI}
            digits={3}
        />
    </div>
    <div>
        <FreeTextQuestion 
            question="Is this question displayed on the second page?"
            solution="Yes" 
        />
    </div>
</Pages>
```
</TabItem>

<TabItem value="withCSS">

```jsx live
<Pages 
    activePage={2}
    style={{ background: 'lightblue', height: 420, outline: '4px solid black' }} 
    title="Styled Pages"
>
    <div>
        <h1>First Page</h1>
    </div>
    <div>
        <h1>Second Page</h1>
    </div>
    <div>
        <h1>Third Page</h1>
    </div>
</Pages>
```

</TabItem>

</Tabs>

