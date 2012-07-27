// Libraries
// None

// Custom libraries
var SocketioServer = require("./socketioServer");
var SocketioHttpRouter = require("./socketioHttpRouter");
var SocketioWsRouter = require("./socketioWsRouter");
var StateMsgHandler = require("./stateMsgHandler");
var FeedbackMsgHandler = require("./feedbackMsgHandler");
var StateEventHandler = require("./stateEventHandler");
var FeedbackEventHandler = require("./feedbackEventHandler");

// Server
var port = 8080;

// SocketIO message handlers
var state_msg_handler = new StateMsgHandler('SockerIO State Msg Handler');
var feedback_msg_handler = new FeedbackMsgHandler('SocketIO Feedback Msg Handler');
var ws_msg_handler = {};

// State message handler
ws_msg_handler["start_presentation"] = state_msg_handler.start;
ws_msg_handler["restart_presentation"] = state_msg_handler.restart;
ws_msg_handler["get_first_slide"] = state_msg_handler.getFirstSlide;
ws_msg_handler["get_last_slide"] = state_msg_handler.getLastSlide;
ws_msg_handler["get_next_slide"] = state_msg_handler.getNextSlide;
ws_msg_handler["get_previous_slide"] = state_msg_handler.getPreviousSlide;
ws_msg_handler["get_current_slide"] = state_msg_handler.getCurrentSlide;
ws_msg_handler["choose_branch"] = state_msg_handler.chooseBranch;
ws_msg_handler["return_to_branch"] = state_msg_handler.returnToBranch;

// Feedback message handler
ws_msg_handler["feedback_option"] = feedback_msg_handler.feedback;

// Presentation event handlers
var state_event_handler = new StateEventHandler("State Event Handler");
var feedback_event_handler = new FeedbackEventHandler("Feedback Event Handler");
var presentation_event_handler = {};

// State event handler
presentation_event_handler["foo"] = state_event_handler.foo;

// Feedback event handler
presentation_event_handler["foo"] = feedback_event_handler.foo;

//Start server 
SocketioServer.start(port, SocketioHttpRouter.httpRoute, SocketioWsRouter.wsRoute, ws_msg_handler, presentation_event_handler);