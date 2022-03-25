---
id: data-table 
title: Data Table
sidebar_label: Data Table
---

Компонент, отображающий данные в табличной форме. Построен поверх [react-table](https://react-table.js.org/).

## Варианты

* __data__ | `(array|object) (required)`: Объект данных или массив для просмотра. Если это объект, то ключи соответствуют значениям столбцов, в то время как массив будет ожидать массив объектов с именованным полем, соответствующим каждому столбцу. Default: `none`.
* __dataInfo__ | `object`: объект со строковым массивом `info`, описывающим набор данных, `name` набора данных, `object` из `переменных` с ключами, соответствующими именам переменных и значениям описаний переменных, `showOnStartup` булевой контроль того, отображать ли инфомодаль при запуске. Default: `{
  'info': [],
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __deletable__ | `boolean`: управляет тем, есть ли у столбцов, для которых нет `инфо`, кнопка, которая при нажатии вызывает функцию обратного вызова `в столбце Удалить`. Default: `false`.
* __undeletableVars__ | `array<string>`: массив имен переменных колонок, которые не могут быть удалены. Default: `[]`.
* __filterable__ | `boolean`: контролирует фильтруемость колонн. Default: `true`.
* __editable__ | `array`: массив имён для колонок, которые должны быть редактируемыми. Default: `[]`.
* __getTrProps__ | `function`: undefined. Default: `none`.
* __onColumnDrag__ | `function`: функция, вызываемая при перетаскивании колонки в другое место. Default: `onColumnDrag() {}`.
* __onColumnDelete__ | `function`: функция, вызываемая с именем колонки при нажатии соответствующей кнопки удаления колонки. Default: `onColumnDelete() {}`.
* __onColumnNameChange__ | `function`: функция, вызываемая при переименовании колонки (вызывается со старым именем в качестве первого и новым именем в качестве второго аргумента). Default: `onColumnNameChange() {}`.
* __onClickRemove__ | `function`: функция, указывающая действие для удаленных из данных строк (по умолчанию - пустая функция). Default: `onClickRemove() {}`.
* __onEdit__ | `function`: функция, вызываемая с обновленным набором данных после того, как значение ячейки было изменено пользователем (применяется только в том случае, если таблица `редактируемая`). Default: `onEdit() {}`.
* __onTutorialCompletion__ | `function`: функция, вызываемая после завершения работы с таблицей данных. Default: `onTutorialCompletion() {}`.
* __filters__ | `array`: массив фильтров. Default: `[]`.
* __onFilteredChange__ | `function`: функция, вызываемая текущими фильтрами после того, как данные отфильтрованы пользователем. Default: `onFilteredChange() {}`.
* __showRemove__ | `boolean`: указывает, следует ли отображать флажки для удаления строк. Default: `false`.
* __showIdColumn__ | `boolean`: управляет отображением идентификационной колонки. Default: `true`.
* __disableDownload__ | `boolean`: скрыть ли кнопку загрузки данных в виде CSV или JSON файла. Default: `false`.
* __className__ | `string`: название класса. Default: `''`.
* __style__ | `object`: Объект, позволяющий создавать пользовательский стиль css. По умолчанию пустой объект. Default: `{}`.


## Примеры

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

