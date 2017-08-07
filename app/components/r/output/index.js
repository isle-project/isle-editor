// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import request from 'request';
import Spinner from 'components/spinner';
import createPrependCode from 'components/r/utils/create-prepend-code';


// CONSTANTS //

import { OPEN_CPU_IDENTITY } from 'constants/opencpu.js';
const ERR_REGEX = /\nIn call:[\s\S]*$/gm;
const STDOUT_REGEX = /stdout/;


// FUNCTIONS //

const showResult = ( res ) => {
	if ( res ) {
		let sanitized = {
			__html: DOMPurify.sanitize( res )
		};
		return <pre id="output"><span dangerouslySetInnerHTML={sanitized} /></pre>;
	} else {
		return <span />;
	}
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
				const OPEN_CPU = session.getOpenCPUServer();
				const prependCode = createPrependCode( this.props.libraries, this.props.prependCode );
				const fullCode = prependCode + code;
				request.post( OPEN_CPU + OPEN_CPU_IDENTITY, {
					form: {
						x: fullCode
					}
				}, ( error, response, body ) => {
					if ( !error ) {
						const arr = body.split( '\n' );
						for ( let i = 0; i < arr.length; i++ ) {
							let elem = arr[ i ];
							if ( STDOUT_REGEX.test( elem ) === true ) {
								request.get( OPEN_CPU + elem, ( err, getResponse, getBody ) => {
									this.setState({
										result: getBody,
										running: false
									});
								});
								break;
							}
						}
					} else {
						this.setState({
							result: body.replace( ERR_REGEX, '' ),
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
