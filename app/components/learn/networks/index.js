// MODULES //

import React, { Component } from 'react';
import randu from '@stdlib/random/base/randu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dashboard from 'components/dashboard';
import FeedbackButtons from 'components/feedback';
import NumberInput from 'components/input/number';
import Panel from 'components/panel';
import NetworkPlot from 'components/d3/network-plot';
import TeX from 'components/tex';


// MAIN //

class Networks extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			network: {
				links: [],
				nodes: []
			}
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
		this.setState({
			network: {
				links, nodes
			}
		});
	}

	render() {
		return (
			<Container>
				<Row>
					<Col md={6}>
						<Dashboard id="networks-dashboard" onGenerate={this.handleGenerate}>
							<p>In a network, the nodes are assumed to be fixed but the edges are random, i.e. there is some random process which determines whether there is an edge connecting two nodes.</p>
							<p>Let us consider one of the simplest available network models. In the Erdős–Rényi model, there is a fixed probability <TeX raw="p" /> that an edge exists between any two nodes. We also assume that whether or not an edge exists between two nodes is independent of whether or not other edges exist.</p>
							<p>In this model, if we have <TeX raw="m" /> nodes, each node can be connected to <TeX raw="m-1" /> other nodes.  The number of edges attached to each node (the degree) is then <TeX raw="\text{Binomial}(m-1,p)" />.</p>
							<p>Create some Erdős–Rényi networks to investigate whether that holds true:</p>
							<NumberInput
								legend="m (number of nodes)"
								defaultValue={10}
								step={1}
								min={0}
								max={25}
							/>
							<NumberInput
								legend="p (probability of an edge between two nodes)"
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


// EXPORTS //

export default Networks;

