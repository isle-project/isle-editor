---
id: gate 
title: Gate
sidebar_label: Gate
---

ISLE-компонент, позволяющий отображать своих детей только для зарезервированной аудитории.

## Варианты

* __user__ | `boolean`: когда установлено, что содержимое ворот отображается для пользователей. Default: `false`.
* __notUser__ | `boolean`: если установлено, что содержимое шлюза **not** отображается для пользователей. Default: `false`.
* __enrolled__ | `boolean`: при настройке отображения контента на экране студентам, записавшимся на курс. Default: `false`.
* __notEnrolled__ | `boolean`: если установлено, что контент на выходе **нет** отображается студентам, записавшимся на курс. Default: `false`.
* __owner__ | `boolean`: при установке, контент с закрытыми дверьми отображается владельцу курса (обычно это инструктор). Default: `false`.
* __notOwner__ | `boolean`: когда установлено, что закрытое содержание **not** отображается владельцу курса (обычно инструктору). Default: `false`.
* __after__ | `Date`: время, по истечении которого содержимое ворот должно стать видимым. Default: `none`.
* __until__ | `Date`: время до тех пор, пока содержимое ворот не останется видимым. Default: `none`.
* __banner__ | `node`: пользовательское сообщение, которое отображается посетителям, для которых дети ворот не видны, вместо сообщения по умолчанию. Default: `none`.
* __disabled__ | `boolean`: если ворота отключены, баннер будет показан независимо от того. Default: `false`.
* __showOwnerInPresentationMode__ | `boolean`: управляет тем, показывать ли содержимое ворот в режиме презентации, когда ворота видны для `владельцев`. Default: `true`.
* __check__ | `function`: функция обратного вызова, возвращающая `булеан`, указывающая, должны ли ворота отображать дочерние компоненты; функция вызывается всякий раз, когда поступают действия сеанса. Default: `none`.


## Примеры

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

