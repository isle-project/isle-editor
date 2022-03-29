// MODULES //

import React, { Component } from 'react';
import Draggable from 'react-draggable';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Components from '@isle-project/components';
import LineWrapper from 'editor-containers/line-wrapper';
import LineButtons from 'editor-containers/line-buttons';
import ErrorBoundary from 'editor-components/error-boundary';
import Profiler from 'editor-components/profiler';
import factor from '@isle-project/utils/factor-variable';
import date from '@isle-project/utils/date';


// VARIABLES //

export const SCOPE = {
	...Components,
	ErrorBoundary,
	LineWrapper,
	LineButtons,
	Card,
	Form,
	Modal,
	Alert,
	Badge,
	Button,
	Col,
	FormControl,
	ListGroup,
	ListGroupItem,
	Nav,
	Navbar,
	NavItem,
	NavLink,
	Row,
	Tab,
	Tabs,
	Draggable,
	Profiler,
	date,
	factor
};


// MAIN //

const createScope = ( session ) => {
	const scope = { ...SCOPE };
	scope.session = session;
	scope.React = React;
	scope.Component = Component;
	return scope;
};


// EXPORTS //

export default createScope;
