function handleClick() {
  browser.theme.update({
    images: {
      theme_frame: "images/clouds.jpg"
    }
  });
}

browser.browserAction.onClicked.addListener(handleClick);
