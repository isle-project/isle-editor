---
id: file-question 
title: File Question
sidebar_label: File Question
---

Une question qui demande à l'utilisateur de télécharger un fichier.

## Options

* __question__ | `(string|node)`: la question affichée en haut de la composante question du fichier. Default: `''`.
* __hintPlacement__ | `string`: le placement des indices (soit `top`, `left`, `right`, ou `bottom`). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: des indications sur la manière de répondre à la question. Default: `[]`.
* __feedback__ | `boolean`: contrôle l'affichage ou non des boutons de retour d'information. Default: `true`.
* __chat__ | `boolean`: contrôle si l'élément doit avoir un chat intégré. Default: `false`.
* __accept__ | `string`: liste, séparée par des virgules, d'[identifiants de fichiers uniques] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers) acceptés par le composant (par exemple, "image/*", ".pdf" ou "audio/*"). Default: `'*/*'`.
* __until__ | `Date`: le délai dans lequel les étudiants doivent être autorisés à soumettre leurs réponses. Default: `none`.
* __points__ | `number`: nombre maximum de points attribués dans la notation. Default: `10`.
* __className__ | `string`: nom de la classe. Default: `''`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.
* __onChange__ | `function`: callback à invoquer lors de la réception d'un fichier. Default: `onChange() {}`.


## Exemples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Only PDFs', value: 'onlyPDF' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<FileQuestion question="You may upload a file." feedback={false}  />
```
</TabItem>

<TabItem value="onlyPDF">

```jsx live
<FileQuestion question="Please upload a PDF file." feedback={false} accept=".pdf" />
```

</TabItem>

</Tabs>
