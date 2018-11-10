// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import noop from '@stdlib/utils/noop';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Panel from 'components/panel';
import TextArea from 'components/input/text-area';
import SessionContext from 'session/context.js';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import logger from 'debug';
import './calculator.css';


const debug = logger( 'isle:calculator' );

// MAIN //

class Calculator extends Component {
	/**
	* Constructor function
	*/
	constructor( props ) {
		super(props);

		this.state = {
			visible: '0'
		};
	}

	clearEquation = () => {
		this.setState({
			visible: '0'
		});
	}

	onClickFactory = (val) => {
		return () => {
			const vis = this.state.visible;
			if ( vis === '0' ) {
				this.setState({
					visible: val
				});
			} else {
				this.setState({
					visible: vis + val
				});
			}
		};
	}

	/**
	* React component render method
	*/
	render() {
		return (
			<Panel id="calc_panel">
				<div float="left">
					<ButtonToolbar>
						<ButtonGroup className="button_row">
							<Button variant="primary" onClick={noop} >=</Button>
							<Button onClick={this.clearEquation} >C</Button>
						</ButtonGroup>
					</ButtonToolbar>
					<ButtonToolbar>
						<ButtonGroup className="button_row">
							<Button onClick={this.onClickFactory('7')} >7</Button>
							<Button onClick={this.onClickFactory('8')} >8</Button>
							<Button onClick={this.onClickFactory('9')} >9</Button>
						</ButtonGroup>
					</ButtonToolbar>

					<ButtonToolbar bsSize="medium">
						<ButtonGroup className="button_row">
							<Button onClick={this.onClickFactory('4')} >4</Button>
							<Button onClick={this.onClickFactory('5')} >5</Button>
							<Button onClick={this.onClickFactory('6')} >6</Button>
						</ButtonGroup>
					</ButtonToolbar>

					<ButtonToolbar>
						<ButtonGroup className="button_row">
							<Button onClick={this.onClickFactory('1')} >1</Button>
							<Button onClick={this.onClickFactory('2')} >2</Button>
							<Button onClick={this.onClickFactory('3')} >3</Button>
						</ButtonGroup>
					</ButtonToolbar>

					<ButtonToolbar>
						<ButtonGroup className="button_row">
							<Button onClick={noop} >-</Button>
							<Button onClick={this.onClickFactory('0')} >0</Button>
							<Button onClick={this.onClickFactory('.')} >.</Button>
						</ButtonGroup>
					</ButtonToolbar>
				</div>
				<div className="calc_div">
					<TextArea value={this.state.visible} />
				</div>
			</Panel>
		);
	}
}


// PROPERTIES //

Calculator.defaultProps = {};

Calculator.propTypes = {};

Calculator.contextType = SessionContext;


// EXPORTS //

export default Calculator;
