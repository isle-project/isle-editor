// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from '@isle-project/components/table';
import { VictoryChart, VictoryCursorContainer, VictoryLine } from 'victory';
import logger from 'debug';
import abs from '@stdlib/math/base/special/abs';
import roundn from '@stdlib/math/base/special/roundn';
import randu from '@stdlib/random/base/randu';
import linspace from '@stdlib/array/linspace';
import lognormal from '@stdlib/stats/base/dists/lognormal';
import incrmean from '@stdlib/stats/incr/mean';
import FeedbackButtons from '@isle-project/components/feedback';
import SessionContext from '@isle-project/session/context.js';
import { MEMBER_ACTION } from '@isle-project/constants/events.js';


// VARIABLES //

const debug = logger( 'isle:mean-vs-median' );


// MAIN //

/**
* An interactive game testing student's ability in detecting the median and mean of a given distribution.
*
* @property {string} id - component identifier
* @property {string} header - title of the panel in which the mean and the median will be generated
* @property {node} intro - any introductory material that may be needed
* @property {boolean} showStatistics - controls whether to display student and group performance statistics
* @property {boolean} feedback - controls whether to display feedback buttons
* @property {number} seed - seed to initialize pseudorandom number generator
* @property {Object} style - CSS inline styles
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

		const opts = {};
		if ( props.seed ) {
			opts.seed = props.seed;
		}
		this.rand = randu.factory( opts );
		this.singleAccMean = incrmean();
		this.groupAccMean = incrmean();
		this.singleAccMedian = incrmean();
		this.groupAccMedian = incrmean();
	}

	componentDidMount() {
		this.generateData();
		const session = this.context;
		this.unsubscribe = session.subscribe( ( type, action ) => {
			if (
				type === MEMBER_ACTION
			) {
				if ( action.type === 'MEDIAN_GUESS_DISTANCE' ) {
					const value = action.value;
					this.groupAccMedian( value );
					this.forceUpdate();
				} else if ( action.type === 'MEAN_GUESS_DISTANCE' ) {
					const value = action.value;
					this.groupAccMean( value );
					this.forceUpdate();
				}
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	medianEvaluation = ( evt ) => {
		evt.stopPropagation();
		if ( !this.state.showLognormalMedian ) {
			let distance = abs( lognormal.median( this.state.mu, this.state.sigma ) - this.state.medianLognormalGuess );
			let msg = this.props.t('a-bit-off');
			let xmax = this.state.lognormalDomain.x[ 1 ];
			if ( distance < xmax/10 ) {
				msg = this.props.t('good');
			}
			if ( distance < xmax/20 ) {
				msg = this.props.t('very-good');
			}
			this.singleAccMedian( distance );
			const session = this.context;
			session.addNotification({
				title: this.props.t('score'),
				message: msg,
				position: 'tc',
				level: 'success'
			});
			session.log({
				id: this.props.id,
				type: 'MEDIAN_GUESS_DISTANCE',
				value: distance
			});
			this.setState({ showLognormalMedian: true });
		}
	};

	meanEvaluation = ( evt ) => {
		evt.stopPropagation();
		if ( !this.state.showLognormalMean ) {
			let distance = abs( lognormal.mean( this.state.mu, this.state.sigma ) - this.state.meanLognormalGuess );
			let msg = this.props.t('a-bit-off');
			let xmax = this.state.lognormalDomain.x[ 1 ];
			if ( distance < xmax/10 ) {
				msg = this.props.t('good');
			}
			if ( distance < xmax/20 ) {
				msg = this.props.t('very-good');
			}
			this.singleAccMean( distance );
			const session = this.context;
			session.addNotification({
				title: this.props.t('score'),
				message: msg,
				position: 'tc',
				level: 'success'
			});
			session.log({
				id: this.props.id,
				type: 'MEAN_GUESS_DISTANCE',
				value: distance
			});
			this.setState({ showLognormalMean: true });
		}
	};

	generateData = () => {
		let mu = this.rand() * 1.0 - 0.5;
		let sigma = this.rand() * 2.0 + 0.01;
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
	};

	renderMeanPanel() {
		const { t } = this.props;
		return ( <Card>
			<Card.Header as="h4">
				{t('mean')}
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
		const { t } = this.props;
		return ( <Card>
			<Card.Header as="h4">
				{t('median')}
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
		const { t } = this.props;
		return (
			<Card style={this.props.style} >
				<Card.Header as="h3">
					{this.props.header ? this.props.header : t('measures-of-location-header')}
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
								<Button variant="primary" size="lg" onClick={this.generateData} >
									{t('generate-new-data')}
								</Button>
							</div>
						</Row>
						<Row>
						{this.props.showStatistics ?
							<Table bordered>
								<thead>
									<tr>
										<th></th>
										<th>{t('you')}</th>
										<th>{t('group')}</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th>{t('average-distance-from-mean')}</th>
										<td>{roundn( this.singleAccMean(), -2 )}</td>
										<td>{roundn( this.groupAccMean(), -2 )}</td>
									</tr>
									<tr>
										<th>{t('average-distance-from-median')}</th>
										<td>{roundn( this.singleAccMedian(), -2 )}</td>
										<td>{roundn( this.groupAccMedian(), -2 )}</td>
									</tr>
								</tbody>
							</Table> : null
						}
						</Row>
					</Container>
					{this.props.feedback ?
						<FeedbackButtons id="mean-vs-median" /> :
						null
					}
				</Card.Body>
			</Card>
		);
	}
}


// PROPERTIES //

MeanVSMedian.defaultProps = {
	feedback: false,
	header: null,
	id: 'mean_vs_median',
	intro: null,
	seed: null,
	showStatistics: false,
	style: {}
};

MeanVSMedian.propTypes = {
	feedback: PropTypes.bool,
	header: PropTypes.string,
	id: PropTypes.string,
	intro: PropTypes.node,
	seed: PropTypes.number,
	showStatistics: PropTypes.bool,
	style: PropTypes.object
};

MeanVSMedian.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'learn/mean-vs-median' )( MeanVSMedian );
