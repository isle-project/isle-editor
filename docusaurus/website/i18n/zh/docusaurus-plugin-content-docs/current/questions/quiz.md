---
id: quiz 
title: Quiz
sidebar_label: Quiz
---

一个显示问题组件序列的测验组件。

## 选项

* __confidence__ | `boolean`: 是否显示李克特量表，询问用户答案的可信度。. Default: `false`.
* __forceConfidence__ | `boolean`: 控制用户在进入下一个问题之前是否需要提供一个置信度。. Default: `false`.
* __count__ | `number`: 测验题的数量. Default: `none`.
* __questions__ | `array (required)`: 问题数组，从中随机抽取问题。. Default: `none`.
* __active__ | `boolean`: 控制测验的定时器是否处于活动状态。. Default: `true`.
* __duration__ | `number`: 测验的持续时间（分钟）；一旦时间到了，将显示摘要页。. Default: `none`.
* __skippable__ | `boolean`: 控制测验中的问题是否可以跳过。. Default: `true`.
* __footerNodes__ | `array`: 要显示在每个问题的页脚的节点数组。. Default: `[]`.
* __nextLabel__ | `string`: 下一题的按钮标签. Default: `none`.
* __provideFeedback__ | `boolean`: 控制是否在测验完成后向学生反馈答案的正确性。. Default: `true`.
* __showFinishButton__ | `boolean`: 控制是否显示按钮来完成测验并直接跳到结果页面。. Default: `false`.
* __finishLabel__ | `string`: 完成测验按钮的标签. Default: `none`.
* __downloadButton__ | `boolean`: 控制是否显示下载回复的按钮。. Default: `true`.
* __repeatable__ | `boolean`: undefined. Default: `false`.
* __onFinished__ | `function`: 当测验结束并显示结果页面时调用的回调。. Default: `onFinished() {}`.
* __onSubmit__ | `function`: 当用户提交回答时调用回调。. Default: `onSubmit() {}`.


## 例子

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Subset of Questions', value: 'subset' },
        { label: 'Not Skippable', value: 'notSkippable' },
        { label: 'Confidence Check', value: 'confidenceCheck' },,
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<Quiz
    questions={[
        <FreeTextQuestion 
            question="What is the capital of France?" 
            rows={1} 
            solution="Paris" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Poland?" 
            rows={1} 
            solution="Warsaw" 
        />
    ]}
/>
```
</TabItem>

<TabItem value="subset">

```jsx live
<Quiz
    count={3}
    questions={[
        <FreeTextQuestion 
            question="What is the capital of France?" 
            rows={1} 
            solution="Paris" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Poland?" 
            rows={1} 
            solution="Warsaw" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Portugal?" 
            rows={1} 
            solution="Lisbon" 
        />,     
        <FreeTextQuestion 
            question="What is the capital of Egypt?" 
            rows={1} 
            solution="Cairo" 
        />
    ]}
/>
```
</TabItem>

<TabItem value="notSkippable" >

```jsx live
<Quiz
    skippable={false}
    questions={[
        <FreeTextQuestion 
            question="What is the capital of France?" 
            rows={1} 
            solution="Paris" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Poland?" 
            rows={1} 
            solution="Warsaw" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Portugal?" 
            rows={1} 
            solution="Lisbon" 
        />,     
        <FreeTextQuestion 
            question="What is the capital of Egypt?" 
            rows={1} 
            solution="Cairo" 
        />
    ]}
/>
```
</TabItem>

<TabItem value="confidenceCheck">

```jsx live
<Quiz
    confidence
    forceConfidence
    count={4}
    questions={[
        <FreeTextQuestion 
            question="What is the capital of France?" 
            rows={1} 
            solution="Paris" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Poland?" 
            rows={1} 
            solution="Warsaw" 
        />,
        <FreeTextQuestion 
            question="What is the capital of Portugal?" 
            rows={1} 
            solution="Lisbon" 
        />,     
        <FreeTextQuestion 
            question="What is the capital of Egypt?" 
            rows={1} 
            solution="Cairo" 
        />
    ]}
/>
```
</TabItem>

</Tabs>
