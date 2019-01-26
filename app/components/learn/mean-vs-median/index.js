// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { VictoryChart, VictoryCursorContainer, VictoryLine } from 'victory';
import logger from 'debug';
import abs from '@stdlib/math/base/special/abs';
import roundn from '@stdlib/math/base/special/roundn';
import randu from '@stdlib/random/base/randu';
import linspace from '@stdlib/math/utils/linspace';
import lognormal from '@stdlib/stats/base/dists/lognormal';
import SessionContext from 'session/context.js';


// VARIABLES //

const debug = logger( 'isle:mean-vs-median' );


// MAIN //

/**
* An interactive game testing student's ability in detecting the median and mean of a given distribution.
*
* @property {string} header - title of the panel in which the mean and the median will be generated
* @property {node} intro - any introductory material that may be needed
*/
class MeanVSMedian extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			mu: 0,
			sigma: 1,
			lognormalData: [],
			lognormalDomain: {
				x: [ 0, 4 ],
				y: [ 0, 3 ]
			},
			meanLognormalGuess: 1,
			medianLognormalGuess: 1,
			showLognormalMean: false,
			showLognormalMedian: false
		};
	}

	componentDidMount() {
		this.generateData();
	}

	medianEvaluation = ( evt ) => {
		evt.stopPropagation();
		if ( !this.state.showLognormalMedian ) {
			this.setState({ showLognormalMedian: true }, () => {
				let distance = abs( lognormal.median( this.state.mu, this.state.sigma ) - this.state.medianLognormalGuess );
				let msg = 'A bit off... Try again!';
				let xmax = this.state.lognormalDomain.x[ 1 ];
				if ( distance < xmax/10 ) {
					msg = 'Good!';
				}
				if ( distance < xmax/20 ) {
					msg = 'Very Good!';
				}
				const session = this.context;
				session.addNotification({
					title: 'Score',
					message: msg,
					position: 'tc',
					level: 'success'
				});
			});
		}
	}

	meanEvaluation = ( evt ) => {
		evt.stopPropagation();
		if ( !this.state.showLognormalMean ) {
			this.setState({ showLognormalMean: true }, () => {
				let distance = abs( lognormal.mean( this.state.mu, this.state.sigma ) - this.state.meanLognormalGuess );
				let msg = 'A bit off... Try again!';
				let xmax = this.state.lognormalDomain.x[ 1 ];
				if ( distance < xmax/10 ) {
					msg = 'Good!';
				}
				if ( distance < xmax/20 ) {
					msg = 'Very Good!';
				}
				const session = this.context;
				session.addNotification({
					title: 'Score',
					message: msg,
					position: 'tc',
					level: 'success'
				});
			});
		}
	}

	generateData = () => {
		let mu = randu() * 1.0 - 0.5;
		let sigma = randu() * 2.0 + 0.01;
		let xmax = 4 + lognormal.stdev( mu, sigma );
		let x = linspace( 0, xmax, 80 );
		let lognormalData = x.map( d => {
			return {
				x: d,
				y: lognormal.pdf( d, mu, sigma )
			};
		});
		this.setState({
			lognormalData,
			mu,
			sigma,
			lognormalDomain: {
				x: [ 0.0, xmax ],
				y: [ 0.0, lognormal.pdf( lognormal.mode( mu, sigma ), mu, sigma ) ]
			},
			showLognormalMean: false,
			showLognormalMedian: false
		});
	}

	renderMeanPanel() {
		return ( <Card>
			<Card.Header as="h4">
				Mean
			</Card.Header>
			<Card.Body>
				<VictoryChart domain={this.state.lognormalDomain} containerComponent={
					<VictoryCursorContainer
						events={{ onClick: this.meanEvaluation }}
						cursorDimension="x"
						cursorLabel={( d ) => `${roundn( d.x, -1 )}`}
						onCursorChange={( value ) => {
							debug( `Received cursor change: ${value}` );
							if ( !this.state.showLognormalMean ) {
								this.setState({
									meanLognormalGuess: value
								});
							}
						}}
					/>
				}>
					<VictoryLine data={this.state.lognormalData} x="x" y="y" />
					{ this.state.showLognormalMean ?
						<VictoryLine data={[ { x: this.state.meanLognormalGuess, y: 0 }, { x: this.state.meanLognormalGuess, y: this.state.lognormalDomain.y[ 1 ] } ]} labels={[ 'Your Guess', '' ]} /> :
						null
					}
					{ this.state.showLognormalMean ?
						<VictoryLine data={[ { x: lognormal.mean( this.state.mu, this.state.sigma ), y: 0 }, { x: lognormal.mean( this.state.mu, this.state.sigma ), y: this.state.lognormalDomain.y[ 1 ] } ]}
							labels={[ '', 'True Mean' ]}
						/> :
						null
					}
				</VictoryChart>
			</Card.Body>
		</Card> );
	}

	renderMedianPanel() {
		return ( <Card>
			<Card.Header as="h4">
				Median
			</Card.Header>
			<Card.Body>
				<VictoryChart domain={this.state.lognormalDomain} containerComponent={
					<VictoryCursorContainer
						events={{ onClick: this.medianEvaluation }}
						cursorDimension="x"
						cursorLabel={( d ) => `${roundn( d.x, -1 )}`}
						onCursorChange={( value ) => {
							if ( !this.state.showLognormalMedian ) {
								this.setState({
									medianLognormalGuess: value
								});
							}
						}}
					/>
				}>
					<VictoryLine data={this.state.lognormalData} x="x" y="y" />
					{ this.state.showLognormalMedian ?
						<VictoryLine data={[ { x: this.state.medianLognormalGuess, y: 0 }, { x: this.state.medianLognormalGuess, y: this.state.lognormalDomain.y[ 1 ] } ]} labels={[ 'Your Guess', '' ]} /> :
						null
					}
					{ this.state.showLognormalMedian ?
						<VictoryLine data={[ { x: lognormal.median( this.state.mu, this.state.sigma ), y: 0 }, { x: lognormal.median( this.state.mu, this.state.sigma ), y: this.state.lognormalDomain.y[ 1 ] } ]}
							labels={[ '', 'True Median' ]}
						/> :
						null
					}
				</VictoryChart>
			</Card.Body>
		</Card> );
	}

	render() {
		return (
			<Card>
				<Card.Header as="h3">
					{this.props.header}
				</Card.Header>
				<Card.Body>
					<Container>
						{this.props.intro}
						<Row>
							<Col md={6}>
								{this.renderMeanPanel()}
							</Col>
							<Col md={6}>
								{this.renderMedianPanel()}
							</Col>
						</Row>
						<Row>
							<div style={{ paddingTop: '20px', maxWidth: 400, margin: '0 auto 10px' }}>
								<Button variant="primary" size="lg" onClick={this.generateData} >Generate new data</Button>
							</div>
						</Row>
					</Container>
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

MeanVSMedian.defaultProps = {
	header: 'Measures of Location: Mean vs. Median',
	intro: null
};

MeanVSMedian.propTypes = {
	header: PropTypes.string,
	intro: PropTypes.node
};

MeanVSMedian.contextType = SessionContext;


// EXPORTS //

export default MeanVSMedian;
