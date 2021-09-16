---
id: gate 
title: Gate
sidebar_label: Gate
---

Un componente de la ISLE que permite mostrar a sus hijos sólo a audiencias reservadas.

## Opciones

* __user__ | `boolean`: cuando se establece el contenido de la puerta se muestra a los usuarios. Default: `false`.
* __notUser__ | `boolean`: cuando se establece, el contenido de la puerta se **no** muestra a los usuarios. Default: `false`.
* __enrolled__ | `boolean`: cuando se establece, el contenido de la puerta se muestra a los estudiantes inscritos en el curso. Default: `false`.
* __notEnrolled__ | `boolean`: cuando se establece el contenido de la puerta no se muestra a los estudiantes matriculados en el curso. Default: `false`.
* __owner__ | `boolean`: cuando se establece, el contenido de la puerta se muestra al propietario del curso (normalmente el instructor). Default: `false`.
* __notOwner__ | `boolean`: cuando se establece, el contenido de la puerta no se muestra al propietario del curso (normalmente el instructor). Default: `false`.
* __after__ | `Date`: tiempo después del cual el contenido de la puerta debe ser visible. Default: `none`.
* __until__ | `Date`: tiempo hasta que el contenido de la puerta debe permanecer visible. Default: `none`.
* __banner__ | `node`: un mensaje personalizado que se muestra a los visitantes para los que los hijos de la puerta no son visibles en lugar del mensaje por defecto. Default: `none`.
* __disabled__ | `boolean`: si una puerta está desactivada, la bandera se mostrará sin importar lo que pase. Default: `false`.
* __showOwnerInPresentationMode__ | `boolean`: controla si mostrar el contenido de la puerta en el modo de presentación cuando la puerta es visible para los "propietarios". Default: `false`.
* __check__ | `function`: función de devolución de llamada que devuelve un "booleano" que indica si la puerta debe mostrar los componentes hijo; la función se invoca cada vez que llegan las acciones de la sesión. Default: `none`.


## Ejemplos

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Timed', value: 'timed' },
        { label: 'Hidden', value: 'hidden' },
        { label: 'Custom Banner', value: 'customBanner' },
        { label: 'Custom Check', value: 'customCheck' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Gate enrolled >
    <h1>Content for users enrolled in a cohort of the course</h1>
</Gate>
```

</TabItem>

<TabItem value="timed">

```jsx live
<Gate
    after={date({ year: 2020, month: 9, day: 1, hour: 9, minute: 30, second: 0, utcOffset: 4 })}
    until={date({ year: 2020, month: 12, day: 20, hour: 9, minute: 30, second: 0, utcOffset: 5 })}
>
    # Only visible in Fall 2020 semester
</Gate>
```

</TabItem>

<TabItem value="hidden">

```jsx live
<Gate banner={null} owner >
    <h1>Content for owners without a message for others</h1>
</Gate>
```

</TabItem>

<TabItem value="customBanner">

```jsx live
<Gate owner banner={<h3>Only visible by course owners...</h3>} >
    <h1> User Analytics </h1>
</Gate>
```

</TabItem>

<TabItem value="customCheck">

```jsx live
<Gate check={( ) => {
    return session.user.email === 'admin@cmu.edu';
}} >
    <h1> User Analytics only visible to specified user</h1>
</Gate>
```

</TabItem>

</Tabs>

