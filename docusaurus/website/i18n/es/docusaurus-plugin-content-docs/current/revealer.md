---
id: revealer 
title: Revealer
sidebar_label: Revealer
---

Un componente de ISLE que los instructores pueden usar para revelar u ocultar selectivamente el contenido de los niños a todos los estudiantes durante la clase.

## Options

* __message__ | `(string|node)`: mensaje que se mostrará cuando el contenido esté oculto. Default: `none`.
* __show__ | `boolean`: controla si se muestran inicialmente los elementos infantiles. Default: `false`.


## Examples

```jsx live
<Revealer
        id="mudgelove"
    >
        <div>
            <h3>Content that will be revealed.</h3>
        </div>
</Revealer>
``` 

