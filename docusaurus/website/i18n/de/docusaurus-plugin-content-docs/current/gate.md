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

```jsx live
<Gate 
    banner={<h2>You have to be logged in to see the content</h2>}
    user 
>
    <h1>For users only</h1>
</Gate>
``` 



