---
id: sortable-tree 
title: Sortable Tree
sidebar_label: Sortable Tree
---

Egy vékony burkolat a [react-sortable-tree](https://www.npmjs.com/package/react-sortable-tree) körül, amely támogatja az említett komponens összes tulajdonságát.

## Opciók

* __treeData__ | `array<object> (required)`: objektumok tömbje a `title` (a csomópont elsődleges címkéje),
`subtitle` (másodlagos címke), `expanded` (a csomópont gyermekeinek megjelenítése, ha igazra van állítva), és/vagy
`children` (az adott csomóponthoz tartozó gyermek csomópontok tömbje).. Default: `none`.
* __title__ | `(string|node)`: fejléc címe. Default: `none`.


## Példák

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



