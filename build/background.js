
chrome.contextMenus.onClicked.addListener(genericOnClick);

function genericOnClick(info) {
  // chrome.contextMenus.removeAll();
  switch (info.menuItemId) {
      case 'image':
          // Open a popup when the 'image' context menu item is clicked
      openPopup();
      break;
      default:
      console.log('Standard context menu item clicked.');
  }
  
}

function openPopup() {
  chrome.windows.create({
    url: 'popup.html', 
    type: 'popup',
    width: 400, 
    height: 300,
  });
}

chrome.runtime.onInstalled.addListener(function () {
  let contexts = [
       'image'
     ];
  for (let i = 0; i < contexts.length; i++) {
    let context = contexts[i];
    let title = "Test '" + context + "' menu item";
    if(context == "image"){
      // chrome.contextMenus.remove();
      chrome.contextMenus.create({
        title: title,
        contexts: [context],
        id: context,
      }); 
    }
     }

  // chrome.contextMenus.create(
  //   { title: 'Oops', parentId: 999, id: 'errorItem' },
  //   function () {
  //     if (chrome.runtime.lastError) {
  //       console.log('Got expected error: ' + chrome.runtime.lastError.message);
  //     }
  //   }
  // );
});