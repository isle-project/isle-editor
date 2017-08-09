// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import Input from 'components/input/base';
import roundn from '@stdlib/math/base/special/roundn';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import PINF from '@stdlib/math/constants/float64-pinf';
import NINF from '@stdlib/math/constants/float64-ninf';
import './slider.css';


// MAIN //

class SliderInput extends Input {

	createTooltip( props ) {
		let tooltip = `Enter a${ props.step === 1 ? 'n integer' : ' number'} `;
		if ( props.max !== PINF && props.min !== NINF ) {
			tooltip += `between ${props.min} and ${props.max}:`;
		} else if ( props.min !== NINF ) {
			tooltip += `larger or equal to ${props.min}:`;
		} else if ( props.max !== PINF ) {
			tooltip += `smaller or equal to ${props.max}:`;
		} else {
			tooltip += ':';
		}
		return tooltip;
	}

	constructor( props, context ) {
		super( props );

		const { session } = context;
		this.state = {
			tooltip: this.createTooltip( props ),
			value: !props.bind ?
				props.defaultValue :
				session.config.state[ props.bind ]
		};

		this.handleInputChange = ( event ) => {
			const valid = event.target.validity.valid;
			let value = event.target.value;
			this.setState({
				value
			}, () => {
				console.log( value );
				if ( valid && value !== '' ) {
					value = parseFloat( value );
					this.props.onChange( value );
					if ( this.props.bind ) {
						global.lesson.setState({
							[ this.props.bind ]: value
						}, () => {
							if ( this.context.autoUpdate ) {
								this.context.triggerDashboardClick();
							}
						});
					} else {
						if ( this.context.autoUpdate ) {
							this.context.triggerDashboardClick();
						}
					}
				} else {
					if ( this.props.bind ) {
						global.lesson.setState({
							[ this.props.bind ]: value
						});
					}
				}
			});
		};

		this.finishChange = ( event ) => {
			const { max, min, step } = this.props;
			let value = event.target.value;
			if ( value !== '' ) {
				value = parseFloat( value );
			}
			if ( value > max ) {
				value = max;
			}
			else if ( value < min ) {
				value = min;
			}
			else if ( step == 1.0 && value !== '' ) {
				value = value - value % this.props.step;
			}
			if ( value !== this.state.value ) {
				this.setState({
					value
				}, () => {
					this.props.onChange( value );
					if ( this.props.bind ) {
						global.lesson.setState({
							[ this.props.bind ]: value
						}, () => {
							if ( this.context.autoUpdate ) {
								this.context.triggerDashboardClick();
							}
						});
					} else {
						if ( this.context.autoUpdate ) {
							this.context.triggerDashboardClick();
						}
					}
				});
			}
		};
	}

	componentDidUpdate() {
		if ( this.props.bind ) {
			let globalVal = global.lesson.state[ this.props.bind ];
			if ( globalVal !== this.state.value ) {
				this.setState({
					value: globalVal
				});
			}
		}
	}

	componentWillReceiveProps( nextProps ) {
		let newState = {};
		if ( nextProps.defaultValue !== this.props.defaultValue ) {
			newState.value = nextProps.defaultValue;
		} else if ( nextProps.bind !== this.props.bind ) {
			newState.value = global.lesson.state[ nextProps.bind ];
		}
		if ( nextProps.min !== this.props.min || nextProps.max !== this.props.max ) {
			newState.tooltip = this.createTooltip( nextProps );
		}
		if ( !isEmptyObject( newState ) ) {
			this.setState( newState );
		}
	}

	render() {
		let { value } = this.state;
		if ( value !== '' ) {
			roundn( value, ( -1.0 )*this.props.precision );
		}
		const rangeInput = <input
			type="range"
			className="slider-range-input"
			min={this.props.min}
			max={this.props.max}
			step={this.props.step}
			value={value}
			onChange={this.handleInputChange}
			style={{
				width: this.props.width || '160px',
				float: this.props.inline ? 'none' : 'left',
				display: this.props.inline ? 'inline' : 'block'
			}}
		/>;
		const numberInput = <OverlayTrigger
			placement="top"
			overlay={
				<Tooltip id='inlineTooltip'>
					{this.state.tooltip}
				</Tooltip>
			}
		>
			<input
				type="number"
				name="input"
				className="slider-number-input"
				min={this.props.min}
				max={this.props.max}
				step={this.props.step}
				value={value}
				onChange={this.handleInputChange}
				onBlur={this.finishChange}
				style={{
					float: this.props.inline ? 'none' : 'right'
				}}
			/>
		</OverlayTrigger>;

		if ( this.props.inline ) {
			return (
				<span style={{
					padding: '5px',
				}}>
					{ this.props.legend ?
						<label>{this.props.legend}:</label> :
						null
					}
					{rangeInput}
					{numberInput}
				</span>
			);
		}
		return (
			<div className="slider-outer-div">
				{ this.props.legend ?
					<label style={{
						marginLeft: '8px',
					}}>{this.props.legend}:</label> :
					null
				}
				<br />
				{rangeInput}
				{numberInput}
				<br />
			</div>
		);
	}
}


// DEFAULT PROPERTIES //

SliderInput.defaultProps = {
	inline: false,
	min: 0,
	max: 100,
	step: 1,
	defaultValue: 10,
	onChange() {},
	precision: 10
};


// PROPERTY TYPES //

SliderInput.propTypes = {
	inline: PropTypes.bool,
	min: PropTypes.number,
	max: PropTypes.number,
	precision: PropTypes.number,
	step: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	defaultValue: PropTypes.number,
	onChange: PropTypes.func
};


// CONTEXT TYPES //

SliderInput.contextTypes = {
	triggerDashboardClick: PropTypes.func,
	autoUpdate: PropTypes.bool,
	session: PropTypes.object
};


// EXPORTS //

export default SliderInput;
