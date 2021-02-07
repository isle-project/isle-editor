---
id: text-editor
title: Text Editor
sidebar_label: Text Editor
---

メモやレポートを書くためのテキストエディタです。メモをHTMLやPDFファイルにエクスポートしたり、ISLEサーバーへの自動送信をサポートしています。

## Options

* __allowSubmissions__ | `boolean`: 学生がレポートをサーバーに提出するかどうかを制御します。. Default: `true`.
* __canLoadHTML__ | `boolean`: 保存したHTMLファイルをエディタに読み込むためのボタンを表示するかどうかを制御します。. Default: `true`.
* __defaultValue__ | `string`: エディタのデフォルトテキスト. Default: `'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'`.
* __mode__ | `string`: テキスト編集モードを制御します (個人文書であれば `individual`、グループ文書であれば `group`、全員の文書であれば `collaborative`、コホート文書であれば `cohort` のいずれか)。. Default: `'individual'`.
* __resetModal__ | `{title,body,buttonLabel,notificationTitle,notification,tooltip}`: undefined. Default: `none`.
* __voiceTimeout__ | `number`: 投入後の時間. Default: `5000`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.


## Examples

```jsx live
<TextEditor />
```

