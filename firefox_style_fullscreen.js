let hr = setInterval(() => {
  const c = document.querySelector('#webview-container');
  const header = document.querySelector("#header");
  const addressbar = document.querySelector('#main .mainbar');
  if(c){
    clearInterval(hr);
    const div = document.createElement('div');
    div.style.height='1px';
    div.style.width='100vw';
    div.style.position='fixed';
    div.style.left='0';
    div.style.top='0';
    div.style.zIndex=1;
    document.body.insertBefore(div,document.body.firstChild);
    c.addEventListener('pointerenter',()=>{
      header.style.display='none';
      addressbar.style.display='none';
    });
    div.addEventListener('pointerenter',(e)=>{
      header.style.display='flex';
      addressbar.style.display='block';
    });
  }
}, 1111);
