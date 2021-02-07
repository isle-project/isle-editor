---
id: pages 
title: Pages
sidebar_label: Pages
---

Компонент ISLE-пагинации, позволяющий пользователю пройти через последовательность страниц.

## Options

* __activePage__ | `number`: активная страница. Default: `1`.
* __disabled__ | `boolean`: управляет тем, активна или нет панель навигации. Default: `false`.
* __title__ | `string`: отображаемое название контейнера страниц. Default: `''`.
* __pagination__ | `string`: показывать ли пагинацию на `верху`, `низу`, или на `низу`.... Default: `'top'`.
* __size__ | `string`: размер пагинационных кнопок (либо `по умолчанию`, `lg`, `большой`, `sm`, `маленький`, `xs`, либо `xsmall`).. Default: `'default'`.
* __height__ | `(number|string)`: максимальная высота контейнера. Если встроенная страница выше, добавляется вертикальная полоса прокрутки.. Default: `none`.
* __voiceID__ | `string`: идентификатор голосового управления. Default: `none`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.
* __onSelect__ | `function`: Функция вызывается при изменении активного изменения. Получает новый индекс активной страницы в качестве единственного параметра.. Default: `onSelect() {}`.


## Examples

```jsx live
<Pages title="Pages">
    <div>
        <h1>First Page</h1>
    </div>
    <div>
        <h1>Second Page</h1>
        <RShell />
    </div>
</Pages>
``` 



