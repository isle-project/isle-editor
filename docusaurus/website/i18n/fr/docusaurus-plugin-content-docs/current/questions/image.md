---
id: image-question 
title: Image Question
sidebar_label: Image Question
---

Une question qui demande à l'utilisateur de télécharger une image.

## Options

* __question__ | `(string|node)`: texte de la question. Default: `''`.
* __hintPlacement__ | `string`: l'emplacement des indices (soit "en haut", "à gauche", "à droite" ou "en bas"). Default: `'bottom'`.
* __hints__ | `array<(string|node)>`: des conseils sur la façon de répondre à la question. Default: `[]`.
* __feedback__ | `boolean`: contrôle l'affichage des boutons de rétroaction. Default: `true`.
* __chat__ | `boolean`: contrôle si l'élément doit avoir un chat intégré. Default: `false`.
* __disableSubmitNotification__ | `boolean`: contrôle si une notification doit être affichée après l'envoi d'une image. Default: `false`.
* __className__ | `string`: nom de la classe. Default: `''`.
* __sketchpad__ | `object`: propriétés à passer à <Sketchpad /> component ; pour rendre le sketchpad, passez au moins un objet vide `{}`. Default: `none`.
* __solution__ | `string`: image URL de la solution modèle. Default: `none`.
* __until__ | `Date`: le temps nécessaire pour permettre aux étudiants de soumettre des réponses. Default: `none`.
* __points__ | `number`: nombre maximum de points attribués dans le classement. Default: `10`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.
* __onSubmit__ | `function`: rappel invoqué lors de la soumission de la réponse ; a comme seul paramètre un "booléen" indiquant si les éléments ont été placés dans le bon ordre. Default: `onSubmit() {}`.


## Exemples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Sketchpad', value: 'witchSketchpad' },
        { label: 'Submit Plot', value: 'submitPlot' },
        { label: 'Solution', value: 'solution' },,
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<ImageQuestion question="You may upload an image." feedback={false}  />
```
</TabItem>

<TabItem value="witchSketchpad">

```jsx live
<ImageQuestion question="Please enter your signature." feedback={false} sketchpad={{ canvasHeight: 300}} />
```

</TabItem>

<TabItem value="submitPlot">

```jsx live
<div>
  <ScatterPlot  data={heartdisease} xval="Age" yval="Cost" />
  <ImageQuestion question="Please adjust the range of values to show, change the axis labels and title of the plot, and submit your result." />
</div>
```
</TabItem>

<TabItem value="solution">

```jsx live
<ImageQuestion solution="https://bit.ly/3utaXOb" question="Please enter the Greek letter 'Gamma'." feedback={false} sketchpad={{ canvasHeight: 300}} />
```
</TabItem>

</Tabs>
