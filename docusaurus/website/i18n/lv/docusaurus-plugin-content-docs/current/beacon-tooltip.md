---
id: beacon-tooltip
title: Beacon Tooltip
sidebar_label: Beacon Tooltip
---

Sastāvdaļa, kas ievieto bāku nodarbībā, vai nu patstāvīgi, vai pievienota kādam `mērķim`. Noklikšķinot vai uzspiežot uz bākas, tiek parādīts uzvednis.

## Iespējas

* __title__ | `(string|node)`: virsraksts, kas tiks parādīts rīka uzraksta augšpusē.. Default: `none`.
* __content__ | `(string|node)`: Rīkjoslas saturs. Default: `'`content` comes here...'`.
* __event__ | `string`: ja iestatīts uz `click`, uzraksts tiek pārslēgts, noklikšķinot uz bākas; ja iestatīts uz `hover`, uzraksts tiek aktivizēts, uzspiežot uz bākas.. Default: `'click'`.
* __placement__ | `string`: rīka uzraksta izvietojums attiecībā pret `mērķi` (vai nu `virsma`, `virsma-ākums`, `virsma-gals`, `apakšdaļa`, `apakšdaļa-gals`, `kreisais`, `kreisais-ākums`, `kreisais-gals`, `labais`, `labais-ākums`, `labais-gals`, `automātiski` vai `centrs`).. Default: `'left'`.
* __target__ | `string`: klases vai ID selektors elementam, kuram pievienot uzrakstu.. Default: `''`.
* __offset__ | `number`: attālums starp rīka uzrakstu un `mērķi` pikseļos.. Default: `15`.
* __onChange__ | `function`: atsauces zvans, kas tiek izsaukts, mainoties rīka uzraksta stāvoklim. Saņem divus argumentus: `action` (`open` vai `close`) un nodoto `props`.. Default: `onChange() {}`.


## Piemēri

```jsx live
<BeaconTooltip
    content="Body of the tooltip..."
    title="Title comes here..."
    event="hover"
    placement="right"
/>
```



