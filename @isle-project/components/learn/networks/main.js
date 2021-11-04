/* eslint-disable spellcheck/spell-checker */

// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation, Trans } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import incrspace from '@stdlib/array/incrspace';
import randu from '@stdlib/random/base/randu';
import Dashboard from '@isle-project/components/dashboard';
import FeedbackButtons from '@isle-project/components/feedback';
import NumberInput from '@isle-project/components/input/number';
import Panel from '@isle-project/components/panel';
import NetworkPlot from '@isle-project/components/plots/network-plot';
import Plotly from '@isle-project/components/plotly';
import TeX from '@isle-project/components/tex';
import calculateTransitivity from './calculate_transitivity.js';


// MAIN //

/**
* Generate networks from a Erdős-Rényi model.
*
* @property {boolean} showEdgeChart - controls whether to display a chart displaying the number of edges in each generated network (reset when number of nodes is changed)
* @property {boolean} showTransitivities - whether to tally transitivities / global clustering coefficients for generated networks
* @property {number} maxNumNodes - maximum number of nodes that can be selected for the network
*/
class Networks extends Component {
	constructor( props ) {
		super( props );

		const numNodes = 10;
		this.state = {
			network: {
				links: [],
				nodes: []
			},
			numNodes,
			edgeProb: 0.5,
			transitivities: [],
			tally: new Array( (0.5 * numNodes * ( numNodes-1 )) + 1 ).fill( 0 )
		};
	}

	handleGenerate = ( m, p ) => {
		const nodes = new Array( m );
		for ( let i = 0; i < nodes.length; i++ ) {
			nodes[ i ] = { 'id': i };
		}
		const links = [];
		for ( let i = 0; i < nodes.length; i++ ) {
			for ( let j = 0; j < i; j++ ) {
				if ( randu() < p ) {
					links.push({
						source: i, target: j
					});
				}
			}
		}
		const newState = {
			network: {
				links, nodes
			}
		};
		let tally;
		let transitivities;
		let numNodes = this.state.numNodes;
		let edgeProb = this.state.edgeProb;
		if ( m !== numNodes || p !== edgeProb ) {
			numNodes = m;
			transitivities = [];
			tally = new Array( ( 0.5 * m * ( m-1 ) ) + 1 ).fill( 0 );
		} else {
			tally = this.state.tally;
			transitivities = this.state.transitivities.slice();
		}
		transitivities.push( calculateTransitivity( nodes, links ) );
		tally[ links.length ] += 1;
		newState.numNodes = numNodes;
		newState.edgeProb = p;
		newState.tally = tally;
		newState.transitivities = transitivities;
		this.setState( newState );
	};

	renderTallyPlot() {
		if ( !this.props.showEdgeChart ) {
			return null;
		}
		return ( <Plotly removeButtons
			layout={{
				title: this.props.t('number-of-edges-per-generated-network'),
				height: 250
			}}
			data={[
			{
				x: incrspace( 0, this.state.tally.length, 1 ),
				y: this.state.tally,
				type: 'bar'
			}
		]} /> );
	}

	renderTransitivities() {
		if ( !this.props.showTransitivities ) {
			return null;
		}
		const data = [
			{
				x: this.state.transitivities,
				type: 'histogram'
			}
		];
		return ( <Plotly removeButtons
			layout={{
				title: this.props.t('global-clustering-coefficient'),
				height: 250
			}}
			data={data}
		/> );
	}

	render() {
		const { t } = this.props;
		return (
			<Container style={{ maxWidth: 1200, margin: '0 auto' }}>
				<Row>
					<Col md={6}>
						<Dashboard id="networks-dashboard" onGenerate={this.handleGenerate}>
							<p>
								{t('intro-1')}
							</p>
							<p>
								<Trans i18nKey="intro-2" ns="LearnNetworks" >
									Let us consider one of the simplest available network models. In the Erdős–Rényi model, there is a fixed probability <TeX raw="p" /> that an edge exists between any two nodes. We also assume that whether or not an edge exists between two nodes is independent of whether or not other edges exist.
								</Trans>
							</p>
							<p>
								<Trans i18nKey="intro-3" ns="LearnNetworks" >
									In this model, if we have <TeX raw="m" /> nodes, each node can be connected to <TeX raw="m-1" /> other nodes.  The number of edges attached to each node (the degree) is then <TeX raw="\text{Binomial}(m-1,p)" />.
								</Trans>
							</p>
							<NumberInput
								legend={`m (${t('number-of-nodes')})`}
								defaultValue={10}
								step={1}
								min={0}
								max={this.props.maxNumNodes}
							/>
							<NumberInput
								legend={`p (${t('edge-probability')})`}
								defaultValue={0.5}
								step={0.01}
								max={1}
								min={0}
							/>
						</Dashboard>
					</Col>
					<Col md={6}>
						<Panel>
							<NetworkPlot
								width={500}
								height={350}
								data={this.state.network}
							/>
							{this.renderTallyPlot()}
							{this.renderTransitivities()}
						</Panel>
						<FeedbackButtons
							id="networks"
						/>
					</Col>
				</Row>
			</Container>
		);
	}
}

// PROPERTIES //

Networks.defaultProps = {
	maxNumNodes: 30,
	showEdgeChart: false,
	showTransitivities: false
};

Networks.propTypes = {
	maxNumNodes: PropTypes.number,
	showEdgeChart: PropTypes.bool,
	showTransitivities: PropTypes.bool
};


// EXPORTS //

export default withTranslation( 'learn/networks' )( Networks );

