// MODULES //

import { Appear } from 'spectacle';


// EXPORTS //

/**
* Wrapped elements in the appear tag makes them appear/disappear in order in response to navigation.
*
* @property {string} easing - type of easing to use for an animation. Supported are: "back", "backIn", "backOut", "backInOut", "bounce", "bounceIn", "bounceOut", "bounceInOut", "circle", "circleIn", "circleOut", "circleInOut", "linear", "linearIn", "linearOut", "linearInOut", "cubic", "cubicIn", "cubicOut", "cubicInOut", "elastic", "elasticIn", "elasticOut", "elasticInOut", "exp", "expIn", "expOut", "expInOut", "poly", "polyIn", "polyOut", "polyInOut", "quad", "quadIn", "quadOut", "quadInOut", "sin", "sinIn", "sinOut", "sinInOut"
* @property {number} order - integer starting at 1 for the presentation order of the appear tags. If a slide contains ordered and unordered appear tags, unordered ones appear first
* @property {number} transitionDuration - duration of appearance animation in milliseconds
* @property {Object} startValue - style object for the starting, inactive state of the appear tag
* @property {Object} endValue - style object for the ending, active state of the appear tag
* @property {string} style - CSS inline styles
*/
export default Appear;
