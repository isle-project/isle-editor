---
id: contourchart
title: Contour Chart
sidebar_label: Contour Chart
---

Une carte de contour.

## Options

* __data__ | `object (required)`: des tableaux d'objets de valeur pour chaque variable. Default: `none`.
* __x__ | `string (required)`: variable de l'axe des x. Default: `none`.
* __y__ | `string (required)`: variable de l'axe des y. Default: `none`.
* __overlayPoints__ | `boolean`: contrôle s'il faut superposer des points pour chaque observation. Default: `false`.
* __smoothSpan__ | `number`: portée de lissage. Default: `0.66`.
* __regressionMethod__ | `array<string>`: tableau contenant "linéaire" et/ou "lisse" pour superposer une ligne de régression linéaire et/ou lissée. Default: `none`.
* __onSelected__ | `function`: rappel invoqué lorsque des points sont sélectionnés avec des valeurs x, y et les points sélectionnés. Default: `onSelected() {}`.


## Examples

```jsx live
<ContourChart 
    data={heartdisease} 
    x="Age"
    y="Cost"
/>
```

