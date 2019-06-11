(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[47],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/shell/shell.js":
/*!**************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/shell/shell.js ***!
  \**************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n*  Copyright (c) Microsoft Corporation. All rights reserved.\n*  Licensed under the MIT License. See License.txt in the project root for license information.\n*--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    comments: {\n        lineComment: '#',\n    },\n    brackets: [['{', '}'], ['[', ']'], ['(', ')']],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: \"'\", close: \"'\" },\n        { open: '`', close: '`' },\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: \"'\", close: \"'\" },\n        { open: '`', close: '`' },\n    ],\n};\nvar language = {\n    defaultToken: '',\n    ignoreCase: true,\n    tokenPostfix: '.shell',\n    brackets: [\n        { token: 'delimiter.bracket', open: '{', close: '}' },\n        { token: 'delimiter.parenthesis', open: '(', close: ')' },\n        { token: 'delimiter.square', open: '[', close: ']' },\n    ],\n    keywords: [\n        'if',\n        'then',\n        'do',\n        'else',\n        'elif',\n        'while',\n        'until',\n        'for',\n        'in',\n        'esac',\n        'fi',\n        'fin',\n        'fil',\n        'done',\n        'exit',\n        'set',\n        'unset',\n        'export',\n        'function',\n    ],\n    builtins: [\n        'ab',\n        'awk',\n        'bash',\n        'beep',\n        'cat',\n        'cc',\n        'cd',\n        'chown',\n        'chmod',\n        'chroot',\n        'clear',\n        'cp',\n        'curl',\n        'cut',\n        'diff',\n        'echo',\n        'find',\n        'gawk',\n        'gcc',\n        'get',\n        'git',\n        'grep',\n        'hg',\n        'kill',\n        'killall',\n        'ln',\n        'ls',\n        'make',\n        'mkdir',\n        'openssl',\n        'mv',\n        'nc',\n        'node',\n        'npm',\n        'ping',\n        'ps',\n        'restart',\n        'rm',\n        'rmdir',\n        'sed',\n        'service',\n        'sh',\n        'shopt',\n        'shred',\n        'source',\n        'sort',\n        'sleep',\n        'ssh',\n        'start',\n        'stop',\n        'su',\n        'sudo',\n        'svn',\n        'tee',\n        'telnet',\n        'top',\n        'touch',\n        'vi',\n        'vim',\n        'wall',\n        'wc',\n        'wget',\n        'who',\n        'write',\n        'yes',\n        'zsh',\n    ],\n    // we include these common regular expressions\n    symbols: /[=><!~?&|+\\-*\\/\\^;\\.,]+/,\n    // The main tokenizer for our languages\n    tokenizer: {\n        root: [\n            { include: '@whitespace' },\n            [\n                /[a-zA-Z]\\w*/,\n                {\n                    cases: {\n                        '@keywords': 'keyword',\n                        '@builtins': 'type.identifier',\n                        '@default': ''\n                    },\n                },\n            ],\n            { include: '@strings' },\n            { include: '@parameters' },\n            { include: '@heredoc' },\n            [/[{}\\[\\]()]/, '@brackets'],\n            [/-+\\w+/, 'attribute.name'],\n            [/@symbols/, 'delimiter'],\n            { include: '@numbers' },\n            [/[,;]/, 'delimiter'],\n        ],\n        whitespace: [\n            [/\\s+/, 'white'],\n            [/(^#!.*$)/, 'metatag'],\n            [/(^#.*$)/, 'comment'],\n        ],\n        numbers: [\n            [/\\d*\\.\\d+([eE][\\-+]?\\d+)?/, 'number.float'],\n            [/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/, 'number.hex'],\n            [/\\d+/, 'number'],\n        ],\n        // Recognize strings, including those broken across lines\n        strings: [\n            [/'/, 'string', '@stringBody'],\n            [/\"/, 'string', '@dblStringBody']\n        ],\n        stringBody: [\n            [/'/, 'string', '@popall'],\n            [/./, 'string'],\n        ],\n        dblStringBody: [\n            [/\"/, 'string', '@popall'],\n            [/./, 'string'],\n        ],\n        heredoc: [\n            [/(<<[-<]?)(\\s*)(['\"`]?)([\\w\\-]+)(['\"`]?)/, ['constants', 'white', 'string.heredoc.delimiter', 'string.heredoc', 'string.heredoc.delimiter']]\n        ],\n        parameters: [\n            [/\\$\\d+/, 'variable.predefined'],\n            [/\\$\\w+/, 'variable'],\n            [/\\$[*@#?\\-$!0_]/, 'variable'],\n            [/\\$'/, 'variable', '@parameterBodyQuote'],\n            [/\\$\"/, 'variable', '@parameterBodyDoubleQuote'],\n            [/\\$\\(/, 'variable', '@parameterBodyParen'],\n            [/\\$\\{/, 'variable', '@parameterBodyCurlyBrace'],\n        ],\n        parameterBodyQuote: [\n            [/[^#:%*@\\-!_']+/, 'variable'],\n            [/[#:%*@\\-!_]/, 'delimiter'],\n            [/[']/, 'variable', '@pop'],\n        ],\n        parameterBodyDoubleQuote: [\n            [/[^#:%*@\\-!_\"]+/, 'variable'],\n            [/[#:%*@\\-!_]/, 'delimiter'],\n            [/[\"]/, 'variable', '@pop'],\n        ],\n        parameterBodyParen: [\n            [/[^#:%*@\\-!_)]+/, 'variable'],\n            [/[#:%*@\\-!_]/, 'delimiter'],\n            [/[)]/, 'variable', '@pop'],\n        ],\n        parameterBodyCurlyBrace: [\n            [/[^#:%*@\\-!_}]+/, 'variable'],\n            [/[#:%*@\\-!_]/, 'delimiter'],\n            [/[}]/, 'variable', '@pop'],\n        ],\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/shell/shell.js?");

/***/ })

}]);