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

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Timed', value: 'timed' },
        { label: 'Hidden', value: 'hidden' },
        { label: 'Custom Banner', value: 'customBanner' },
        { label: 'Custom Check', value: 'customCheck' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Gate enrolled >
    <h1>Content for users enrolled in a cohort of the course</h1>
</Gate>
```

</TabItem>

<TabItem value="timed">

```jsx live
<Gate
    after={date({ year: 2020, month: 9, day: 1, hour: 9, minute: 30, second: 0, utcOffset: 4 })}
    until={date({ year: 2020, month: 12, day: 20, hour: 9, minute: 30, second: 0, utcOffset: 5 })}
>
    # Only visible in Fall 2020 semester
</Gate>
```

</TabItem>

<TabItem value="hidden">

```jsx live
<Gate banner={null} owner >
    <h1>Content for owners without a message for others</h1>
</Gate>
```

</TabItem>

<TabItem value="customBanner">

```jsx live
<Gate owner banner={<h3>Only visible by course owners...</h3>} >
    <h1> User Analytics </h1>
</Gate>
```

</TabItem>

<TabItem value="customCheck">

```jsx live
<Gate check={( ) => {
    return session.user.email === 'admin@cmu.edu';
}} >
    <h1> User Analytics only visible to specified user</h1>
</Gate>
```

</TabItem>

</Tabs>

