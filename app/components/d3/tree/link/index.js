// MODULES //

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { svg, select } from 'd3';
import './style.css';


// FUNCTIONS //

function linkVertical(d) {
	return 'M' + d.source.x + ',' + d.source.y +
		'C' + (d.source.x + d.target.x) / 2 + ',' + d.source.y +
		' ' + (d.source.x + d.target.x) / 2 + ',' + d.target.y +
		' ' + d.target.x + ',' + d.target.y;
}

function linkHorizontal(d) {
	return 'M' + d.source.y + ',' + d.source.x +
		'C' + (d.source.y + d.target.y) / 2 + ',' + d.source.x +
		' ' + (d.source.y + d.target.y) / 2 + ',' + d.target.x +
		' ' + d.target.y + ',' + d.target.x;
}

function diagonalPath( linkData, orientation ) {
	if ( orientation === 'horizontal' ) {
		return linkHorizontal( linkData );
	}
	return linkVertical( linkData );
}

function straightPath(linkData, orientation) {
	const straight = svg
		.line()
		.interpolate('basis')
		.x(d => d.x)
		.y(d => d.y);

	let data = [
		{ x: linkData.source.x, y: linkData.source.y },
		{ x: linkData.target.x, y: linkData.target.y }
	];

	if (orientation === 'horizontal') {
		data = [
			{ x: linkData.source.y, y: linkData.source.x },
			{ x: linkData.target.y, y: linkData.target.x }
		];
	}

	return straight( data );
}

function elbowPath( d, orientation ) {
	return orientation === 'horizontal' ?
		`M${d.source.y},${d.source.x}V${d.target.x}H${d.target.y}` :
		`M${d.source.x},${d.source.y}V${d.target.y}H${d.target.x}`;
}


// MAIN //

class Link extends PureComponent {
	constructor( props ) {
		super( props );
		this.state = {
			initialStyle: {
				opacity: 0
			}
		};
	}

	componentDidMount() {
		this.applyOpacity(1);
	}

	componentWillLeave( done ) {
		this.applyOpacity(0, done);
	}

	applyOpacity(opacity, done = () => {}) {
		const { transitionDuration } = this.props;

		select( this.link )
			.transition()
			.duration( transitionDuration )
			.style( 'opacity', opacity )
			.on( 'end', done );
	}

	drawPath() {
		const { linkData, orientation, pathFunc } = this.props;
		if ( typeof pathFunc === 'function' ) {
			return pathFunc(linkData, orientation);
		}
		if ( pathFunc === 'elbow' ) {
			return elbowPath( linkData, orientation );
		}
		if ( pathFunc === 'straight' ) {
			return straightPath( linkData, orientation );
		}
		return diagonalPath( linkData, orientation );
	}

	render() {
		const { styles } = this.props;
		return (
			<path
				ref={l => {
					this.link = l;
				}}
				style={{ ...this.state.initialStyle, ...styles }}
				className="linkBase"
				d={this.drawPath()}
			/>
		);
	}
}


// PROPERTIES //

Link.defaultProps = {
	styles: {}
};

Link.propTypes = {
	linkData: PropTypes.object.isRequired,
	orientation: PropTypes.oneOf(['horizontal', 'vertical']).isRequired,
	pathFunc: PropTypes.oneOfType([
		PropTypes.oneOf(['diagonal', 'elbow', 'straight']),
		PropTypes.func
	]).isRequired,
	styles: PropTypes.object,
	transitionDuration: PropTypes.number.isRequired
};


// EXPORTS //

export default Link;
