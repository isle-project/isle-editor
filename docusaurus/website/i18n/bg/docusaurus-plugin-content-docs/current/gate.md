---
id: gate 
title: Gate
sidebar_label: Gate
---

Компонент на ISLE, който позволява да се показват неговите деца само на запазена аудитория.

## Опции

* __user__ | `boolean`: когато е зададено, затвореното съдържание се показва на потребителите.. Default: `false`.
* __notUser__ | `boolean`: когато е зададено, затвореното съдържание **не се показва на потребителите. Default: `false`.
* __enrolled__ | `boolean`: когато е зададено, затвореното съдържание се показва на учениците, записани в курса.. Default: `false`.
* __notEnrolled__ | `boolean`: когато е зададено, затвореното съдържание **не се показва** на учениците, записани в курса.. Default: `false`.
* __owner__ | `boolean`: когато е зададено, затвореното съдържание се показва на собственика на курса (обикновено преподавателя).. Default: `false`.
* __notOwner__ | `boolean`: когато е зададено, затвореното съдържание **не се показва** на собственика на курса (обикновено преподавателя).. Default: `false`.
* __after__ | `Date`: времето, след което съдържанието на портала трябва да стане видимо. Default: `none`.
* __until__ | `Date`: времето, през което съдържанието на портата трябва да остане видимо. Default: `none`.
* __banner__ | `node`: персонализирано съобщение, което се показва на посетителите, за които децата на портата не са видими, вместо съобщението по подразбиране. Default: `none`.
* __disabled__ | `boolean`: ако портата е деактивирана, банерът ще се показва независимо от това.. Default: `false`.
* __showOwnerInPresentationMode__ | `boolean`: контролира дали да показва съдържанието на портата в режим на представяне, когато портата е видима за `собственика`.. Default: `true`.
* __check__ | `function`: функция за обратно извикване, връщаща `boolean`, указваща дали порталът трябва да показва детски компоненти; функцията се извиква при всяко пристигане на действия от сесията. Default: `none`.


## Примери

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

