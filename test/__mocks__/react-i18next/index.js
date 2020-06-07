/*
* The MIT License (MIT)
*
* Copyright (c) 2015 i18next
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

const React = require('react');
const reactI18next = require('react-i18next');

const hasChildren = node => node && (node.children || (node.props && node.props.children));

const getChildren = node => node && node.children ? node.children : node.props && node.props.children;

const renderNodes = reactNodes => {
	if (typeof reactNodes === 'string') {
		return reactNodes;
	}

	return Object.keys(reactNodes).map((key, i) => {
	const child = reactNodes[key];
	const isElement = React.isValidElement(child);

	if (typeof child === 'string') {
		return child;
	}
	if (hasChildren(child)) {
		const inner = renderNodes(getChildren(child));
		return React.cloneElement(child, { ...child.props, key: i }, inner);
	}
	if (typeof child === 'object' && !isElement) {
		return Object.keys(child).reduce((str, childKey) => `${str}${child[childKey]}`, '');
	}

	return child;
	});
};

const useMock = [k => k, {}];
useMock.t = k => k;
useMock.i18n = {};

module.exports = {
	// this mock makes sure any components using the translate HoC receive the t function as a prop
	withTranslation: () => Component => props => <Component t={k => k} {...props} />,
	Trans: ({ children }) => renderNodes(children),
	Translation: ({ children }) => children(k => k, { i18n: {} }),
	useTranslation: () => useMock,

	// mock if needed
	I18nextProvider: reactI18next.I18nextProvider,
	initReactI18next: reactI18next.initReactI18next,
	setDefaults: reactI18next.setDefaults,
	getDefaults: reactI18next.getDefaults,
	setI18n: reactI18next.setI18n,
	getI18n: reactI18next.getI18n
};
