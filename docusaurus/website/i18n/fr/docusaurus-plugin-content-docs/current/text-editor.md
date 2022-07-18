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
* __history__ | `boolean`: contrôle si l'éditeur doit inclure une vue historique. Default: `true`.
* __mode__ | `string`: contrôle le mode d'édition du texte (soit `individual` pour un document personnel, `group` pour un document par groupes, `collaborative` pour un document unique pour tous, ou `cohort` pour un document par cohorte). Default: `'individual'`.
* __resetModal__ | `{title,body,buttonLabel,notificationTitle,notification,tooltip}`: objet pour la personnalisation du mode de réinitialisation du document (ne doit généralement pas être modifié). Default: `none`.
* __sendSubmissionEmails__ | `boolean`: contrôle l'envoi éventuel de courriels de confirmation avec sortie PDF/HTML lors de la soumission. Default: `false`.
* __voiceTimeout__ | `number`: temps en millisecondes après l'insertion d'un morceau d'entrée vocale enregistrée. Default: `5000`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.


## Exemples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Default Value', value: 'defaultValue' },
        { label: 'Mode', value: 'mode' },
        { label: 'With Style', value: 'withStyle' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<TextEditor  />
```

</TabItem>

<TabItem value="defaultValue">

```jsx live
<TextEditor defaultValue={`# Welcome!

This is a text that uses **markdown**

## Second Heading Level

[Wikipedia Link](https://https://www.wikipedia.org/).
`} />
```

</TabItem>

<TabItem value="mode">

```jsx live
<TextEditor defaultValue="This is reserved for an individual. But you can also allow groups, students cohorts, or everybody to join in and work collaboratively (setting the mode option will only have an effect in a live lesson, not this preview)." 
mode="individual" />
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<TextEditor  
  defaultValue="[Generate CSS-Gradients Online!](https://cssgradient.io/)"
  style={{ 
    background: 'green',
    background: 'radial-gradient(circle, rgba(251,213,112,0.7315301120448179) 0%,rgba(83,199,14,0.4514180672268907) 100%)' 
  }}
/>
```

</TabItem>

</Tabs>
