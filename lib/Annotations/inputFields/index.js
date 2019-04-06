'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _TextInput = require('./TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

var _DateTimeInput = require('./DateTimeInput');

var _DateTimeInput2 = _interopRequireDefault(_DateTimeInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    TextInput: _TextInput2.default,
    DateTimeInput: _DateTimeInput2.default
};