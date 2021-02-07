---
id: lesson-submit 
title: Lesson Submit
sidebar_label: Lesson Submit
---

Un bouton qui s'affiche à la fin d'une leçon et sur lequel les élèves peuvent cliquer. Par défaut, un message confirmant la fin de la leçon est envoyé à leur adresse électronique.

## Options

* __label__ | `string`: étiquette du bouton d'envoi. Default: `none`.
* __message__ | `string`: message pour le courrier électronique de confirmation. Default: `''`.
* __requireLogin__ | `boolean`: contrôle si l'utilisateur doit être connecté pour que le bouton soit actif (pour les utilisateurs anonymes, aucune confirmation par courriel n'est envoyée). Default: `true`.
* __sendConfirmationEmail__ | `boolean`: contrôle l'envoi éventuel d'un courriel de confirmation lors de la soumission de la leçon. Default: `true`.
* __className__ | `string`: nom de la classe. Default: `''`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.
* __onClick__ | `function`: rappel invoqué lors du clic sur le bouton de soumission. Default: `onClick() {}`.


## Examples

```jsx live
<LessonSubmit />
```

