---
id: multi-cards
title: Multi Cards
sidebar_label: Multi Cards
---

Un composant ISLE qui vous permet de créer et de contrôler plusieurs cartes retournables (par exemple dans un jeu de mémoire).

## Options

* __animation__ | `object`: si set, le composant utilise une animation d'entrée ; l'objet contient un nom (comme "anim-scale-up") et une durée (comme "1,7s" = 1,7 secondes). Default: `{}`.
* __memory__ | `boolean`: s'il faut activer le mode "jeu de mémoire" dans lequel il faut faire correspondre des paires de valeurs fournies. Default: `none`.
* __onChange__ | `function`: une fonction qui reçoit la matrice des cartes à feuilleter. Default: `onChange() {}`.
* __onMemoryComplete__ | `function`: rappel invoqué si le jeu de mémoire est terminé. Default: `onMemoryComplete() {}`.
* __oneTime__ | `boolean`: indique si le processus de retournement peut être exécuté une seule fois. Default: `false`.
* __values__ | `array<object>`: les valeurs pour les cartes respectives, introduites dans un tableau qui comporte des champs d'entrée pour une valeur "front" et "back". Une telle valeur peut être une chaîne de caractères, mais aussi un composant ISLE à part entière. Default: `[]`.
* __style__ | `object`: Styles CSS en ligne. Default: `{}`.
* __containerStyle__ | `object`: Style CSS des conteneurs de cartes. Default: `{}`.
* __frontStyle__ | `object`: Style CSS du recto des cartes. Default: `{}`.
* __backStyle__ | `object`: Style CSS du dos des cartes. Default: `{}`.


## Exemples

```jsx live
<MultiCards
    onChange={(data) => {
        console.log(data);
    }}
    containerStyle={{
        width: 250,
        height: 250,
        marginBottom: 10
    }}
    frontStyle={{
        color:'gainsboro',
        cursor: 'pointer',
        textAlign: 'center',
        boxShadow: '1px 1px 10px black',
        backgroundImage: 'url(https://isle.heinz.cmu.edu/seamless_1543575455035.png)',
        backgroundSize: '100% auto'
    }}
    backStyle={{
        color: 'blue',
        fontSize: 20,
        fontWeight: 800,
        fontFamily: 'Oswald',
        textAlign: 'left',
        paddingLeft: '10px',
        background: 'ghostwhite',
        boxShadow: '1px 1px 10px black',
    }}
    values={[
        { front: "number 1", back: 'back side of #1'},
        { front: "number 2", back: 'back side of #2'},
        { front: "number 3", back: 'back side of #3'},
        { front: "number 4", back: 'back side of #4'}
    ]}
/>
``` 



