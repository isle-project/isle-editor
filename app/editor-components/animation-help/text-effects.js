// MODULES //

import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

// VARIABLES

const styles = [
	'tv-screen-effect',
	'tv-screen-effect2',
	'tv-screen-effect3',
	'tv-screen-effect4',
	'tv-screen-effect5',
	'tv-screen-effect6',
	'cloud-effect1',
	'moving-colors',
	'grunge-effect1'
];


// MAIN //
function getEffect(ndx) {
	const general = {
		fontSize: 50,
		fontWeight: 800,
		fontFamily: 'Open Sans Condensed',
		width: '60%',
		float: 'left'
	};

	const style = styles[ndx];
	return (
		<div>
			<div style={general} className={style}>{style}</div>
			<div style={{marginTop: 35, float: 'left', fontSize: 20, width: '40%', textAlign: 'right'}}>
				<CopyToClipboard text={style}>
				<span title="copy to clipboard" className="copy" />
				</CopyToClipboard>
			</div>
		</div>
	);
}


function getEffects() {
	var list = [];
	for (var i = 0; i < styles.length; i++) {
		list.push( getEffect(i) );
	}
	return list;
}


const TextEffects = () => {
	var list = getEffects();

	const template = 'style = {{ fontSize: 60, animationDuration: \'5s\', backgroundImage: \'url(linear-gradient( 45deg, blue, yellow, red, white)\' }}';

	return (
		<div>
			<div>Click the Clipboard button and copy the value in the className attribute</div>
			<br />
			<CopyToClipboard text={template}>
			<span title="copy to clipboard" className="copy" />
			</CopyToClipboard>
			<br />
			<br />
			<div>In case you want to modify animation speed, background-image, you can copy the respective style template into your element</div>
			<hr />
			<div>
				{ list }
			</div>

		</div>
	);
};


// EXPORTS //

export default TextEffects;
