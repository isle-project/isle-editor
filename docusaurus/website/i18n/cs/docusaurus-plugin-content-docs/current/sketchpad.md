---
id: sketchpad 
title: Sketchpad
sidebar_label: Sketchpad
---

Kreslící skicák pro poznámky na diapozitivy přednášek nebo prázdné stránky.

## Možnosti

* __autoSave__ | `boolean`: řídí, zda má editor v daném časovém intervalu ukládat aktuální text do místního úložiště prohlížeče.. Default: `true`.
* __feedbackButtons__ | `boolean`: řídí, zda se mají na každém snímku zobrazovat tlačítka zpětné vazby.. Default: `false`.
* __intervalTime__ | `number`: doba mezi automatickým ukládáním. Default: `10000`.
* __hideInputButtons__ | `boolean`: ovládá, zda se mají skrýt tlačítka pro kreslení a zadávání textu.. Default: `false`.
* __hideNavigationButtons__ | `boolean`: řídí, zda se mají skrýt tlačítka pro navigaci mezi stránkami.. Default: `false`.
* __hideSaveButtons__ | `boolean`: určuje, zda se mají skrýt tlačítka pro ukládání.. Default: `false`.
* __hideTransmitButtons__ | `boolean`: řídí, zda se mají skrýt tlačítka pro přenos uživatelských akcí.. Default: `false`.
* __brushSize__ | `number`: velikost štětce, kterým se maluje. Default: `4`.
* __color__ | `string`: barva štětce a textů. Default: `'#444444'`.
* __canvasWidth__ | `number`: šířka prvku plátna (v px). Default: `1200`.
* __canvasHeight__ | `number`: výška prvku plátna (v px). Default: `700`.
* __fullscreen__ | `boolean`: určuje, zda se má automaticky změnit velikost plátna na šířku a výšku okna prohlížeče.. Default: `false`.
* __fill__ | `string`: pokud `horizontal`, vyplní se při kreslení PDF celý dostupný horizontální prostor; pokud `vertical`, použije se celý vertikální prostor, aby se zabránilo přetečení osy y.. Default: `'vertical'`.
* __disabled__ | `boolean`: zda má být komponenta určena pouze pro čtení a zakázáno kreslení na náčrtníku.. Default: `false`.
* __fontFamily__ | `string`: rodina písma. Default: `'Arial'`.
* __fontSize__ | `number`: velikost písma. Default: `24`.
* __nodes__ | `object`: komponenty, které se mají vykreslit na zadaných snímcích; `klíče` by měly odpovídat číslům stránek, `hodnoty` komponentám.. Default: `{}`.
* __noPages__ | `number`: počáteční počet stránek. Default: `1`.
* __pdf__ | `string`: odkaz na soubor PDF pro zapečené pozadí stránky. Default: `none`.
* __showTutorial__ | `boolean`: při spuštění zobrazit výukový program pro náčrtník. Default: `false`.
* __dynamicallyHideButtons__ | `boolean`: řídí, zda se mají začít skrývat tlačítka, když šířka panelu nástrojů není dostatečná (jinak se začne psát nový řádek).. Default: `false`.
* __transmitOwner__ | `boolean`: zda mají být akce vlastníka přenášeny ostatním uživatelům v reálném čase.. Default: `true`.
* __groupMode__ | `boolean`: kontroluje, zda jsou všechny akce uživatele přenášeny všem ostatním.. Default: `false`.
* __style__ | `object`: Řádkové styly CSS. Default: `{}`.
* __onChange__ | `function`: zpětné volání vyvolané vždy, když je nakreslen nový prvek čáry.. Default: `onChange() {}`.


## Příklady

```jsx live
<Sketchpad canvasWidth={750} />
```

