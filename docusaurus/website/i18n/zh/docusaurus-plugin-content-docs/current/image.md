---
id: image
title: Image
sidebar_label: Image
---

用于显示图像的组件。

## Options

* __src__ | `string (required)`: 图像源位置. Default: `none`.
* __alt__ | `string`: 图片说明. Default: `''`.
* __body__ | `string`: 图像的base64编码数据. Default: `none`.
* __height__ | `(number|string)`: 图片高度(单位：px). Default: `none`.
* __width__ | `(number|string)`: 图像宽度(单位：px). Default: `none`.
* __inline__ | `boolean`: 允许图像被文字包围. Default: `false`.
* __id__ | `string`: 部件标识符. Default: `none`.
* __showModal__ | `boolean`: 控制是否显示全屏模态视图。. Default: `true`.
* __className__ | `string`: 班名. Default: `''`.
* __style__ | `object`: CSS内联样式. Default: `{}`.
* __onShare__ | `function`: 如果点击 "分享 "按钮，则调用图片的回调。. Default: `none`.


## Examples

```jsx live
<Image 
    alt="The Starry Night by Vincent van Gogh" 
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
    className="center"
    width="50%"
    height="auto"
/>
```

