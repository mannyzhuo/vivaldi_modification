let hr = setInterval(() => {
  const c = document.querySelector("#webview-container");
  const header = document.querySelector("#header");
  const browser = document.querySelector("#browser");

  if (c) {
    const style = document.createElement("style");
    style.appendChild(document.createTextNode("[hidden] { display: none !important; }"));
    document.head.appendChild(style);

    clearInterval(hr);
    const div = document.createElement("div");
    div.style.height = "9px";
    div.style.width = "100vw";
    div.style.position = "fixed";
    div.style.left = "0";
    div.style.top = "0";
    div.style.zIndex = 1;
    document.body.insertBefore(div, document.body.firstChild);

    function hide(){
      browser.classList.remove("address-top");
      browser.classList.add("address-top-off");
    }
    c.addEventListener("pointerenter", () => {
      header.hidden=true;
      hide();
      [...document.querySelectorAll('.tabbar-wrapper')].forEach(item=>item.hidden=true);
    });
    div.addEventListener("pointerenter", (e) => {
      header.hidden=false;
      [...document.querySelectorAll('.tabbar-wrapper')].forEach(item=>item.hidden=false);
      browser.classList.remove("address-top-off");
      browser.classList.add("address-top");
    });
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) {
         hide();
      }
    });
  }
}, 1111);
