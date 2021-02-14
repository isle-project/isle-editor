---
id: multi-cards
title: Multi Cards
sidebar_label: Multi Cards
---

複数のフリップ可能なカード（メモリーゲームなど）を作成してコントロールすることができるISLEのコンポーネント。

## Options

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


## Examples

```jsx live
<MultiCards
    onChange={(data) => {
        console.log(data);
    }}
    containerStyle={{
        width: 250,
        height: 250,
        marginBottom: 10
    }}
    frontStyle={{
        color:'gainsboro',
        cursor: 'pointer',
        textAlign: 'center',
        boxShadow: '1px 1px 10px black',
        backgroundImage: 'url(https://isle.heinz.cmu.edu/seamless_1543575455035.png)',
        backgroundSize: '100% auto'
    }}
    backStyle={{
        color: 'blue',
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



