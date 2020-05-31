// MODULES //

import React, { Component } from 'react';
import { render } from 'react-dom';
import Draggable from 'react-draggable';
import * as ReactBootstrap from 'react-bootstrap';
import copy from '@stdlib/utils/copy';
import Components from 'components';
import factor from 'utils/factor-variable';


// VARIABLES //

export const SCOPE = {
	...Components,
	...ReactBootstrap
};


// MAIN //

const createScope = ( session ) => {
	const scope = copy( SCOPE, 1 );
	scope.session = session;
	scope.React = React;
	scope.Component = Component;
	scope.render = render;
	scope.factor = factor;
	scope.Draggable = Draggable;
	return scope;
};


// EXPORTS //

export default createScope;
