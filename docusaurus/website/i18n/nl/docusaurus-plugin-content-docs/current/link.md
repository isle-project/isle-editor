---
id: link
title: Link
sidebar_label: Link
---

Een component voor het weergeven van een link.

## Options

* __href__ | `string (required)`: URL van de website om naar te linken. Default: `none`.
* __target__ | `string`: definieert waar de link wordt geopend: ingesteld op `_blank` voor een nieuw venster, `_zelf` eigen frame, `_ouder` voor de ouder, `_top` voor het volledige venster, of de naam van het frame. Default: `'_blank'`.
* __className__ | `string`: klassennaam. Default: `''`.
* __style__ | `object`: CSS inline-stijlen. Default: `{}`.


## Examples

```jsx live
<Link href="https://wikipedia.org">Wikipedia</Link>
```

