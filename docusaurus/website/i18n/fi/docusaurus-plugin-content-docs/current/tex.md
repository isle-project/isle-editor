---
id: tex
title: LaTeX Equations
sidebar_label: LaTeX Equations
---

`TeX` on ISLE-elementti, jota voidaan käyttää LaTeX-yhtälöiden näyttämiseen. 

## Vaihtoehdot

* __raw__ | `(string|number) (required)`: Renderöitävä kirjaimellinen LaTeX-merkkijono. Hyväksyy myös `numbers`. Default: `none`.
* __displayMode__ | `boolean`: `boolean`, joka osoittaa, näytetäänkö yhtälö rivissä vai näyttötilassa.. Default: `false`.
* __numbered__ | `boolean`: valvoo, näytetäänkö yhtälön numero näyttötilan yhtälöille.. Default: `false`.
* __style__ | `object`: `object` CSS-avain-arvopareilla, joita sovelletaan yhtälön säiliöön.. Default: `{}`.
* __tag__ | `string`: Oikealla puolella näkyvät näyttöyhtälöiden mukautetut merkit. Oletusarvo on oppitunnin sisällä olevan yhtälön numero.. Default: `none`.
* __elems__ | `object`: `objekti`, jossa `avaimet` tarkoittavat LaTeX-merkkejä ja niiden vastaavat arvot ovat konfigurointi `objekteja`, jotta ne olisivat interaktiivisia. Työkaluvihjeen asettaminen näyttää työkaluvihjeen, kun LaTeX-merkkien päälle viedään hiiren kursori. Muuttujaominaisuuden `variable` asettaminen näyttää liukusäätimen, jolla voidaan muuttaa vastaavaa tilamuuttujaa; tässä tapauksessa tuetaan lisäominaisuuksia `legend`, `min`, `max` ja `step`.. Default: `{}`.
* __popoverPlacement__ | `string`: ponnahdusikkunan sijainti määritetyille "elementeille" (joko `top`, `right`, `bottom` tai `left`).. Default: `'bottom'`.
* __onPopover__ | `function`: callback `function`, kun ponnahdusikkuna kytketään päälle tai pois päältä; saa ainoana argumenttinaan näytön tilan boolean-arvona.. Default: `onPopover() {}`.
* __onClick__ | `function`: callback `function`, joka käynnistyy aina kun käyttäjä klikkaa yhtälöä.. Default: `none`.


## Esimerkkejä

```jsx live
<TeX
    raw="2 + 3 = 5"
    displayMode={true}
/>
```



