---
id: lesson-submit 
title: Lesson Submit
sidebar_label: Lesson Submit
---

Un bouton qui s'affiche à la fin d'une leçon et sur lequel les élèves peuvent cliquer. Par défaut, un message confirmant la fin de la leçon est envoyé à leur adresse électronique.

## Options

* __coverage__ | `array<string>`: liste des identifiants à soumettre et à inclure dans le document de réponse. Default: `none`.
* __label__ | `string`: étiquette du bouton d'envoi. Default: `none`.
* __message__ | `string`: message pour le courrier électronique de confirmation. Default: `''`.
* __requireLogin__ | `boolean`: contrôle si l'utilisateur doit être connecté pour que le bouton soit actif (pour les utilisateurs anonymes, aucune confirmation par courriel n'est envoyée). Default: `true`.
* __sendConfirmationEmail__ | `boolean`: contrôle l'envoi éventuel d'un courriel de confirmation lors de la soumission de la leçon. Default: `true`.
* __className__ | `string`: nom de la classe. Default: `''`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.
* __onClick__ | `function`: rappel invoqué lors du clic sur le bouton de soumission. Default: `onClick() {}`.


## Exemples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Custom Label', value: 'customLabel' },
        { label: 'Email Feedback', value: 'emailFeedback' },
        { label: 'With Callback', value: 'withCallback' }
    ]}
    lazy
>
<TabItem value="minimal">

```jsx live
<LessonSubmit />
```

</TabItem>

<TabItem value="customLabel">

```jsx live
<LessonSubmit label="Click to submit" />
```

</TabItem>

<TabItem value="withEmail">

```jsx live
<LessonSubmit 
    style={{ outline: '4px solid black'}}
    message={`
    Hi,
    I am very glad that you solved this lesson. Congratulations! 
    It was a sophisticated one.
    If you want some help how to use ISLE, have a look a 
    [this site](https://isledocs.com/docs/)
    
    Best
    The ISLE team
    `}
    label="Click to submit" />
```
</TabItem>

<TabItem value="withCallback">

```jsx live
<LessonSubmit 
    requireLogin={false}
    onClick={() => {
        alert( 'The Button has been clicked...' );
    }}
    label="Click to submit" />
```
</TabItem>

</Tabs>
