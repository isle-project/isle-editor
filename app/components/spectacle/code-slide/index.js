/**
* Adapted from spectacle-code-slide@0.5.2 (MIT Licensed) https://github.com/jamiebuilds/spectacle-code-slide
*/

// MODULES //

import React from 'react';
import PropTypes from 'prop-types';
import { Slide } from 'spectacle';
import hljs from 'highlight.js';
import clamp from '@stdlib/math/base/special/clamp';
import lpad from '@stdlib/string/left-pad';
import CodeSlideTitle from './code_slide_title.js';
import CodeSlideNote from './code_slide_note.js';
import CodeSlideImage from './code_slide_image.js';
import calculateScrollCenter from './calculate_scroll_center.js';
import scrollToElement from './scroll_to_element.js';
import 'highlight.js/styles/googlecode.css';


// FUNCTIONS //

function calculateOpacity(index, loc) {
	return ( loc[0] <= index && loc[1] > index ) ? 1 : 0.2;
}

function getLineNumber(index) {
	return '<span class="token comment">' + lpad( String( index + 1 ), 3 ) + '.</span> ';
}


// VARIABLES //

const defaultBgColor = '#122b45';
const defaultColor = 'white';
const style = {
	position: 'relative',
	textAlign: 'center',
	overflow: 'hidden',
	color: defaultColor,
	height: '646px',
	margin: 0,
	fontSize: '1.5em',
	padding: '40% 0',
	whiteSpace: 'pre-wrap',
	wordBreak: 'break-word'
};


// MAIN //

class CodeSlide extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			active: this.getStorageItem() || 0
		};
	}

	componentDidMount() {
		this.updateNotes();
		document.addEventListener('keydown', this.onKeyDown);
		window.addEventListener('storage', this.onStorage);
		window.addEventListener('resize', this.onResize);
		this.scrollActiveIntoView(true);

		requestAnimationFrame(() => {
			this.scrollActiveIntoView(true);
		});

		this.lineNodes.forEach( node => {
			hljs.highlightBlock( node );
		});
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.onKeyDown);
		window.removeEventListener('storage', this.onStorage);
		window.removeEventListener('resize', this.onResize);
	}

	componentWillEnter(cb) {
		this.slide.componentWillEnter(cb);
	}

	componentWillAppear(cb) {
		this.slide.componentWillAppear(cb);
	}

	componentWillLeave(cb) {
		this.slide.componentWillLeave(cb);
	}

	getStorageId() {
		return 'code-slide:' + this.props.slideIndex;
	}

	getStorageItem() {
		return +localStorage.getItem(this.getStorageId());
	}

	setStorageItem(value) {
		return localStorage.setItem(this.getStorageId(), '' + value);
	}

	isSlideActive() {
		const slide = this.context.store.getState().route.slide;
		return this.props.slideIndex === parseInt( slide, 10 );
	}

	goTo( active, skipLocalStorage ) {
		this.setState({ active }, this.scrollActiveIntoView);
		this.updateNotes();

		if (!skipLocalStorage) {
			this.setStorageItem(active);
		}
	}

	scrollActiveIntoView = (skipAnimation) => {
		const { container, start, end } = this;
		const scrollTo = calculateScrollCenter(start, end, container);
		scrollToElement(container, 0, scrollTo, {
			duration: skipAnimation ? 1 : 1000
		});
	};

	onResize = () => {
		this.scrollActiveIntoView(true);
	};

	onKeyDown = e => {
		if (!this.isSlideActive()) {
			return;
		}

		let prev = this.state.active;
		let active = null;

		if (e.which === 38) {
			active = prev - 1;
		} else if (e.which === 40) {
			active = prev + 1;
		}

		if (active !== null) {
			e.preventDefault();
			active = clamp(active, 0, this.props.ranges.length - 1);
			this.goTo(active);
		}
	};

	onStorage = e => {
		if (e.key === this.getStorageId()) {
			this.goTo(+e.newValue, true);
		}
	};

	updateNotes() {
		if (
			!this.isSlideActive() ||
			!this.context.updateNotes
		) {
			return;
		}

		const { ranges, notes } = this.props;
		const { active } = this.state;

		const range = ranges[active] || {};
		const rangeNotes = range.notes;

		this.context.updateNotes( rangeNotes || notes );
	}

	render() {
		const { code, ranges, color, bgColor, showLineNumbers, ...rest } = this.props;
		const { active } = this.state;

		const range = ranges[active] || {};
		const loc = range.loc || [];
		const slideBg = bgColor || defaultBgColor;

		const newStyle = {
			...style,
			color: color || style.color
		};

		this.lineNodes = [];
		const lines = code.split( '\n' ).map( ( line, index ) => {
			return ( <div
				key={index}
				ref={( div ) => {
					if ( index === loc[0] ) {
						this.start = div;
					} else if ( index === loc[1] ) {
						this.end = div;
					}
					this.lineNodes.push( div );
					return null;
				}}
				dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
					__html: showLineNumbers ?
						getLineNumber(index) + line :
						line
				}}
				style={{ opacity: calculateOpacity( index, loc ), padding: '0.1em' }}
			/> );
		});

		return (
			<Slide ref={( slide ) => { this.slide = slide; }} bgColor={slideBg} margin={1} {...rest}>
				{range.title && <CodeSlideTitle>{range.title}</CodeSlideTitle>}

				<pre ref={( pre ) => { this.container = pre; }} style={newStyle}>
					<code
						style={{
							display: 'inline-block',
							textAlign: 'left'
						}}
					>{lines}</code>
				</pre>

				{range.note && <CodeSlideNote>{range.note}</CodeSlideNote>}

				{range.image && <CodeSlideImage src={range.image} />}
			</Slide>
		);
	}
}


// PROPERTIES //

CodeSlide.propTypes = {
	lang: PropTypes.string.isRequired,
	code: PropTypes.string.isRequired,
	ranges: PropTypes.arrayOf(PropTypes.shape({
		loc: PropTypes.arrayOf(PropTypes.number).isRequired,
		title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
		note: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
	})).isRequired,
	showLineNumbers: PropTypes.bool
};

CodeSlide.defaultProps = {
	showLineNumbers: true
};

CodeSlide.contextTypes = {
	store: PropTypes.object.isRequired,
	updateNotes: PropTypes.func
};


// EXPORTS //

export default CodeSlide;
