/*
queryCreator.js - Create HTML elements from a query string
Version : 1.0
by : SamuelLouf <https://github.com/samuellouf>
<https://samuellouf.github.io/queryCreator>
 */

document.queryCreator = (query, innerContent = null) => {
  const getElementName = (query) => query.split('[')[0].split('#')[0].split('.')[0];
  const getID = (query) => query.includes('#') ? query.split('[')[0].split('.')[0].split('#')[1] || query.split('[')[0].split('.')[1].split('#')[1] || query.split('[')[1].split('.')[0].split('#')[1] || query.split('[')[1].split('.')[1].split('#')[1] : '';
  const getClasses = (query) => {
    const classRegex = /\.([a-zA-Z0-9_-]+)/g;
    let classes = [];
    let match;
    while ((match = classRegex.exec(query)) !== null) {
      classes.push(match[1]);
    }
    return classes;
  };

  const getArguments = (query) => {
    const attrRegex = /\[([a-zA-Z0-9_-]+)\s*=\s*"([^"]*)"\]/g;
    let attributes = [];
    let match;
    while ((match = attrRegex.exec(query)) !== null) {
      attributes.push({ name: match[1], value: match[2] });
    }
    return attributes;
  }

  const containsHTML = (str) => {
    const htmlRegex = /<\/?[a-z][\s\S]*>/i;
    return htmlRegex.test(str);
  }

  let element = document.createElement(getElementName(query));
  element.id = getID(query);
  if (element.id == '') element.removeAttribute('id');
  element.setAttribute('class', '');
  let args = getArguments(query);
  let args_ = '';
  for (var arg of args){
    element.setAttribute(arg.name, arg.value);
    args_ += `[${arg.name}="${arg.value}"]`;
  }
  element.className = getClasses(query.replace(getElementName(query), '').replace('#' + getID(query), '').replace(args_, '')).join(' ');
  if (element.className == '') element.removeAttribute('class');

  if (innerContent){
    if (containsHTML(innerContent) && !innerContent.startsWith('$string!')) {
      element.innerHTML = innerContent;
    } else {
      let s = '';
      if (innerContent.startsWith('$string!')) s = '$string!';
      element.innerText = innerContent.replace(s, '');
    }
  }

  return element;
};