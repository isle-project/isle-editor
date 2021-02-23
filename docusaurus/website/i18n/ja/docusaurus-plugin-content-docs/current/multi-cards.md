---
id: multi-cards
title: Multi Cards
sidebar_label: Multi Cards
---

複数のフリップ可能なカード（メモリーゲームなど）を作成してコントロールすることができるISLEのコンポーネント。

## オプション

* __animation__ | `object`: オブジェクトには名前(`anim-scal-up` のような)と持続時間(`1.7s` = 1.7秒のような)が含まれます。. Default: `{}`.
* __memory__ | `boolean`: 与えられた値のペアをマッチさせるメモリゲームモードを有効にするかどうか。. Default: `none`.
* __onChange__ | `function`: フリッパブルカードの行列を受け取る関数. Default: `onChange() {}`.
* __onMemoryComplete__ | `function`: メモリゲームが完了した場合に呼び出されるコールバック. Default: `onMemoryComplete() {}`.
* __oneTime__ | `boolean`: は、フリップ処理を一度だけ実行するかどうかを示します。. Default: `false`.
* __values__ | `array<object>`: は、それぞれのカードの値を `front` と `back` の入力フィールドを持つ配列に入力します。このような値は文字列でもよいが、本格的な ISLE コンポーネントでもよい。. Default: `[]`.
* __style__ | `object`: CSSインラインスタイル. Default: `{}`.
* __containerStyle__ | `object`: カードコンテナのCSSスタイル. Default: `{}`.
* __frontStyle__ | `object`: カードの前面のCSSスタイル. Default: `{}`.
* __backStyle__ | `object`: カード裏面のCSSスタイル. Default: `{}`.


## 例としては、以下のようなものがあります。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Front Image', value: 'frontImage' },
        { label: 'Memory', value: 'memory' },
        { label: 'Memory with Solved Callback', value: 'memorySolvedCallback' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<MultiCards
    containerStyle={{
        width: 250,
        height: 250,
        marginBottom: 10
    }}
    frontStyle={{
        color:'white',
        textShadow: '0px 0px 3px black',
        fontWeight: 800,
        fontSize: 30,
        cursor: 'pointer',
        textAlign: 'center',
        boxShadow: '1px 1px 10px black',
        background: 'silver'
    }}
    backStyle={{
        color: 'black',
        fontSize: 20,
        fontWeight: 800,
        fontFamily: 'Oswald',
        textAlign: 'left',
        paddingLeft: '10px',
        background: 'ghostwhite',
        boxShadow: '1px 1px 10px black',
    }}
    values={[
        { front: "number 1", back: 'back side of #1'},
        { front: "number 2", back: 'back side of #2'},
        { front: "number 3", back: 'back side of #3'},
        { front: "number 4", back: 'back side of #4'}
    ]}
/>
```
</TabItem>

<TabItem value="frontImage">

```jsx live
<MultiCards
    containerStyle={{
        width: 250,
        height: 250,
        marginBottom: 10
    }}
    frontStyle={{
        color:'white',
        textShadow: '0px 0px 13px black',
        fontWeight: 800,
        fontSize: 30,
        cursor: 'pointer',
        textAlign: 'center',
        boxShadow: '1px 1px 10px black',
        backgroundImage: 'url(https://isle.heinz.cmu.edu/seamless_1543575455035.png)',
        backgroundSize: '100% auto'
    }}
    backStyle={{
        color: 'black',
        fontSize: 20,
        fontWeight: 800,
        fontFamily: 'Oswald',
        textAlign: 'left',
        paddingLeft: '10px',
        background: 'ghostwhite',
        boxShadow: '1px 1px 10px black',
    }}
    values={[
        { front: "number 1", back: 'back side of #1'},
        { front: "number 2", back: 'back side of #2'},
        { front: "number 3", back: 'back side of #3'},
        { front: "number 4", back: 'back side of #4'}
    ]}
/>
```
</TabItem>

<TabItem value="memory">

```jsx live
<MultiCards
    memory
    containerStyle={{
        width: 200,
        height: 200,
        marginBottom: 10
    }}
    frontStyle={{
        color:'white',
        textShadow: '0px 0px 3px black',
        fontWeight: 800,
        fontSize: 30,
        cursor: 'pointer',
        textAlign: 'center',
        boxShadow: '1px 1px 10px black',
        background: 'silver',
        backgroundImage: 'url(https://isle.heinz.cmu.edu/seamless_1543575455035.png)',
    }}
    backStyle={{
        padding: 12,
        boxShadow: '1px 1px 10px black'
    }}
    values={[
        { front: "", back: <img src="https://bit.ly/3qS4daf"/> },
        { front: "",  back: <img src="https://bit.ly/3sn5Ih6"/> },
        { front: "",  back: <img src="https://bit.ly/3qNVpSP" /> }
    ]}
/>
```
</TabItem>

<TabItem value="memorySolvedCallback">

```jsx live
<MultiCards
    memory
    containerStyle={{
        width: 200,
        height: 200,
        marginBottom: 10
    }}
    frontStyle={{
        color:'white',
        textShadow: '0px 0px 3px black',
        fontWeight: 800,
        fontSize: 30,
        cursor: 'pointer',
        textAlign: 'center',
        boxShadow: '1px 1px 10px black',
        background: 'silver',
        backgroundImage: 'url(https://isle.heinz.cmu.edu/seamless_1543575455035.png)',
    }}
    backStyle={{
        padding: 12,
        boxShadow: '1px 1px 10px black'
    }}
    values={[
        { front: "", back: <img src="https://bit.ly/3qS4daf"/> },
        { front: "",  back: <img src="https://bit.ly/3sn5Ih6"/> },
        { front: "",  back: <img src="https://bit.ly/3qNVpSP" /> }
    ]}
    onMemoryComplete={() => { alert( 'The memory has been solved...' ); }}
/>
```
</TabItem>

</Tabs>


