---
id: text-editor
title: Text Editor
sidebar_label: Text Editor
---

Un éditeur de texte pour la rédaction de notes ou de rapports. Prend en charge l'exportation des notes sous forme de fichiers HTML ou PDF, ainsi que la soumission automatique au serveur ISLE.

## Options

* __allowSubmissions__ | `boolean`: contrôle si les étudiants peuvent soumettre leurs rapports au serveur. Default: `true`.
* __canLoadHTML__ | `boolean`: contrôle l'affichage ou non d'un bouton permettant de charger un fichier HTML enregistré dans l'éditeur. Default: `true`.
* __defaultValue__ | `string`: texte par défaut de l'éditeur. Default: `'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'`.
* __mode__ | `string`: contrôle le mode d'édition du texte (soit `individual` pour un document personnel, `group` pour un document par groupes, `collaborative` pour un document unique pour tous, ou `cohort` pour un document par cohorte). Default: `'individual'`.
* __resetModal__ | `{title,body,buttonLabel,notificationTitle,notification,tooltip}`: undefined. Default: `none`.
* __voiceTimeout__ | `number`: temps en millisecondes après l'insertion d'un morceau d'entrée vocale enregistrée. Default: `5000`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.


## Examples

```jsx live
<TextEditor />
```

