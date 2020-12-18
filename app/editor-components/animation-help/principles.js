// MODULES //

import React from 'react';


// MAIN //

const AnimationPrinciples = ({ t }) => {
	return (
		<div>
			<h4>{t('animation-principles')}</h4>
			<p>
				{t('animation-intro')}
			</p>
			<li><a href="https://www.w3schools.com/cssref/css3_pr_animation-name.asp">animationName</a>: <span className="param">&apos;anim-rotate-in&apos;</span> ({t('animation-name')})</li>
			<li><a href="https://www.w3schools.com/cssref/css3_pr_animation-delay.asp" target="_blank">animationDelay</a>: <span className="param">&apos;.5s&apos;</span> ({t('animation-delay')})</li>
			<li><a href="https://www.w3schools.com/cssref/css3_pr_animation-duration.asp" target="_blank">animationDuration</a>: <span className="param">&apos;3s&apos;</span> ({t('animation-duration')})</li>
			<li><a href="https://www.w3schools.com/cssref/css3_pr_animation-direction.asp" target="_blank">animationDirection</a>: <span className="param">&apos;alternate&apos;</span> ({t('animation-direction')})</li>
			<li><a href="https://www.w3schools.com/cssref/css3_pr_animation-iteration-count.asp" target="_blank">animationIterationCount</a>: <span className="param">3</span> ({t('animation-iteration-count')})</li>
			<li><a href="https://www.w3schools.com/cssref/css3_pr_animation-timing-function.asp" target="_blank">animationTimingFunction</a>: <span className="param">&apos;ease&apos;</span> ({t('animation-timing-function')})</li>
			<li><a href="https://www.w3schools.com/cssref/css3_pr_animation-fill-mode.asp" target="_blank">animationFillMode</a> : <span className="param">&apos;forwards&apos;</span> ({t('animation-fill-mode')})</li>
			<li><a href="https://www.w3schools.com/cssref/css3_pr_animation-play-state.asp" target="_blank">animationPlayState</a>  <span className="param">&apos;paused&apos;</span> ({t('animation-play-state')})</li>
		</div>
	);
};


// EXPORTS //

export default AnimationPrinciples;
