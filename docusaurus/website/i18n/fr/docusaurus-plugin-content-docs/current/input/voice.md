---
id: voice-input
title: Voice Input
sidebar_label: Voice Input
---

Un élément de saisie vocale.

## Options

* __autorecord__ | `boolean`: contrôle si l'enregistrement doit commencer automatiquement. Default: `false`.
* __defaultValue__ | `string`: valeur de texte par défaut. Default: `''`.
* __grammars__ | `array`: liste de grammaire de la parole (non prise en charge). Default: `[]`.
* __legend__ | `(string|node)`: légende affichée devant le champ de saisie. Default: `''`.
* __mode__ | `string`: réglé sur "full" pour afficher un champ de saisie de texte à côté du microphone, "status" pour afficher uniquement une barre d'état avec les textes transcrits, "microphone" pour afficher juste un bouton pour basculer l'enregistrement, ou "no" lorsque la saisie vocale doit être invisible et purement contrôlée par des raccourcis clavier / commandes vocales. Default: `'full'`.
* __maxAlternatives__ | `number`: nombre maximum d'alternatives fournies par résultat de reconnaissance vocale. Default: `1`.
* __onChange__ | `function`: fonction de rappel invoquée lors de la mise à jour de la valeur de saisie du texte. Default: `onChange() {}`.
* __onClick__ | `function`: fonction de rappel invoquée en cliquant sur le bouton du microphone. Default: `onClick() {}`.
* __onFinalText__ | `function`: la fonction de rappel est invoquée une fois le texte final reçu. Default: `onFinalText() {}`.
* __onRecordingStart__ | `function`: fonction de rappel invoquée lors du démarrage de l'enregistrement. Default: `onRecordingStart() {}`.
* __onRecordingStop__ | `function`: la fonction de rappel est invoquée lorsque l'enregistrement est arrêté. Default: `onRecordingStop() {}`.
* __onSegment__ | `function`: fonction de rappel invoquée avec des segments de texte. Default: `onSegment() {}`.
* __onSubmit__ | `function`: fonction de rappel lors de la soumission de la valeur de saisie du texte en appuyant sur "Entrée".. Default: `onSubmit() {}`.
* __placeholder__ | `string`: placeholder de saisie de texte. Default: `none`.
* __remote__ | `object`: objet avec "start", "stop", et "toggle" et les raccourcis clavier associés. Default: `none`.
* __className__ | `string`: nom de la classe. Default: `''`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.
* __timeout__ | `number`: le nombre de millisecondes après lequel il faut interrompre l'enregistrement. Default: `none`.
* __stopTooltip__ | `string`: message d'info-bulle affiché pendant l'enregistrement. Default: `none`.
* __startTooltip__ | `string`: message d'info-bulle affiché lorsque l'enregistrement n'est pas en cours. Default: `none`.
* __tooltipPlacement__ | `string`: direction de l'infobulle. Default: `'left'`.
* __width__ | `number`: largeur de la saisie vocale (en px). Default: `500`.
* __height__ | `number`: hauteur d'entrée de la voix (en px). Default: `36`.


## Examples

```jsx live
<VoiceInput
    langage="en-US"
    defaultValue="Enter text"
/>
```



