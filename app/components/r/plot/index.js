// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import createPrependCode from 'components/r/utils/create-prepend-code';
import Spinner from 'components/spinner';
import Image from 'components/image';


// MAIN //

class RPlot extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			plotURL: null,
			plot: null,
			last: '',
			waiting: false
		};
	}

	savePlot = ( error, img, body ) => {
		if ( error ) {
			this.props.onDone( error );
		} else {
			this.setState({
				plotURL: img,
				plot: body,
				waiting: false
			}, () => {
				this.props.onDone( null, img, body );
			});
		}
	}

	getPlot() {
		if ( this.props.code !== this.state.last ) {
			this.setState({
				waiting: true,
				last: this.props.code,
				showModal: false
			});
			const prependCode = createPrependCode( this.props.libraries, this.props.prependCode );
			const fullCode = prependCode + this.props.code;
			const { session } = this.context;
			session.getRPlot( fullCode, this.props.fileType, this.savePlot );
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
			<div className="rplot" style={{ minHeight: 128, cursor: 'pointer' }}>
				<Spinner running={this.state.waiting} width={256} height={128}/>
				{ this.state.waiting ?
					<span /> :
					<Image
						src={this.state.plotURL}
						body={this.state.plot}
						title="R Plot"
						{...this.props}
					/>
				}
			</div>
		);
	}

}


// PROPERTY TYPES //

RPlot.propTypes = {
	code: PropTypes.string,
	fileType: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
	libraries: PropTypes.array,
	prependCode: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array
	]),
	onDone: PropTypes.func,
	onShare: PropTypes.func
};

RPlot.contextTypes = {
	session: PropTypes.object
};


// DEFAULT PROPERTIES //

RPlot.defaultProps = {
	code: '',
	fileType: 'png',
	width: 600,
	height: 400,
	libraries: [],
	prependCode: '',
	onDone(){},
	onShare: null
};


// EXPORTS //

export default RPlot;
