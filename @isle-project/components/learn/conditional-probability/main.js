// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withTranslation, Trans } from 'react-i18next';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLine, VictoryTheme } from 'victory';
import roundn from '@stdlib/math/base/special/roundn';
import max from '@stdlib/math/base/special/max';
import min from '@stdlib/math/base/special/min';
import epsdiff from '@stdlib/math/base/utils/float64-epsilon-difference';
import FeedbackButtons from '@isle-project/components/feedback';
import NumberInput from '@isle-project/components/input/number';
import TextInput from '@isle-project/components/input/text';
import TeX from '@isle-project/components/tex';
import probabilityTableLabels from './table_labels.js';


// MAIN //

/**
* A learning component illustrating conditional probability for two dependent binary variables.
*
* @property {string} A - first variable
* @property {string} B - second variable
*/
class ConditionalProbability extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			A: props.A,
			B: props.B,
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
	};

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
	};

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
	};

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
	};

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
	};

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
	};

	changeProbAgivenB = ( value ) => {
		const pAgivenB = value;
		const pAB = pAgivenB * this.state.pB;
		const pAnotB = this.state.pA - pAB;
		const pnotAB = this.state.pB - pAB;
		const pnotAnotB = 1 - pAB - pAnotB - pnotAB;
		const pAgivenNotB = ( this.state.pA - pAgivenB * this.state.pB ) / ( 1-this.state.pB );
		const independent = epsdiff( pAgivenB, pAgivenNotB ) < 2.0 &&
			epsdiff( pAgivenNotB, this.state.pA ) < 2.0;
		this.setState({
			pAgivenB, pAB, pAnotB, pnotAB, pnotAnotB, pAgivenNotB, independent
		});
	};

	changeProbAgivenNotB = ( value ) => {
		const pAgivenNotB = value;
		const pnotB = 1 - this.state.pB;
		const pAnotB = pAgivenNotB * pnotB;
		const pnotAnotB = pnotB - pAnotB;
		const pAB = this.state.pA - pAnotB;
		const pnotAB = this.state.pB - pAB;
		const pAgivenB = ( this.state.pA - pAgivenNotB * pnotB ) / this.state.pB;
		const independent = epsdiff( pAgivenNotB, pAgivenB ) < 2.0 &&
			epsdiff( pAgivenB, this.state.pA ) < 2.0;
		this.setState({
			pAgivenNotB, pAB, pAnotB, pnotAB, pnotAnotB, pAgivenB, independent
		});
	};

	renderTable() {
		const { A, B, pA, pB, pAB, pAnotB } = this.state;
		return (
			<table className="table-bordered">
				<tbody>
					<tr>
						<th></th>
						<th>{B}</th>
						<th>{this.props.t('not')} {B}</th>
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
						<th>{this.props.t('not')} {A}</th>
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
		const { t } = this.props;
		const victoryData = [ { x: `P(${A}|${B})`, y: 100*this.state.pAgivenB }, { x: `P(${A}|not ${B})`, y: this.state.pAgivenNotB*100 } ]; // eslint-disable-line i18next/no-literal-string
		const victoryLineData = [ { x: `P(${A}|${B})`, y: 100*this.state.pAgivenB }, { x: `P(${A}|not ${B})`, y: this.state.pAgivenNotB*100 } ]; // eslint-disable-line i18next/no-literal-string
		return (
			<Card body>
				<p>{t('consider-events')} <TextInput inline defaultValue={A} onChange={( A ) => this.setState({ A })} /> {t('and')} <TextInput inline defaultValue={B} onChange={( B ) => this.setState({ B })} />. {t('let')} <TeX raw={`P(\\text{${A}}) = `} /><NumberInput min={0} max={1} step={0.01} defaultValue={0.5} inline onChange={this.changeProbA} /> {t('and')} <TeX raw={`P(\\text{${B}}) = `} /><NumberInput min={0} max={1} step={0.01} defaultValue={0.5} inline onChange={this.changeProbB} />. {t('then-we-have')} <TeX raw={`P(\\text{${A}}^C) = ${roundn( 1-pA, -4 )}`} /> {t('and')} <TeX raw={`P(\\text{${B}}^C) = ${roundn( 1-pB, -4 )}`} />. {t('these-form-marginals')}</p>
				<Container>
					<Row>
						<Col sm={6}>
							<p>{ t('inner-cells-equal')} <TeX raw={`P(\\text{${A}} \\cap \\text{${B}} ) = P(\\text{${A}}) \\cdot P(\\text{${B}}) = ${roundn( pA*pB, -4 )}`} />. </p>
							{this.renderTable()}
							<br />
							{probabilityTableLabels({ A: A, B: B }, t)}
							<br />
							<Row>
								<span>{ t('choose')}</span>
								<NumberInput
									legend={<TeX raw={`P(\\text{${A}} \\mid \\text{${B})}`} />}
									min={max( ( pA-1+pB )/pB, 0 )}
									max={min( pA/pB, 1 )}
									step={0.001}
									onChange={this.changeProbAgivenB}
									defaultValue={this.state.pAgivenB}
									inline
								/><span>{t('and')}</span>
								<NumberInput
									legend={<TeX raw={`P( \\text{${A}} \\mid \\text{ ${B} }^C)`} />}
									min={max( ( pA-pB ) / ( 1-pB ), 0 )}
									max={min( pA/( 1-pB ), 1 )}
									step={0.001}
									onChange={this.changeProbAgivenNotB}
									defaultValue={this.state.pAgivenNotB}
									inline
								/>
							</Row>
						</Col>
						<Col sm={5}>
							<p>{ t('conditional-probabilities')}</p>
							{ pB === 0 || pA === 0 ?
								<Card>
									{ pB === 0 ? <span>{ t('conditional-probability-undefined')} <TeX raw={`P( \\text{${B}}) = 0`} /></span> : <Trans i18nKey="must-have-nonzero-probability" >
										When <TeX raw={`P( ${A}) = 0`} />, we must have <TeX raw={`P( \\text{${A}} \\mid \\text{${B}} ) = P( \\text{${A}} \\mid \\text{${B}}^C ) = 0`} /> in case B has non-zero probability.
									</Trans>}
								</Card> :
								<Container>
									<Row>
										<Col md={12}>
											<VictoryChart
												theme={VictoryTheme.material}
												domainPadding={{ x: 50, y: [ 10, 20 ]}}
												height={350}
											>
												<VictoryAxis dependentAxis tickFormat={( x ) => x/100} />
												<VictoryAxis />
												<VictoryBar
													data={victoryData}
													domain={{ y: [ 0, 100 ]}}
													x="x"
													y="y"
													labels={( d ) => roundn( d.y/100, -3 )}
												/>
												{ this.state.independent ? <VictoryLine data={victoryLineData} /> : null }
											</VictoryChart>
										</Col>
									</Row>
									<Row>
										{ this.state.independent ?
											<Fragment><p>{ t('events-independent')}</p><TeX raw={`P( \\text{${A}} \\mid \\text{ ${B} } ) = P( \\text{${A}} \\mid \\text{ ${B} }^C )`} /></Fragment> :
											<Fragment><p>
												<Trans i18nKey="events-not-independent" >
													The events are <b>not</b> independent because
												</Trans>
											</p>
											<TeX raw={this.state.pAgivenB === 0 && this.state.pAgivenNotB === 0 ? `P( \\text{ ${A} } \\mid \\text{ ${B} } ) = P( \\text{${A}} \\mid \\text{ ${B} }^C \\neq P( \\text{${A}})` : `P( \\text{ ${A} } \\mid \\text{ ${B} } ) \\neq P( \\text{${A}} \\mid \\text{ ${B} }^C )`} /></Fragment>
										}
									</Row>
								</Container>
							}
						</Col>
						<Col sm="1">
							<FeedbackButtons
								id="independence_applet"
								vertical
							/>
						</Col>
					</Row>
				</Container>
			</Card>
		);
	}
}


// PROPERTIES //

ConditionalProbability.defaultProps = {
	A: 'A',
	B: 'B'
};

ConditionalProbability.propTypes = {
	A: PropTypes.string,
	B: PropTypes.string
};


// EXPORTS //

export default withTranslation( 'learn/conditional-probability' )( ConditionalProbability );
