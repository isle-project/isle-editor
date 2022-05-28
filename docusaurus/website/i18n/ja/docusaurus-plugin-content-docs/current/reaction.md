---
id: reaction 
title: Reaction
sidebar_label: Reaction
---

ユーザーのアクションに応じて異なるコンポーネントを表示します。

## オプション

* __actionID__ | `string (required)`: ウォッチするコンポーネントのID. Default: `none`.
* __banner__ | `node`: ユーザーがまだアクションを実行していない場合に表示されるカスタムメッセージ. Default: `none`.
* __show__ | `(object|function)`: 異なるレスポンスが与えられた場合に表示するコンポーネントのハッシュテーブル(`key` がレスポンスにマッチしない場合、`default` キーが設定されていればそれに対応する値が表示されます)、または表示するコンポーネントを返す関数(関数の唯一の引数は最新の結果です)です。. Default: `{}`.


## 例としては、以下のようなものがあります。

```jsx live
<div>
	<NumberQuestion
		question="What is the first prime number?"
		id="question-with-reaction"
	/>
	<Reaction actionID="question-with-reaction" show={( answer ) => {
		if ( answer === 2 ) {
			return <p>Awesome, that was correct.</p>
		}
		return <p>You might want to review the following video on prime numbers:
			<VideoPlayer url="https://www.youtube.com/watch?v=mIStB5X4U8M" />
		</p>;
	}} />
</div>
``` 

