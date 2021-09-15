---
id: gate 
title: Gate
sidebar_label: Gate
---

En ISLE-komponent, der gør det muligt kun at vise sine børn til reserveret publikum.

## Indstillinger

* __user__ | `boolean`: når det er indstillet, vises det afskærmede indhold for brugerne. Default: `false`.
* __notUser__ | `boolean`: når det er indstillet, vises det beskyttede indhold **ikke** for brugerne. Default: `false`.
* __enrolled__ | `boolean`: når det er indstillet, vises det begrænsede indhold for de studerende, der er tilmeldt kurset. Default: `false`.
* __notEnrolled__ | `boolean`: når det er indstillet, vises det beskyttede indhold **ikke** for de studerende, der er tilmeldt kurset. Default: `false`.
* __owner__ | `boolean`: når det er indstillet, vises det beskyttede indhold til kursets ejer (normalt instruktøren). Default: `false`.
* __notOwner__ | `boolean`: når det er indstillet, vises det beskyttede indhold **ikke** for ejeren af kurset (normalt underviseren). Default: `false`.
* __after__ | `Date`: den tid, hvorefter indholdet af porten skal blive synligt. Default: `none`.
* __until__ | `Date`: den tid, indtil indholdet af porten skal forblive synligt. Default: `none`.
* __banner__ | `node`: en brugerdefineret meddelelse, der vises til besøgende, for hvem portens børn ikke er synlige, i stedet for standardmeddelelsen. Default: `none`.
* __disabled__ | `boolean`: hvis en gate er deaktiveret, vises banneret uanset hvad. Default: `false`.
* __showOwnerInPresentationMode__ | `boolean`: styrer, om portens indhold skal vises i præsentationstilstand, når porten er synlig for `owner`s. Default: `false`.
* __check__ | `function`: callback-funktion, der returnerer et "boolean", der angiver, om gate skal vise underordnede komponenter; funktionen kaldes, når der ankommer sessionshandlinger. Default: `none`.


## Eksempler

```jsx live
<Gate 
    banner={<h2>You have to be logged in to see the content</h2>}
    user 
>
    <h1>For users only</h1>
</Gate>
``` 



