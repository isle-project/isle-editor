---
id: switch
title: Switch Components
sidebar_label: Switch Components
---

De Switch-component maakt het mogelijk om één element uit een lijst van meerdere elementen weer te geven. Gebruikers kunnen door de verschillende kinderen van de Switch-tag bladeren door te klikken op de op dat moment getoonde tag.

## Options

* __active__ | `boolean`: regelt of de schakelaar actief is of niet. Default: `true`.
* __tooltip__ | `string`: tooltip weergegeven bij het zweven over het schakelelement. Default: `none`.
* __tooltipPos__ | `string`: plaatsing van de tooltip (ofwel `top`, `left`, `right`, of `bottom`). Default: `'top'`.
* __className__ | `string`: Klasse-naam voor het omhulsel van het overspanningselement. Default: `''`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.
* __onChange__ | `function`: terugbellen wordt aangeroepen wanneer elementen worden geschakeld. Ontvangt als eerste argument de index van het op dat moment getoonde kind. Default: `onChange() {}`.


## Examples

```jsx live
<Switch>
    <span>Option 1</span>
    <span>Option 2</span>
</Switch>
```



