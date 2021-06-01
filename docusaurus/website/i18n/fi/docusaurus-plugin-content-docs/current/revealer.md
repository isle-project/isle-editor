---
id: revealer 
title: Revealer
sidebar_label: Revealer
---

ISLE-komponentti, jonka avulla opettajat voivat valikoivasti paljastaa tai piilottaa lasten sisällön kaikille opiskelijoille tunnin aikana.

## Vaihtoehdot

* __message__ | `(string|node)`: viesti, joka näytetään, kun sisältö on piilotettu. Default: `none`.
* __show__ | `boolean`: ohjaa, näytetäänkö aluksi lapsielementit. Default: `false`.


## Esimerkkejä

```jsx live
<Revealer
        id="mudgelove"
    >
        <div>
            <h3>Content that will be revealed.</h3>
        </div>
</Revealer>
``` 

