---
id: data-table 
title: Data Table
sidebar_label: Data Table
---

データを表形式で表示するコンポーネント。react-table](https://react-table.js.org/) の上に構築されています。

## オプション

* __data__ | `(array|object) (required)`: 表示されるデータオブジェクトまたは配列。オブジェクトの場合はキーがカラムの値に対応し、配列の場合は各カラムに対応する名前付きフィールドを持つオブジェクトの配列となります。. Default: `none`.
* __dataInfo__ | `object`: オブジェクトには、データセットを記述する文字列配列 `info`、データセットの `name`、変数名に対応するキーと変数の説明に対応する値を持つ `変数` の `object`、起動時に情報モーダルを表示するかどうかを制御するブール値 `showOnStartup` が含まれます。. Default: `{
  'info': [],
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __deletable__ | `boolean`: info` が存在しないカラムにボタンがあるかどうかを制御します。. Default: `false`.
* __undeletableVars__ | `array<string>`: 削除されないカラムの変数名の配列. Default: `[]`.
* __filterable__ | `boolean`: カラムがフィルタリング可能かどうかを制御します。. Default: `true`.
* __editable__ | `array`: 編集可能なカラム名の配列. Default: `[]`.
* __getTrProps__ | `function`: undefined. Default: `none`.
* __onColumnDrag__ | `function`: カラムが別の位置にドラッグされたときに呼び出される関数. Default: `onColumnDrag() {}`.
* __onColumnDelete__ | `function`: カラムのそれぞれの削除ボタンがクリックされたときに、そのカラムの名前で呼び出される関数. Default: `onColumnDelete() {}`.
* __onColumnNameChange__ | `function`: カラムの名前が変更されたときに呼び出される関数 (古い名前を第一引数、新しい名前を第二引数として呼び出されます). Default: `onColumnNameChange() {}`.
* __onClickRemove__ | `function`: データから削除された行に対するアクションを指定する関数 (デフォルトは空の関数). Default: `onClickRemove() {}`.
* __onEdit__ | `function`: 関数は、ユーザによってセルの値が変更された後、更新されたデータセットで呼び出されます (テーブルが `編集可能` の場合にのみ適用されます)。. Default: `onEdit() {}`.
* __onTutorialCompletion__ | `function`: データテーブルのチュートリアルが完了したときに呼び出される関数. Default: `onTutorialCompletion() {}`.
* __filters__ | `array`: フィルタの配列. Default: `[]`.
* __onFilteredChange__ | `function`: 関数. Default: `onFilteredChange() {}`.
* __showRemove__ | `boolean`: は、削除する行のチェックボックスを表示するかどうかを示します。. Default: `false`.
* __showIdColumn__ | `boolean`: IDカラムを表示するかどうかを制御します。. Default: `true`.
* __disableDownload__ | `boolean`: データをCSVまたはJSONファイルとしてダウンロードするボタンを非表示にするかどうか. Default: `false`.
* __className__ | `string`: クラス名. Default: `''`.
* __style__ | `object`: カスタム css スタイリングを可能にするオブジェクト。デフォルトは空のオブジェクト. Default: `{}`.


## 例としては、以下のようなものがあります。

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

