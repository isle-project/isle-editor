---
id: free-text-question 
title: Free Text Question
sidebar_label: Free Text Question
---

一个ISLE组件，用于学生应以自由文本形式提供答案的问题。

## 选项

* __question__ | `(string|node)`: 问题显示在自由文本问题组件的顶部。. Default: `''`.
* __hints__ | `array<(string|node)>`: 指导如何回答问题的提示。. Default: `[]`.
* __hintPlacement__ | `string`: 提示的位置（可以是 `top`、`left`、`right`, 或 `bottom`）。. Default: `'top'`.
* __feedback__ | `boolean`: 控制是否显示反馈按钮. Default: `true`.
* __solution__ | `(string|node)`: 示范答案. Default: `''`.
* __instantSolution__ | `boolean`: 是否可以立即切换显示模型答案。. Default: `false`.
* __rows__ | `number`: 文本字段中供学生输入答案的行数。. Default: `5`.
* __chat__ | `boolean`: 控制是否应该为问题启用群聊。. Default: `false`.
* __resizable__ | `boolean`: 控制文本区域是否应该调整大小。. Default: `false`.
* __placeholder__ | `string`: 在用户输入任何文本之前显示的占位符文本。. Default: `''`.
* __disableSubmitNotification__ | `boolean`: 控制是否禁用提交通知. Default: `false`.
* __submissionMsg__ | `string`: 学习者首次提交答案时显示的通知。. Default: `''`.
* __resubmissionMsg__ | `string`: 第一次提交后，所有提交的通知都会显示. Default: `'You have successfully re-submitted your answer.'`.
* __provideFeedback__ | `boolean`: 表示是否应该在学习者提交答案后显示包括正确答案在内的反馈信息。. Default: `true`.
* __maxlength__ | `number`: 最大允许字符数. Default: `2500`.
* __until__ | `Date`: 允许学生提交答案的时间. Default: `none`.
* __points__ | `number`: 最高分. Default: `10`.
* __className__ | `string`: 班名. Default: `''`.
* __style__ | `object`: CSS内联样式. Default: `{}`.
* __onChange__ | `function`: 每当文本区域值发生变化时调用回调；接收当前文本作为唯一参数。. Default: `onChange() {}`.
* __onSubmit__ | `function`: 当用户提交答案时调用的回调；接收提交的文本作为唯一参数。. Default: `onSubmit() {}`.


## 例子

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Points for Grading', value: 'withPointsForGrading' },
        { label: 'No Feedback', value: 'withoutFeedbackAndNotification' },
        { label: 'Solution', value: 'withSolution' },
        { label: 'Hints', value: 'withHints' },
        { label: 'Placeholder', value: 'placeholderText' },
        { label: 'Due Date', value: 'dueDate' }
    ]}
    lazy
>

<TabItem value="minimal" >

```jsx live
<FreeTextQuestion 
    question="Please tell us your thoughts about this course." 
    rows={3} 
/>
```
</TabItem>

<TabItem value="withPointsForGrading" >

```jsx live
<FreeTextQuestion 
    question={<span>Can you please explain Montesquieu's System of *separation of powers*?</span>} 
    rows={3} 
    points={15}
/>
```

</TabItem>

<TabItem value="withoutFeedbackAndNotification" >

```jsx live
<FreeTextQuestion 
    question="Please tell us your thoughts about this course." 
    rows={3}
    disableSubmitNotification 
    feedback={false}
/>
```

</TabItem>

<TabItem value="withSolution" > 

```jsx live
<FreeTextQuestion 
    question="Who was the English prime minister who spoke of 'blood, sweat and tears'?" 
    rows={1} 
    solution="Winston Churchill" 
/>
```

</TabItem>

<TabItem value="withHints" >

```jsx live
<FreeTextQuestion 
    question="Who was the English prime minister who spoke of 'blood, sweat and tears'?" 
    rows={1} 
    solution="Winston Churchill" 
    hints = {["No, it was not Margret Thatcher", "He believed in Aliens by the way", "His first name was Winston - like the guy in 1984"]}
    submissionMsg = "His name was Winston churchill, and it occurred in a speech given by him to the House of Commons of the Parliament of the United Kingdom on 13 May 1940. The speech is sometimes known by that name"
/>
```

</TabItem>

<TabItem value="placeholderText" >

```jsx live
<FreeTextQuestion 
    question="Who was the English prime minister who spoke of 'blood, sweat and tears'?" 
    rows={3} 
    solution="Winston Churchill" 
    placeholder="Think of an overweight politician with a big cigar in his mouth."
/>
```

</TabItem>

<TabItem value="dueDate" >

```jsx live
<FreeTextQuestion 
    question="Please tell us your thoughts about this course." 
    rows={3} 
    until={new Date( Date.UTC(2029, 0, 1, 3, 33 ) )}
    placeholder="You can set a date until answers are accepted. In this case it is 2020, 1st of January, 3:30 am UTC time."
/>
```

</TabItem>

</Tabs>
