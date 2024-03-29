/**
* Copyright (C) 2016-present The ISLE Authors
*
* The isle-dashboard program is free software: you can redistribute it and/or modify
* it under the terms of the GNU Affero General Public License as
* published by the Free Software Foundation, either version 3 of the
* License, or (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/>.
*/

// MAIN //

const POINTS = {
	CALCULATOR_SOLVE: 4,
	DASHBOARD_CLICK: 4,
	TABLE_FILTER: 2,
	TABLE_RESET: 2,
	TABLE_SORT: 2,
	FEEDBACK_CONFUSED: 5,
	FEEDBACK_UNDERSTOOD: 5,
	FEEDBACK_FORM: 10,
	FREE_TEXT_QUESTION_SUBMISSION: 20,
	FREE_TEXT_QUESTION_TOGGLE_SOLUTION: 5,
	FREE_TEXT_QUESTION_OPEN_HINT: -2,
	TEXT_SURVEY_SUBMISSION: 4,
	JSSHELL_TOGGLE_SOLUTION: 4,
	JSSHELL_EVALUATION: 4,
	JSSHELL_OPEN_HINT: -2,
	LESSON_SUBMIT: 20,
	LIKERT_SCALE_SUBMISSION: 2,
	DATA_EXPLORER_CONTINGENCY_TABLE: 4,
	DATA_EXPLORER_FREQUENCY_TABLE: 4,
	DATA_EXPLORER_SUMMARY_STATISTICS: 4,
	DATA_EXPLORER_HISTOGRAM: 4,
	DATA_EXPLORER_BARCHART: 4,
	DATA_EXPLORER_BOXPLOT: 4,
	DATA_EXPLORER_CONTOURPLOT: 4,
	DATA_EXPLORER_HEATMAP: 4,
	DATA_EXPLORER_MOSAIC: 4,
	DATA_EXPLORER_PIECHART: 4,
	DATA_EXPLORER_SCATTERPLOT: 4,
	DATA_EXPLORER_VIOLINPLOT: 4,
	DATA_EXPLORER_TESTS_ANOVA: 4,
	DATA_EXPLORER_TESTS_CHISQUARE: 4,
	DATA_EXPLORER_TESTS_CORRTEST: 4,
	DATA_EXPLORER_TESTS_PROPTEST: 4,
	DATA_EXPLORER_TESTS_TWO_SAMPLE_PROPTEST: 4,
	DATA_EXPLORER_TESTS_TWO_SAMPLE_ZTEST: 4,
	DATA_EXPLORER_TESTS_ZTEST: 4,
	DATA_EXPLORER_SHARE_HISTOGRAM: 2,
	DATA_EXPLORER_SHARE_BARCHART: 2,
	DATA_EXPLORER_SHARE_BOXPLOT: 2,
	DATA_EXPLORER_SHARE_CONTOURPLOT: 2,
	DATA_EXPLORER_SHARE_HEATMAP: 2,
	DATA_EXPLORER_SHARE_MOSAIC: 2,
	DATA_EXPLORER_SHARE_PIECHART: 2,
	DATA_EXPLORER_SHARE_SCATTERPLOT: 2,
	DATA_EXPLORER_SHARE_VIOLINPLOT: 2,
	DATA_EXPLORER_LINEAR_REGRESSION: 4,
	DATA_EXPLORER_VARIABLE_TRANSFORMER: 8,
	INSERT_STICKY_NOTE: 5,
	EDITOR_SUBMIT: 100,
	PLOT_DRAG: 8,
	MATCH_LIST_SUBMISSION: 20,
	MATCH_LIST_TOGGLE_SOLUTION: 5,
	MATCH_LIST_OPEN_HINT: -2,
	MULTIPLE_CHOICE_MATRIX_SUBMISSION: 40,
	MULTIPLE_CHOICE_OPEN_HINT: -2,
	MULTIPLE_CHOICE_SUBMISSION: 20,
	MULTIPLE_CHOICE_SURVEY_SUBMISSION: 20,
	NUMBER_QUESTION_SUBMISSION: 20,
	NUMBER_QUESTION_OPEN_HINT: -2,
	NUMBER_SURVEY_SUBMISSION: 20,
	ORDER_QUESTION_OPEN_HINT: -2,
	ORDER_QUESTION_SUBMISSION: 20,
	PAGES_FIRST_PAGE: 2,
	PAGES_NEXT_PAGE: 2,
	PAGES_PREVIOUS_PAGE: 2,
	PAGES_LAST_PAGE: 2,
	PAGES_JUMP_PAGE: 2,
	SKETCHPAD_FIRST_PAGE: 2,
	SKETCHPAD_NEXT_PAGE: 2,
	SKETCHPAD_PREVIOUS_PAGE: 2,
	SKETCHPAD_LAST_PAGE: 2,
	SKETCHPAD_GOTO_PAGE: 2,
	SKETCHPAD_INIT_PAGES: 2,
	SKETCHPAD_HIDE_POINTER: 2,
	SKETCHPAD_HIDE_ZOOM: 2,
	SKETCHPAD_REPLAY: 2,
	SKETCHPAD_CLEAR_PAGE: 2,
	SKETCHPAD_CLEAR_ALL_PAGES: 2,
	SKETCHPAD_DRAW_CURVE: 2,
	SKETCHPAD_DRAW_TEXT: 2,
	SKETCHPAD_DRAG_ELEMENT: 2,
	SKETCHPAD_INSERT_PAGE: 2,
	SKETCHPAD_DELETE_ELEMENT: 2,
	STICKY_NOTE_MOVE: 0,
	STICKY_NOTE_TITLE: 0,
	STICKY_NOTE_BODY: 0,
	STICKY_NOTE_DELETE: 0,
	PLOT_UPDATE: 5,
	PROPORTIONS_SURVEY_SUBMISSION: 20,
	SEND_QUEUE_SIZE: 4,
	QUEUE_ENTER: 8,
	QUEUE_LEAVE: 4,
	QUESTION_CONFIDENCE: 5,
	RSHELL_TOGGLE_SOLUTION: 8,
	RSHELL_EVALUATION: 5,
	RSHELL_OPEN_HINT: -2,
	RANGE_QUESTION_SUBMISSION: 20,
	RANGE_QUESTION_OPEN_HINT: -2,
	RESPONSE_VISUALIZER_TOGGLE: 1,
	RESPONSE_VISUALIZER_EXTENDED: 1,
	REVEAL_CONTENT: 5,
	HIDE_CONTENT: 5,
	SELECT_QUESTION_SUBMISSION: 20,
	SELECT_QUESTION_MATRIX_SUBMISSION: 40,
	ENGAGEMENT_SURVEY_START: 1,
	ENGAGEMENT_SURVEY_END: 1,
	USERS_ASSIGNED: 1,
	INDIVIDUAL_ASSIGNED: 1,
	ASSIGNMENT_CLEARED: 1,
	REMOVE_ASSIGNMENT: 1,
	VIDEO_PLAY: 1,
	VIDEO_PAUSE: 1,
	VIDEO_END: 8
};


// EXPORTS //

export default POINTS;
