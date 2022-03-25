---
id: data-table 
title: Data Table
sidebar_label: Data Table
---

Компонент, който визуализира данни в табличен вид. Изграден върху [react-table](https://react-table.js.org/).

## Опции

* __data__ | `(array|object) (required)`: Обект или масив от данни, който трябва да се прегледа. Ако е обект, ключовете съответстват на стойностите на колоните, докато при масив се очаква масив от обекти с именувано поле, съответстващо на всяка колона.. Default: `none`.
* __dataInfo__ | `object`: обект с `info` масив от низове, описващ набора от данни, `името` на набора от данни, `обект` от `променливи` с ключове, съответстващи на имената на променливите, и стойности на описанията на променливите, както и булев `showOnStartup`, контролиращ дали да се покаже информационният модал при стартиране. Default: `{
  'info': [],
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __deletable__ | `boolean`: контролира дали колоните, за които не съществува `инфо`, имат бутон, който при щракване извиква функцията за обратна връзка `onColumnDelete`.. Default: `false`.
* __undeletableVars__ | `array<string>`: масив от имена на променливи на колони, които не могат да се изтриват. Default: `[]`.
* __filterable__ | `boolean`: контролира дали колоните могат да се филтрират.. Default: `true`.
* __editable__ | `array`: масив от имена на колони, които могат да се редактират. Default: `[]`.
* __getTrProps__ | `function`: undefined. Default: `none`.
* __onColumnDrag__ | `function`: функция, задействана при плъзгане на колона до различна позиция. Default: `onColumnDrag() {}`.
* __onColumnDelete__ | `function`: функция, извикана с името на колона, когато е щракнат съответният бутон за изтриване на колона. Default: `onColumnDelete() {}`.
* __onColumnNameChange__ | `function`: функция, която се извиква при преименуване на колона (извиква се със старото име като първи и новото име като втори аргумент). Default: `onColumnNameChange() {}`.
* __onClickRemove__ | `function`: функция, указваща действието, което да се предприеме за редовете, премахнати от данните (по подразбиране е празна функция). Default: `onClickRemove() {}`.
* __onEdit__ | `function`: функция, извикана с актуализирания набор от данни, след като потребителят е променил стойността на дадена клетка (прилага се само когато таблицата е `редактируема`). Default: `onEdit() {}`.
* __onTutorialCompletion__ | `function`: функция, задействана, когато потребителят е завършил урока за таблицата с данни. Default: `onTutorialCompletion() {}`.
* __filters__ | `array`: масив от филтри. Default: `[]`.
* __onFilteredChange__ | `function`: функция, извикана с текущите филтри, след като данните са били филтрирани от потребителя. Default: `onFilteredChange() {}`.
* __showRemove__ | `boolean`: указва дали да се показват квадратчета за отметка за редовете, които трябва да се премахнат.. Default: `false`.
* __showIdColumn__ | `boolean`: контролира дали да се показва колона ID. Default: `true`.
* __disableDownload__ | `boolean`: дали да се скрие бутонът за изтегляне на данните като CSV или JSON файл. Default: `false`.
* __className__ | `string`: име на класа. Default: `''`.
* __style__ | `object`: Обект, позволяващ персонализирано стилизиране на CSS. По подразбиране е празен обект. Default: `{}`.


## Примери

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

