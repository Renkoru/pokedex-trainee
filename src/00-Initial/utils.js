const createElement = ({
  el = 'div',
  html = '',
  className = null,
  css = null,
  src = null,
  onClick = null,
}) => {
  const element = document.createElement(el);

  element.innerHTML = html;

  if (className) {
    element.className = className;
  }

  if (css) {
    element.style.cssText = css;
  }

  if (src) {
    element.src = src;
  }

  if (onClick) {
    element.onclick = onClick;
  }

  return element;
};

export default createElement;
