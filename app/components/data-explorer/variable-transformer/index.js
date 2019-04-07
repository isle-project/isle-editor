// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import BinTransformer from './bin_transformer.js';
import FormulaTransformer from './formula_transformer.js';


// MAIN //

class Transformer extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			formulaModalActive: false,
			binModalActive: false
		};
	}

	renderFormulaModal = () => {
		return (
			<FormulaTransformer
				show={this.state.formulaModalActive}
				onHide={this.toggleFormulaModal}
				categorical={this.props.categorical}
				continuous={this.props.continuous}
				data={this.props.data}
				defaultCode={this.props.defaultCode}
				logAction={this.props.logAction}
				onGenerate={this.props.onGenerate}
				session={this.props.session}
			/>
		);
	}

	renderBinModal = () => {
		return (
			<BinTransformer
				show={this.state.binModalActive}
				onHide={this.toggleBinModal}
				continuous={this.props.continuous}
				onGenerate={this.props.onGenerate}
				data={this.props.data}
			/>
		);
	}

	toggleFormulaModal = () => {
		this.setState({
			formulaModalActive: !this.state.formulaModalActive
		});
	}

	toggleBinModal = () => {
		this.setState({
			binModalActive: !this.state.binModalActive
		});
	}

	render() {
		return (
			<div>
				<Button
					onClick={this.toggleFormulaModal}
				>
					Formula Transformation
				</Button>
				<Button
					onClick={this.toggleBinModal}
				>
					Bin Transformation
				</Button>
				{this.renderBinModal()}
				{this.renderFormulaModal()}
			</div>
		);
	}
}


// PROPERTIES //

Transformer.defaultProps = {
	logAction() {},
	onGenerate() {},
	defaultCode: '',
	session: {}
};

Transformer.propTypes = {
	categorical: PropTypes.array.isRequired,
	continuous: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	defaultCode: PropTypes.string,
	logAction: PropTypes.func,
	onGenerate: PropTypes.func,
	session: PropTypes.object
};


// EXPORTS //

export default Transformer;
