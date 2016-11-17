# Color Picker

A wrapper for the [react-color](https://casesandberg.github.io/react-color/) colorpicker.

Example:

``` html
	<ColorPicker onChangeComplete={ color => {
		var out = color;
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

Options:

* __color__: `string` holding an HeX code or an `object` holding RGB or HSL values such as `{ r: 255, g: 255, b: 255 }` or `{ h: 0, s: 0, l: .10 }`, which determines the active color. Both accept an `a` property for alpha values other than one.
* __onChange__: callback `function` invoked every time color is changed. Default: `null`.
* __onChangeComplete__: callback `function` invoked once a color change is complete. Default: `null`.
* __disableAlpha__: `boolean` governing whether to remove alpha slider and options. Default: `false`.
* __presetColors__: `Array` of HeX `strings` specifying the default colors at the bottom of the colorpicker. Default: `['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF']`
* __width__: `number` giving the width of the colorpicker (in px). Default: `200`.
