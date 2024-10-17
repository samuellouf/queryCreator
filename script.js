async function sourceCode(){
  document.queryCreator('a[href="./script.js"]').click();
}

function documentloaded(e = null){
  const qc = document.queryCreator;

  document.head.appendChild(qc('meta[charset="UTF-8"]'));
  document.head.appendChild(qc('meta[name="viewport"][content="width=device-width, initial-scale=1.0"]'));
  document.head.appendChild(qc('link[rel="stylesheet"][href="./style.css"]'));
  document.head.appendChild(qc('link[rel="stylesheet"][href="https://prismjs.com/themes/prism.css"]'));
  document.head.appendChild(qc('script[src="https://prismjs.com/prism.js"]'));
  document.head.appendChild(qc('title', 'queryCreator'));
  document.body.appendChild(qc('h1', 'queryCreator'));
  document.body.appendChild(qc('hr'));
  document.body.appendChild(qc('h3', 'Create HTML elements from a query string'));
  document.body.appendChild(qc('br'));
  document.body.appendChild(qc('h2', 'Intro'));
  document.body.appendChild(qc('p', `Do you know ${qc('code.language-javascript', 'document.querySelector').outerHTML}? Well, ${qc('code.language-javascript', 'document.queryCreator').outerHTML} works kind of the same way, but it creates HTML elements from a query string.`));
  document.body.appendChild(qc('p', `The only code in this page is :`));
  document.body.appendChild(qc('pre', qc('code.language-html', `$string!<!DOCTYPE html>
<html lang="en">
<head>
<script src="./script.js"></script>
<script src="./queryCreator.js"></script>
</head>
<body>
</body>
</html>`).outerHTML));
  document.body.appendChild(qc('p', `The rest is in JavaScript.`));
  document.body.appendChild(qc('button[onclick="sourceCode();"]', `View the source code`));
  document.body.appendChild(qc('br'));
  document.body.appendChild(qc('h2', 'Features'));
  document.body.appendChild(qc('p', `${qc('code', 'document.queryCreator').outerHTML} is a function that creates an HTML element. ${qc('ul', '<li>Create HTML element</li><li>Add an ID to said element</li><li>Add classes to said element</li><li>Add any argument to element</li>').outerHTML}`));
  document.body.appendChild(qc('br'));
  document.body.appendChild(qc('h2', 'Usage'));
  document.body.appendChild(qc('p', `${qc('code.language-javascript', `document.queryCreator(${qc('i', 'query').outerHTML}, ${qc('i', 'innerContent').outerHTML} = null)`).outerHTML} :`));
  document.body.appendChild(qc('dd', qc('dl', `${qc('code.styled', 'query').outerHTML} is a string argument that contains the query string of the element. Exemple : ${qc('code.language-javascript', `document.queryCreator('script[src=""]')`).outerHTML}.`).outerHTML));
  document.body.appendChild(qc('dd', qc('dl', `${qc('code.styled', 'innerContent').outerHTML} is a string argument that contains the ineer content string of the element. If the innerContent is an HTML string that you want inserted as text, add ${qc('code', '$string!$string!').outerHTML} at the start of your string. Exemple : ${qc('code.language-javascript', `document.queryCreator('script', 'alert("hello");')`).outerHTML} or ${qc('code.language-javascript', `document.queryCreator('code', '$string!Test')`).outerHTML}.`).outerHTML));
  document.body.appendChild(qc('br'));
  document.body.appendChild(qc('h2', 'Installation'));
  document.body.appendChild(qc('p', 'Add the script below in your page'));
  document.body.appendChild(qc('code.language-html', '$string!<script src="https://samuellouf.github.io/queryCreator/queryCreator.js"><script>'));
}

document.addEventListener('DOMContentLoaded', documentloaded);