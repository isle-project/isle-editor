// MODULES //

import React, { Component, Fragment } from 'react';
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
				onHide={this.toggleGroupModal}
				logAction={this.props.logAction}
				onGenerate={this.props.onGenerate}
				data={this.props.data}
			/>
		);
	}

	handleActive = () => {
		this.props.onActive( this.state.active );
	}

	toggleFormulaModal = () => {
		this.setState({
			active: this.state.active === 'formula' ? null : 'formula'
		}, this.handleActive );
	}

	toggleBinModal = () => {
		this.setState({
			active: this.state.active === 'bin' ? null : 'bin'
		}, this.handleActive );
	}

	toggleCategoricalModal = () => {
		this.setState({
			active: this.state.active === 'categorical' ? null : 'categorical'
		}, this.handleActive );
	}

	toggleGroupModal = () => {
		this.setState({
			active: this.state.active === 'group' ? null : 'group'
		}, this.handleActive );
	}

	render() {
		return (
			<Fragment>
				<div className="well" style={{ padding: 15, margin: 15 }} >
					<div style={{ padding: 12 }} >
						<Button
							onClick={this.toggleFormulaModal}
							variant="primary"
							block
							style={{ fontSize: '1.2em' }}
						>
							{this.props.t('interactions-functions')}
						</Button>
					</div>
					<div style={{ padding: 12 }} >
						<Button
							onClick={this.toggleBinModal}
							disabled={this.props.quantitative.length === 0}
							variant="primary"
							block
							style={{ fontSize: '1.2em' }}
						>
							{this.props.t('bin-quantitative')}
						</Button>
					</div>
					<div style={{ padding: 12 }} >
						<Button
							onClick={this.toggleCategoricalModal}
							disabled={this.props.categorical.length === 0}
							variant="primary"
							block
							style={{ fontSize: '1.2em' }}
						>
							{this.props.t('rename-or-combine')}
						</Button>
					</div>
					<div style={{ padding: 12 }} >
						<Button
							onClick={this.toggleGroupModal}
							variant="primary"
							block
							style={{ fontSize: '1.2em' }}
						>
							{this.props.t('create-groups')}
						</Button>
					</div>
				</div>
				{this.renderBinModal()}
				{this.renderFormulaModal()}
				{this.renderCategoricalModal()}
				{this.renderGroupModal()}
			</Fragment>
		);
	}
}


// PROPERTIES //

Transformer.defaultProps = {
	logAction() {},
	onActive() {},
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
	onActive: PropTypes.func,
	onGenerate: PropTypes.func,
	session: PropTypes.object
};


// EXPORTS //

export default Transformer;
