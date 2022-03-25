---
id: data-table 
title: Data Table
sidebar_label: Data Table
---

Um componente renderizando dados em um display tabular. Construído sobre [reapresentar] (https://react-table.js.org/).

## Opções

* __data__ | `(array|object) (required)`: Um objeto de dados ou array a ser visualizado. Se for um objeto, as chaves correspondem aos valores das colunas, enquanto uma matriz esperará uma matriz de objetos com um campo nomeado correspondente a cada coluna. Default: `none`.
* __dataInfo__ | `object`: objeto com "info" string array descrevendo o conjunto de dados, o "nome" do conjunto de dados, um "objeto" de "variáveis" com chaves correspondentes a nomes de variáveis e valores para descrições de variáveis, um "showOnStartup" booleano controlando a exibição do modal de informações na inicialização. Default: `{
  'info': [],
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __deletable__ | `boolean`: controla se as colunas para as quais não existem `info` têm um botão que, quando clicado, chama a função `onColumnDelete' callback. Default: `false`.
* __undeletableVars__ | `array<string>`: matriz de nomes variáveis de colunas que não podem ser apagadas. Default: `[]`.
* __filterable__ | `boolean`: controla se as colunas são filtráveis. Default: `true`.
* __editable__ | `array`: matriz de nomes para colunas que devem ser editáveis. Default: `[]`.
* __getTrProps__ | `function`: undefined. Default: `none`.
* __onColumnDrag__ | `function`: função invocada quando uma coluna foi arrastada para uma posição diferente. Default: `onColumnDrag() {}`.
* __onColumnDelete__ | `function`: função invocada com o nome de uma coluna quando o respectivo botão de exclusão de uma coluna é clicado. Default: `onColumnDelete() {}`.
* __onColumnNameChange__ | `function`: função invocada quando uma coluna foi renomeada (chamada com o antigo nome como primeiro e o novo nome como segundo argumento). Default: `onColumnNameChange() {}`.
* __onClickRemove__ | `function`: função que especifica uma ação a ser tomada para linhas removidas dos dados (padrão para uma função vazia). Default: `onClickRemove() {}`.
* __onEdit__ | `function`: função invocada com o conjunto de dados atualizados depois que o valor de uma célula foi alterado pelo usuário (só se aplica quando a tabela é "editável"). Default: `onEdit() {}`.
* __onTutorialCompletion__ | `function`: função invocada quando o usuário tiver completado o tutorial da tabela de dados. Default: `onTutorialCompletion() {}`.
* __filters__ | `array`: conjunto de filtros. Default: `[]`.
* __onFilteredChange__ | `function`: função invocada com os filtros atuais depois que os dados foram filtrados pelo usuário. Default: `onFilteredChange() {}`.
* __showRemove__ | `boolean`: indica se devem ser exibidas caixas de seleção para as linhas a serem removidas. Default: `false`.
* __showIdColumn__ | `boolean`: controla se deve mostrar uma coluna de identificação. Default: `true`.
* __disableDownload__ | `boolean`: se ocultar o botão para baixar os dados como um arquivo CSV ou JSON. Default: `false`.
* __className__ | `string`: nome da classe. Default: `''`.
* __style__ | `object`: Um objeto que permite um estilo css personalizado. Padrão para um objeto vazio. Default: `{}`.


## Exemplos

```jsx live
<DataTable
    showRemove
    onClickRemove={( data ) => { console.log(data); }}
    data={{ 
        firstName: [ 'Hans', 'Lotti', 'Fritz' ], 
        lastName: [ 'Bauer', 'Müller', 'Schultz' ],
        age: [ 37, 55, 62 ]
    }}
    style={{ width: 600 }}
/>
```

