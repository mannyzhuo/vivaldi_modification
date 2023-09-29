/**
 * add this file to browser.html directly or create  a js file and link it to window.html with script tag
 * the path of browser.html in my PC is "C:\Users\xxxx\AppData\Local\Vivaldi\Application\6.3.3134.3\resources\vivaldi" 
 */

setTimeout(() => {
    const header = document.querySelector('#header');
    const browser = document.querySelector('#browser');
    const mainbar=document.querySelector('.mainbar');

    let time=null;
    let out=111;

    function show(){
        browser.classList.remove('address-top-off')
        browser.classList.add('address-top')
    }

    function hide(){
        browser.classList.add('address-top-off')
        browser.classList.remove('address-top')
    }

    header.addEventListener('mouseenter',function(){
        console.log('header enter');
        if(time){
            clearTimeout(time);
            time=null;
        }

        const i = document.querySelector('#browser').classList.contains('address-top')
        if(i){

        }else{
            show()
        }
     })
     header.addEventListener('mouseleave',function(){
        console.log('leave0');
       time= setTimeout(function(){
           hide();
        },out);
     })
     mainbar.addEventListener('mouseenter',function(){
        if(time){
            clearTimeout(time);
            time=null;
        }
     })
     mainbar.addEventListener('mouseleave',function(){
        console.log('mainbar leave');
        time= setTimeout(function(){
           hide();
        });
     })     
}, 1111);

