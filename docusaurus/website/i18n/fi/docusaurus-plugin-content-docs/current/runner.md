---
id: runner 
title: Runner
sidebar_label: Runner
---

Runner-komponentti suorittaa toimitetun toiminnon joko kerran tai tietyn ajan välein.

## Vaihtoehdot

* __active__ | `boolean`: valvoo, onko juoksijan oltava aktiivinen. Aktivoinnin jälkeen funktiota `onEvaluate` kutsutaan annetulla aikavälillä (tai kerran).. Default: `true`.
* __interval__ | `number`: onEvaluate-ohjelman kutsujen välinen millisekuntien määrä. Jos väliä ei ole asetettu, funktiota kutsutaan vain kerran.. Default: `none`.
* __onEvaluate__ | `function`: kutsuttava toiminto. Default: `onEvaluate() {}`.


## Esimerkkejä

```jsx live
<Runner
    interval={2000}
    onEvaluate={() => { console.log( 'Two seconds have passed...' ); }}
/>
```



