---
id: sortable-tree 
title: Sortable Tree
sidebar_label: Sortable Tree
---

Um invólucro fino em torno de [árvore reativa-estável] (https://www.npmjs.com/package/react-sortable-tree) que suporta todas as propriedades do referido componente.

## Opções

* __treeData__ | `array<object> (required)`: conjunto de objetos com `título` (etiqueta primária para o nó),
(etiqueta secundária), "expandido" (exibir os filhos do nó, se definido como verdadeiro), e/ou
"crianças" (conjunto de nós de crianças pertencentes ao respectivo nó). Default: `none`.
* __title__ | `(string|node)`: título de cabeçalho. Default: `none`.


## Exemplos

```jsx live
<SortableTree 
  onlyExpandSearchedNodes 
  canDrag={false} 
  treeData={[{
    title: 'Type of Data',
    children: [{
        title: 'Categorical',
        children: [{
          title: 'Chi-Square Test',
          subtitle: 'Test for independence for two variables or goodness-of-fit test'
        }]
      },
      {
        title: 'Continuous',
        children: [{
            title: 'Group Differences',
            children: [{
                title: 'Between Means',
                children: [{
                  title: 'How many groups?',
                  children: [{
                      title: 'Two',
                      children: [{
                        title: 'Are assumptions satisfied (potentially after data transformations)?',
                        subtitle: '1. Equal variances in both groups, 2. Data normally distributed or sufficiently large sample',
                        children: [{
                            title: 'If yes, can use a parametric test',
                            subtitle: 'Student\'s t-test (paired or unpaired)'
                          },
                          {
                            title: 'If not, use a nonparametric randomization test',
                            subtitle: 'E.g., Wilcoxon Rank Sum Test or Mann-Whitney U Test'
                          }
                        ]
                      }]
                    },
                    {
                      title: 'More than two',
                      children: [{
                        title: 'Are assumptions satisfied (potentially after data transformations)?',
                        subtitle: '1. Equal variances in each group, 2. Data normally distributed or sufficiently large sample',
                        children: [{
                            title: 'If yes, can use a parametric test',
                            subtitle: 'ANOVA (Analysis of Variance)'
                          },
                          {
                            title: 'If not, use a nonparametric randomization test',
                            subtitle: 'E.g., Kruskal-Wallis Test'
                          }
                        ]
                      }]
                    }
                  ]
                }]
              },
              {
                title: 'Between Variances',
                subtitle: 'Bartlett\'s Test or Levene\'s Test when data are normally distrubuted'
              }
            ]
          },
          {
            title: 'Relationships between Variables',
            children: [{
              title: 'Regression Analysis',
              subtitle: 'Simple linear regression for one response and one predictor,\nmultiple regression in case of several explanatory variables.'
            }]
          }
        ]
      }
    ]
  }]}
/>
``` 



