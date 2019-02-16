// MAIN //

const Shorthand = () => {
	return (
		<div>
			<p>Setting 8 parameters is a cumbersome task that may me overcome by the shorthand property.</p>
			<div className="sample">
			<code>animation: <span className="green">crazy 4s ease-in-out 0.5s 12 backwards</span></code>
			</div>
			<br />
			<p>In this sample the animation with the name <span className="green">crazy</span> is evoked</p>
			<p>The value <span className="green">4s</span> specifies a duration of 4 seconds</p>
			<p><span className="green">ease-in-out</span> specifies the animation curve</p>
			<p><span className="green">0.5s</span> specifies the delay</p>
			<p>The value <span className="green">12</span> specifies the number of iterations</p>
			<p>The following <span className="green">backwards</span> specifies the fill mode</p>
			<div>The sequence of the various items does not matter. The only thing you have to keep in mind is that the first time-value always represents the duration, the latter the delay of the animation</div>
		</div>
	);
};


// EXPORTS //

export default Shorthand;
