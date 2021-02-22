---
id: timer 
title: Timer
sidebar_label: Timer
---

Affiche une minuterie qui déclenche un rappel prédéfini lorsque le temps est écoulé. Un exemple de cas d'utilisation est le chronométrage des quiz.

## Options

* __id__ | `string`: l'identification unique de la "chaîne" pour le minuteur. Si un ID est défini, le composant de la minuterie est persistant sur les rafraîchissements de page. Default: `none`.
* __active__ | `boolean (required)`: drapeau qui peut être basculé pour démarrer ou mettre en pause le minuteur. Default: `none`.
* __belowZero__ | `boolean`: contrôle si la minuterie continue à compter après l'épuisement de la durée. Default: `false`.
* __duration__ | `number (required)`: durée en secondes pour la minuterie. Default: `none`.
* __invisible__ | `boolean`: contrôle si la minuterie doit être cachée. Default: `false`.
* __legend__ | `string`: texte affiché devant la minuterie. Default: `''`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.
* __onTimeUp__ | `function`: rappel invoqué lorsque le délai est écoulé. Default: `onTimeUp() {}`.


## Exemples

```jsx live
<Timer 
    id='test-quiz'
    active={true} 
    duration={50} 
    onTimeUp={() => {
      alert( 'done' );
    }}
/>
```

