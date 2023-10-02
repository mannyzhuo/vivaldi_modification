let wi = setInterval(() => {
  const c = document.querySelector('#webview-container');
  const browser = document.querySelector("#browser");
  if(c){
    clearInterval(wi);
    c.addEventListener('pointerenter',()=>{
      browser.classList.add("address-top-off");
      browser.classList.remove("address-top");
    });
    c.addEventListener('pointerleave',(e)=>{
      browser.classList.remove("address-top-off");
      browser.classList.add("address-top");
    });
  }
}, 1111);
