import * as monaco from 'monaco-editor';

self.MonacoEnvironment = {
	getWorkerUrl: function (moduleId, label) {
		if (label === 'json') {
			return './json.worker.bundle.js';
		}
		if (label === 'css') {
			return './css.worker.bundle.js';
		}
		if (label === 'html') {
			return './html.worker.bundle.js';
		}
		if (label === 'typescript' || label === 'javascript') {
			return './ts.worker.bundle.js';
		}
		return './editor.worker.bundle.js';
	}
}

monaco.editor.create(document.getElementById('markup'), {
	value: [
        '<h1 id="greeting"></h1>',
        '<input id="name" value="world"/>'
	].join('\n'),
    language: 'html',
    autoClosingBrackets: true,
    autoIndent: true,
    automaticLayout: true,
    fontSize: 16,
    fontWeight: 600,
    formatOnType: true,
    tabCompletion: true,
    dragAndDrop: true,
    theme: 'vs-dark'
});
monaco.editor.create(document.getElementById('style'), {
	value: [
        'h1 {\n  color: tomato;\n}',
        'label {\n  display: block;\n  padding: 1rem;\n}',
        'input {\n  background: #f1f1f1;\n  border: 1px solid #ccc;\n  padding: .5rem;\n  border-radius: 4px;\n}'
	].join('\n'),
    language: 'css',
    autoClosingBrackets: true,
    autoIndent: true,
    automaticLayout: true,
    fontSize: 16,
    fontWeight: 600,
    formatOnType: true,
    tabCompletion: true,
    dragAndDrop: true,
    theme: 'vs-dark'
});
monaco.editor.create(document.getElementById('script'), {
	value: [
        'let greeting = document.getElementById("greeting");',
        'let nameRef = document.getElementById("name");',
        'function x() {',
        '\tgreeting.innerHTML = `Hello, ${nameRef.value}!!`',
		'\tconsole.log(nameRef.value);',
        '}',
        'nameRef.oninput = x;',
        'x();'
	].join('\n'),
    language: 'typescript',
    autoClosingBrackets: true,
    autoIndent: true,
    automaticLayout: true,
    fontSize: 16,
    fontWeight: 600,
    formatOnType: true,
    tabCompletion: true,
    dragAndDrop: true,
    theme: 'vs-dark'
});

const source = () => `${monaco.editor.getModels()[0].getValue()}<style>${monaco.editor.getModels()[1].getValue()}</style><script>${monaco.editor.getModels()[2].getValue()}<\/script>`;
const frame = document.createElement('iframe');
frame.srcdoc = source();
frame.sandbox = "allow-scripts";
let output = document.getElementById('output');
output.appendChild(frame);

function updateSource() {
    frame.srcdoc = source();
}
document.getElementById('code').addEventListener('keyup', updateSource);