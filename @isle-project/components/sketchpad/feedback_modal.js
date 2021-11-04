// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Plotly from '@isle-project/components/plotly';
import objectKeys from '@stdlib/utils/keys';
import isNull from '@stdlib/assert/is-null';
import startsWith from '@stdlib/string/starts-with';
import countBy from '@stdlib/utils/count-by';
import identity from '@stdlib/utils/identity-function';


// MAIN //

class FeedbackModal extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			data: null
		};
	}

	static getDerivedStateFromProps( props, state ) {
		if ( isNull( state.data ) ) {
			const session = props.session;
			const actions = session.socketActions;
			const name = `${props.id}-slide-`; // eslint-disable-line i18next/no-literal-string
			const slides = {};
			for ( let i = 0; i < actions.length; i++ ) {
				const id = actions[ i ].id;
				if ( startsWith( id, name ) && !actions[ i ].owner ) {
					if ( !slides[ id ] ) {
						slides[ id ] = [];
					}
					slides[ id ].push( actions[ i ].value );
				}
			}
			const keys = objectKeys( slides );
			const traces = [];
			const cats = [ 'confused', 'understood' ];
			for ( let i = 0; i < cats.length; i++ ) {
				const xVals = new Array( keys.length );
				const yVals = new Array( keys.length );
				for ( let j = 0; j < props.noPages; j++ ) {
					xVals[ j ] = 'Slide '+(j+1);
					const key = `${props.id}-slide-${props.toOriginalPage( j )}`; // eslint-disable-line i18next/no-literal-string
					if ( slides[ key ] ) {
						const counts = countBy( slides[ key ], identity );
						yVals[ j ] = counts[ cats[ i ] ];
						if ( i === 0 ) {
							yVals[ j ] *= -1;
						}
					} else {
						yVals[ j ] = 0;
					}
				}
				traces.push({
					x: xVals,
					y: yVals,
					type: 'bar',
					name: cats[ i ],
					marker: {
						color: i === 1 ? 'rgb(40,167,69)' : 'rgb(220,53,69)',
						cursor: 'pointer'
					}
				});
			}
			return {
				data: traces
			};
		}
	}

	handlePlotClick = ( data ) => {
		const points = data.points;
		const selected = points[ 0 ];
		if ( selected ) {
			this.props.gotoPage( selected.pointIndex );
			this.props.onHide();
		}
	};

	render() {
		return ( <Modal
			onHide={this.props.onHide}
			show={this.props.show}
			id="sketch-feedback-modal"
			dialogClassName="modal-100w"
		>
			<Modal.Header closeButton>
				<Modal.Title as="h3" >
					{this.props.t('feedback-modal-title', {
						id: this.props.id,
						noPages: this.props.noPages
					})}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Plotly	data={this.state.data} removeButtons onClick={this.handlePlotClick} layout={{
					xaxis: {
						fixedrange: true
					},
					yaxis: {
						fixedrange: true
					},
					barmode: 'relative'
				}} />
			</Modal.Body>
		</Modal> );
	}
}


// PROPERTIES //

FeedbackModal.propTypes = {
	id: PropTypes.string.isRequired,
	noPages: PropTypes.number.isRequired,
	toOriginalPage: PropTypes.func.isRequired, // eslint-disable-line react/no-unused-prop-types
	gotoPage: PropTypes.func.isRequired,
	onHide: PropTypes.func,
	show: PropTypes.bool.isRequired
};

FeedbackModal.defaultProps = {
	onHide() {}
};


// EXPORTS //

export default FeedbackModal;
