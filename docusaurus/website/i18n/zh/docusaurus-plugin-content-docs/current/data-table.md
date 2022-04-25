---
id: data-table 
title: Data Table
sidebar_label: Data Table
---

一个以表格形式显示数据的组件。建立在[react-table](https://react-table.js.org/)之上。

## 选项

* __data__ | `(array|object) (required)`: 要查看的数据对象或数组。如果是对象，键对应于列值，而数组则是一个对象数组，每个列对应一个命名字段。. Default: `none`.
* __dataInfo__ | `object`: 对象中包含描述数据集的 "info "字符串数组、数据集的 "name"、"variables "的 "object"，其键值与变量名称和变量描述相对应，一个 "showOnStartup "布尔值控制是否在启动时显示信息模式。. Default: `{
  'info': [],
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __deletable__ | `boolean`: 控制不存在 "info "的列是否有按钮，点击后调用 "onColumnDelete "回调函数。. Default: `false`.
* __undeletableVars__ | `array<string>`: 不可删除的列的变量名数组。. Default: `[]`.
* __filterable__ | `boolean`: 控制栏目是否可过滤. Default: `true`.
* __editable__ | `array`: 可编辑的列名数组。. Default: `[]`.
* __getTrProps__ | `function`: 为每一行执行的回调函数，以定制其风格（传递表状态、行信息。
列，以及表格实例）。. Default: `none`.
* __onColumnDrag__ | `function`: 当一列被拖动到不同位置时调用的函数。. Default: `onColumnDrag() {}`.
* __onColumnDelete__ | `function`: 当点击列的删除按钮时，调用列名的函数。. Default: `onColumnDelete() {}`.
* __onColumnNameChange__ | `function`: 当一列被重新命名时调用的函数（调用时将旧名称作为第一个参数，新名称作为第二个参数）。. Default: `onColumnNameChange() {}`.
* __onClickRemove__ | `function`: 指定对从数据中删除的行进行操作的函数（默认为空函数）。. Default: `onClickRemove() {}`.
* __onEdit__ | `function`: 在用户改变单元格的值后，调用更新数据集的函数(仅适用于表为 "可编辑 "时). Default: `onEdit() {}`.
* __onTutorialCompletion__ | `function`: 当用户完成数据表教程时调用的函数。. Default: `onTutorialCompletion() {}`.
* __filters__ | `array`: 滤波器阵列. Default: `[]`.
* __onFilteredChange__ | `function`: 在数据被用户过滤后，调用当前过滤器的函数。. Default: `onFilteredChange() {}`.
* __showRemove__ | `boolean`: 表示是否显示要删除的行的复选框。. Default: `false`.
* __showIdColumn__ | `boolean`: 控制是否显示ID列. Default: `true`.
* __disableDownload__ | `boolean`: 是否隐藏按钮以CSV或JSON文件的形式下载数据。. Default: `false`.
* __className__ | `string`: 班名. Default: `''`.
* __style__ | `object`: 一个允许自定义css样式的对象。默认为空对象。. Default: `{}`.


## 例子

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

