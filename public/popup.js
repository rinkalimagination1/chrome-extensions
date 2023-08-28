
document.addEventListener('DOMContentLoaded', function() {
  const popupRoot = document.getElementById('popup-root');

  // Create elements and add content
  const h1 = document.createElement('h1');
  h1.textContent = 'Hello, Chrome Extension Popup!';

  // Append elements to the popup
  popupRoot.appendChild(h1);

  
});