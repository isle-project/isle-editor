---
id: proportions-input 
title: Proportions Input
sidebar_label: Proportions Input
---

O componentă de intrare de proporții. Poate fi utilizată ca parte a unui tablou de bord ISLE sau de sine stătător. În acest din urmă caz, doriți să gestionați modificările prin atributul `onChange` sau să legați valoarea de o variabilă globală prin atributul `bind`.

## Opțiuni

* __colors__ | `array<string>`: matrice de culori pentru componentele graficului circular. Dacă nu este definită, se va utiliza o scară de culori personalizată.. Default: `none`.
* __disabled__ | `boolean`: controlează dacă câmpul de intrare este dezactivat sau nu. Default: `false`.
* __height__ | `number`: proporțiile înălțimii de intrare (în px). Default: `200`.
* __legends__ | `array`: etichete de grup. Default: `[]`.
* __onChange__ | `function`: funcția de callback care trebuie invocată atunci când se face o alegere. Default: `onChange(){}`.
* __precision__ | `number`: precizia afișată a valorilor proporțiilor. Default: `1`.
* __step__ | `number`: pasul săgeților afișate la trecerea cursorului deasupra căsuței de intrare. Default: `0.1`.


## Exemple

```jsx live
<ProportionsInput
    user
    id="Survey"
    question="Decide what is important"
    group="Group decision"
    nElements={3}
    colors = {[ "red", "blue", "gold" ]}
    personalHeight={300}
    groupHeight={200}
    margin="80px"
    legends={[ "bitcoin", "old", "diamonds" ]}
/>
```

