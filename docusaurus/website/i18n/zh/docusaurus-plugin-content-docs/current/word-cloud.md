---
id: word-cloud 
title: Word Cloud
sidebar_label: Word Cloud
---

建立在[d3-cloud](https://github.com/jasondavies/d3-cloud)之上的词云组件。

## 选项

* __data__ | `array`: 生成词云的文本数组，或者，如果 "precalculated "设置为 "true"，则生成词数对象数组(有 "text "和 "value "键). Default: `[]`.
* __font__ | `(string|function)`: 访问函数，指定每个字的字型。也接受一个常量而不是函数. Default: `'serif'`.
* __fontSizeMapper__ | `function`: undefined. Default: `none`.
* __height__ | `number`: 字云的高度(单位：px). Default: `600`.
* __language__ | `string`: 语言标识符(确定要删除的停顿字). Default: `'en'`.
* __minCount__ | `number`: 如果设置，则只包含给定数据中出现次数超过`minCount`的词。. Default: `none`.
* __saveButton__ | `boolean`: 控制是否显示将word cloud保存为图像的按钮。. Default: `true`.
* __onClick__ | `function`: 当单词云上的单词被点击时，调用回调函数。. Default: `onClick() {}`.
* __padding__ | `(function|number)`: 访问函数或常量，表示每个字的数字填充。. Default: `5`.
* __precalculated__ | `boolean`: 控制词云是否需要预先计算的字数数组，还是为给定文本生成字数。. Default: `false`.
* __rotate__ | `(function|number)`: 访问函数，表示每个字的旋转角度（度数）。也可以接受一个常数，而不是一个函数。. Default: `word => word.value % 360`.
* __updateThreshold__ | `number`: 在重新渲染word cloud之前，"data "中新文档的批量大小。. Default: `5`.
* __stopwords__ | `array`: 渲染词云前要删除的附加停顿字。. Default: `[]`.
* __triggerRender__ | `boolean`: 当数据集交换时，重新发送。. Default: `true`.
* __style__ | `object`: CSS内联样式. Default: `{}`.
* __width__ | `number`: 字云宽度(单位：px). Default: `700`.


## 例子

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Style', value: 'withStyle' },
        { label: 'With Stopwords', value: 'withStopwords' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<WordCloud data={[
  'This is my holiday', 
  'Breakfast is great', 
  'My house is my castle', 
  'A castle for a kingdom', 
  'I am longing for breakfast',
  'Having rolls for breakfast is a must',
  'A horse for a kingdom',
  'Mom like rolls',
  'Orange juice is fine',
  'Where is the butter',
  'I am looking for a spoon',
  'Coffee for coffee drinkers',
  'Tea for the sleepy ones',
  'The sleepy, sloppy, crazy King lives in a castle',
  'A house for everybody'
]} />
```
</TabItem>

<TabItem value="withStyle">

```jsx live
<WordCloud 
  style={{ boxShadow: '10px 0 25px black' }}
  rotate={-7}
  data={[
    'This is my castle', 
    'Breakfast is great', 
    'My house is my castle', 
    'A castle for a kingdom', 
    'I am longing for breakfast',
    'Having rolls for breakfast is a must',
    'A horse for a kingdom',
    'Mom like rolls',
    'Orange juice is a castle drink',
    'Where is the butter',
    'I am looking for a castle',
    'Coffee for coffee drinkers',
    'Tea for the sleepy ones',
    'The sleepy, sloppy, crazy King lives in a castle',
    'A holiday for everybody'
]} />
```
</TabItem>

<TabItem value="withStopwords">

```jsx live
<WordCloud 
  stopwords={[ 'castle', 'crap', 'damn' ]}
  data={[
    'This is my holiday', 
    'Breakfast is great', 
    'My house is my castle', 
    'A castle for a kingdom', 
    'I am longing for breakfast',
    'Having rolls for breakfast is a must',
    'A horse for a kingdom',
    'Mom like rolls',
    'Orange juice is fine',
    'Where is the butter',
    'I am looking for a spoon',
    'Coffee for coffee drinkers',
    'Tea for the sleepy ones',
    'The sleepy, sloppy, crazy King lives in a castle',
    'A house for everybody',
    'castle castle castle castle castle castle castle castle castle castle',
    'crap crap crap crap crap crap crap damn damn damn dam'
]} />
```

</TabItem>

</Tabs>
