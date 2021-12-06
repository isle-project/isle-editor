---
id: color-picker
title: Color Picker
sidebar_label: Color Picker
---

react-color](https://casesandberg.github.io/react-color/) カラーピッカーのラッパー。

## オプション

* __variant__ | `string`: カラーピッカーのバリエーション（`Compact`、`Sketch`、`Material`、`Button`、`Block`のいずれか）。. Default: `'Sketch'`.
* __color__ | `(string|object)`: 文字列`はHeXコードを、`オブジェクト`はRGBやHSLの値を保持します。または `{ h: 0, s: 0, l: .10 }` のようなRGBやHSLの値を保持する `オブジェクト` を保持します。どちらも、1つ以外のアルファ値に対しては `a` プロパティを受け付けます。. Default: `'#fff'`.
* __disableAlpha__ | `boolean`: アルファスライダーとオプションを削除するかどうかを制御します。. Default: `false`.
* __presetColors__ | `array<string>`: カラーピッカーの下部にあるデフォルトの色を指定する HeX `strings`。. Default: `[
  '#D0021B',
  '#F5A623',
  '#F8E71C',
  '#8B572A',
  '#7ED321',
  '#417505',
  '#BD10E0',
  '#9013FE',
  '#4A90E2',
  '#50E3C2',
  '#B8E986',
  '#000000',
  '#4A4A4A',
  '#9B9B9B',
  '#FFFFFF'
]`.
* __width__ | `number`: カラーピッカーの幅. Default: `200`.
* __className__ | `string`: クラス名. Default: `''`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.
* __onChange__ | `function`: 色が変わるたびに呼び出されるコールバック. Default: `onChange() {}`.
* __onChangeComplete__ | `function`: 色の変更が完了したときに呼び出されるコールバック. Default: `onChangeComplete() {}`.


## 例としては、以下のようなものがあります。

```jsx live
<ColorPicker onChangeComplete={ color => {
    const out = color;
    /* e.g., returns 
        {
            "hsl": {"h":~250,"s":~0.4967,"l":~0.2063,"a":1},
            "hex":"#231a4f",
            "rgb":{"r":35,"g":26,"b":79,"a":1},
            "hsv":{"h":~250,"s":~0.664,"v":~0.3088,"a":1},
            "oldHue":~250,
            "source":"rgb"
        }
    */
}} />
```

