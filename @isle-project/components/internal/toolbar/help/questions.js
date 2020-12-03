// MODULES //

import React from 'react';
import Image from 'components/image';


// MAIN //

const main = () => {
	return (
		<div>
			<h2 style={{ textAlign: 'center' }}>Questions</h2>
			<p>Many of the ISLE lessons you will work on will contain questions for you to answer. There are a variety of possible question types, from short answer to multiple choice. Here is an example of a short answer question:</p>

			<div className="centered" style={{ width: 'fit-content' }} ><Image alt="Answering Questions" src="https://isle.stat.cmu.edu/data-explorers_answering_question.gif" width="400px" height="auto" /></div>

			<h3>Submitting</h3>

			<p>Once you have answered a question and are ready to submit your answer, click the <b>Submit</b> button. This records your work so your instructor can see your answer and give you credit for the question.</p>

			<h3>Feedback Buttons</h3>

			<div className="centered" style={{ width: 'fit-content' }} ><Image alt="Feedback Buttons" src="https://isle.stat.cmu.edu/data-explorers_feedback_buttons.png" width="200px" height="auto" /></div>

			<p>Sometimes, your instructor might include feedback buttons (shown above) on individual questions. The left-hand button allows you to note that you are confused on the question; the center button allows you to note that the question makes sense; and the right-hand button allows you to give specific feedback comments in more detail.</p>

			<h3>Navigating Questions</h3>

			<p>Multiple questions may be placed in the same location on the page. If this is the case, you can navigate between the questions by clicking the <b>Next</b> button or selecting the questions by number:</p>

			<div className="centered" style={{ width: 'fit-content' }} ><Image alt="Next Question Navigation" src="https://isle.stat.cmu.edu/data-explorers_question_nav_next.gif" width="400px" height="auto" /></div>

			<div className="centered" style={{ width: 'fit-content' }} ><Image alt="Question Number Navigation" src="https://isle.stat.cmu.edu/data-explorers_question_nav_num.gif" width="400px" height="auto" /></div>

		</div>
	);
};


// EXPORTS //

export default main;
