---
id: beacon-tooltip
title: Beacon Tooltip
sidebar_label: Beacon Tooltip
---

Komponentti, joka sijoittaa majakan oppitunnille joko itsenäisesti tai liitettynä kohteeseen. Kun majakkaa liikutetaan tai klikataan, näytetään vihje.

## Vaihtoehdot

* __title__ | `(string|node)`: työkaluvihjeen yläosassa näytettävä otsikko. Default: `none`.
* __content__ | `(string|node)`: työkaluvihjeen sisältö. Default: `'`content` comes here...'`.
* __event__ | `string`: jos asetus on `click`, työkaluvihko vaihtuu, kun majakkaa klikataan; jos asetus on `hover`, työkaluvihko aktivoituu leijuttamalla sitä.. Default: `'click'`.
* __placement__ | `string`: työkaluvihjeen sijainti suhteessa `kohteeseen` (joko `top`, `top-alku`, `top-pääte`, `bottom`, `bottom-pääte`, `left`, `left-alku`, `left-pääte`, `right`, `right-alku`, `right-pääte`, `auto` tai `center`).. Default: `'left'`.
* __target__ | `string`: luokan tai ID-valitsin elementille, johon työkaluvihje liitetään.. Default: `''`.
* __offset__ | `number`: työkaluvihjeen ja `kohteen` välinen etäisyys pikseleinä.. Default: `15`.
* __onChange__ | `function`: callback, joka käynnistetään työkaluvihkon tilan muuttuessa. Vastaanottaa kaksi argumenttia: `action` (`open` tai `close`) ja välitetyt `props`.. Default: `onChange() {}`.


## Esimerkkejä

```jsx live
<BeaconTooltip
    content="Body of the tooltip..."
    title="Title comes here..."
    event="hover"
    placement="right"
/>
```



