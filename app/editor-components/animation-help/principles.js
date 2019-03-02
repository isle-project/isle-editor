// MODULES //

import React from 'react';


// MAIN //

const AnimationPrinciples = () => {
	return (
		<div>
			<h4>Animation Principles</h4>
			<p>
				There animation parameters you can specify in the style are the following
			</p>
			<li>animationName: <span className="param">'anim-rotate-in'</span></li>
			<li>animationDelay:  <span className="param">'.5s'</span></li>
			<li>animationDuration:  <span className="param">'3s'</span></li>
			<li>animationDirection:  <span className="param">'alternate'</span></li>
			<li>animationIterationCount:  <span className="param">3</span></li>
			<li>animationTimingFunction:  <span className="param">'ease'</span></li>
			<li>animationFillMode:  <span className="param">'forwards'</span></li>
			<li>animationPlayState:  <span className="param">'paused'</span></li>
			<br />
			<p>The <a hef="https://www.w3schools.com/cssref/css3_pr_animation-name.asp">animation-name</a> CSS property specifies a name for the @keyframes animation.</p>
			<p>The <a hef="https://www.w3schools.com/cssref/css3_pr_animation-delay.asp" target="_blank">animation-delay</a> CSS property specifies a delay for the start of an animation.</p>
			<p>The <a hef="https://www.w3schools.com/cssref/css3_pr_animation-direction.asp" target="_blank">animation-diretion</a> CSS property defines whether an animation should be played forwards, backwards or in alternate cycles.</p>
			<p>The <a hef="https://www.w3schools.com/cssref/css3_pr_animation-duration.asp" target="_blank">animation-duration</a> CSS property defines how long an animation should take to complete one cycle.</p>
			<p>The <a hef="https://www.w3schools.com/cssref/css3_pr_animation-iteration-count.asp" target="_blank">animation-iteration-count</a> CSS property  specifies the number of times an animation should be played.</p>
			<p>The <a hef="https://www.w3schools.com/cssref/css3_pr_animation-fill-mode.asp" target="_blank">animation-fill-mode</a> CSS property sets how a CSS animation applies styles to its target before and after its execution.</p>
			<p>The <a hef="https://www.w3schools.com/cssref/css3_pr_animation-play-state.asp" target="_blank">animation-play-state</a> CSS property specifies whether the animation is running or paused.</p>
			<p>The <a hef="https://www.w3schools.com/cssref/css3_pr_animation-timing-function.asp" target="_blank">animation-timing-function</a> CSS property specifies the speed curve of an animation .</p>
		</div>
	);
};


// EXPORTS //

export default AnimationPrinciples;
