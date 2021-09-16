---
id: gate 
title: Gate
sidebar_label: Gate
---

Eine ISLE-Komponente, die es erlaubt, ihre Kinder nur für reservierte Zielgruppen anzuzeigen.

## Optionen

* __user__ | `boolean`: wenn gesetzt, wird der Gated Content den Benutzern angezeigt. Default: `false`.
* __notUser__ | `boolean`: wenn gesetzt, wird der gesperrte Inhalt **nicht** für Benutzer angezeigt. Default: `false`.
* __enrolled__ | `boolean`: wenn eingestellt, wird der geschützte Inhalt den im Kurs eingeschriebenen Teilnehmern angezeigt. Default: `false`.
* __notEnrolled__ | `boolean`: wenn gesetzt, wird der gesperrte Inhalt den im Kurs eingeschriebenen Teilnehmern **nicht** angezeigt. Default: `false`.
* __owner__ | `boolean`: wenn eingestellt, wird der geschützte Inhalt dem Besitzer des Kurses (normalerweise dem Kursleiter) angezeigt. Default: `false`.
* __notOwner__ | `boolean`: wenn gesetzt, wird der geschützte Inhalt dem Besitzer des Kurses (normalerweise dem Kursleiter) **nicht** angezeigt. Default: `false`.
* __after__ | `Date`: Zeit, nach der der Inhalt des Gates sichtbar werden soll. Default: `none`.
* __until__ | `Date`: Zeit, bis der Inhalt des Gates sichtbar bleiben soll. Default: `none`.
* __banner__ | `node`: eine benutzerdefinierte Nachricht, die Besuchern angezeigt wird, für die die Kinder des Tores nicht sichtbar sind, anstelle der Standardnachricht. Default: `none`.
* __disabled__ | `boolean`: wenn ein Tor deaktiviert ist, wird das Banner angezeigt, egal was. Default: `false`.
* __showOwnerInPresentationMode__ | `boolean`: steuert, ob der Gate-Inhalt im Präsentationsmodus angezeigt werden soll, wenn das Gate für den `Eigentümer` sichtbar ist. Default: `false`.
* __check__ | `function`: Callback-Funktion, die ein "Boolean" zurückgibt, das angibt, ob Gate untergeordnete Komponenten anzeigen soll; die Funktion wird immer dann aufgerufen, wenn Sitzungsaktionen eintreffen. Default: `none`.


## Beispiele

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

