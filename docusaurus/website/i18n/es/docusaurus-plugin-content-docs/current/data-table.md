---
id: data-table 
title: Data Table
sidebar_label: Data Table
---

Un componente que presenta los datos en una tabla. Construido sobre [react-table](https://react-table.js.org/).

## Opciones

* __data__ | `(array|object) (required)`: Un objeto o conjunto de datos para ser visto. Si es un objeto, las claves corresponden a los valores de las columnas, mientras que una matriz esperará una matriz de objetos con un campo nombrado correspondiente a cada columna. Default: `none`.
* __dataInfo__ | `object`: un objeto con una matriz de cadenas "info" que describe el conjunto de datos, el "nombre" del conjunto de datos, un "objeto" de "variables" con claves que corresponden a los nombres de las variables y valores a las descripciones de las variables, un booleano "showOnStartup" que controla si se debe mostrar el modo info al inicio. Default: `{
  'info': [],
  'name': '',
  'variables': null,
  'showOnStartup': false
}`.
* __deletable__ | `boolean`: controla si las columnas para las que no existe un "info" tienen un botón que cuando se pulsa llama a la función de devolución de llamada "onColumnDelete". Default: `false`.
* __undeletableVars__ | `array<string>`: conjunto de nombres de variables de las columnas que no pueden ser suprimidas. Default: `[]`.
* __filterable__ | `boolean`: controla si las columnas son filtrables. Default: `true`.
* __editable__ | `array`: una serie de nombres para las columnas que serán editables. Default: `[]`.
* __getTrProps__ | `function`: undefined. Default: `none`.
* __onColumnDrag__ | `function`: función invocada cuando una columna ha sido arrastrada a una posición diferente. Default: `onColumnDrag() {}`.
* __onColumnDelete__ | `function`: función que se invoca con el nombre de una columna cuando se hace clic en el respectivo botón de eliminación de una columna. Default: `onColumnDelete() {}`.
* __onColumnNameChange__ | `function`: función que se invoca cuando una columna ha sido renombrada (llamada con el nombre antiguo como primer y nuevo nombre como segundo argumento). Default: `onColumnNameChange() {}`.
* __onClickRemove__ | `function`: función que especifica una acción a tomar para las filas eliminadas de los datos (por defecto una función vacía). Default: `onClickRemove() {}`.
* __onEdit__ | `function`: función invocada con el conjunto de datos actualizados después de que el valor de una celda haya sido cambiado por el usuario (sólo se aplica cuando la tabla es `editable`). Default: `onEdit() {}`.
* __onTutorialCompletion__ | `function`: función invocada cuando el usuario ha completado el tutorial de la tabla de datos. Default: `onTutorialCompletion() {}`.
* __filters__ | `array`: matriz de filtros. Default: `[]`.
* __onFilteredChange__ | `function`: función invocada con los filtros actuales después de que los datos hayan sido filtrados por el usuario. Default: `onFilteredChange() {}`.
* __showRemove__ | `boolean`: indica si se deben mostrar casillas de verificación para las filas que se van a eliminar. Default: `false`.
* __showIdColumn__ | `boolean`: controla si se muestra una columna de identificación. Default: `true`.
* __disableDownload__ | `boolean`: si ocultar el botón para descargar los datos como un archivo CSV o JSON. Default: `false`.
* __className__ | `string`: nombre de la clase. Default: `''`.
* __style__ | `object`: Un objeto que permite un estilo css personalizado. Por defecto, un objeto vacío. Default: `{}`.


## Ejemplos

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

