---
id: text-editor
title: Text Editor
sidebar_label: Text Editor
---

メモやレポートを書くためのテキストエディタです。メモをHTMLやPDFファイルにエクスポートしたり、ISLEサーバーへの自動送信をサポートしています。

## オプション

* __allowSubmissions__ | `boolean`: 学生がレポートをサーバーに提出するかどうかを制御します。. Default: `true`.
* __canLoadHTML__ | `boolean`: 保存したHTMLファイルをエディタに読み込むためのボタンを表示するかどうかを制御します。. Default: `true`.
* __defaultValue__ | `string`: エディタのデフォルトテキスト. Default: `'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'`.
* __history__ | `boolean`: は、エディタにヒストリービューを含めるかどうかを制御します。. Default: `true`.
* __mode__ | `string`: テキスト編集モードを制御します (個人文書であれば `individual`、グループ文書であれば `group`、全員の文書であれば `collaborative`、コホート文書であれば `cohort` のいずれか)。. Default: `'individual'`.
* __resetModal__ | `{title,body,buttonLabel,notificationTitle,notification,tooltip}`: ドキュメントをリセットするためのモーダルをカスタマイズするためのオブジェクト (通常は変更されるべきではありません). Default: `none`.
* __sendSubmissionEmails__ | `boolean`: 送信時にPDF/HTML出力で確認メールを送信するかどうかを制御します。. Default: `false`.
* __voiceTimeout__ | `number`: 投入後の時間. Default: `5000`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.


## 例としては、以下のようなものがあります。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Default Value', value: 'defaultValue' },
        { label: 'Mode', value: 'mode' },
        { label: 'With Style', value: 'withStyle' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<TextEditor  />
```

</TabItem>

<TabItem value="defaultValue">

```jsx live
<TextEditor defaultValue={`# Welcome!

This is a text that uses **markdown**

## Second Heading Level

[Wikipedia Link](https://https://www.wikipedia.org/).
`} />
```

</TabItem>

<TabItem value="mode">

```jsx live
<TextEditor defaultValue="This is reserved for an individual. But you can also allow groups, students cohorts, or everybody to join in and work collaboratively (setting the mode option will only have an effect in a live lesson, not this preview)." 
mode="individual" />
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<TextEditor  
  defaultValue="[Generate CSS-Gradients Online!](https://cssgradient.io/)"
  style={{ 
    background: 'green',
    background: 'radial-gradient(circle, rgba(251,213,112,0.7315301120448179) 0%,rgba(83,199,14,0.4514180672268907) 100%)' 
  }}
/>
```

</TabItem>

</Tabs>
