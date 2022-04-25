---
id: gate 
title: Gate
sidebar_label: Gate
---

Un composant ISLE qui permet de présenter ses enfants uniquement à des publics réservés.

## Options

* __user__ | `boolean`: lorsque le contenu protégé est affiché aux utilisateurs. Default: `false`.
* __notUser__ | `boolean`: quand il est défini, le contenu protégé n'est **pas** affiché aux utilisateurs. Default: `false`.
* __enrolled__ | `boolean`: lorsqu'il est défini, le contenu du portail est affiché aux étudiants inscrits au cours. Default: `false`.
* __notEnrolled__ | `boolean`: lorsqu'il est défini, le contenu du portail n'est pas affiché aux étudiants inscrits au cours. Default: `false`.
* __owner__ | `boolean`: lorsqu'il est défini, le contenu protégé est affiché au propriétaire du cours (généralement l'instructeur). Default: `false`.
* __notOwner__ | `boolean`: lorsqu'il est défini, le contenu protégé n'est pas affiché au propriétaire du cours (généralement l'instructeur). Default: `false`.
* __after__ | `Date`: le temps après lequel le contenu de la porte devrait être visible. Default: `none`.
* __until__ | `Date`: le temps nécessaire pour que le contenu de la porte reste visible. Default: `none`.
* __banner__ | `node`: un message personnalisé qui est affiché aux visiteurs pour lesquels les enfants de la porte ne sont pas visibles au lieu du message par défaut.. Default: `none`.
* __disabled__ | `boolean`: si une porte est désactivée, la bannière sera affichée quoi qu'il arrive. Default: `false`.
* __showOwnerInPresentationMode__ | `boolean`: contrôle si le contenu de la porte doit être affiché en mode de présentation lorsque la porte est visible pour le "propriétaire. Default: `true`.
* __check__ | `function`: fonction de rappel renvoyant un "booléen" indiquant si la porte doit afficher les composants enfants ; la fonction est invoquée à chaque fois que des actions de session arrivent. Default: `none`.


## Exemples

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

