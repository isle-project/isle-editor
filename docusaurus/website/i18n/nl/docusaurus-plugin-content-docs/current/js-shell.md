---
id: js-shell
title: JavaScript Shell
sidebar_label: JavaScript Shell
---

Een interactieve Javascript-shell die gebruikt kan worden om JavaScript-commando's uit te voeren. De shell bevat een console die foutmeldingen, waarschuwingen etc. weergeeft.

## Options

* __code__ | `string`: Te evalueren JavaScript-code. Default: `''`.
* __solution__ | `string`: voor programmeervragen, code `string` die de officiële oplossing voor het probleem vertegenwoordigt. Default: `''`.
* __hints__ | `array<(string|node)>`: voor programmeervragen, een reeks hints die een leidraad bieden voor de aanpak van het probleem. Default: `[]`.
* __precompute__ | `boolean`: controleert of de standaardcode moet worden uitgevoerd zodra het component is gemonteerd. Default: `false`.
* __chat__ | `boolean`: bepaalt of de groeps-chatfunctie moet worden ingeschakeld. Default: `false`.
* __check__ | `string`: bijgevoegde JavaScript-code om de te evalueren `code` te controleren. Default: `none`.
* __disabled__ | `boolean`: bepaalt of alle gebruikersinvoer moet worden uitgeschakeld en of de code moet worden geblokkeerd.. Default: `false`.
* __lines__ | `number`: aantal weer te geven regels. Default: `5`.
* __className__ | `string`: klassennaam. Default: `''`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.
* __onChange__ | `function`: terugbellen wordt aangeroepen wanneer de invoer van het tekstveld verandert. Default: `onChange() {}`.
* __onEvaluate__ | `function`: terugbellen wordt aangeroepen wanneer op de `Evaluate`-knop wordt geklikt. Default: `onEvaluate() {}`.
* __vars__ | `object`: Scope-object met variabelen die beschikbaar moeten worden gesteld aan de geëvalueerde `code`.. Default: `none`.
* __voiceID__ | `string`: stembesturingsidentificatie. Default: `none`.


## Examples

```jsx live
<JSShell id = "jseditor" 
        code = "var a = 22;" >
</JSShell>
```

