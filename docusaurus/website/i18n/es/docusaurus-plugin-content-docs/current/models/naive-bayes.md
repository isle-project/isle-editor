---
id: naive-bayes
title: Naive Bayes
sidebar_label: Naive Bayes
---

Bayes ingenuo suponiendo que los pronosticadores dados la pertenencia a la clase siguen una distribución normal.

## Options

* __data__ | `object (required)`: objeto de las matrices de valor. Default: `none`.
* __y__ | `string (required)`: variable de resultado. Default: `none`.
* __x__ | `(array<string>|string) (required)`: una o más variables de predicción. Default: `none`.
* __quantitative__ | `array<string> (required)`: de variables en los "datos" que son "cuantitativos".. Default: `none`.
* __omitMissing__ | `boolean`: controla si se omiten los valores que faltan. Default: `false`.
* __onPredict__ | `function`: llamada de retorno invocada con predicciones y residuos después del ajuste del modelo. Default: `none`.


## Examples

```jsx live
<NaiveBayes 
    data={heartdisease} 
    y="Drugs"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Complications' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

