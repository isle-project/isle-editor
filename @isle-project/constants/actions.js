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

// EXPORTS //

export const INTERACTION = 'INTERACTION';
export const CLICK = 'CLICK';
export const OPEN = 'OPEN';
export const OPEN_HINT = 'OPEN_HINT';
export const SUBMISSION = 'SUBMISSION';
export const TOGGLE_SOLUTION = 'TOGGLE_SOLUTION';
export const PLAY = 'PLAY';
export const PAUSE = 'PAUSE';
export const END = 'END';
export const SEEK = 'SEEK';
export const START = 'START';
export const FIRST = 'FIRST';
export const LAST = 'LAST';
export const NEXT = 'NEXT';
export const PREVIOUS = 'PREVIOUS';
export const JUMP = 'JUMP';
export const FILTER = 'FILTER';
export const SORT = 'SORT';
export const RESET = 'RESET';
export const EVALUATE = 'EVALUATE';
export const FINISH = 'FINISH';
export const CONFIDENCE = 'CONFIDENCE';
export const SKIP = 'SKIP';

export const ADJUST_GRADES = 'ADJUST_GRADES';
export const APPEND_GRADE_MESSAGE = 'APPEND_GRADE_MESSAGE';
export const BUTTON_PAUSE = 'BUTTON_PAUSE';
export const BUTTON_RESUME = 'BUTTON_RESUME';
export const CALCULATOR_SOLVE = 'CALCULATOR_SOLVE';
export const DASHBOARD_CLICK_GENERATE = 'DASHBOARD_CLICK_GENERATE';
export const USER_FEEDBACK_CONFUSED = 'USER_FEEDBACK_CONFUSED';
export const USER_FEEDBACK_UNDERSTOOD = 'USER_FEEDBACK_UNDERSTOOD';
export const USER_FEEDBACK_FORM = 'USER_FEEDBACK_FORM';
export const FREE_TEXT_QUESTION_SUBMIT_ANSWER = 'FREE_TEXT_QUESTION_SUBMIT_ANSWER';
export const FREE_TEXT_QUESTION_DISPLAY_SOLUTION = 'FREE_TEXT_QUESTION_DISPLAY_SOLUTION';
export const FREE_TEXT_QUESTION_OPEN_HINT = 'FREE_TEXT_QUESTION_OPEN_HINT';
export const TEXT_SURVEY_SUBMISSION = 'TEXT_SURVEY_SUBMISSION';
export const LESSON_CONNECTED = 'LESSON_CONNECTED';
export const LIKERT_SCALE_SUBMISSION = 'LIKERT_SCALE_SUBMISSION';
export const DATA_EXPLORER_CONTINGENCY_TABLE = 'DATA_EXPLORER_CONTINGENCY_TABLE';
export const DATA_EXPLORER_FREQUENCY_TABLE = 'DATA_EXPLORER_FREQUENCY_TABLE';
export const DATA_EXPLORER_SUMMARY_STATISTICS = 'DATA_EXPLORER_SUMMARY_STATISTICS';
export const DATA_EXPLORER_HISTOGRAM = 'DATA_EXPLORER_HISTOGRAM';
export const DATA_EXPLORER_BARCHART = 'DATA_EXPLORER_BARCHART';
export const DATA_EXPLORER_BOXPLOT = 'DATA_EXPLORER_BOXPLOT';
export const DATA_EXPLORER_CONTOURPLOT = 'DATA_EXPLORER_CONTOURPLOT';
export const DATA_EXPLORER_HEATMAP = 'DATA_EXPLORER_HEATMAP';
export const DATA_EXPLORER_INTERVALPLOT = 'DATA_EXPLORER_INTERVALPLOT';
export const DATA_EXPLORER_LINEPLOT = 'DATA_EXPLORER_LINEPLOT';
export const DATA_EXPLORER_MAP = 'DATA_EXPLORER_MAP';
export const DATA_EXPLORER_MOSAIC = 'DATA_EXPLORER_MOSAIC';
export const DATA_EXPLORER_PIECHART = 'DATA_EXPLORER_PIECHART';
export const DATA_EXPLORER_QQPLOT = 'DATA_EXPLORER_QQPLOT';
export const DATA_EXPLORER_SCATTERPLOT = 'DATA_EXPLORER_SCATTERPLOT';
export const DATA_EXPLORER_SPLOM = 'DATA_EXPLORER_SPLOM';
export const DATA_EXPLORER_VIOLINPLOT = 'DATA_EXPLORER_VIOLINPLOT';
export const DATA_EXPLORER_TESTS_ANOVA = 'DATA_EXPLORER_TESTS_ANOVA';
export const DATA_EXPLORER_TESTS_CHISQUARE = 'DATA_EXPLORER_TESTS_CHISQUARE';
export const DATA_EXPLORER_TESTS_CORRTEST = 'DATA_EXPLORER_TESTS_CORRTEST';
export const DATA_EXPLORER_TESTS_KRUSKAL = 'DATA_EXPLORER_TESTS_KRUSKAL';
export const DATA_EXPLORER_TESTS_PROPTEST = 'DATA_EXPLORER_TESTS_PROPTEST';
export const DATA_EXPLORER_TESTS_TWO_SAMPLE_PROPTEST = 'DATA_EXPLORER_TESTS_TWO_SAMPLE_PROPTEST';
export const DATA_EXPLORER_TESTS_TWO_SAMPLE_MEAN = 'DATA_EXPLORER_TESTS_TWO_SAMPLE_MEAN';
export const DATA_EXPLORER_TESTS_MEAN = 'DATA_EXPLORER_TESTS_MEAN';
export const DATA_EXPLORER_SHARE_HISTOGRAM = 'DATA_EXPLORER_SHARE_HISTOGRAM';
export const DATA_EXPLORER_SHARE_BARCHART = 'DATA_EXPLORER_SHARE_BARCHART';
export const DATA_EXPLORER_SHARE_BOXPLOT = 'DATA_EXPLORER_SHARE_BOXPLOT';
export const DATA_EXPLORER_SHARE_CONTOURPLOT = 'DATA_EXPLORER_SHARE_CONTOURPLOT';
export const DATA_EXPLORER_SHARE_HEATMAP = 'DATA_EXPLORER_SHARE_HEATMAP';
export const DATA_EXPLORER_SHARE_INTERVALPLOT = 'DATA_EXPLORER_SHARE_INTERVALPLOT';
export const DATA_EXPLORER_SHARE_LINEPLOT = 'DATA_EXPLORER_SHARE_LINEPLOT';
export const DATA_EXPLORER_SHARE_MAP = 'DATA_EXPLORER_SHARE_MAP';
export const DATA_EXPLORER_SHARE_MOSAIC = 'DATA_EXPLORER_SHARE_MOSAIC';
export const DATA_EXPLORER_SHARE_PIECHART = 'DATA_EXPLORER_SHARE_PIECHART';
export const DATA_EXPLORER_SHARE_QQPLOT = 'DATA_EXPLORER_SHARE_QQPLOT';
export const DATA_EXPLORER_SHARE_SCATTERPLOT = 'DATA_EXPLORER_SHARE_SCATTERPLOT';
export const DATA_EXPLORER_SHARE_SPLOM = 'DATA_EXPLORER_SHARE_SPLOM';
export const DATA_EXPLORER_SHARE_VIOLINPLOT = 'DATA_EXPLORER_SHARE_VIOLINPLOT';
export const DATA_EXPLORER_DECISION_TREE = 'DATA_EXPLORER_DECISION_TREE';
export const DATA_EXPLORER_HIERARCHICAL_CLUSTERING = 'DATA_EXPLORER_HIERARCHICAL_CLUSTERING';
export const DATA_EXPLORER_LASSO_REGRESSION = 'DATA_EXPLORER_LASSO_REGRESSION';
export const DATA_EXPLORER_LINEAR_REGRESSION = 'DATA_EXPLORER_LINEAR_REGRESSION';
export const DATA_EXPLORER_LOGISTIC_REGRESSION = 'DATA_EXPLORER_MULTIPLE_REGRESSION';
export const DATA_EXPLORER_MULTIPLE_REGRESSION = 'DATA_EXPLORER_MULTIPLE_REGRESSION';
export const DATA_EXPLORER_NAIVE_BAYES = 'DATA_EXPLORER_NAIVE_BAYES';
export const DATA_EXPLORER_PCA = 'DATA_EXPLORER_PCA';
export const DATA_EXPLORER_RANDOM_FOREST = 'DATA_EXPLORER_RANDOM_FOREST';
export const DATA_EXPLORER_KMEANS = 'DATA_EXPLORER_KMEANS';
export const DATA_EXPLORER_BIN_TRANSFORMER = 'DATA_EXPLORER_BIN_TRANSFORMER';
export const DATA_EXPLORER_CAT_TRANSFORMER = 'DATA_EXPLORER_CAT_TRANSFORMER';
export const DATA_EXPLORER_CLEAR_OUTPUT_PANE = 'DATA_EXPLORER_CLEAR_OUTPUT_PANE';
export const DATA_EXPLORER_DELETE_OUTPUT = 'DATA_EXPLORER_DELETE_OUTPUT';
export const DATA_EXPLORER_GROUP_TRANSFORMER = 'DATA_EXPLORER_GROUP_TRANSFORMER';
export const DATA_EXPLORER_RANDOM_TRANSFORMER = 'DATA_EXPLORER_RANDOM_TRANSFORMER';
export const DATA_EXPLORER_VARIABLE_TRANSFORMER = 'DATA_EXPLORER_VARIABLE_TRANSFORMER';
export const DATA_EXPLORER_DELETE_VARIABLE = 'DATA_EXPLORER_DELETE_VARIABLE';
export const DELETE_STICKY_NOTE = 'DELETE_STICKY_NOTE';
export const INSERT_STICKY_NOTE = 'INSERT_STICKY_NOTE';
export const SAVE_PDF = 'SAVE_PDF';
export const SAVE_HTML = 'SAVE_HTML';
export const SUBMIT = 'SUBMIT';
export const ENGAGEMENT_SURVEY_START = 'ENGAGEMENT_SURVEY_START';
export const ENGAGEMENT_SURVEY_END = 'ENGAGEMENT_SURVEY_END';
export const PLOT_DRAGGED = 'PLOT_DRAGGED';
export const MATCH_LIST_OPEN_HINT = 'MATCH_LIST_OPEN_HINT';
export const MULTIPLE_CHOICE_MATRIX_SUBMISSION = 'MULTIPLE_CHOICE_MATRIX_SUBMISSION';
export const MULTIPLE_CHOICE_OPEN_HINT = 'MULTIPLE_CHOICE_OPEN_HINT';
export const MULTIPLE_CHOICE_SUBMISSION = 'MULTIPLE_CHOICE_SUBMISSION';
export const MULTIPLE_CHOICE_SURVEY_SUBMISSION = 'MULTIPLE_CHOICE_SURVEY_SUBMISSION';
export const NUMBER_SURVEY_SUBMISSION = 'NUMBER_SURVEY_SUBMISSION';
export const OPEN_DOCUMENTATION = 'OPEN_DOCUMENTATION';
export const OPEN_LINK = 'OPEN_LINK';
export const SHARE_ENGAGEMENT = 'SHARE_ENGAGEMENT';
export const SAVE_PNG = 'SAVE_PNG';
export const FIRST_PAGE = 'FIRST_PAGE';
export const NEXT_PAGE = 'NEXT_PAGE';
export const PREVIOUS_PAGE = 'PREVIOUS_PAGE';
export const LAST_PAGE = 'LAST_PAGE';
export const GOTO_PAGE = 'GOTO_PAGE';
export const INIT_PAGES = 'INIT_PAGES';
export const HIDE_POINTER = 'HIDE_POINTER';
export const HIDE_ZOOM = 'HIDE_ZOOM';
export const CLEAR_PAGE = 'CLEAR_PAGE';
export const CLEAR_ALL_PAGES = 'CLEAR_ALL_PAGES';
export const DRAW_CURVE = 'DRAW_CURVE';
export const DRAW_TEXT = 'DRAW_TEXT';
export const DRAG_ELEMENTS = 'DRAG_ELEMENTS';
export const INSERT_PAGE = 'INSERT_PAGE';
export const DELETE_ELEMENT = 'DELETE_ELEMENT';
export const VERTICAL_SCROLL = 'VERTICAL_SCROLL';
export const MOVE_POINTER = 'MOVE_POINTER';
export const MOVE_ZOOM = 'MOVE_ZOOM';
export const STICKY_NOTE_TITLE = 'STICKY_NOTE_TITLE';
export const STICKY_NOTE_BODY = 'STICKY_NOTE_BODY';
export const STICKY_NOTE_MOVE = 'STICKY_NOTE_MOVE';
export const PLOT_UPDATE = 'PLOT_UPDATE';
export const PROPORTIONS_SURVEY_SUBMISSION = 'PROPORTIONS_SURVEY_SUBMISSION';
export const SEND_QUEUE_SIZE = 'SEND_QUEUE_SIZE';
export const ENTER_QUEUE = 'ENTER_QUEUE';
export const LEFT_QUEUE = 'LEFT_QUEUE';
export const QUESTION_CONFIDENCE = 'QUESTION_CONFIDENCE';
export const QUESTION_SKIPPED = 'QUESTION_SKIPPED';
export const QUIZ_FINISHED = 'QUIZ_FINISHED';
export const RESPONSE_VISUALIZER_TOGGLE = 'RESPONSE_VISUALIZER_TOGGLE';
export const RESPONSE_VISUALIZER_EXTENDED = 'RESPONSE_VISUALIZER_EXTENDED';
export const REVEAL_CONTENT = 'REVEAL_CONTENT';
export const HIDE_CONTENT = 'HIDE_CONTENT';
export const SELECT_QUESTION_SUBMISSION = 'SELECT_QUESTION_SUBMISSION';
export const SELECT_QUESTION_MATRIX_SUBMISSION = 'SELECT_QUESTION_MATRIX_SUBMISSION';
export const START_SURVEY = 'START_SURVEY';
export const STOP_SURVEY = 'STOP_SURVEY';
export const TOGGLE_BLACKSCREEN = 'TOGGLE_BLACKSCREEN';
export const TOGGLE_PRESENTATION_MODE = 'TOGGLE_PRESENTATION_MODE';
export const USERS_ASSIGNED = 'USERS_ASSIGNED';
export const INDIVIDUAL_ASSIGNED = 'INDIVIDUAL_ASSIGNED';
export const ASSIGNMENT_CLEARED = 'ASSIGNMENT_CLEARED';
export const REMOVE_ASSIGNMENT = 'REMOVE_ASSIGNMENT';
export const WIKIPEDIA_SEARCH = 'WIKIPEDIA_SEARCH';
export const GROUP_MODE_END = 'GROUP_MODE_END';
export const HIGHLIGHT_TEXT = 'HIGHLIGHT_TEXT';
export const REMOVE_HIGHLIGHT_TEXT = 'REMOVE_HIGHLIGHT_TEXT';
export const COPY_TO_CLIPBOARD = 'COPY_TO_CLIPBOARD';
export const TEXT_TO_SPEECH = 'TEXT_TO_SPEECH';
