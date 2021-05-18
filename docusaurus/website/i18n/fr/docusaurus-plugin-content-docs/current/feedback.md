---
id: feedback 
title: Feedback Buttons
sidebar_label: Feedback Buttons
---

Boutons pour recueillir les commentaires des utilisateurs.

## Options

* __confusedMsg__ | `string`: message à afficher dans l'info-bulle pour le bouton "Confus. Default: `none`.
* __feedbackMsg__ | `string`: message à afficher dans l'info-bulle pour le bouton de retour détaillé. Default: `none`.
* __understoodMsg__ | `string`: message à afficher dans l'infobulle pour le bouton "Compris. Default: `none`.
* __customFeedback__ | `boolean`: contrôle si le composant accepte un retour d'information personnalisé. Default: `true`.
* __vertical__ | `boolean`: sont affichés verticalement s'ils sont réglés sur "true". Default: `false`.
* __className__ | `string`: nom de la classe. Default: `''`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.


## Exemples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Vertical', value: 'Vertical' },
        { label: 'Feedback Everywhere', value: 'feedbackEverywhere' },
        { label: 'Customized Style and Labels', value: 'fullyCustomized' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Panel>
  A panel with user feedback....
  <FeedbackButtons
    id="my_feedback" 
  />
</Panel>
```

</TabItem>

<TabItem value="Vertical">

```jsx live
<Panel>
  Lorem ipsum....
  <FeedbackButtons
    id="my_feedback" 
    vertical
  />
</Panel>
```
</TabItem>

<TabItem value="feedbackEverywhere">

```jsx live
<Panel style={{ width: 680}}>

<VideoPlayer
    url="https://youtu.be/Lkj8b25ppZo"
    controls
/>

  to get some user feedback....
  <FeedbackButtons
    id="my_feedback" 
  />

</Panel>
```
</TabItem>

<TabItem value="fullyCustomized">

```jsx live
<Panel>
  Lorem ipsum....
  <FeedbackButtons
    style={{ boxShadow: '0 0 12px red' }}
    id="my_feedback"  
    feedbackMsg="You can customize the feedback tooltip!"
    understoodMsg="Tell me you got it!" 
    confusedMsg="Click me if your are confused!" 
  />
</Panel>
```
</TabItem>

</Tabs>
