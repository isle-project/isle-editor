---
id: language 
title: Language
sidebar_label: Language
---

Language component, which expects several language-specific tags (e.g., Language.Spanish) as its children. If a the component has as its child a language tag for the currently selected language, then its contents will be displayed. If no language-specific tag is available, the tag for the default language (as specified in the preamble of the ISLE lesson) or, if also not available, the first language-specific tag and its contents will be displayed.

## Options

No properties available.

## Examples

```jsx live
<Language>

<Language.English>

# This is an ISLE activity.

</Language.English>

<Language.Spanish>

# Esta es una actividad de la ISLE.

</Language.Spanish>

<Language.German>

# Dies ist eine ISLE-Aktivität.

</Language.German>

<Language.Chinese>

# 这是一项ISLE活动。

</Language.Chinese>

</Language>
```

