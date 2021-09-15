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
* __showOwnerInPresentationMode__ | `boolean`: contrôle si le contenu de la porte doit être affiché en mode de présentation lorsque la porte est visible pour le "propriétaire. Default: `false`.
* __check__ | `function`: fonction de rappel renvoyant un "booléen" indiquant si la porte doit afficher les composants enfants ; la fonction est invoquée à chaque fois que des actions de session arrivent. Default: `none`.


## Exemples

```jsx live
<Gate 
    banner={<h2>You have to be logged in to see the content</h2>}
    user 
>
    <h1>For users only</h1>
</Gate>
``` 



