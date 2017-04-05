function handleClick() {
  browser.theme.update({
    colors: {
      accentcolor: "#d92215",
      textcolor: "rgb(224, 41, 29)"
    },
    images: {
      theme_frame: "images/clouds.jpg"
    }
  });
}

browser.browserAction.onClicked.addListener(handleClick);
