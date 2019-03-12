/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview English strings.
 * @author ascii@media.mit.edu (Andrew Sliwinski)
 *
 * After modifying this file, run `npm run translate` from the root directory
 * to regenerate `./msg/json/en.json`.
 * IMPORTANT:
 * All message strings must use single quotes for the scripts to work properly
 */
'use strict';

goog.provide('Blockly.Msg.en');

goog.require('Blockly.Msg');

// Control blocks
Blockly.Msg.CONTROL_FOREVER = 'while True:';
Blockly.Msg.CONTROL_REPEAT = 'for x in range(1, %1):';
Blockly.Msg.CONTROL_IF = 'if %1:';
Blockly.Msg.CONTROL_ELSE = 'else:';
Blockly.Msg.CONTROL_STOP = 'stage.stop';
Blockly.Msg.CONTROL_STOP_ALL = 'all';
Blockly.Msg.CONTROL_STOP_THIS = 'this script';
Blockly.Msg.CONTROL_STOP_OTHER = 'other scripts in sprite';
Blockly.Msg.CONTROL_WAIT = 'stage.wait(%1)';
Blockly.Msg.CONTROL_WAITUNTIL = 'stage.wait_until(%1)';
Blockly.Msg.CONTROL_REPEATUNTIL = 'while not (%1):';
Blockly.Msg.CONTROL_WHILE = 'while %1';
Blockly.Msg.CONTROL_FOREACH = 'for each %1 in %2';
Blockly.Msg.CONTROL_STARTASCLONE = '@event start as a clone';
Blockly.Msg.CONTROL_CREATECLONEOF = 'stage.create_clone_of(%1)';
Blockly.Msg.CONTROL_CREATECLONEOF_MYSELF = 'myself';
Blockly.Msg.CONTROL_DELETETHISCLONE = 'self.delete_this_clone()';
Blockly.Msg.CONTROL_COUNTER = 'stage.counter';
Blockly.Msg.CONTROL_INCRCOUNTER = 'stage.increment_counter()';
Blockly.Msg.CONTROL_CLEARCOUNTER = 'stage.clear_counter()';
Blockly.Msg.CONTROL_ALLATONCE = 'all at once';

// Data blocks
Blockly.Msg.DATA_SETVARIABLETO = 'stage.set(%1, %2)';
Blockly.Msg.DATA_CHANGEVARIABLEBY = 'stage.change_by(%1, %2)';
Blockly.Msg.DATA_SHOWVARIABLE = 'stage.show_variable(%1)';
Blockly.Msg.DATA_HIDEVARIABLE = 'stage.hide_variable(%1)';
Blockly.Msg.DATA_ADDTOLIST = '%2.append(%1)';
Blockly.Msg.DATA_DELETEOFLIST = '%2.pop(%1)';
Blockly.Msg.DATA_DELETEALLOFLIST = '%1.clear()';
Blockly.Msg.DATA_INSERTATLIST = '%3.insert(%2, %1)';
Blockly.Msg.DATA_REPLACEITEMOFLIST = '%2[%1] = %3';
Blockly.Msg.DATA_ITEMOFLIST = '%2[%1]';
Blockly.Msg.DATA_ITEMNUMOFLIST = '%2.index(%1)';
Blockly.Msg.DATA_LENGTHOFLIST = 'len(%1)';
Blockly.Msg.DATA_LISTCONTAINSITEM = '%2 in %1';
Blockly.Msg.DATA_SHOWLIST = 'stage.show_list(%1)';
Blockly.Msg.DATA_HIDELIST = 'stage.hide_list(%1)';
Blockly.Msg.DATA_INDEX_ALL = 'all';
Blockly.Msg.DATA_INDEX_LAST = 'last';
Blockly.Msg.DATA_INDEX_RANDOM = 'random';

// Event blocks
Blockly.Msg.EVENT_WHENFLAGCLICKED = '@event %1 clicked';
Blockly.Msg.EVENT_WHENTHISSPRITECLICKED = '@event this sprite clicked';
Blockly.Msg.EVENT_WHENSTAGECLICKED = '@event stage clicked';
Blockly.Msg.EVENT_WHENTOUCHINGOBJECT = '@event sprite touched %1';
Blockly.Msg.EVENT_WHENBROADCASTRECEIVED = '@event %1 received';
Blockly.Msg.EVENT_WHENBACKDROPSWITCHESTO = '@event backdrop switches to %1';
Blockly.Msg.EVENT_WHENGREATERTHAN = '@event %1 > %2';
Blockly.Msg.EVENT_WHENGREATERTHAN_TIMER = 'timer';
Blockly.Msg.EVENT_WHENGREATERTHAN_LOUDNESS = 'loudness';
Blockly.Msg.EVENT_BROADCAST = 'stage.broadcast(%1)';
Blockly.Msg.EVENT_BROADCASTANDWAIT = 'stage.broadcast_and_wait(%1)';
Blockly.Msg.EVENT_WHENKEYPRESSED = '@event %1 key pressed';
Blockly.Msg.EVENT_WHENKEYPRESSED_SPACE = 'space';
Blockly.Msg.EVENT_WHENKEYPRESSED_LEFT = 'left arrow';
Blockly.Msg.EVENT_WHENKEYPRESSED_RIGHT = 'right arrow';
Blockly.Msg.EVENT_WHENKEYPRESSED_DOWN = 'down arrow';
Blockly.Msg.EVENT_WHENKEYPRESSED_UP = 'up arrow';
Blockly.Msg.EVENT_WHENKEYPRESSED_ANY = 'any';

// Looks blocks
Blockly.Msg.LOOKS_SAYFORSECS = 'self.say_for(%1, %2)';
Blockly.Msg.LOOKS_SAY = 'self.say(%1)';
Blockly.Msg.LOOKS_HELLO = 'Hello!';
Blockly.Msg.LOOKS_THINKFORSECS = 'self.think_for(%1, %2)';
Blockly.Msg.LOOKS_THINK = 'self.think(%1)';
Blockly.Msg.LOOKS_HMM = 'Hmm...';
Blockly.Msg.LOOKS_SHOW = 'self.show()';
Blockly.Msg.LOOKS_HIDE = 'self.hide()';
Blockly.Msg.LOOKS_HIDEALLSPRITES = 'stage.hide_all_sprites()';
Blockly.Msg.LOOKS_EFFECT_COLOR = 'color';
Blockly.Msg.LOOKS_EFFECT_FISHEYE = 'fisheye';
Blockly.Msg.LOOKS_EFFECT_WHIRL = 'whirl';
Blockly.Msg.LOOKS_EFFECT_PIXELATE = 'pixelate';
Blockly.Msg.LOOKS_EFFECT_MOSAIC = 'mosaic';
Blockly.Msg.LOOKS_EFFECT_BRIGHTNESS = 'brightness';
Blockly.Msg.LOOKS_EFFECT_GHOST = 'ghost';
Blockly.Msg.LOOKS_CHANGEEFFECTBY = 'self.change_effect_by(%1, %2)';
Blockly.Msg.LOOKS_SETEFFECTTO = 'self.set_effect_to(%1, %2)';
Blockly.Msg.LOOKS_CLEARGRAPHICEFFECTS = 'self.clear_graphic_effects()';
Blockly.Msg.LOOKS_CHANGESIZEBY = 'self.change_size_by(%1)';
Blockly.Msg.LOOKS_SETSIZETO = 'self.set_size_to(%1)';
Blockly.Msg.LOOKS_SIZE = 'self.size';
Blockly.Msg.LOOKS_CHANGESTRETCHBY = 'self.change_stretch_by(%1)';
Blockly.Msg.LOOKS_SETSTRETCHTO = 'self.set_stretch_to(%1)';
Blockly.Msg.LOOKS_SWITCHCOSTUMETO = 'self.switch_costume_to(%1)';
Blockly.Msg.LOOKS_NEXTCOSTUME = 'self.next_costume()';
Blockly.Msg.LOOKS_SWITCHBACKDROPTO = 'stage.switch_backdrop_to(%1)';
Blockly.Msg.LOOKS_GOTOFRONTBACK = 'self.go_to_layer(%1)';
Blockly.Msg.LOOKS_GOTOFRONTBACK_FRONT = 'front';
Blockly.Msg.LOOKS_GOTOFRONTBACK_BACK = 'back';
Blockly.Msg.LOOKS_GOFORWARDBACKWARDLAYERS = 'self.go_layers(%1, %2)';
Blockly.Msg.LOOKS_GOFORWARDBACKWARDLAYERS_FORWARD = 'forward';
Blockly.Msg.LOOKS_GOFORWARDBACKWARDLAYERS_BACKWARD = 'backward';
Blockly.Msg.LOOKS_BACKDROPNUMBERNAME = 'stage.backdrop(%1)';
Blockly.Msg.LOOKS_COSTUMENUMBERNAME = 'self.costume(%1)';
Blockly.Msg.LOOKS_NUMBERNAME_NUMBER = 'number';
Blockly.Msg.LOOKS_NUMBERNAME_NAME = 'name';
Blockly.Msg.LOOKS_SWITCHBACKDROPTOANDWAIT = 'stage.switch_backdrop_and_wait(%1)';
Blockly.Msg.LOOKS_NEXTBACKDROP_BLOCK = 'stage.next_backdrop()';
Blockly.Msg.LOOKS_NEXTBACKDROP = 'next backdrop';
Blockly.Msg.LOOKS_PREVIOUSBACKDROP = 'previous backdrop';
Blockly.Msg.LOOKS_RANDOMBACKDROP = 'random backdrop';

// Motion blocks
Blockly.Msg.MOTION_MOVESTEPS = 'self.move_steps(%1)';
Blockly.Msg.MOTION_TURNLEFT = 'self.turn_left_degrees(%1)';
Blockly.Msg.MOTION_TURNRIGHT = 'self.turn_right_degress(%1)';
Blockly.Msg.MOTION_POINTINDIRECTION = 'self.point_in_direction(%1)';
Blockly.Msg.MOTION_POINTTOWARDS = 'self.point_towards(%1)';
Blockly.Msg.MOTION_POINTTOWARDS_POINTER = 'mouse-pointer';
Blockly.Msg.MOTION_POINTTOWARDS_RANDOM = 'random direction';
Blockly.Msg.MOTION_GOTO = 'self.go_to(%1)';
Blockly.Msg.MOTION_GOTO_POINTER = 'mouse-pointer';
Blockly.Msg.MOTION_GOTO_RANDOM = 'random position';
Blockly.Msg.MOTION_GOTOXY = 'self.go_to_x_y(%1, %2)';
Blockly.Msg.MOTION_GLIDESECSTOXY = 'self.glide_for_secs_to_x_y(%1, %2, %3)';
Blockly.Msg.MOTION_GLIDETO = 'self.glide_for_secs_to(%1, %2)';
Blockly.Msg.MOTION_GLIDETO_POINTER = 'mouse-pointer';
Blockly.Msg.MOTION_GLIDETO_RANDOM = 'random position';
Blockly.Msg.MOTION_CHANGEXBY = 'self.change_x_by(%1)';
Blockly.Msg.MOTION_SETX = 'self.set_x_to(%1)';
Blockly.Msg.MOTION_CHANGEYBY = 'self.change_y_by(%1)';
Blockly.Msg.MOTION_SETY = 'self.set_y_to(%1)';
Blockly.Msg.MOTION_IFONEDGEBOUNCE = 'self.if_on_edge_bounce()';
Blockly.Msg.MOTION_SETROTATIONSTYLE = 'self.set_rotation_style(%1)';
Blockly.Msg.MOTION_SETROTATIONSTYLE_LEFTRIGHT = 'left-right';
Blockly.Msg.MOTION_SETROTATIONSTYLE_DONTROTATE = 'don\'t rotate';
Blockly.Msg.MOTION_SETROTATIONSTYLE_ALLAROUND = 'all around';
Blockly.Msg.MOTION_XPOSITION = 'self.x_position';
Blockly.Msg.MOTION_YPOSITION = 'self.y_position';
Blockly.Msg.MOTION_DIRECTION = 'self.direction';
Blockly.Msg.MOTION_SCROLLRIGHT = 'scroll right %1';
Blockly.Msg.MOTION_SCROLLUP = 'scroll up %1';
Blockly.Msg.MOTION_ALIGNSCENE = 'align scene %1';
Blockly.Msg.MOTION_ALIGNSCENE_BOTTOMLEFT = 'bottom-left';
Blockly.Msg.MOTION_ALIGNSCENE_BOTTOMRIGHT = 'bottom-right';
Blockly.Msg.MOTION_ALIGNSCENE_MIDDLE = 'middle';
Blockly.Msg.MOTION_ALIGNSCENE_TOPLEFT = 'top-left';
Blockly.Msg.MOTION_ALIGNSCENE_TOPRIGHT = 'top-right';
Blockly.Msg.MOTION_XSCROLL = 'x scroll';
Blockly.Msg.MOTION_YSCROLL = 'y scroll';
Blockly.Msg.MOTION_STAGE_SELECTED = 'Stage selected: no motion blocks';

// Operators blocks
Blockly.Msg.OPERATORS_ADD = '%1 + %2';
Blockly.Msg.OPERATORS_SUBTRACT = '%1 - %2';
Blockly.Msg.OPERATORS_MULTIPLY = '%1 * %2';
Blockly.Msg.OPERATORS_DIVIDE = '%1 / %2';
Blockly.Msg.OPERATORS_RANDOM = 'stage.random(%1, %2)';
Blockly.Msg.OPERATORS_GT = '%1 > %2';
Blockly.Msg.OPERATORS_LT = '%1 < %2';
Blockly.Msg.OPERATORS_EQUALS = '%1 == %2';
Blockly.Msg.OPERATORS_AND = '%1 and %2';
Blockly.Msg.OPERATORS_OR = '%1 or %2';
Blockly.Msg.OPERATORS_NOT = 'not %1';
Blockly.Msg.OPERATORS_JOIN = 'stage.join(%1, %2)';
Blockly.Msg.OPERATORS_JOIN_APPLE = 'apple';
Blockly.Msg.OPERATORS_JOIN_BANANA = 'banana';
Blockly.Msg.OPERATORS_LETTEROF = '%2[%1]';
Blockly.Msg.OPERATORS_LETTEROF_APPLE = 'a';
Blockly.Msg.OPERATORS_LENGTH = 'len(%1)';
Blockly.Msg.OPERATORS_CONTAINS = '%2 in %1';
Blockly.Msg.OPERATORS_MOD = '%1 % %2';
Blockly.Msg.OPERATORS_ROUND = 'stage.round(%1)';
Blockly.Msg.OPERATORS_MATHOP = 'stage.maths_op(%1, %2)';
Blockly.Msg.OPERATORS_MATHOP_ABS = 'abs';
Blockly.Msg.OPERATORS_MATHOP_FLOOR = 'floor';
Blockly.Msg.OPERATORS_MATHOP_CEILING = 'ceiling';
Blockly.Msg.OPERATORS_MATHOP_SQRT = 'sqrt';
Blockly.Msg.OPERATORS_MATHOP_SIN = 'sin';
Blockly.Msg.OPERATORS_MATHOP_COS = 'cos';
Blockly.Msg.OPERATORS_MATHOP_TAN = 'tan';
Blockly.Msg.OPERATORS_MATHOP_ASIN = 'asin';
Blockly.Msg.OPERATORS_MATHOP_ACOS = 'acos';
Blockly.Msg.OPERATORS_MATHOP_ATAN = 'atan';
Blockly.Msg.OPERATORS_MATHOP_LN = 'ln';
Blockly.Msg.OPERATORS_MATHOP_LOG = 'log';
Blockly.Msg.OPERATORS_MATHOP_EEXP = 'e ^';
Blockly.Msg.OPERATORS_MATHOP_10EXP = '10 ^';

// Procedures blocks
Blockly.Msg.PROCEDURES_DEFINITION = 'def %1:';
Blockly.Msg.START_PROCEDURES_DEFINITION = 'def %1(self):';

// Sensing blocks
Blockly.Msg.SENSING_TOUCHINGOBJECT = 'self.touching(%1)';
Blockly.Msg.SENSING_TOUCHINGOBJECT_POINTER = 'mouse-pointer';
Blockly.Msg.SENSING_TOUCHINGOBJECT_EDGE = 'edge';
Blockly.Msg.SENSING_TOUCHINGCOLOR = 'self.touching_color(%1)';
Blockly.Msg.SENSING_COLORISTOUCHINGCOLOR = 'self.color_is_touching(%1, %2)';
Blockly.Msg.SENSING_DISTANCETO = 'self.distance_to(%1)';
Blockly.Msg.SENSING_DISTANCETO_POINTER = 'mouse-pointer';
Blockly.Msg.SENSING_ASKANDWAIT = 'stage.ask_and_wait(%1)';
Blockly.Msg.SENSING_ASK_TEXT = 'What\'s your name?';
Blockly.Msg.SENSING_ANSWER = 'stage.answer';
Blockly.Msg.SENSING_KEYPRESSED = 'stage.key_pressed(%1)';
Blockly.Msg.SENSING_MOUSEDOWN = 'mouse down?';
Blockly.Msg.SENSING_MOUSEX = 'self.mouse_x';
Blockly.Msg.SENSING_MOUSEY = 'self.mouse_y';
Blockly.Msg.SENSING_SETDRAGMODE = 'self.set_drag_mode(%1)';
Blockly.Msg.SENSING_SETDRAGMODE_DRAGGABLE = 'draggable';
Blockly.Msg.SENSING_SETDRAGMODE_NOTDRAGGABLE = 'not draggable';
Blockly.Msg.SENSING_LOUDNESS = 'self.loudness';
Blockly.Msg.SENSING_LOUD = 'loud?';
Blockly.Msg.SENSING_TIMER = 'self.timer';
Blockly.Msg.SENSING_RESETTIMER = 'self.reset_timer';
Blockly.Msg.SENSING_OF = 'self.get_value(%1, %2)';
Blockly.Msg.SENSING_OF_XPOSITION = 'x position';
Blockly.Msg.SENSING_OF_YPOSITION = 'y position';
Blockly.Msg.SENSING_OF_DIRECTION = 'direction';
Blockly.Msg.SENSING_OF_COSTUMENUMBER = 'costume #';
Blockly.Msg.SENSING_OF_COSTUMENAME = 'costume name';
Blockly.Msg.SENSING_OF_SIZE = 'size';
Blockly.Msg.SENSING_OF_VOLUME = 'volume';
Blockly.Msg.SENSING_OF_BACKDROPNUMBER = 'backdrop #';
Blockly.Msg.SENSING_OF_BACKDROPNAME = 'backdrop name';
Blockly.Msg.SENSING_OF_STAGE = 'Stage';
Blockly.Msg.SENSING_CURRENT = 'stage.current(%1)';
Blockly.Msg.SENSING_CURRENT_YEAR = 'year';
Blockly.Msg.SENSING_CURRENT_MONTH = 'month';
Blockly.Msg.SENSING_CURRENT_DATE = 'date';
Blockly.Msg.SENSING_CURRENT_DAYOFWEEK = 'day of week';
Blockly.Msg.SENSING_CURRENT_HOUR = 'hour';
Blockly.Msg.SENSING_CURRENT_MINUTE = 'minute';
Blockly.Msg.SENSING_CURRENT_SECOND = 'second';
Blockly.Msg.SENSING_DAYSSINCE2000 = 'self.days_since_2000()';
Blockly.Msg.SENSING_USERNAME = 'stage.username';
Blockly.Msg.SENSING_USERID = 'user id';

// Sound blocks
Blockly.Msg.SOUND_PLAY = 'stage.start_sound(%1)';
Blockly.Msg.SOUND_PLAYUNTILDONE = 'stage.play_sound_until_done(%1)';
Blockly.Msg.SOUND_STOPALLSOUNDS = 'stage.stop_all_sounds()';
Blockly.Msg.SOUND_SETEFFECTO = 'stage.set_sound_effect_to(%1, %2)';
Blockly.Msg.SOUND_CHANGEEFFECTBY = 'stage.change_sound_effect(%1. %2)';
Blockly.Msg.SOUND_CLEAREFFECTS = 'stage.clear_sound_effects()';
Blockly.Msg.SOUND_EFFECTS_PITCH = 'pitch';
Blockly.Msg.SOUND_EFFECTS_PAN = 'pan left/right';
Blockly.Msg.SOUND_CHANGEVOLUMEBY = 'stage.change_volume_by(%1)';
Blockly.Msg.SOUND_SETVOLUMETO = 'stage.set_volume_to(%1)';
Blockly.Msg.SOUND_VOLUME = 'stage.volume';
Blockly.Msg.SOUND_RECORD = 'record...';

// Category labels
Blockly.Msg.CATEGORY_MOTION = 'Motion';
Blockly.Msg.CATEGORY_LOOKS = 'Looks';
Blockly.Msg.CATEGORY_SOUND = 'Sound';
Blockly.Msg.CATEGORY_EVENTS = 'Events';
Blockly.Msg.CATEGORY_CONTROL = 'Control';
Blockly.Msg.CATEGORY_SENSING = 'Sensing';
Blockly.Msg.CATEGORY_OPERATORS = 'Operators';
Blockly.Msg.CATEGORY_VARIABLES = 'Variables';
Blockly.Msg.CATEGORY_MYBLOCKS = 'My Blocks';

// Context menus
Blockly.Msg.DUPLICATE = 'Duplicate';
Blockly.Msg.DELETE = 'Delete';
Blockly.Msg.ADD_COMMENT = 'Add Comment';
Blockly.Msg.REMOVE_COMMENT = 'Remove Comment';
Blockly.Msg.DELETE_BLOCK = 'Delete Block';
Blockly.Msg.DELETE_X_BLOCKS = 'Delete %1 Blocks';
Blockly.Msg.DELETE_ALL_BLOCKS = 'Delete all %1 blocks?';
Blockly.Msg.CLEAN_UP = 'Clean up Blocks';
Blockly.Msg.HELP = 'Help';
Blockly.Msg.UNDO = 'Undo';
Blockly.Msg.REDO = 'Redo';
Blockly.Msg.EDIT_PROCEDURE = 'Edit';
Blockly.Msg.SHOW_PROCEDURE_DEFINITION = 'Go to definition';
Blockly.Msg.WORKSPACE_COMMENT_DEFAULT_TEXT = 'Say something...';

// Color
Blockly.Msg.COLOUR_HUE_LABEL = 'Color';
Blockly.Msg.COLOUR_SATURATION_LABEL = 'Saturation';
Blockly.Msg.COLOUR_BRIGHTNESS_LABEL = 'Brightness';

// Variables
// @todo Remove these once fully managed by Scratch VM / Scratch GUI
Blockly.Msg.CHANGE_VALUE_TITLE = 'Change value:';
Blockly.Msg.RENAME_VARIABLE = 'Rename variable';
Blockly.Msg.RENAME_VARIABLE_TITLE = 'Rename all "%1" variables to:';
Blockly.Msg.RENAME_VARIABLE_MODAL_TITLE = 'Rename Variable';
Blockly.Msg.NEW_VARIABLE = 'Make a Variable';
Blockly.Msg.NEW_VARIABLE_TITLE = 'New variable name:';
Blockly.Msg.VARIABLE_MODAL_TITLE = 'New Variable';
Blockly.Msg.VARIABLE_ALREADY_EXISTS = 'A variable named "%1" already exists.';
Blockly.Msg.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE = 'A variable named "%1" already exists for another variable of type "%2".';
Blockly.Msg.DELETE_VARIABLE_CONFIRMATION = 'Delete %1 uses of the "%2" variable?';
Blockly.Msg.CANNOT_DELETE_VARIABLE_PROCEDURE = 'Can\'t delete the variable "%1" because it\'s part of the definition of the function "%2"';
Blockly.Msg.DELETE_VARIABLE = 'Delete the "%1" variable';

// Custom Procedures
// @todo Remove these once fully managed by Scratch VM / Scratch GUI
Blockly.Msg.NEW_PROCEDURE = 'Make a Block';
Blockly.Msg.PROCEDURE_ALREADY_EXISTS = 'A procedure named "%1" already exists.';
Blockly.Msg.PROCEDURE_DEFAULT_NAME = 'block_name';

// Lists
// @todo Remove these once fully managed by Scratch VM / Scratch GUI
Blockly.Msg.NEW_LIST = 'Make a List';
Blockly.Msg.NEW_LIST_TITLE = 'New list name:';
Blockly.Msg.LIST_MODAL_TITLE = 'New List';
Blockly.Msg.LIST_ALREADY_EXISTS = 'A list named "%1" already exists.';
Blockly.Msg.RENAME_LIST_TITLE = 'Rename all "%1" lists to:';
Blockly.Msg.RENAME_LIST_MODAL_TITLE = 'Rename List';
Blockly.Msg.DEFAULT_LIST_ITEM = 'thing';
Blockly.Msg.DELETE_LIST = 'Delete the "%1" list';
Blockly.Msg.RENAME_LIST = 'Rename list';

// Broadcast Messages
// @todo Remove these once fully managed by Scratch VM / Scratch GUI
Blockly.Msg.NEW_BROADCAST_MESSAGE = 'New message';
Blockly.Msg.NEW_BROADCAST_MESSAGE_TITLE = 'New message name:';
Blockly.Msg.BROADCAST_MODAL_TITLE = 'New Message';
Blockly.Msg.DEFAULT_BROADCAST_MESSAGE_NAME = 'message1';
