const elementsToClick = document.querySelectorAll('.d-flex.height-100.width-100.click-area');
 
const clickElement = (element) => {
  const event = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true
  });
  element.dispatchEvent(event);
};
 
elementsToClick.forEach(clickElement);
