---
id: gate 
title: Gate
sidebar_label: Gate
---

ISLE-komponentti, joka sallii sen lasten näyttämisen vain varatuille yleisöille.

## Vaihtoehdot

* __user__ | `boolean`: kun se on asetettu, rajatun sisällön näytetään käyttäjille.. Default: `false`.
* __notUser__ | `boolean`: kun se on asetettu, porttisisältöä ei **näytetä** käyttäjille.. Default: `false`.
* __enrolled__ | `boolean`: kun se on asetettu, portitettu sisältö näytetään kurssille ilmoittautuneille opiskelijoille.. Default: `false`.
* __notEnrolled__ | `boolean`: kun se on asetettu, porttisisältöä ei **näytetä** kurssille ilmoittautuneille opiskelijoille.. Default: `false`.
* __owner__ | `boolean`: kun se on asetettu, portitettu sisältö näytetään kurssin omistajalle (yleensä ohjaajalle).. Default: `false`.
* __notOwner__ | `boolean`: kun se on asetettu, kurssin omistajalle (yleensä ohjaajalle) ei **näytetä** rajattua sisältöä.. Default: `false`.
* __after__ | `Date`: aika, jonka jälkeen portin sisällön on tultava näkyviin.. Default: `none`.
* __until__ | `Date`: aika, jonka kuluessa portin sisällön on pysyttävä näkyvissä.. Default: `none`.
* __banner__ | `node`: mukautettu viesti, joka näytetään kävijöille, joille portin lapset eivät ole näkyvissä, oletusviestin sijaan.. Default: `none`.
* __disabled__ | `boolean`: jos portti on poistettu käytöstä, banneri näytetään riippumatta siitä, mitä tapahtuu.. Default: `false`.
* __showOwnerInPresentationMode__ | `boolean`: ohjaa, näytetäänkö portin sisältö esitystilassa, kun portti on näkyvissä `omistajan` kannalta.. Default: `false`.
* __check__ | `function`: callback-funktio, joka palauttaa "boolean"-arvon, joka osoittaa, pitäisikö portin näyttää lapsikomponentit; funktio kutsutaan aina kun istuntotoimintoja saapuu.. Default: `none`.


## Esimerkkejä

```jsx live
<Gate 
    banner={<h2>You have to be logged in to see the content</h2>}
    user 
>
    <h1>For users only</h1>
</Gate>
``` 



