// Libraries
// None

// Custom libraries
var SocketioServer = require("./socketioServer");
var SocketioHttpRouter = require("./socketioHttpRouter");
var SocketioWsRouter = require("./socketioWsRouter");
var StateMsgHandler = require("./stateMsgHandler");
var FeedbackMsgHandler = require("./feedbackMsgHandler");

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

//Start server 
SocketioServer.start(8080, SocketioHttpRouter.httpRoute, SocketioWsRouter.wsRoute, ws_msg_handler);