// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Grid, Panel, Row } from 'react-bootstrap';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLine, VictoryTheme } from 'victory';
import roundn from '@stdlib/math/base/special/roundn';
import max from '@stdlib/math/base/special/max';
import min from '@stdlib/math/base/special/min';
import FeedbackButtons from 'components/feedback';
import NumberInput from 'components/input/number';
import TextInput from 'components/input/text';
import TeX from 'components/tex';


// VARIABLES //

const probabilityTableLabels = ({ A, B }) => ( <table className="table-bordered">
	<tbody>
		<tr>
			<th></th>
			<th> {B} </th>
			<th>not {B} </th>
		</tr>
		<tr>
			<th> {A} </th>
			<td><TeX raw={`P(\\text{${A}} \\cap \\text{${B}} )`} /></td>
			<td><TeX raw={`P(\\text{${A}} \\cap \\text{${B}}^C )`} /></td>
			<td><TeX raw={`P(\\text{${A}})`} /></td>
		</tr>
		<tr>
			<th>not {A}</th>
			<td><TeX raw={`P(\\text{${A}}^C \\cap \\text{${B}} )`} /></td>
			<td><TeX raw={`P(\\text{${A}} \\cap \\text{${B}} )`} /></td>
			<td><TeX raw={`P(\\text{${A}}^c)`} /></td>
		</tr>
		<tr>
			<th></th>
			<td><TeX raw={`P( \\text{${B}} )`} /></td>
			<td><TeX raw={`P(\\text{${B}}^c)`} /></td><td><TeX raw="P(\Omega)" /></td>
		</tr>
	</tbody>
</table> );

probabilityTableLabels.propTypes = {
	A: PropTypes.string.isRequired,
	B: PropTypes.string.isRequired
};


// MAIN //

class ConditionalProbability extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			A: 'A',
			B: 'B',
			pA: 0.5,
			pB: 0.5,
			pAB: 0.25,
			pAnotB: 0.25,
			pnotAB: 0.25,
			pnotAnotB: 0.25,
			pAgivenNotB: 0.5,
			pAgivenB: 0.5,
			independent: true
		};
	}

	changeProbA = ( pA ) => {
		const pB = this.state.pB;
		this.setState({
			pA,
			pAB: pA*pB,
			pAnotB: pA * ( 1-pB ),
			pnotAB: ( 1-pA )*pB,
			pnotAnotB: ( 1-pA ) * ( 1-pB ),
			pAgivenB: pA,
			pAgivenNotB: pA,
			independent: true
		});
	}

	changeProbB = ( pB ) => {
		const pA = this.state.pA;
		this.setState({
			pB,
			pAB: pA*pB,
			pAnotB: pA * ( 1-pB ),
			pnotAB: ( 1-pA )*pB,
			pnotAnotB: ( 1-pA ) * ( 1-pB ),
			pAgivenB: pA,
			pAgivenNotB: pA,
			independent: true
		});
	}

	changeProbAB = ( value ) => {
		const pAnotB = this.state.pA - value;
		const pnotAB = this.state.pB - value;
		const pAgivenB = value / this.state.pB;
		const pAgivenNotB = pAnotB / ( 1-this.state.pB );
		this.setState({
			pAB: value,
			pAnotB,
			pnotAB,
			pnotAnotB: 1 - pAnotB - pnotAB - value,
			pAgivenB,
			pAgivenNotB,
			independent: pAgivenB === pAgivenNotB && pAgivenB === this.state.pA
		});
	}

	changeProbAnotB = ( value ) => {
		const pAB = this.state.pA - value;
		const pnotAnotB = ( 1-this.state.pB ) - value;
		const pAgivenB = pAB / this.state.pB;
		const pAgivenNotB = value / ( 1-this.state.pB );
		this.setState({
			pAnotB: value,
			pAB,
			pnotAnotB,
			pnotAB: 1 - pAB - pnotAnotB - value,
			pAgivenB,
			pAgivenNotB,
			independent: pAgivenB === pAgivenNotB && pAgivenB === this.state.pA
		});
	}

	changeProbNotAB = ( value ) => {
		let pnotAnotB = ( 1-this.state.pA ) - value;
		let pAB = this.state.pB - value;
		let pAgivenB = pAB / this.state.pB;
		let pAgivenNotB = ( 1 - pAB - pnotAnotB - value ) / ( 1-this.state.pB );
		this.setState({
			pnotAB: value,
			pnotAnotB,
			pAB,
			pAnotB: 1 - pAB - pnotAnotB - value,
			pAgivenB,
			pAgivenNotB,
			independent: pAgivenB === pAgivenNotB && pAgivenB === this.state.pA
		});
	}

	changeProbNotAnotB = ( value ) => {
		const pnotAB = ( 1-this.state.pA ) - value;
		const pAnotB = ( 1-this.state.pB ) - value;
		const pAgivenB = ( 1 - pnotAB - pAnotB - value ) / this.state.pB;
		const pAgivenNotB = pAnotB / ( 1-this.state.pB );
		this.setState({
			pnotAnotB: value,
			pnotAB,
			pAnotB,
			pAB: 1 - pnotAB - pAnotB - value,
			pAgivenB,
			pAgivenNotB,
			independent: pAgivenB === pAgivenNotB && pAgivenB === this.state.pA
		});
	}

	changeProbAgivenB = ( value ) => {
		const pAgivenB = value;
		const pAB = pAgivenB * this.state.pB;
		const pAnotB = this.state.pA - pAB;
		const pnotAB = this.state.pB - pAB;
		const pnotAnotB = 1 - pAB - pAnotB - pnotAB;
		const pAgivenNotB = ( this.state.pA - pAgivenB * this.state.pB ) / ( 1-this.state.pB );
		const independent = ( pAgivenB === this.state.pAgivenNotB ) &&
			( this.state.pAgivenNotB === this.state.pA );
		this.setState({
			pAgivenB, pAB, pAnotB, pnotAB, pnotAnotB, pAgivenNotB, independent
		});
	}

	changeProbAgivenNotB = ( value ) => {
		const pAgivenNotB = value;
		const pnotB = 1 - this.state.pB;
		const pAnotB = pAgivenNotB * pnotB;
		const pnotAnotB = pnotB - pAnotB;
		const pAB = this.state.pA - pAnotB;
		const pnotAB = this.state.pB - pAB;
		const pAgivenB = ( this.state.pA - pAgivenNotB * pnotB ) / this.state.pB;
		const independent = ( pAgivenNotB === this.state.pAgivenB ) &&
			( this.state.pAgivenB === this.state.pA );
		this.setState({
			pAgivenNotB, pAB, pAnotB, pnotAB, pnotAnotB, pAgivenB, independent
		});
	}

	renderTable() {
		const { A, B, pA, pB, pAB, pAnotB } = this.state;
		return (
			<table className="table-bordered">
				<tbody>
					<tr>
						<th></th>
						<th>{B}</th>
						<th>not {B}</th>
					</tr>
					<tr>
						<th>{A}</th>
						<td>
							<NumberInput
								inline
								min={roundn( max( pA - ( 1-pB ), 0 ), -10 )}
								max={roundn( min( pA, pB ), -10 )}
								step={0.01}
								onChange={this.changeProbAB}
								defaultValue={pAB}
							/>
						</td>
						<td>
							<NumberInput
								inline
								min={roundn( max( pA - pB, 0 ), -10 )}
								max={roundn( min( pA, 1-pB ), -10 )}
								step={0.01}
								onChange={this.changeProbAnotB}
								defaultValue={pAnotB}
							/>
						</td>
						<td>{pA}</td>
					</tr>
					<tr>
						<th>not {A}</th>
						<td>
							<NumberInput
								inline
								min={roundn( max( pB - min( pA, pB ), 0 ), -10 )}
								max={roundn( min( 1-pA, pB ), -10 )}
								step={0.01}
								onChange={this.changeProbNotAB}
								defaultValue={this.state.pnotAB}
							/>
						</td>
						<td>
							<NumberInput
								inline
								min={roundn( max( 1 - pA - pB, 0 ), -10 )}
								max={roundn( min( 1-pA, 1-pB ), -10 )}
								step={0.01}
								onChange={this.changeProbNotAnotB}
								defaultValue={this.state.pnotAnotB}
							/>
						</td>
						<td>{roundn( 1-pA, -3 )}</td>
					</tr>
					<tr>
						<th></th>
						<td>{pB}</td>
						<td>{roundn( 1-pB, -3 )}</td>
						<td>1.0</td>
					</tr>
				</tbody>
			</table>
		);
	}

	render() {
		const { A, B, pA, pB } = this.state;
		return (
			<div>
				<p>Consider events <TextInput inline defaultValue={A} onChange={( A ) => this.setState({ A })} /> and <TextInput inline defaultValue={B} onChange={( B ) => this.setState({ B })} />. Let <TeX raw={`P(\\text{${A}}) = `} /><NumberInput min={0} max={1} step={0.01} defaultValue={0.5} inline onChange={this.changeProbA} /> and  <TeX raw={`P(\\text{${B}}) = `} /><NumberInput min={0} max={1} step={0.01} defaultValue={0.5} inline onChange={this.changeProbB} />. Then we have <TeX raw={`P(\\text{${A}}^C) = ${roundn( 1-pA, -4 )}`} /> and <TeX raw={`P(\\text{${B}}^C) = ${roundn( 1-pB, -4 )}`} />. These form the marginals in the following probability table:</p>
				<Panel>
					<Grid>
						<Row>
							<Col md={4}>
								<p>What are the inner cells equal to? If the events are random, we have <TeX raw={`P(\\text{${A}} \\cap \\text{${B}} ) = P(\\text{${A}}) \\cdot P(\\text{${B}}) = ${roundn( pA*pB, -4 )}`} />. </p>
								{this.renderTable()}
								<br />
								{probabilityTableLabels({ A: A, B: B })}
								<br />
								<FeedbackButtons
									for="independence_applet"
								/>
							</Col>
							<Col md={8}>
								<p>What about the conditional probabilities?</p>
								{ pB === 0 || pA === 0 ?
									<Panel>
										{ pB === 0 ? <span>The conditional probability is undefined when <TeX raw={`P( \\text{${B}}) = 0`} /></span> : <span>
												When <TeX raw={`P( ${A}) = 0`} />, we must have <TeX raw={`P( \\text{${A}} \\mid \\text{${B}} ) = P( \\text{${A}} \\mid \\text{${B}}^C ) = 0`} /> in case B has non-zero probability.
										</span>}
									</Panel> :
									<Grid>
										<Row>
											<Col md={4}>
												<VictoryChart
													theme={VictoryTheme.material}
													domainPadding={{x: 50, y: [ 10, 20 ]}}
													style={{
														height: 100,
														width: 200
													}}
												>
													<VictoryAxis dependentAxis tickFormat={( x ) => x/100} />
													<VictoryAxis />
													<VictoryBar
														data={[ {x: `P( ${A}|${B})`, y: 100*this.state.pAgivenB }, {x: `P( ${A}|not ${B} )`, y: this.state.pAgivenNotB*100 } ]}
														domain={{ y: [ 0, 100 ] }}
														x="x"
														y="y"
														labels={( d ) => roundn( d.y/100, -3 )}
													/>
													{ this.state.independent ? <VictoryLine data={[ {x: `P( ${A}| ${B})`, y: 100*this.state.pAgivenB }, {x: `P( ${A}|not  ${B})`, y: this.state.pAgivenNotB*100 } ]} /> : null }
												</VictoryChart>
											</Col>
										</Row>
										<Row>
											<NumberInput
												legend={<span>Choose <TeX raw={`P(\\text{${A}} \\mid \\text{${B})}`} /></span>}
												min={max( ( pA-1+pB )/pB, 0 )}
												max={min( pA/pB, 1 )}
												step={0.001}
												onChange={this.changeProbAgivenB}
												defaultValue={this.state.pAgivenB}
												inline
											/>
											<NumberInput
												legend={<span>Choose <TeX raw={`P( \\text{${A}} \\mid \\text{ ${B} }^C)`} /></span>}
												min={max( ( pA-pB ) / ( 1-pB ), 0 )}
												max={min( pA/( 1-pB ), 1 )}
												step={0.001}
												onChange={this.changeProbAgivenNotB}
												defaultValue={this.state.pAgivenNotB}
												inline
											/>
										</Row>
										<Row>
											{ this.state.independent ?
												<span>The events are independent because <TeX raw={`P( \\text{${A}} \\mid \\text{ ${B} } ) = P( \\text{${A}} \\mid \\text{ ${B} }^C )`} /></span> : <span>The events are <b>not</b> independent because <TeX raw={this.state.pAgivenB === 0 && this.state.pAgivenNotB === 0 ? `P( \\text{ ${A} } \\mid \\text{ ${B} } ) = P( \\text{${A}} \\mid \\text{ ${B} }^C \\neq P( \\text{${A}})` : `P( \\text{ ${A} } \\mid \\text{ ${B} } ) \\neq P( \\text{${A}} \\mid \\text{ ${B} }^C )`} /></span>
											}
										</Row>
									</Grid>
								}
							</Col>
						</Row>
					</Grid>
				</Panel>
			</div>
		);
	}
}


// EXPORTS //

export default ConditionalProbability;
