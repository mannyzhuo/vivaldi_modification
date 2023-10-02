/**
 * add this file to browser.html directly or create  a js file and link it to window.html with script tag
 * the path of browser.html in my PC is "C:\Users\xxxx\AppData\Local\Vivaldi\Application\6.3.3134.3\resources\vivaldi" 
 */

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
