// MODULES //

import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Panel from 'react-bootstrap/lib/Panel';
import inmap from '@stdlib/utils/inmap';
import roundn from '@stdlib/math/base/special/roundn';
import sample from '@stdlib/random/sample';
import absdiff from '@stdlib/math/base/utils/absolute-difference';
import incrspace from '@stdlib/math/utils/incrspace';
import NumberInput from 'components/input/number';
import FeedbackButtons from 'components/feedback';


// MAIN //

class DiceThrowing extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			sides: new Array( 6 ),
			tally: [ 0, 0, 0, 0, 0, 0 ],
			nThrows: 0,
			sideProbs: [ 1/6, 1/6, 1/6, 1/6, 1/6, 1/6 ],
			valid: true
		};
	}

	chooseNSides = ( sides ) => {
		const tally = new Array( sides );
		const sideProbs = new Array( sides );
		inmap( sideProbs, x => 1/sides );
		inmap( tally, x => 0 );
		this.setState({
			sides: new Array( sides ),
			sideProbs,
			tally,
			valid: true,
			draw: null,
			nThrows: 0
		});
	}

	throwDice = ( nTimes ) => {
		const elems = incrspace( 1, this.state.sides.length+1, 1 );
		const out = sample( elems, {
			probs: this.state.sideProbs,
			size: nTimes
		});
		const tally = this.state.tally.slice();
		for ( let i = 0; i < out.length; i++ ) {
			tally[ out[ i ]-1 ] += 1;
		}
		this.setState({
			draw: out,
			tally,
			nThrows: this.state.nThrows + nTimes
		});
	}

	renderGrid() {
		return (
			<Grid fluid={true}>
				<Col md={5}>
					<h3>Probabilities:</h3>
					{inmap( this.state.sides, ( x, i ) => ( <NumberInput
						legend={`Side ${i+1}`}
						defaultValue={1/this.state.sides.length}
						step="any"
						max={1}
						min={0}
						width={100}
						numbersOnly={false}
						onChange={( val )=>{
							const sideProbs = this.state.sideProbs.slice();
							sideProbs[ i ] = val;
							let sum = 0.0;
							for ( let i = 0; i < sideProbs.length; i++ ) {
								sum += sideProbs[ i ];
							}
							const tally = new Array( sideProbs.length );
							inmap( tally, x => 0 );
							this.setState({
								sideProbs,
								valid: absdiff( sum, 1.0 ) <= 1.5e-8,
								tally,
								draw: null
							});
						}}
					/> ) )}
					<Button onClick={() => {
						this.setState({
							tally: this.state.tally.map( x => 0 ),
							nThrows: 0
						});
					}}>Reset</Button>
				</Col>
				<Col md={6}>
					{this.renderDice()}
				</Col>
				<Col md={1}>
					<FeedbackButtons
						id="loaded_dice"
					/>
				</Col>
			</Grid>
		);
	}

	renderDice() {
		if ( !this.state.valid ) {
			return ( <Panel><Panel.Body>
				<h3>Please make sure that all probabilities add up to one</h3>
			</Panel.Body></Panel> );
		}
		return ( <Panel fluid={true}>
			<Panel.Heading>Dice</Panel.Heading>
			<Panel.Body>
				<Panel><Panel.Body>{ this.state.draw ? this.state.draw.join( ' - ' ) : 'X' }</Panel.Body></Panel>
				<ButtonGroup>
					<Button onClick={() => {
						this.throwDice( 1 );
					}}>Throw ⚅ 1x</Button>
					<Button onClick={() => {
						this.throwDice( 5 );
					}}>Throw ⚅ 5x</Button>
					<Button onClick={() => {
						this.throwDice( 10 );
					}}>Throw ⚅ 10x</Button>
				</ButtonGroup>
			</Panel.Body>
		</Panel> );
	}

	renderTable() {
		return (
			<table className="table table-bordered table-responsive-sm">
				<tbody>
					<tr>
						<th>Side:</th>
						{ this.state.tally.map( ( elem, idx ) => { return <td key={idx}>{idx+1}</td>; })}
					</tr>
					<tr>
						<th>Count:</th>
						{ this.state.tally.map( ( elem, idx ) => { return <td key={idx}>{elem}</td>; })}
					</tr>
					<tr>
						<th>Relative Frequency:</th>
						{ this.state.tally.map( ( elem, idx ) => { return <td key={idx}>{roundn( elem/this.state.tally.reduce( ( a, b ) => a+b ), -3 ) || '0.000' }</td>; })}
					</tr>
				</tbody>
			</table>
		);
	}

	render() {
		return (
			<Panel id="diceThrowingModule">
				<Panel.Heading>
					<Panel.Title componentClass="h4">Simulate Random Dice Throws</Panel.Title>
				</Panel.Heading>
				<Panel.Body>
					<NumberInput
						legend="Number of Sides"
						defaultValue={6}
						step={1}
						max={20}
						min={2}
						onChange={this.chooseNSides}
					/>
					<p>Choose custom probabilities for the sides and then throw some dice!</p>
						{this.renderGrid()}
						{this.renderTable()}
					<p>Total number of throws: {this.state.nThrows}</p>
				</Panel.Body>
			</Panel>
		);
	}
}


// EXPORTS //

export default DiceThrowing;
