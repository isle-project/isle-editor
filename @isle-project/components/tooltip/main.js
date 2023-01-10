// MODULES //
import main from './index.js';


// EXPORTS //

/*
main.propTypes = {
	id: PropTypes.string,
	show: PropTypes.bool,
	tooltip: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node
	]),
	placement: PropTypes.oneOf([ 'top', 'right', 'bottom', 'left' ]),
	onToggle: PropTypes.func
};

main.defaultProps = {
	id: 'tooltip',
	placement: 'right',
	show: true,
	tooltip: null,
	onToggle: null
};
*/

/**
* A tooltip overlay.
*
* @property {string} id - identifier
* @property {string} tooltip - tooltip content
* @property {string} placement - direction of the tooltip
* @property {boolean} show - controls whether the tooltip shall be displayed
* @property {Function} onToggle - function invoked when tooltip is toggled
*/
export default main;
