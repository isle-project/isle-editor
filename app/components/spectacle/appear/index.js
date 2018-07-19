// MODULES //

import { Appear } from 'spectacle';


// MAIN //

Appear.propDescriptions = {
	easing: 'type of easing to use for an animation. Supported are: "back", "backIn", "backOut", "backInOut", "bounce", "bounceIn", "bounceOut", "bounceInOut", "circle", "circleIn", "circleOut", "circleInOut", "linear", "linearIn", "linearOut", "linearInOut", "cubic", "cubicIn", "cubicOut", "cubicInOut", "elastic", "elasticIn", "elasticOut", "elasticInOut", "exp", "expIn", "expOut", "expInOut", "poly", "polyIn", "polyOut", "polyInOut", "quad", "quadIn", "quadOut", "quadInOut", "sin", "sinIn", "sinOut", "sinInOut"',
	order: 'integer starting at 1 for the presentation order of the appear tags. If a slide contains ordered and unordered appear tags, unordered ones appear first',
	transitionDuration: 'duration of appearance animation in milliseconds',
	startValue: 'style object for the starting, inactive state of the appear tag',
	endValue: 'style object for the ending, active state of the appear tag',
	style: 'CSS inline styles'
};


// EXPORTS //

export default Appear;
