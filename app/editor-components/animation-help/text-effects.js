// MODULES //

import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';


// VARIABLES//

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


// FUNCTIONS //

/**
 * Returns the effect for the specified index.
 *
 * @private
 * @param {number} index - index
 * @returns {Node} effect node
 */
function getEffect( index ) {
	const general = {
		fontSize: 50,
		fontWeight: 800,
		fontFamily: 'Open Sans Condensed',
		width: '60%',
		float: 'left'
	};
	const style = styles[ index ];
	return (
		<div>
			<div style={general} className={style}>{style}</div>
			<div style={{ marginTop: 35, float: 'left', fontSize: 20, width: '40%', textAlign: 'right' }}>
				<CopyToClipboard text={style}>
				<span title="copy to clipboard" className="copy" />
				</CopyToClipboard>
			</div>
		</div>
	);
}

/**
 * Returns a list of effects.
 *
 * @private
 * @returns {Array} array of effects
 */
function getEffects() {
	const list = [];
	for ( let i = 0; i < styles.length; i++) {
		list.push( getEffect(i) );
	}
	return list;
}


// MAIN //

/**
 * Text effects for use in the animation component.
 */
const TextEffects = ({ t }) => {
	const list = getEffects();
	const template = 'style = {{ fontSize: 60, animationDuration: \'5s\', backgroundImage: \'url(linear-gradient( 45deg, blue, yellow, red, white)\' }}';
	return (
		<div>
			<div>
				{t('copy-animation-to-clipboard')}
			</div>
			<br />
			<CopyToClipboard text={template}>
				<span title="copy to clipboard" className="copy" />
			</CopyToClipboard>
			<br />
			<br />
			<div>
				{t('modify-animation')}
			</div>
			<hr />
			<div>
				{list}
			</div>
		</div>
	);
};


// EXPORTS //

export default TextEffects;
