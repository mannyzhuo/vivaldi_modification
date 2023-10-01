/**
 * add this file to browser.html directly or create  a js file and link it to window.html with script tag
 * the path of browser.html in my PC is "C:\Users\xxxx\AppData\Local\Vivaldi\Application\6.3.3134.3\resources\vivaldi" 
 */

setTimeout(()=>{
  let timer;
  const f =(e)=>{
    const header = document.querySelector('#header');
    const mainbar = document.querySelector(".mainbar");
    const browser = document.querySelector("#browser");
    if(header && header.contains(e.target)|| mainbar&& mainbar.contains(e.target)){
      browser.classList.remove("address-top-off");
      browser.classList.add("address-top");
    }else{
      browser.classList.add("address-top-off");
      browser.classList.remove("address-top");    }
  };
  document.addEventListener('pointermove',(e)=>{
     if(timer){
      clearTimeout(timer);
     }
     timer = setTimeout(f,0,e);
  });
});
