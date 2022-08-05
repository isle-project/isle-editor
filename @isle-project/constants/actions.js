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

export const CLICK = 'CLICK';
export const CONFIDENCE = 'CONFIDENCE';
export const CONFUSED = 'CONFUSED';
export const COPY_TO_CLIPBOARD = 'COPY_TO_CLIPBOARD';
export const DRAG = 'DRAG';
export const END = 'END';
export const ENTER = 'ENTER';
export const EVALUATE = 'EVALUATE';
export const FILTER = 'FILTER';
export const FINISH = 'FINISH';
export const FIRST = 'FIRST';
export const FORM = 'FORM';
export const HIGHLIGHT_TEXT = 'HIGHLIGHT_TEXT';
export const INTERACTION = 'INTERACTION';
export const JUMP = 'JUMP';
export const LAST = 'LAST';
export const LEAVE = 'LEAVE';
export const NEXT = 'NEXT';
export const OPEN = 'OPEN';
export const OPEN_HINT = 'OPEN_HINT';
export const PAUSE = 'PAUSE';
export const PLAY = 'PLAY';
export const PREVIOUS = 'PREVIOUS';
export const REMOVE_HIGHLIGHT_TEXT = 'REMOVE_HIGHLIGHT_TEXT';
export const RESET = 'RESET';
export const SAVE_HTML = 'SAVE_HTML';
export const SAVE_PDF = 'SAVE_PDF';
export const SEEK = 'SEEK';
export const SKIP = 'SKIP';
export const SOLVE = 'SOLVE';
export const SORT = 'SORT';
export const START = 'START';
export const SUBMISSION = 'SUBMISSION';
export const SUBMIT = 'SUBMIT';
export const TEXT_TO_SPEECH = 'TEXT_TO_SPEECH';
export const TOGGLE_SOLUTION = 'TOGGLE_SOLUTION';
export const UNDERSTOOD = 'UNDERSTOOD';

export const ADJUST_GRADES = 'ADJUST_GRADES';
export const APPEND_GRADE_MESSAGE = 'APPEND_GRADE_MESSAGE';
export const BUTTON_PAUSE = 'BUTTON_PAUSE';
export const BUTTON_RESUME = 'BUTTON_RESUME';

export const LESSON_CONNECTED = 'LESSON_CONNECTED';

export const CONTINGENCY_TABLE = 'CONTINGENCY_TABLE';
export const FREQUENCY_TABLE = 'FREQUENCY_TABLE';
export const SUMMARY_STATISTICS = 'SUMMARY_STATISTICS';
export const HISTOGRAM = 'HISTOGRAM';
export const BARCHART = 'BARCHART';
export const BOXPLOT = 'BOXPLOT';
export const CONTOURPLOT = 'CONTOURPLOT';
export const HEATMAP = 'HEATMAP';
export const INTERVALPLOT = 'INTERVALPLOT';
export const LINEPLOT = 'LINEPLOT';
export const MAP = 'MAP';
export const MOSAIC = 'MOSAIC';
export const PIECHART = 'PIECHART';
export const QQPLOT = 'QQPLOT';
export const SCATTERPLOT = 'SCATTERPLOT';
export const SPLOM = 'SPLOM';
export const VIOLINPLOT = 'VIOLINPLOT';
export const TESTS_ANOVA = 'TESTS_ANOVA';
export const TESTS_CHISQUARE = 'TESTS_CHISQUARE';
export const TESTS_CORRTEST = 'TESTS_CORRTEST';
export const TESTS_KRUSKAL = 'TESTS_KRUSKAL';
export const TESTS_PROPTEST = 'TESTS_PROPTEST';
export const TESTS_TWO_SAMPLE_PROPTEST = 'TESTS_TWO_SAMPLE_PROPTEST';
export const TESTS_TWO_SAMPLE_MEAN = 'TESTS_TWO_SAMPLE_MEAN';
export const TESTS_MEAN = 'TESTS_MEAN';
export const SHARE_HISTOGRAM = 'SHARE_HISTOGRAM';
export const SHARE_BARCHART = 'SHARE_BARCHART';
export const SHARE_BOXPLOT = 'SHARE_BOXPLOT';
export const SHARE_CONTOURPLOT = 'SHARE_CONTOURPLOT';
export const SHARE_HEATMAP = 'SHARE_HEATMAP';
export const SHARE_INTERVALPLOT = 'SHARE_INTERVALPLOT';
export const SHARE_LINEPLOT = 'SHARE_LINEPLOT';
export const SHARE_MAP = 'SHARE_MAP';
export const SHARE_MOSAIC = 'SHARE_MOSAIC';
export const SHARE_PIECHART = 'SHARE_PIECHART';
export const SHARE_QQPLOT = 'SHARE_QQPLOT';
export const SHARE_SCATTERPLOT = 'SHARE_SCATTERPLOT';
export const SHARE_SPLOM = 'SHARE_SPLOM';
export const SHARE_VIOLINPLOT = 'SHARE_VIOLINPLOT';
export const DECISION_TREE = 'DECISION_TREE';
export const HIERARCHICAL_CLUSTERING = 'HIERARCHICAL_CLUSTERING';
export const LASSO_REGRESSION = 'LASSO_REGRESSION';
export const LINEAR_REGRESSION = 'LINEAR_REGRESSION';
export const LOGISTIC_REGRESSION = 'MULTIPLE_REGRESSION';
export const MULTIPLE_REGRESSION = 'MULTIPLE_REGRESSION';
export const NAIVE_BAYES = 'NAIVE_BAYES';
export const PCA = 'PCA';
export const RANDOM_FOREST = 'RANDOM_FOREST';
export const KMEANS = 'KMEANS';
export const BIN_TRANSFORMER = 'BIN_TRANSFORMER';
export const CAT_TRANSFORMER = 'CAT_TRANSFORMER';
export const CLEAR_OUTPUT_PANE = 'CLEAR_OUTPUT_PANE';
export const DELETE_OUTPUT = 'DELETE_OUTPUT';
export const GROUP_TRANSFORMER = 'GROUP_TRANSFORMER';
export const RANDOM_TRANSFORMER = 'RANDOM_TRANSFORMER';
export const VARIABLE_TRANSFORMER = 'VARIABLE_TRANSFORMER';
export const DELETE_VARIABLE = 'DELETE_VARIABLE';

export const DELETE_STICKY_NOTE = 'DELETE_STICKY_NOTE';
export const INSERT_STICKY_NOTE = 'INSERT_STICKY_NOTE';


export const ENGAGEMENT_SURVEY_START = 'ENGAGEMENT_SURVEY_START';
export const ENGAGEMENT_SURVEY_END = 'ENGAGEMENT_SURVEY_END';
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
export const CHANGE_TITLE = 'CHANGE_TITLE';
export const CHANGE_BODY = 'CHANGE_BODY';
export const STICKY_NOTE_MOVE = 'STICKY_NOTE_MOVE';
export const PLOT_UPDATE = 'PLOT_UPDATE';
export const SEND_QUEUE_SIZE = 'SEND_QUEUE_SIZE';
export const QUESTION_CONFIDENCE = 'QUESTION_CONFIDENCE';
export const QUESTION_SKIPPED = 'QUESTION_SKIPPED';
export const QUIZ_FINISHED = 'QUIZ_FINISHED';
export const RESPONSE_VISUALIZER_TOGGLE = 'RESPONSE_VISUALIZER_TOGGLE';
export const RESPONSE_VISUALIZER_EXTENDED = 'RESPONSE_VISUALIZER_EXTENDED';
export const REVEAL_CONTENT = 'REVEAL_CONTENT';
export const HIDE_CONTENT = 'HIDE_CONTENT';
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

