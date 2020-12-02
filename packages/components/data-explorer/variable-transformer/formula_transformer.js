// MODULES //

import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/FormLabel';
import FormGroup from 'react-bootstrap/FormGroup';
import FormText from 'react-bootstrap/FormText';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Draggable from 'components/draggable';
import Panel from 'components/panel';
import Collapse from 'components/collapse';
import TextArea from 'components/input/text-area';
import Tooltip from 'components/tooltip';
import incrspace from '@stdlib/math/utils/incrspace';
import contains from '@stdlib/assert/contains';
import replace from '@stdlib/string/replace';
import { DATA_EXPLORER_VARIABLE_TRANSFORMER } from 'constants/actions.js';
import valuesFromFormula from './values_from_formula.js';
import FUNCTION_KEYS from './function_keys.json';
import './formula_transformer.css';


// VARIABLES //

const DIGITS = incrspace( 0, 10, 1 );
const RE_LAST_EXPRESSION = /(?:^|\n)([^\n]*)$/;
const RE_DIGITS_START = /^[0-9]/;


// FUNCTIONS //

const CustomMenu = React.forwardRef(
	({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
		const [value, setValue] = useState( '' );
		return (
			<div
				ref={ref}
				style={style}
				className={className}
				aria-labelledby={labeledBy}
			>
			<FormControl
				className="mx-3 my-2 w-auto"
				placeholder="Type to filter..."
				onChange={e => setValue(e.target.value)}
				value={value}
			/>
				<ul className="list-unstyled">
					{React.Children.toArray(children).filter(
						child =>
						!value || child.props.children.toLowerCase().startsWith(value),
					)}
				</ul>
			</div>
		);
	},
);


// MAIN //

class FormulaTransformer extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			code: props.defaultCode,
			selection: null,
			name: '',
			showGuide: false
		};
	}

	handleGenerate = () => {
		let { code, name } = this.state;
		if ( !contains( code, 'return ' ) ) {
			code = replace( code, RE_LAST_EXPRESSION, '\nreturn $1' );
		}
		let values;
		try {
			values = valuesFromFormula( code, this.props.data );
			this.props.logAction( DATA_EXPLORER_VARIABLE_TRANSFORMER, {
				code, name
			});
			this.props.onGenerate( name, values );
		} catch ( err ) {
			return this.props.session.addNotification({
				title: 'Errored',
				message: 'Encountered the following error: '+err.message,
				level: 'error',
				position: 'tr'
			});
		}
		this.props.onHide();
	}

	handleNameChange = ( event ) => {
		this.setState({
			name: event.target.value
		});
	}

	handleCodeChange = ( value ) => {
		this.setState({
			code: value
		});
	}

	handleKeyPress = ( event ) => {
		if ( event.charCode === 13 && this.state.name.length >= 2 ) {
			this.handleGenerate();
		}
	}

	insertVarFactory = ( name ) => {
		return () => {
			let newCode = this.state.code.substring( 0, this.state.selection );
			let replacement = 'datum';
			const literal =
				!contains( name, ' ' ) &&
				!contains( name, '.' ) &&
				!RE_DIGITS_START.test( name );
			replacement += literal ? `.${name}` : `['${name}']`;
			newCode += replacement;
			newCode += this.state.code.substring( this.state.selection );
			this.setState({
				code: newCode,
				selection: this.state.selection + replacement.length
			});
		};
	}

	insertLiteralFactory = ( operator ) => {
		return () => {
			let newCode = this.state.code.substring( 0, this.state.selection );
			const replacement = operator;
			newCode += replacement;
			newCode += this.state.code.substring( this.state.selection );
			this.setState({
				code: newCode,
				selection: this.state.selection + replacement.length
			});
		};
	}

	insertFuncFactory = ( funcName ) => {
		return () => {
			let newCode = this.state.code.substring( 0, this.state.selection );
			const replacement = ' '+funcName+'()';
			newCode += replacement;
			newCode += this.state.code.substring( this.state.selection );
			this.setState({
				code: newCode,
				selection: this.state.selection + replacement.length - 1
			});
		};
	}

	render() {
		const continousItems = this.props.quantitative.map( ( v, i ) => {
			return <Dropdown.Item key={i} onClick={this.insertVarFactory( v )} eventKey={i}>{v}</Dropdown.Item>;
		});
		return (
			<Draggable cancel=".card-body" onDragStart={( event ) => {
				event.stopPropagation();
			}} style={{ zIndex: 1006 }} >
				<Panel
					show={this.props.show}
					onHide={this.props.onHide}
					header={this.props.t('formula-transformer-header')}
					footer={<Button onClick={this.handleGenerate} disabled={this.state.name.length < 2} >{this.props.t('create-new-variable')}</Button>}
					role="button" tabIndex={0}
					bodyStyle={{
						maxHeight: 'calc(100vh - 200px)',
						overflowY: 'auto',
						position: 'relative'
					}}
				>
					<div className="formula-transformer-body">
						<Collapse headerClassName="title" header={this.state.showGuide ? 'Hide Example Guide' : 'Show Example Guide'} visible={this.state.showGuide} onClick={() => this.setState({ showGuide: !this.state.showGuide })}>
							<p>Use the formula text area below to create a new variable. The following table illustrates a few use-cases:</p>
							<Table condensed >
								<thead>
									<tr>
										<th>Type</th>
										<th>Example</th>
										<th>Description</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Interaction:</td>
										<td><code>datum.{this.props.quantitative[0]} * datum.{this.props.quantitative[1]}</code></td>
										<td>Multiply values of variables <code>{this.props.quantitative[0]}</code> and <code>{this.props.quantitative[1]}</code></td>
									</tr>
									<tr>
										<td>Transformation:</td>
										<td><code>exp( datum.{this.props.quantitative[0]} )</code></td>
										<td>Natural exponential function of variable <code>{this.props.quantitative[0]}</code></td>
									</tr>
									<tr>
										<td>Function:</td>
										<td><code>9/5 * {this.props.quantitative[0]} + 32</code></td>
										<td>Multiply values of <code>{this.props.quantitative[0]}</code> by <code>9/5</code> and add <code>32</code></td>
									</tr>
								</tbody>
							</Table>
						</Collapse>
						<hr />
						<div className="mb-2" >
							<ButtonToolbar style={{ marginBottom: 5 }} >
								<Dropdown className="mr-2">
									<Dropdown.Toggle variant="light" id="dropdown-custom-components">
										Quantitative
									</Dropdown.Toggle>
									<Dropdown.Menu variant="light" as={CustomMenu} id="bg-nested-dropdown">
										{continousItems}
									</Dropdown.Menu>
								</Dropdown>
								<Dropdown className="mr-2">
									<Dropdown.Toggle variant="light" id="dropdown-custom-components">
										Categorical
									</Dropdown.Toggle>
									<Dropdown.Menu variant="light" as={CustomMenu} id="bg-nested-dropdown">
										{this.props.categorical.map( ( v, i ) => {
											return <Dropdown.Item key={i} onClick={this.insertVarFactory( v )} eventKey={i}>{v}</Dropdown.Item>;
										})}
									</Dropdown.Menu>
								</Dropdown>
							</ButtonToolbar>
						</div>
						<Card className="mb-2" >
							<Card.Body>
								<ButtonToolbar style={{ marginBottom: 5 }} >
									<ButtonGroup size="sm" className="mr-2" >
										<Button variant="light" onClick={this.insertLiteralFactory(' < ')} >{'<'}</Button>
										<Button variant="light" onClick={this.insertLiteralFactory(' > ')} >{'>'}</Button>
										<Button variant="light" onClick={this.insertLiteralFactory(' <= ')} >{'<='}</Button>
										<Button variant="light" onClick={this.insertLiteralFactory(' >= ')} >{'>='}</Button>
									</ButtonGroup>
									<ButtonGroup size="sm" className="mr-2" >
										<Tooltip placement="top" tooltip="Open parenthesis"><Button variant="light" onClick={this.insertLiteralFactory(' ( ')} >(</Button></Tooltip>
										<Tooltip placement="top" tooltip="Closing parenthesis"><Button variant="light" onClick={this.insertLiteralFactory(' ) ')} >)</Button></Tooltip>
									</ButtonGroup>
									<ButtonGroup size="sm" className="mr-2" >
										<Tooltip placement="top" tooltip="Addition"><Button variant="light" onClick={this.insertLiteralFactory(' + ')} >+</Button></Tooltip>
										<Tooltip placement="top" tooltip="Subtraction"><Button variant="light" onClick={this.insertLiteralFactory(' - ')} >-</Button></Tooltip>
										<Tooltip placement="top" tooltip="Multiplication"><Button variant="light" onClick={this.insertLiteralFactory(' * ')} >*</Button></Tooltip>
										<Tooltip placement="top" tooltip="Division"><Button variant="light" onClick={this.insertLiteralFactory(' / ')} >/</Button></Tooltip>
									</ButtonGroup>
									<ButtonGroup size="sm" className="mr-2" >
										<Button variant="light" onClick={this.insertLiteralFactory(' && ')} >and</Button>
										<Button variant="light" onClick={this.insertLiteralFactory(' || ')} >or</Button>
										<Button variant="light" onClick={this.insertLiteralFactory(' !')} >not</Button>
									</ButtonGroup>
									<ButtonGroup size="sm" className="me-2">
										{FUNCTION_KEYS.map( ( v, i ) => {
											return <Button key={i} variant="light" onClick={this.insertFuncFactory( v )} eventKey={i}>{v}</Button>;
										})}
									</ButtonGroup>
								</ButtonToolbar>
								<ButtonToolbar>
									<ButtonGroup size="sm" className="mr-2" >
										{DIGITS.map( ( d, i ) => {
											return <Button key={i} variant="light" onClick={this.insertLiteralFactory( `${d}`)} >{d}</Button>;
										})}
										<Button variant="light" onClick={this.insertLiteralFactory('.')} >.</Button>
									</ButtonGroup>
								</ButtonToolbar>
							</Card.Body>
						</Card>
						<Card className="mb-2" >
							<Card.Body>
								<TextArea
									ref={div => { this.textarea = div; }}
									legend="Expression:"
									placeholder="Enter formula..."
									value={this.state.code}
									onChange={this.handleCodeChange}
									onBlur={( event ) => {
										const selectionStart = event.target.selectionStart;
										this.setState({
											selection: selectionStart
										});
									}}
									rows={3}
								/>
							</Card.Body>
						</Card>
						<FormGroup style={{ margin: 8 }}>
							<FormLabel>{this.props.t('name-new-variable')}:</FormLabel>
							<FormControl
								type="text"
								placeholder={this.props.t('select-name')}
								onChange={this.handleNameChange}
								onKeyPress={this.handleKeyPress}
							/>
							<FormText>
								{this.props.t('new-variable-appended')}
							</FormText>
						</FormGroup>
					</div>
				</Panel>
			</Draggable>
		);
	}
}


// PROPERTIES //

FormulaTransformer.defaultProps = {
	logAction() {},
	onGenerate() {},
	defaultCode: '',
	session: {}
};

FormulaTransformer.propTypes = {
	show: PropTypes.bool.isRequired,
	categorical: PropTypes.array.isRequired,
	quantitative: PropTypes.array.isRequired,
	data: PropTypes.object.isRequired,
	defaultCode: PropTypes.string,
	logAction: PropTypes.func,
	onGenerate: PropTypes.func,
	onHide: PropTypes.func.isRequired,
	session: PropTypes.object
};


// EXPORTS //

export default FormulaTransformer;
