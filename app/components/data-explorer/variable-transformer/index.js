// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import BinTransformer from './bin_transformer.js';
import FormulaTransformer from './formula_transformer.js';
import CategoricalModal from './categorical_transformer.js';
import GroupModal from './group_transformer.js';


// MAIN //

class Transformer extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			active: null
		};
	}

	renderFormulaModal = () => {
		const isActive = this.state.active === 'formula';
		if ( !isActive || !this.props.data ) {
			return null;
		}
		return (
			<FormulaTransformer
				show={isActive}
				onHide={this.toggleFormulaModal}
				categorical={this.props.categorical}
				quantitative={this.props.quantitative}
				data={this.props.data}
				defaultCode={this.props.defaultCode}
				logAction={this.props.logAction}
				onGenerate={this.props.onGenerate}
				session={this.props.session}
			/>
		);
	}

	renderBinModal = () => {
		const isActive = this.state.active === 'bin';
		if ( !isActive || !this.props.data ) {
			return null;
		}
		return (
			<BinTransformer
				show={isActive}
				onHide={this.toggleBinModal}
				quantitative={this.props.quantitative}
				logAction={this.props.logAction}
				onGenerate={this.props.onGenerate}
				data={this.props.data}
			/>
		);
	}

	renderCategoricalModal = () => {
		const isActive = this.state.active === 'categorical';
		if ( !isActive || !this.props.data ) {
			return null;
		}
		return (
			<CategoricalModal
				show={isActive}
				onHide={this.toggleCategoricalModal}
				categorical={this.props.categorical}
				logAction={this.props.logAction}
				onGenerate={this.props.onGenerate}
				data={this.props.data}
			/>
		);
	}

	renderGroupModal = () => {
		const isActive = this.state.active === 'group';
		if ( !isActive || !this.props.data ) {
			return null;
		}
		return (
			<GroupModal
				show={isActive}
				onHide={this.toggleCategoricalModal}
				logAction={this.props.logAction}
				onGenerate={this.props.onGenerate}
				data={this.props.data}
			/>
		);
	}

	toggleFormulaModal = () => {
		this.setState({
			active: this.state.active ? null : 'formula'
		});
	}

	toggleBinModal = () => {
		this.setState({
			active: this.state.active ? null : 'bin'
		});
	}

	toggleCategoricalModal = () => {
		this.setState({
			active: this.state.active ? null : 'categorical'
		});
	}

	toggleGroupModal = () => {
		this.setState({
			active: this.state.active ? null : 'group'
		});
	}

	render() {
		return (
			<div className="well" style={{ padding: 15, margin: 15 }} >
				<div>
					<Button
						onClick={this.toggleFormulaModal}
						variant="primary"
						size="large"
						block
					>
						Interactions, Transformations (e.g., sqrt), Functions
					</Button>
				</div>
				<div>
					<Button
						onClick={this.toggleBinModal}
						disabled={this.props.quantitative.length === 0}
						variant="primary"
						size="large"
						block
					>
						Bin quantitative variables into categorical
					</Button>
				</div>
				<div>
					<Button
						onClick={this.toggleCategoricalModal}
						disabled={this.props.categorical.length === 0}
						variant="primary"
						size="large"
						block
					>
						Rename or combine categories
					</Button>
				</div>
				<div>
					<Button
						onClick={this.toggleGroupModal}
						variant="primary"
						size="large"
						block
					>
						Create groups (e.g., for training-test set split or cross-validation)
					</Button>
				</div>
				{this.renderBinModal()}
				{this.renderFormulaModal()}
				{this.renderCategoricalModal()}
				{this.renderGroupModal()}
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
	quantitative: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	defaultCode: PropTypes.string,
	logAction: PropTypes.func,
	onGenerate: PropTypes.func,
	session: PropTypes.object
};


// EXPORTS //

export default Transformer;
