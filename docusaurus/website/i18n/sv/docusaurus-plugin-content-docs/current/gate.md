---
id: gate 
title: Gate
sidebar_label: Gate
---

En ISLE-komponent som gör det möjligt att visa sina barn endast för reserverade målgrupper.

## Alternativ

* __user__ | `boolean`: När det är inställt visas det skyddade innehållet för användarna.. Default: `false`.
* __notUser__ | `boolean`: När det är inställt visas det skyddade innehållet **inte** för användarna.. Default: `false`.
* __enrolled__ | `boolean`: När det är inställt visas det skyddade innehållet för de studenter som är inskrivna i kursen.. Default: `false`.
* __notEnrolled__ | `boolean`: När den är inställd visas det skyddade innehållet **inte** för de studenter som är inskrivna i kursen.. Default: `false`.
* __owner__ | `boolean`: När den är inställd visas det skyddade innehållet för kursens ägare (vanligtvis läraren).. Default: `false`.
* __notOwner__ | `boolean`: När det är inställt visas det skyddade innehållet **inte** för kursens ägare (vanligtvis läraren).. Default: `false`.
* __after__ | `Date`: Den tid efter vilken innehållet i porten ska bli synligt.. Default: `none`.
* __until__ | `Date`: tid till dess att innehållet i porten ska förbli synligt.. Default: `none`.
* __banner__ | `node`: ett anpassat meddelande som visas för besökare som inte kan se portens barn i stället för standardmeddelandet.. Default: `none`.
* __disabled__ | `boolean`: Om en grind är inaktiverad visas bannern oavsett vad som händer.. Default: `false`.
* __showOwnerInPresentationMode__ | `boolean`: kontrollerar om grindinnehållet ska visas i presentationsläge när grinden är synlig för "ägarens" ägare.. Default: `false`.
* __check__ | `function`: callback-funktion som returnerar en "boolean" som anger om grinden ska visa underordnade komponenter; funktionen anropas när sessionsåtgärder anländer.. Default: `none`.


## Exempel

```jsx live
<Gate 
    banner={<h2>You have to be logged in to see the content</h2>}
    user 
>
    <h1>For users only</h1>
</Gate>
``` 



