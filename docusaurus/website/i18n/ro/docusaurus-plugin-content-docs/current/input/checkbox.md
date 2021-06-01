---
id: checkbox-input
title: Checkbox Input
sidebar_label: Checkbox Input
---

O componentă de intrare de tip checkbox. Poate fi utilizată ca parte a unui tablou de bord ISLE sau de sine stătător. În acest din urmă caz, doriți să gestionați modificările prin atributul `onChange` sau să legați valoarea de o variabilă globală prin atributul `bind`.

## Opțiuni

* __bind__ | `string`: numele variabilei globale căreia trebuie să i se atribuie valoarea căsuței de selectare. Default: `''`.
* __defaultValue__ | `boolean`: valoare booleană care indică valoarea implicită a casetei de selectare. Default: `false`.
* __value__ | `boolean`: valoarea căsuței de selectare (pentru componenta controlată). Default: `none`.
* __disabled__ | `boolean`: indică dacă intrarea este activă sau nu. Default: `false`.
* __inline__ | `boolean`: indică dacă caseta de selectare este afișată în linie. Default: `false`.
* __onChange__ | `function`: funcția de apelare care va fi invocată atunci când se face clic pe caseta de selectare. Funcția este apelată cu valoarea curentă a casetei de selectare.. Default: `onChange() {}`.
* __legend__ | `(string|node)`: textul afișat lângă caseta de selectare. Default: `''`.
* __tooltip__ | `string`: text afișat la trecerea peste caseta de selectare. Default: `''`.
* __tooltipPlacement__ | `string`: poziția tooltipului butonului. Default: `'right'`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.


## Exemple

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Inline', value: 'inline' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'With Callback', value: 'withCallback' }
    ]}
    lazy
>


<TabItem value="minimal">

```jsx live
<CheckboxInput legend="Take the logarithm" />
```
</TabItem>

<TabItem value="inline">

```jsx live
<p>Please click
<CheckboxInput
    inline defaultValue={false}
/>
to confirm that you will follow our netiquette.</p>
```
</TabItem>


<TabItem value="withStyle">

```jsx live
<CheckboxInput
    style={{ fontSize: 30, color: 'blue'}}
    legend="Click to confirm"
    defaultValue={false}
/>
```
</TabItem>

<TabItem value="withCallback">

```jsx live
<CheckboxInput
    legend="Click to confirm..."
    onChange={( value ) => {
        alert( 'New value: '+value );
    }}
/>
```

</TabItem>

</Tabs>
