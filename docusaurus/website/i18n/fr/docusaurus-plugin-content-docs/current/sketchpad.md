---
id: sketchpad 
title: Sketchpad
sidebar_label: Sketchpad
---

Un carnet de croquis pour la prise de notes sur les diapositives des conférences ou les pages vides.

## Options

* __autoSave__ | `boolean`: contrôle si l'éditeur doit enregistrer le texte actuel dans la mémoire locale du navigateur à un intervalle de temps donné. Default: `true`.
* __feedbackButtons__ | `boolean`: contrôle l'affichage ou non des boutons de rétroaction sur chaque diapositive. Default: `false`.
* __intervalTime__ | `number`: temps entre les sauvegardes automatiques. Default: `10000`.
* __hideInputButtons__ | `boolean`: contrôle si les boutons de dessin et de saisie de texte doivent être masqués. Default: `false`.
* __hideNavigationButtons__ | `boolean`: contrôle si les boutons de navigation entre les pages doivent être masqués. Default: `false`.
* __hideSaveButtons__ | `boolean`: contrôle si les boutons de sauvegarde doivent être cachés. Default: `false`.
* __hideTransmitButtons__ | `boolean`: contrôle si les boutons de transmission des actions de l'utilisateur doivent être masqués. Default: `false`.
* __brushSize__ | `number`: taille du pinceau pour peindre. Default: `4`.
* __color__ | `string`: la couleur du pinceau et des textes. Default: `'#444444'`.
* __canvasWidth__ | `number`: largeur de l'élément de la toile (en px). Default: `1200`.
* __canvasHeight__ | `number`: hauteur de l'élément de la toile (en px). Default: `700`.
* __fullscreen__ | `boolean`: contrôle si la toile doit être automatiquement redimensionnée à la largeur et à la hauteur de la fenêtre du navigateur. Default: `false`.
* __fill__ | `string`: si "horizontal", remplir tout l'espace horizontal disponible lors du dessin d'un PDF ; si "vertical", tout l'espace vertical est utilisé pour éviter le débordement de l'axe des y. Default: `'vertical'`.
* __disabled__ | `boolean`: l'opportunité de rendre l'élément en lecture seule et d'interdire le dessin sur le carnet de croquis. Default: `false`.
* __fontFamily__ | `string`: famille de polices. Default: `'Arial'`.
* __fontSize__ | `number`: taille de la police. Default: `24`.
* __nodes__ | `object`: les composants à rendre sur les diapositives spécifiées ; les "clés" doivent correspondre aux numéros de page, les "valeurs" aux composants. Default: `{}`.
* __noPages__ | `number`: nombre initial de pages. Default: `1`.
* __pdf__ | `string`: lien vers le fichier PDF pour les fonds de page cuits. Default: `none`.
* __showTutorial__ | `boolean`: afficher le tutoriel pour le sketchpad au démarrage. Default: `false`.
* __dynamicallyHideButtons__ | `boolean`: contrôle si les boutons doivent être masqués lorsque la largeur de la barre d'outils n'est pas suffisante (sinon, une nouvelle ligne sera lancée). Default: `false`.
* __transmitOwner__ | `boolean`: si les actions du propriétaire doivent être transmises aux autres utilisateurs en temps réel. Default: `true`.
* __groupMode__ | `boolean`: contrôle si toutes les actions de l'utilisateur sont transmises à tous les autres. Default: `false`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.
* __onChange__ | `function`: rappel invoqué à chaque fois qu'un nouvel élément de ligne est tracé. Default: `onChange() {}`.


## Exemples

```jsx live
<Sketchpad canvasWidth={750} />
```

