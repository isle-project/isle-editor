---
id: panel 
title: Panel
sidebar_label: Panel
---

Στοιχείο κάρτας.

## Επιλογές

* __className__ | `string`: Όνομα κλάσης CSS. Default: `''`.
* __header__ | `(string|node)`: επικεφαλίδα πίνακα. Default: `none`.
* __headerTag__ | `string`: ετικέτα που χρησιμοποιείται για την επικεφαλίδα του πίνακα. Default: `'h3'`.
* __footer__ | `(string|node)`: υποσέλιδο πάνελ. Default: `none`.
* __minimizable__ | `boolean`: αν ο πίνακας μπορεί να ελαχιστοποιηθεί. Default: `false`.
* __defaultMinimized__ | `boolean`: ελέγχει αν ο πίνακας θα πρέπει να ελαχιστοποιείται από προεπιλογή (εφαρμόζεται μόνο όταν το `minimizable` έχει οριστεί σε `true`). Default: `false`.
* __fullscreen__ | `boolean`: αν ο πίνακας μπορεί να γίνει πλήρης οθόνη (μόνο για εκπαιδευτές). Default: `false`.
* __hideTooltip__ | `string`: tooltip που εμφανίζεται πάνω από το κουμπί απόκρυψης. Default: `none`.
* __trapFocus__ | `boolean`: αν θα παγιδεύεται η εστίαση του χρήστη στον πίνακα. Default: `false`.
* __bodyStyle__ | `object`: Στυλ CSS inline για το σώμα. Default: `{}`.
* __footerStyle__ | `object`: Στυλ CSS inline για υποσέλιδο. Default: `{}`.
* __bodyClassName__ | `string`: undefined. Default: `''`.
* __footerClassName__ | `string`: undefined. Default: `''`.
* __style__ | `object`: Στυλ CSS inline για δοχείο. Default: `{}`.
* __onHide__ | `function`: callback που καλείται όταν γίνεται κλικ στο κουμπί κλεισίματος. Default: `none`.


## Παραδείγματα

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Header', value: 'withHeader' },
        { label: 'Header and Footer', value: 'headerAndFooter' },
        { label: 'With CSS', value: 'withCSS' },
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Panel>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

</Panel>
```

</TabItem>

<TabItem value="withHeader">

```jsx live
<Panel header="Panel with Header">

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

</Panel>
```

</TabItem>

<TabItem value="headerAndFooter">

```jsx live
<Panel 
    header="Header" 
    footer={<h4>Footer</h4>}
>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

</Panel>
```

</TabItem>

<TabItem value="withCSS">

```jsx live
<Panel style={{ color: 'salmon', background: 'darkblue' }}>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

</Panel>
```

</TabItem>

</Tabs>
