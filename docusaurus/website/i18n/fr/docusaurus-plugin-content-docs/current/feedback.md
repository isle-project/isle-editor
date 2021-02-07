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
* __vertical__ | `boolean`: sont affichés verticalement s'ils sont réglés sur "true".. Default: `false`.
* __className__ | `string`: nom de la classe. Default: `''`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.


## Examples

```jsx live
<Panel>
  Lorem ipsum....
  <FeedbackButtons
    id="my_feedback" 
  />
</Panel>
```

