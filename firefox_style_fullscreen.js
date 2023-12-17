// you must uncheck "show address bar" in the page of "vivaldi://settings/addressbar/"
// Do not set F11 in 'Fullscreen Mode'
// this script set "Alt+X" to toggle address bar and tab bar

let hr = setInterval(() => {
  const c = document.querySelector("#webview-container");
  const header = document.querySelector("#header");
  const browser = document.querySelector("#browser");
  let fullscreenEnabled = false;

  function show() {
    if (!fullscreenEnabled) {
      return;
    }
    header.hidden = false;
    [...document.querySelectorAll(".tabbar-wrapper")].forEach(
      (item) => (item.hidden = false)
    );
    browser.classList.remove("address-top-off");
    browser.classList.add("address-top");
  }

  function toggle() {
    if (!fullscreenEnabled) {
      return;
    }
    browser.classList.contains("address-top") ? hide() : show();
  }

  if (c) {
    const style = document.createElement("style");
    style.appendChild(
      document.createTextNode(`[hidden] { display: none !important; }`)
    );
    document.head.appendChild(style);

    vivaldi.tabsPrivate.onKeyboardShortcut.addListener((id, combination) => {
      if(combination === "F11"){
        if(fullscreenEnabled){
          show();
        }else{
          hide(true)
        }
        setTimeout(()=>{
          fullscreenEnabled = !fullscreenEnabled;
        },111);
      }
      combination === "Alt+X" && toggle();
    });

    clearInterval(hr);
    const div = document.createElement("div");
    div.style.height = "9px";
    div.style.width = "100vw";
    div.style.position = "fixed";
    div.style.left = "0";
    div.style.top = "0";
    div.style.zIndex = 1;
    document.body.insertBefore(div, document.body.firstChild);

    const div2 = document.createElement("div");
    div2.style.height = "100vh";
    div2.style.width = "8px";
    div2.style.position = "fixed";
    div2.style.left = "0";
    div2.style.top = "0";
    div2.style.zIndex = 2;
    document.body.insertBefore(div2, document.body.firstChild);

    function hide(force) {
      if (!force && !fullscreenEnabled) {
        return;
      }
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
    div.addEventListener("pointerenter", show);
    div2.addEventListener("pointerenter", show);
  }
}, 1111);
