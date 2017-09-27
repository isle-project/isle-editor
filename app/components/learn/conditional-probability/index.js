// MODULES //

import React, { Component } from 'react';
import { Col, Grid, Panel, Row } from 'react-bootstrap';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLine, VictoryTheme } from 'victory';
import roundn from '@stdlib/math/base/special/roundn';
import max from '@stdlib/math/base/special/max';
import min from '@stdlib/math/base/special/min';
import FeedbackButtons from 'components/feedback';
import SliderInput from  'components/input/slider';
import NumberInput from 'components/input/number';
import TextInput from 'components/input/text';
import TeX from 'components/tex';


// VARIABLES //

const probabilityTableLabels = ( props ) => <table className="table-bordered">
	<tbody>
		<tr>
			<th></th>
			<th> {props.B} </th>
			<th>not {props.B} </th>
		</tr>
		<tr>
			<th> {props.A} </th>
			<td><TeX raw={`P(\\text{${props.A}} \\cap \\text{${props.B}} )`} /></td>
			<td><TeX raw={`P(\\text{${props.A}} \\cap \\text{${props.B}}^C )`} /></td>
			<td><TeX raw={`P(\\text{${props.A}})`} /></td>
		</tr>
		<tr>
			<th>not {props.A}</th>
			<td><TeX raw={`P(\\text{${props.A}}^C \\cap \\text{${props.B}} )`} /></td>
			<td><TeX raw={`P(\\text{${props.A}} \\cap \\text{${props.B}} )`} /></td>
			<td><TeX raw={`P(\\text{${props.A}}^c)`} /></td>
		</tr>
		<tr>
			<th></th>
			<td><TeX raw={`P( \\text{${props.B}} )`} /></td>
			<td><TeX raw={`P(\\text{${props.B}}^c)`} /></td><td><TeX raw="P(\Omega)" /></td>
		</tr>
	</tbody>
</table>;


// MAIN //

class ConditionalProbability extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			A: 'A',
			B: 'B',
			pA: 0.5,
			pB: 0.5,
			fill: false,
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
			pAgivenB:  pA,
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
			independent: pAgivenB == pAgivenNotB && pAgivenB == this.state.pA
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
			independent: pAgivenB == pAgivenNotB && pAgivenB == this.state.pA
		});
	}

	changeProbNotAB = ( value ) => {
		let pnotAnotB = ( 1-this.state.pA ) - value;
		let pAB = this.state.pB - value;
		let pAgivenB =  pAB / this.state.pB;
		let pAgivenNotB = ( 1 - pAB - pnotAnotB - value ) / ( 1-this.state.pB );
		this.setState({
			pnotAB: value,
			pnotAnotB,
			pAB,
			pAnotB: 1 - pAB - pnotAnotB - value,
			pAgivenB,
			pAgivenNotB,
			independent: pAgivenB == pAgivenNotB && pAgivenB == this.state.pA
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
			independent: pAgivenB == pAgivenNotB && pAgivenB == this.state.pA
		});
	}

	changeProbAgivenB = ( value ) => {
		const pAB = value * this.state.pB;
		const pAnotB = this.state.pA - pAB;
		const pnotAB = this.state.pB - pAB;
		const pnotAnotB = 1 - pAB - pAnotB - pnotAB;
		const pAgivenNotB = ( this.state.pA - value * this.state.pB ) / ( 1-this.state.pB );
		this.setState({
			pAgivenB: value,
			pAB, pAnotB, pnotAB, pnotAnotB, pAgivenNotB,
			independent: value == this.state.pAgivenNotB && this.state.pAgivenNotB == this.state.pA
		});
	}

	changeProbAgivenNotB =  ( value ) => {
		const pnotB = 1 - this.state.pB;
		const pAnotB = value * pnotB;
		const pnotAnotB = pnotB - pAnotB;
		const pAB = this.state.pA - pAnotB;
		const pnotAB =  this.state.pB - pAB;
		const pAgivenB = ( this.state.pA - value * pnotB ) / this.state.pB;
		this.setState({
			pAgivenNotB: value,
			pAB, pAnotB, pnotAB, pnotAnotB, pAgivenB,
			independent: value == this.state.pAgivenB && this.state.pAgivenB == this.state.pA
		});
	}

	render() {

		return (
			<div>
				<p>Consider events <TextInput inline defaultValue={this.state.A} onChange={( A ) => this.setState({ A }) } /> and <TextInput inline defaultValue={this.state.B} onChange={( B ) => this.setState({ B }) } />. Let <TeX raw={`P(\\text{${this.state.A}}) = `} /><NumberInput min={0} max={1} step={0.01} defaultValue={0.5} inline onChange={this.changeProbA} /> and  <TeX raw={`P(\\text{${this.state.B}}) = `} /><NumberInput min={0} max={1} step={0.01} defaultValue={0.5} inline onChange={this.changeProbB} />. Then we have <TeX raw={`P(\\text{${this.state.A}}^C) = ${roundn( 1-this.state.pA, -4 )}`} /> and <TeX raw={`P(\\text{${this.state.B}}^C) = ${roundn( 1-this.state.pB, -4 )}`} />. These form the marginals in the following probability table:</p>
				<Panel>
					<Grid>
						<Row>
							<Col md={6}>
								<p>What are the inner cells equal to? If the events are random, we have <TeX raw={`P(\\text{${this.state.A}} \\cap \\text{${this.state.B}} ) = P(\\text{${this.state.A}}) \\cdot P(\\text{${this.state.B}}) = ${roundn( this.state.pA*this.state.pB, -4 )}`} />. </p>
								<table className="table-bordered">
									<tbody>
										<tr>
											<th></th>
											<th>{this.state.B}</th>
											<th>not {this.state.B}</th>
										</tr>
										<tr>
											<th>{this.state.A}</th>
											<td>
												<NumberInput
													inline
													min={roundn( max( this.state.pA - ( 1-this.state.pB ), 0 ),-10 )}
													max={roundn( min( this.state.pA, this.state.pB ), -10 )}
													step={0.01}
													onChange={this.changeProbAB}
													defaultValue={this.state.pAB}
												/>
											</td>
											<td>
												<NumberInput
													inline
													min={roundn( max( this.state.pA - this.state.pB, 0 ), -10 )}
													max={roundn( min( this.state.pA, 1-this.state.pB ), -10 )}
													step={0.01}
													onChange={this.changeProbAnotB}
													defaultValue={this.state.pAnotB}
												/>
											</td>
											<td>{this.state.pA}</td>
										</tr>
										<tr>
											<th>not {this.state.A}</th>
											<td>
												<NumberInput
													inline
													min={roundn( max( this.state.pB - min( this.state.pA,this.state.pB ), 0 ), -10 )}
													max={roundn( min( 1-this.state.pA, this.state.pB ), -10 )}
													step={0.01}
													onChange={this.changeProbNotAB}
													defaultValue={this.state.pnotAB}
												/>
											</td>
											<td>
												<NumberInput
													inline
													min={roundn( max( 1 - this.state.pA - this.state.pB, 0 ), -10 )}
													max={roundn( min( 1-this.state.pA, 1-this.state.pB ), -10 )}
													step={0.01}
													onChange={this.changeProbNotAnotB}
													defaultValue={this.state.pnotAnotB}
												/>
											</td>
											<td>{roundn( 1-this.state.pA, -3 )}</td>
										</tr>
										<tr>
											<th></th>
											<td>{this.state.pB}</td>
											<td>{roundn( 1-this.state.pB, -3 )}</td>
											<td>1.0</td>
										</tr>
									</tbody>
								</table>
								<br />
								{probabilityTableLabels({ A: this.state.A, B: this.state.B })}
								<br />
								<FeedbackButtons
									for="independence_applet"
								/>
							</Col>
							<Col md={6}>
								<p>What about the conditional probabilities?</p>
								<Panel>
									{ this.state.pB == 0 || this.state.pA == 0 ?
										<Panel>
											{ this.state.pB == 0 ? <span>The conditional probability is undefined when <TeX raw={`P( \\text{${this.state.B}}) = 0`} /></span> : <span>
													When <TeX raw={`P( ${this.state.A}) = 0`} />, we must have <TeX raw={`P( \\text{${this.state.A}} \\mid \\text{${this.state.B}} ) = P( \\text{${this.state.A}} \\mid \\text{${this.state.B}}^C ) = 0`} /> in case B has non-zero probability.
											</span>}
										</Panel> :
										<Grid>
											<Row>
												<VictoryChart
													theme={VictoryTheme.material}
													domainPadding={{x: 50, y: [ 10, 20 ]}}
													width={400}
													height={350}
												>
													<VictoryAxis dependentAxis tickFormat={ ( x ) => x/100 } />
													<VictoryAxis />
													<VictoryBar
														data={[ {x: `P( ${this.state.A}|${this.state.B})`, y: 100*this.state.pAgivenB },{x: `P( ${this.state.A}|not ${this.state.B} )`, y: this.state.pAgivenNotB*100 } ]}
														domain={{ y: [ 0, 100 ] }}
														x="x"
														y="y"
														labels={ ( d ) => roundn( d.y/100, -3 ) }
													/>
													{ this.state.independent ? <VictoryLine data={[ {x: `P( ${this.state.A}| ${this.state.B})`, y: 100*this.state.pAgivenB },{x: `P( ${this.state.A}|not  ${this.state.B})`, y: this.state.pAgivenNotB*100 } ]}/> : null }
												</VictoryChart>
											</Row>
											<Row>
												<Col md={6}>
													<SliderInput
														legend={<span>Choose <TeX raw={`P(\\text{${this.state.A}} \\mid \\text{${this.state.B})}`} /></span>}
														min={max( ( this.state.pA-1+this.state.pB )/this.state.pB, 0 )}
														max={min( this.state.pA/this.state.pB, 1 )}
														step={0.001}
														onChange={this.changeProbAgivenB}
														defaultValue={this.state.pAgivenB}
														inline
													/>
												</Col>
												<Col md={6}>
													<SliderInput
														legend={<span>Choose <TeX raw={`P( \\text{${this.state.A}} \\mid \\text{ ${this.state.B} }^C)`} /></span>}
														min={max( ( this.state.pA-this.state.pB ) / ( 1-this.state.pB ), 0 )}
														max={min( this.state.pA/( 1-this.state.pB ), 1 )}
														step={0.001}
														onChange={this.changeProbAgivenNotB}
														defaultValue={this.state.pAgivenNotB}
														inline
													/>
												</Col>
												{ this.state.independent ?
													<span>The events are independent because <TeX raw={`P( \\text{${this.state.A}} \\mid \\text{ ${this.state.B} } ) = P( \\text{${this.state.A}} \\mid \\text{ ${this.state.B} }^C )`} /></span> : <span>The events are <b>not</b> independent because <TeX raw={ this.state.pAgivenB == 0 && this.state.pAgivenNotB == 0 ? `P( \\text{ ${this.state.A} } \\mid \\text{ ${this.state.B} } ) = P( \\text{${this.state.A}} \\mid \\text{ ${this.state.B} }^C \\neq P( \\text{${this.state.A}})` : `P( \\text{ ${this.state.A} } \\mid \\text{ ${this.state.B} } ) \\neq P( \\text{${this.state.A}} \\mid \\text{ ${this.state.B} }^C )`} /></span>
												}
											</Row>
										</Grid>
									}
								</Panel>
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
