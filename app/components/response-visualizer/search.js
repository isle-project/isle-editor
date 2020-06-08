// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import Checkbox from 'components/input/checkbox';


// MAIN //

class Search extends Component {
	constructor() {
		super();

		this.state = {
			search: '',
			caseSensitive: false,
			exact: false
		};
	}

	componentDidUpdate( prevProps ) {
		if ( this.props.extended !== prevProps.extended ) {
			this.handleSubmit();
		}
	}

	handleSearch = ( event ) => {
		this.setState({
			search: event.target.value
		});
	}

	handleKeyPress = ( event ) => {
		if ( event.charCode === 13 ) {
			this.handleSubmit();
		}
	}

	handleSubmit = () => {
		// Need to get it back to the parent
		this.props.onClick( this.state.search, this.state.caseSensitive, this.state.exact );
	}

	handleReset = () => {
		this.setState({
			search: ''
		}, () => {
			this.props.onClick( '' );
		});
	}

	render() {
		return (
			<Fragment>
				<FormGroup style={{ width: window.innerWidth * 0.3, padding: '0px', marginBottom: '0px' }} >
					<InputGroup size="small" >
						<FormControl
							type="text"
							placeholder={this.props.t('enter-text')}
							onChange={this.handleSearch}
							onKeyPress={this.handleKeyPress}
							value={this.state.search}
						/>
						<Button
							onClick={this.handleSubmit}
						>
							{this.props.t('search')}
						</Button>
						<Button style={{ float: 'left' }} size="small" onClick={this.handleReset} >
							{this.props.t('reset')}
						</Button>
					</InputGroup>
				</FormGroup>
				<FormGroup style={{ float: 'left', margin: '4px' }} >
					<Checkbox
						tooltip={this.props.t('whole-word-tooltip')}
						tooltipPlacement="top"
						size="small" inline
						legend={this.props.t('whole-word')}
						style={{ fontSize: '0.9rem' }}
						onChange={( value ) => this.setState({ exact: value }, this.handleSubmit )}
					/>
					<Checkbox
						tooltip={this.props.t('toggle-sensitivity')} tooltipPlacement="top"
						size="small" inline
						legend={this.props.t('case-sensitive')}
						style={{ fontSize: '0.9rem' }}
						onChange={( value ) => this.setState({ caseSensitive: value }, this.handleSubmit )}
					/>
				</FormGroup>
			</Fragment>
		);
	}
}


// PROPERTIES //

Search.propTypes = {
	extended: PropTypes.string,
	onClick: PropTypes.func
};

Search.defaultProps = {
	extended: false,
	onClick() {}
};


// EXPORTS //

export default Search;
