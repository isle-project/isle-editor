// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import Spinner from 'components/spinner';
import createPrependCode from 'components/r/utils/create-prepend-code';


// FUNCTIONS //

const showResult = ( res ) => {
	if ( res ) {
		let sanitized = {
			__html: DOMPurify.sanitize( res )
		};
		// eslint-disable-next-line react/no-danger
		return <pre id="output"><span dangerouslySetInnerHTML={sanitized} /></pre>;
	}
	return <span />;
};


// MAIN //

class ROutput extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			result: null,
			running: false,
			last: ''
		};

		this.getResult = ( nextProps ) => {
			let code;
			if ( nextProps ) {
				code = nextProps.code;
			} else {
				code = this.props.code;
			}
			if ( code !== this.state.last ) {
				this.setState({
					last: this.props.code,
					running: true
				});

				const { session } = this.context;
				const prependCode = createPrependCode( this.props.libraries, this.props.prependCode );
				const fullCode = prependCode + code;
				session.executeRCode({
					code: fullCode,
					onError: ( error ) => {
						this.setState({
							result: error,
							running: false
						});
					},
					onResult: ( err, res, body ) => {
						this.setState({
							result: body,
							running: false
						});
					}
				});
			}
		};
	}

	componentDidMount() {
		this.getResult( this.props );
	}

	componentWillReceiveProps( props ) {
		this.getResult( props );
	}

	render() {
		return (
			<span className="ROutput">
				{ this.state.result ?
					<div
						style={{
							marginLeft: 'auto',
							marginRight: 'auto',
							marginTop: '10px',
							marginBottom: '10px'
						}}
					>
						<Spinner
							width={128}
							height={64}
							style={{
								marginTop: '8px',
								marginBottom: '-12px'
							}}
							running={this.state.running}
						/>
						{ !this.state.running ?
							showResult( this.state.result ) :
							<span />
						}
					</div> :
					<span />
				}
			</span>
		);
	}
}


// PROPERTY TYPES //

ROutput.propTypes = {
	code: PropTypes.string,
	libraries: PropTypes.array,
	prependCode: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array
	])
};

ROutput.contextTypes = {
	session: PropTypes.object
};


// DEFAULT PROPERTIES //

ROutput.defaultProps = {
	code: '',
	libraries: [],
	prependCode: ''
};


// EXPORTS //

export default ROutput;
