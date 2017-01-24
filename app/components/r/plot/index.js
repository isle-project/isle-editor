// MODULES //

import React, { Component, PropTypes } from 'react';
import request from 'request';
import createPrependCode from 'components/r/utils/create-prepend-code';
import Spinner from 'components/spinner';
import Image from 'components/image';


// CONSTANTS //

import { OPEN_CPU_DEFAULT_SERVER, OPEN_CPU_IDENTITY } from 'constants/opencpu.js';
const GRAPHICS_REGEX = /graphics/;


// MAIN //

class RPlot extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			plot: null,
			last: '',
			waiting: false
		};
	}

	getPlot() {
		if ( this.props.code !== this.state.last ) {
			this.setState({
				waiting: true,
				last: this.props.code,
				showModal: false
			});

			let prependCode = createPrependCode( this.props.libraries, this.props.prependCode );
			const fullCode = prependCode + this.props.code;

			const OPEN_CPU = global.ISLE.rshell && global.ISLE.rshell.server ?
				global.ISLE.rshell.server :
				OPEN_CPU_DEFAULT_SERVER;

			request.post( OPEN_CPU + OPEN_CPU_IDENTITY, {
				form: {
					x: fullCode
				}
			}, ( error, response, body ) => {
				if ( !error ) {
					const arr = body.split( '\n' );
					arr.forEach( elem => {
						if ( GRAPHICS_REGEX.test( elem ) === true ) {
							const imgURL = OPEN_CPU + elem;
							this.setState({
								plot: imgURL,
								waiting: false
							});
						}
					});
				}
			});
		}
	}

	componentDidMount() {
		this.getPlot();
	}

	componentDidUpdate() {
		this.getPlot();
	}

	render() {
		return (
			<div className="rplot" style={{
			}}>
				<Spinner running={this.state.waiting} width={256} height={128}/>
				{ this.state.waiting ?
					<span /> :
					<Image src={this.state.plot} title="R Plot" />
				}
			</div>
		);
	}

}


// PROPERTY TYPES //

RPlot.propTypes = {
	code: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
	libraries: PropTypes.array,
	prependCode: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array
	])
};


// DEFAULT PROPERTIES //

RPlot.defaultProps = {
	code: '',
	width: 600,
	height: 400,
	libraries: [],
	prependCode: ''
};


// EXPORTS //

export default RPlot;
