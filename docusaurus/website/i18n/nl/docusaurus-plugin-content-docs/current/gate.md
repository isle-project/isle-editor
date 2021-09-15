---
id: gate 
title: Gate
sidebar_label: Gate
---

Een ISLE-component die het mogelijk maakt om zijn kinderen alleen aan een gereserveerd publiek te tonen.

## Opties

* __user__ | `boolean`: wanneer de gated content wordt weergegeven aan gebruikers. Default: `false`.
* __notUser__ | `boolean`: wanneer de gated content is ingesteld wordt **niet** weergegeven aan gebruikers. Default: `false`.
* __enrolled__ | `boolean`: wanneer de gated content wordt weergegeven aan de studenten die zijn ingeschreven in de cursus. Default: `false`.
* __notEnrolled__ | `boolean`: wanneer de gated content is ingesteld, wordt **niet** weergegeven aan de studenten die zijn ingeschreven voor de cursus. Default: `false`.
* __owner__ | `boolean`: wanneer de gated content wordt weergegeven aan de eigenaar van de cursus (meestal de instructeur). Default: `false`.
* __notOwner__ | `boolean`: wanneer de gated content is ingesteld wordt **niet** weergegeven aan de eigenaar van de cursus (meestal de instructeur). Default: `false`.
* __after__ | `Date`: tijd waarna de inhoud van de poort zichtbaar moet worden. Default: `none`.
* __until__ | `Date`: tijd tot de inhoud van de poort zichtbaar blijft. Default: `none`.
* __banner__ | `node`: een aangepast bericht dat wordt getoond aan bezoekers voor wie de kinderen van de poort niet zichtbaar zijn, in plaats van het standaardbericht. Default: `none`.
* __disabled__ | `boolean`: als een poort is uitgeschakeld, zal de banner worden weergegeven, wat er ook gebeurt. Default: `false`.
* __showOwnerInPresentationMode__ | `boolean`: controleert of de inhoud van de poort in de presentatiemodus wordt weergegeven wanneer de poort zichtbaar is voor `eigenaars'. Default: `false`.
* __check__ | `function`: callback functie die een `boolean` retourneert en aangeeft of het hekje kinderonderdelen moet weergeven; de functie wordt aangeroepen wanneer de sessie-acties aankomen. Default: `none`.


## Voorbeelden

```jsx live
<Gate 
    banner={<h2>You have to be logged in to see the content</h2>}
    user 
>
    <h1>For users only</h1>
</Gate>
``` 



