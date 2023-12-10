// you must uncheck "show address bar" in the page of "vivaldi://settings/addressbar/"
// this script set "Alt+X" to toggle address bar and tab bar

let hr = setInterval(() => {
  const c = document.querySelector("#webview-container");
  const header = document.querySelector("#header");
  const browser = document.querySelector("#browser");

  function show() {
    header.hidden = false;
    [...document.querySelectorAll(".tabbar-wrapper")].forEach(
      (item) => (item.hidden = false)
    );
    browser.classList.remove("address-top-off");
    browser.classList.add("address-top");
  }

  function toggle(){
    browser.classList.contains("address-top")?hide():show()
  }

  if (c) {
    const style = document.createElement("style");
    style.appendChild(
      document.createTextNode("[hidden] { display: none !important; }")
    );
    document.head.appendChild(style);

    vivaldi.tabsPrivate.onKeyboardShortcut.addListener(
      (id, combination) => combination === "Alt+X" && toggle()
    );

    clearInterval(hr);
    const div = document.createElement("div");
    div.style.height = "9px";
    div.style.width = "100vw";
    div.style.position = "fixed";
    div.style.left = "0";
    div.style.top = "0";
    div.style.zIndex = 1;
    document.body.insertBefore(div, document.body.firstChild);

    function hide() {
      header.hidden = true;
      browser.classList.remove("address-top");
      browser.classList.add("address-top-off");
      [...document.querySelectorAll(".tabbar-wrapper")].forEach(
        (item) => (item.hidden = true)
      );
    }
    c.addEventListener("pointerenter", () => {
      hide();
    });
    c.addEventListener('click',(e)=>{
      console.log('click');
    });
    div.addEventListener("pointerenter",show);
  }
}, 1111);

setTimeout(() => {
  // Select the node that will be observed for mutations
  const targetNode = document;

  // Options for the observer (which mutations to observe)
  const config = { attributes: true, childList: true, subtree: true };

  // Callback function to execute when mutations are observed
  const callback = (mutationList, observer) => {
    // console.log(mutationList);
    for (const mutation of mutationList) {
      for (const i of mutation.addedNodes) {
        if (i.id == "window-panel" || i.classList?.contains("panel-group")) {
          setTimeout(() => {
            const a = document.querySelector("#window-panel .tabsearch");
            a && a.focus();
          });
        }
      }
    }
  };

  // Create an observer instance linked to the callback function
  const observer = new MutationObserver(callback);
  // Start observing the target node for configured mutations
  observer.observe(targetNode, config);
});
